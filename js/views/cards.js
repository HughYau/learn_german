// #/cards SRS 闪卡复习
import { el } from '../ui.js';
import { ttsBtn, speak } from '../audio.js';
import { analyze } from '../pronounce.js';
import { buildQueue, counts, gradeCard, allStudyCards } from '../srs.js';
import { getEnabledPacks } from '../state.js';

const ART_COLOR = { der: 'blue', die: 'red', das: 'green' };

function statCard(value, label) {
  return el('div', { class: 'stat card' }, el('b', {}, String(value)), el('span', {}, label));
}

function sourceLabel(card) {
  return card.packTitle ? '词汇包 · ' + card.packTitle : (card.unitZh || '课程词汇');
}

/** 音节 + 重音提示行：LEIP·zig，重音音节加重音符 */
function stressHint(word) {
  const info = analyze(word);
  if (info.syllables.length < 2 && !info.ipa) return null;

  const line = el('div', { class: 'fc-syl-hint fc-stress' });
  info.syllables.forEach((s, i) => {
    if (i) line.append('·');
    line.append(el(i === info.stress ? 'b' : 'span', { class: i === info.stress ? 's on' : 's' }, s));
  });
  const wrap = el('div', {}, line);
  if (info.ipa) wrap.append(el('div', { class: 'fc-ipa' }, `[${info.ipa}]`));
  return wrap;
}

function fcCardFace(card) {
  // 名词连同冠词一起读——性别属于这个词声音记忆的一部分
  const fullWord = (card.art ? card.art + ' ' : '') + card.de;
  const front = el('div', { class: 'fc-face fc-front' });
  if (card.art) front.setAttribute('data-art', card.art);
  const wLine = el('div', { class: 'w' });
  if (card.art) wLine.style.color = `var(--${ART_COLOR[card.art] || 'ink'})`;
  wLine.append(fullWord);
  front.append(wLine, ' ', ttsBtn(fullWord), ttsBtn(fullWord, { slow: true }),
    el('button', { class: 'fc-flip-trigger', type: 'button' }, '显示答案'));
  const hint = stressHint(card.de);
  if (hint) front.append(hint);

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
      `第 ${reviewedCount + 1} / ${sessionTotal} 张 · 来自 ${sourceLabel(card)}`));

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
    const backBtn = el('button', { class: 'btn', type: 'button' }, '返回词卡页');
    backBtn.addEventListener('click', () => render(container));
    actions.append(backBtn);
    const note = forgottenCount
      ? `其中 ${forgottenCount} 张将在 10 分钟后重新到期。`
      : '这一轮没有遗忘，做得很好。';
    area.append(el('div', { class: 'ex-result' },
      el('div', { class: 'big' }, '✓'),
      el('p', {}, `本轮已处理 ${reviewedCount} 张词卡。`),
      el('p', { class: 'empty-note compact' }, note),
      actions
    ));
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
  container.append(el('p', { class: 'page-sub' }, '只复习你已经打开过的课程词汇；到期卡优先，新词与扩展词包公平混排。'));

  const cards = allStudyCards();
  const c = counts(cards);
  container.append(el('div', { class: 'stat-row' },
    statCard(c.due, '今日到期'),
    statCard(c.fresh, '可学新词'),
    statCard(c.learned, '已进入复习')
  ));

  const startArea = el('div', { class: 'card fc-start-area' });
  container.append(startArea);

  if (!cards.length) {
    startArea.append(
      el('h3', {}, '先学一课，再来复习'),
      el('p', {}, '课程词汇会在你打开对应课时后解锁；也可以启用一个主题词汇包。'),
      el('div', { class: 'ex-actions', style: 'justify-content:center' },
        el('a', { class: 'btn', href: '#/units' }, '去选一课'),
        el('a', { class: 'btn ghost', href: '#/wortschatz' }, '浏览词汇包'))
    );
    return;
  }

  const queue = buildQueue(cards, 10);
  const startBtn = el('button', { class: 'btn', type: 'button' },
    queue.length ? `开始今日复习 · ${queue.length} 张` : '今日已完成');
  startBtn.disabled = queue.length === 0;
  startArea.append(
    el('p', {}, queue.length
      ? `本轮包含 ${c.due} 张到期卡，并补充最多 10 张新卡。`
      : '今天没有到期卡，也没有待学新词。'),
    startBtn
  );

  startBtn.addEventListener('click', () => {
    container.removeChild(startArea);
    runSession(container, queue);
  });
}
