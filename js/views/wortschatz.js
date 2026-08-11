// #/wortschatz 词汇包管理页：浏览 + 启用/禁用主题词汇包（可选 SRS 补充词库）
import { el } from '../ui.js';
import { ttsBtn } from '../audio.js';
import { getEnabledPacks, togglePack } from '../state.js';
import { wortschatzPacks } from '../../data/wortschatz.js';

const ART_COLOR = { der: 'blue', die: 'red', das: 'green' };

// 词表渲染：与 js/views/lesson.js 的 vocabTable 同构，但本地复制一份，不 import lesson.js
function vocabTable(items) {
  const rows = items.map(item => {
    const wTd = el('td', { class: 'w' });
    if (item.art) wTd.append(el('span', { class: `art art-${item.art}` }, item.art));
    wTd.append(item.de);
    if (item.pl) wTd.append(el('span', { class: 'pl' }, `pl. ${item.pl}`));

    const mTd = el('td', { class: 'm' }, item.zh);
    if (item.en) mTd.append(el('span', { class: 'en' }, item.en));
    if (item.note) mTd.append(el('span', { class: 'note' }, item.note));

    const exTd = el('td', { class: 'ex' });
    if (item.ex) {
      exTd.append(item.ex, ' ', ttsBtn(item.ex));
      if (item.exZh) exTd.append(el('span', { class: 'zh' }, item.exZh));
    }

    const fullWord = item.art ? `${item.art} ${item.de}` : item.de;
    const aTd = el('td', { class: 'a' }, ttsBtn(fullWord), ttsBtn(fullWord, { slow: true }));

    return el('tr', {}, wTd, mTd, exTd, aTd);
  });
  return el('div', { class: 'vocab-table' }, el('table', {}, ...rows));
}

function packCard(pack, summaryEl) {
  const enabled = new Set(getEnabledPacks());
  const isOn = enabled.has(pack.id);

  const card = el('div', { class: 'card wp-card' });

  const checkbox = el('input', { type: 'checkbox' });
  checkbox.checked = isOn;
  const switchLabel = el('label', { class: 'wp-switch' },
    checkbox,
    el('span', { class: 'wp-switch-track' }),
    el('span', { class: 'wp-switch-text' }, isOn ? '已启用' : '未启用')
  );
  checkbox.addEventListener('change', () => {
    const nowOn = togglePack(pack.id);
    switchLabel.querySelector('.wp-switch-text').textContent = nowOn ? '已启用' : '未启用';
    card.classList.toggle('on', nowOn);
    refreshSummary(summaryEl);
  });

  const head = el('div', { class: 'wp-card-head' },
    el('div', { class: 'wp-card-main' },
      el('h3', {}, pack.title, ' ', el('span', { class: 'de' }, pack.de)),
      el('div', { class: 'wp-meta' },
        el('span', { class: 'lh-badge lv-a2' }, pack.level),
        el('span', { class: 'wp-count' }, `${pack.items.length} 词`)
      )
    ),
    switchLabel
  );
  card.append(head);
  if (isOn) card.classList.add('on');

  const expandBtn = el('button', { class: 'wp-expand-btn', type: 'button' }, '展开浏览 ▾');
  const body = el('div', { class: 'wp-body' }, vocabTable(pack.items));
  body.hidden = true;
  expandBtn.addEventListener('click', () => {
    body.hidden = !body.hidden;
    expandBtn.textContent = body.hidden ? '展开浏览 ▾' : '收起 ▴';
  });

  card.append(expandBtn, body);
  return card;
}

function refreshSummary(summaryEl) {
  const n = getEnabledPacks().length;
  summaryEl.textContent = n > 0
    ? `已启用 ${n} / ${wortschatzPacks.length} 个词汇包，启用后词汇会并入 #/cards 的复习池。`
    : `还没有启用任何词汇包——启用后词汇会并入 #/cards 的复习池。`;
}

export function render(container) {
  container.append(el('div', { class: 'kicker' }, 'WORTSCHATZ'));
  container.append(el('h1', { class: 'page' }, '词汇包 ', el('span', { class: 'de' }, 'Wortschatz-Pakete')));
  container.append(el('p', { class: 'page-sub' }, '按主题扩展歌德 A2/B1 考纲词汇，是课程 740 词之外的可选补充。启用某个包后，它的词就会加入 #/cards 的间隔重复复习池。'));

  const summary = el('div', { class: 'wp-summary' });
  container.append(summary);
  refreshSummary(summary);

  const list = el('div', { class: 'wp-list' });
  wortschatzPacks.forEach(pack => list.append(packCard(pack, summary)));
  container.append(list);
}
