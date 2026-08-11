// #/phrases 生存短语
import { el } from '../ui.js';
import { ttsBtn } from '../audio.js';
import { phraseCats } from '../../data/phrases.js';

export function render(container) {
  container.append(el('div', { class: 'kicker' }, 'PHRASEN'));
  container.append(el('h1', { class: 'page' }, '短语 & Redemittel ', el('span', { class: 'de' }, 'Phrasen')));
  container.append(el('p', { class: 'page-sub' }, '出门在外最常用的那几句，加上表达观点、写邮件、打电话等 B1 口语/写作功能语块，搜一下就能找到，点▶就能听。'));

  const search = el('input', { class: 'search-box', type: 'text', placeholder: '搜索德语或中文…' });
  container.append(search);

  const catEntries = [];

  phraseCats.forEach(cat => {
    const catWrap = el('div', { class: 'phrase-cat' });
    catWrap.append(el('h2', { class: 'sec' }, cat.title + ' ', el('small', {}, cat.de)));
    const card = el('div', { class: 'card' });
    const rowEntries = [];

    cat.items.forEach(item => {
      const firstLine = el('div', {}, el('span', { class: 'de' }, item.de));
      if (item.note) firstLine.append(el('span', { class: 'note' }, item.note));
      firstLine.append(el('div', { class: 'zh' }, item.zh));
      const row = el('div', { class: 'phrase-row' },
        firstLine,
        el('div', { class: 'tools' }, ttsBtn(item.de), ttsBtn(item.de, { slow: true }))
      );
      card.append(row);
      rowEntries.push({ row, de: item.de.toLowerCase(), zh: item.zh.toLowerCase() });
    });

    catWrap.append(card);
    container.append(catWrap);
    catEntries.push({ catWrap, rowEntries });
  });

  search.addEventListener('input', () => {
    const q = search.value.trim().toLowerCase();
    catEntries.forEach(({ catWrap, rowEntries }) => {
      let anyVisible = false;
      rowEntries.forEach(({ row, de, zh }) => {
        const match = !q || de.includes(q) || zh.includes(q);
        row.style.display = match ? '' : 'none';
        if (match) anyVisible = true;
      });
      catWrap.style.display = anyVisible ? '' : 'none';
    });
  });
}
