// #/search 全局检索：词汇 / 语法 / 短语一次搜齐
import { el } from '../ui.js';
import { ttsBtn } from '../audio.js';
import { allVocabCards } from '../../data/course.js';
import { grammarTopics } from '../../data/grammar.js';
import { phraseCats } from '../../data/phrases.js';

const MAX = 30;
const DEBOUNCE_MS = 150;

// 把命中片段包成 <mark>，大小写不敏感；找不到时原样返回
function highlight(text, q) {
  const s = String(text);
  if (!q) return s;
  const idx = s.toLowerCase().indexOf(q);
  if (idx === -1) return s;
  const frag = document.createDocumentFragment();
  if (idx > 0) frag.append(s.slice(0, idx));
  frag.append(el('mark', {}, s.slice(idx, idx + q.length)));
  if (idx + q.length < s.length) frag.append(s.slice(idx + q.length));
  return frag;
}

function vocabRow(card, q) {
  const deLine = el('div', { class: 'sr-de' });
  if (card.art) deLine.append(el('span', { class: `art art-${card.art}` }, card.art));
  deLine.append(highlight(card.de, q));
  const main = el('div', { class: 'sr-main' }, deLine, el('div', { class: 'sr-zh' }, highlight(card.zh, q)));
  return el('a', { class: 'search-row', href: `#/lesson/${card.lessonId}` },
    main,
    el('div', { class: 'sr-side' }, card.unitZh)
  );
}

function grammarRow(topic, q) {
  const deLine = el('div', { class: 'sr-de' }, el('span', { class: 'sr-num' }, topic.num), highlight(topic.title, q));
  const main = el('div', { class: 'sr-main' }, deLine, el('div', { class: 'sr-zh' }, highlight(topic.de, q)));
  return el('a', { class: 'search-row', href: `#/grammar/${topic.id}` }, main);
}

function phraseRow(item, q) {
  const main = el('div', { class: 'sr-main' },
    el('div', { class: 'sr-de' }, highlight(item.de, q)),
    el('div', { class: 'sr-zh' }, highlight(item.zh, q))
  );
  return el('div', { class: 'search-row' }, main, el('div', { class: 'sr-side' }, ttsBtn(item.de)));
}

function section(titleZh, titleDe, total, rows) {
  const wrap = el('div', { style: 'margin-bottom:30px' });
  wrap.append(el('h2', { class: 'sec' }, titleZh + ' ', el('small', {}, titleDe)));
  const card = el('div', { class: 'card' });
  rows.forEach(r => card.append(r));
  wrap.append(card);
  if (total > rows.length) {
    wrap.append(el('p', { class: 'sr-more' }, `还有 ${total - rows.length} 条，请细化关键词`));
  }
  return wrap;
}

export function render(container) {
  container.append(el('div', { class: 'kicker' }, 'SUCHEN'));
  container.append(el('h1', { class: 'page' }, '检索 ', el('span', { class: 'de' }, 'Suchen')));
  container.append(el('p', { class: 'page-sub' }, '想查什么就搜什么——德语词、中文意思、语法主题，一次搜齐。'));

  const input = el('input', {
    class: 'search-box', type: 'text',
    placeholder: '搜索德语或中文，例如 Wohnung、被动、Entschuldigung…',
    autofocus: true,
  });
  container.append(input);
  setTimeout(() => input.focus(), 0);

  const resultsWrap = el('div', {});
  container.append(resultsWrap);

  function showHint() {
    resultsWrap.innerHTML = '';
    resultsWrap.append(el('p', { class: 'empty-note' }, '输入关键词开始搜索：德语单词、中文意思、语法主题都可以。'));
  }
  showHint();

  function doSearch(qRaw) {
    resultsWrap.innerHTML = '';
    if (!qRaw) { showHint(); return; }
    const q = qRaw.toLowerCase();

    const vocabAll = allVocabCards().filter(c =>
      c.de.toLowerCase().includes(q) ||
      (c.zh && c.zh.toLowerCase().includes(q)) ||
      (c.en && c.en.toLowerCase().includes(q))
    );
    const grammarAll = grammarTopics.filter(t =>
      t.title.toLowerCase().includes(q) || t.de.toLowerCase().includes(q)
    );
    const phraseAll = [];
    phraseCats.forEach(cat => cat.items.forEach(item => {
      if (item.de.toLowerCase().includes(q) || item.zh.toLowerCase().includes(q)) phraseAll.push(item);
    }));

    if (!vocabAll.length && !grammarAll.length && !phraseAll.length) {
      resultsWrap.append(el('p', { class: 'empty-note' }, '没有找到，换个关键词试试。'));
      return;
    }

    if (vocabAll.length) {
      resultsWrap.append(section('词汇', 'Wortschatz', vocabAll.length, vocabAll.slice(0, MAX).map(c => vocabRow(c, q))));
    }
    if (grammarAll.length) {
      resultsWrap.append(section('语法', 'Grammatik', grammarAll.length, grammarAll.slice(0, MAX).map(t => grammarRow(t, q))));
    }
    if (phraseAll.length) {
      resultsWrap.append(section('短语', 'Phrasen', phraseAll.length, phraseAll.slice(0, MAX).map(it => phraseRow(it, q))));
    }
  }

  let timer = null;
  input.addEventListener('input', () => {
    clearTimeout(timer);
    const val = input.value.trim();
    timer = setTimeout(() => doSearch(val), DEBOUNCE_MS);
  });
}
