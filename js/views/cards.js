// #/cards SRS 闪卡复习
import { el } from '../ui.js';
import { ttsBtn, speak } from '../audio.js';
import { buildQueue, counts, gradeCard, allStudyCards } from '../srs.js';
import { getEnabledPacks } from '../state.js';

const ART_COLOR = { der: 'blue', die: 'red', das: 'green' };

function sourceLabel(card) {
  return card.packTitle ? '词汇包 · ' + card.packTitle : (card.unitZh || '课程词汇');
}

function fcCardFace(card) {
  // 名词连同冠词一起读——性别属于这个词声音记忆的一部分
  const fullWord = (card.art ? card.art + ' ' : '') + card.de;
  const front = el('div', { class: 'fc-face fc-front' });
  const wLine = el('div', { class: 'w' });
  if (card.art) wLine.style.color = `var(--${ART_COLOR[card.art] || 'ink'})`;
  wLine.append(fullWord);
  front.append(wLine,
    el('div', { class: 'fc-tools' }, ttsBtn(fullWord), ttsBtn(fullWord, { slow: true })),
    el('button', { class: 'fc-flip-trigger', type: 'button' }, '显示答案'));

  const back = el('div', { class: 'fc-face fc-back' }, el('div', { class: 'm' }, card.zh));
  if (card.en) back.append(el('div', { class: 'en' }, card.en));
  if (card.ex) {
    const exLine = el('div', { class: 'ex' }, card.ex, ' ');
    exLine.append(ttsBtn(card.ex));
    back.append(exLine);
  }
  if (card.exZh) back.append(el('div', { class: 'exzh' }, card.exZh));

  return { front, back };
}

function runSession(container, initialQueue) {
  const queue = [...initialQueue];
  const sessionTotal = initialQueue.length;
  let reviewedCount = 0;
  let forgottenCount = 0;

  const area = el('div', {});
  container.append(area);

  function showCard() {
    area.innerHTML = '';
    if (!queue.length) return showDone();
    const card = queue[0];

    area.append(el('div', { class: 'fc-meta' },
      `${reviewedCount + 1} / ${sessionTotal} · ${sourceLabel(card)}`));

    const { front, back } = fcCardFace(card);
    const fcCard = el('div', { class: 'fc-card' }, front, back);
    const stage = el('div', { class: 'fc-stage' }, fcCard);
    area.append(stage);

    const flip = () => {
      if (fcCard.classList.contains('flipped')) return;
      fcCard.classList.add('flipped');
      showGrades();
    };
    fcCard.addEventListener('click', flip);
    fcCard.querySelector('.fc-flip-trigger').addEventListener('click', e => {
      e.stopPropagation();
      flip();
    });

    speak((card.art ? card.art + ' ' : '') + card.de);

    function showGrades() {
      const grades = el('div', { class: 'fc-grade' },
        gradeBtn('again', 'fg-again', '又忘了', '10 分钟后'),
        gradeBtn('good', 'fg-good', '记得', '按计划复习'),
        gradeBtn('easy', 'fg-easy', '很轻松', '延长间隔')
      );
      area.append(grades);
      grades.querySelector('button')?.focus();
    }
    function gradeBtn(grade, cls, label, sub) {
      const b = el('button', { class: cls, type: 'button' }, label, el('small', {}, sub));
      b.addEventListener('click', e => {
        e.stopPropagation();
        onGrade(grade);
      });
      return b;
    }
  }

  function onGrade(grade) {
    const card = queue.shift();
    gradeCard(card.id, grade);
    reviewedCount++;
    if (grade === 'again') forgottenCount++;
    showCard();
  }

  function showDone() {
    area.innerHTML = '';
    const actions = el('div', { class: 'ex-actions', style: 'justify-content:center' });
    const backBtn = el('button', { class: 'btn', type: 'button' }, '返回');
    backBtn.addEventListener('click', () => render(container));
    actions.append(backBtn);
    const result = el('div', { class: 'ex-result' },
      el('div', { class: 'big' }, '✓'),
      el('p', {}, `${reviewedCount} 张，完成。`)
    );
    if (forgottenCount) result.append(el('p', { class: 'empty-note compact' }, `${forgottenCount} 张 10 分钟后再来。`));
    result.append(actions);
    area.append(result);
  }

  showCard();
}

export function render(container) {
  container.innerHTML = '';
  container.append(el('div', { class: 'kicker' }, 'KARTEN'));

  const enabledCount = getEnabledPacks().length;
  const packEntry = el('a', { class: 'wp-entry-chip', href: '#/wortschatz' },
    '词汇包 Wortschatz-Pakete →',
    el('small', {}, enabledCount > 0 ? `已启用 ${enabledCount} 个` : '未启用')
  );
  container.append(packEntry);

  container.append(el('h1', { class: 'page' }, '词汇卡片 ', el('span', { class: 'de' }, 'Karten')));
  container.append(el('p', { class: 'page-sub' }, '只出现你学过的课里的词。'));

  const cards = allStudyCards();
  const c = counts(cards);
  const startArea = el('div', { class: 'card fc-start-area' });
  container.append(startArea);

  if (!cards.length) {
    startArea.append(
      el('h3', {}, '还没有词卡'),
      el('p', {}, '学过的课，词会出现在这里。'),
      el('div', { class: 'ex-actions', style: 'justify-content:center' },
        el('a', { class: 'btn', href: '#/units' }, '选一课'),
        el('a', { class: 'btn ghost', href: '#/wortschatz' }, '词汇包'))
    );
    return;
  }

  const queue = buildQueue(cards, 10);
  const startBtn = el('button', { class: 'btn', type: 'button' },
    queue.length ? `开始 · ${queue.length} 张` : '今天没有要复习的');
  startBtn.disabled = queue.length === 0;
  startArea.append(
    el('p', { class: 'counts' }, `到期 ${c.due} · 新词 ${c.fresh} · 复习中 ${c.learned}`),
    startBtn
  );

  startBtn.addEventListener('click', () => {
    container.removeChild(startArea);
    runSession(container, queue);
  });
}
