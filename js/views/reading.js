// #/reading 分级阅读文库：楼道告示、朋友消息、二手广告、邮件、博客……点词看释义，读完做题
import { el } from '../ui.js';
import { speak } from '../audio.js';
import { readingTexts } from '../../data/reading.js';
import { getLibraryState, recordLibraryScore } from '../state.js';

const PASS_SCORE = 70;

const GENRE_LABEL = {
  aushang: '楼道告示', nachricht: '短消息', anzeige: '二手广告',
  email: '邮件', blog: '博客', meldung: '本地简讯', tipp: '活动推荐',
};
const LEVEL_CLASS = { A1: 'lv-a1', A2: 'lv-a2', B1: 'lv-b1' };

function wordCount(text) { return text.trim().split(/\s+/).filter(Boolean).length; }

/* ---------- 生词气泡：整个视图共用一个气泡 + 一个 document 点击监听 ---------- */
let activeBubble = null;
let docListenerAttached = false;

function closeBubble() {
  if (activeBubble) { activeBubble.remove(); activeBubble = null; }
}
function ensureDocListener() {
  if (docListenerAttached) return;
  docListenerAttached = true;
  document.addEventListener('click', (e) => {
    if (!activeBubble) return;
    if (activeBubble.contains(e.target)) return;
    if (e.target.classList && e.target.classList.contains('gl')) return; // 交给该 span 自己的点击处理
    closeBubble();
  });
}

function showBubble(span, word, meaning) {
  closeBubble();
  const bubble = el('div', { class: 'gl-bubble' });
  const playBtn = el('button', { class: 'gl-bubble-play', type: 'button' }, '▶');
  playBtn.addEventListener('click', (e) => { e.stopPropagation(); speak(word); });
  bubble.append(
    el('div', { class: 'gl-bubble-word' }, word, playBtn),
    el('div', { class: 'gl-bubble-mean' }, meaning),
  );
  document.body.append(bubble);

  const rect = span.getBoundingClientRect();
  const bw = bubble.offsetWidth, bh = bubble.offsetHeight;
  let left = rect.left + rect.width / 2 - bw / 2;
  left = Math.max(8, Math.min(left, window.innerWidth - bw - 8));
  let top = rect.top - bh - 10;
  let arrowBelow = true;
  if (top < 8) { top = rect.bottom + 10; arrowBelow = false; }
  bubble.style.left = left + 'px';
  bubble.style.top = top + 'px';
  bubble.classList.add(arrowBelow ? 'gl-bubble-up' : 'gl-bubble-down');
  activeBubble = bubble;
}

/* ---------- 正文渲染：把 gloss 里的词包成可点 span，同一词多次出现全部标注 ---------- */
function renderGlossedFragment(text, gloss) {
  const keys = Object.keys(gloss).sort((a, b) => b.length - a.length);
  const frag = document.createDocumentFragment();
  if (keys.length === 0) { frag.append(document.createTextNode(text)); return frag; }
  const escaped = keys.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const re = new RegExp('(' + escaped.join('|') + ')', 'g');
  let lastIndex = 0, m;
  while ((m = re.exec(text))) {
    if (m.index > lastIndex) frag.append(document.createTextNode(text.slice(lastIndex, m.index)));
    const word = m[0];
    const span = el('span', { class: 'gl' }, word);
    span.addEventListener('click', (e) => {
      e.stopPropagation();
      showBubble(span, word, gloss[word]);
    });
    frag.append(span);
    lastIndex = re.lastIndex;
  }
  if (lastIndex < text.length) frag.append(document.createTextNode(text.slice(lastIndex)));
  return frag;
}

const DIALOGUE_LINE_RE = /^([^\s:][^:]{0,28}):\s(.+)$/;

function renderTextBody(text, gloss) {
  const wrap = el('div', { class: 'rd-text' });
  const blocks = text.split(/\n\n+/);
  for (const block of blocks) {
    const lines = block.split('\n');
    const dialogueLines = lines.map(l => l.match(DIALOGUE_LINE_RE));
    if (lines.length > 1 && dialogueLines.every(Boolean)) {
      const box = el('div', { class: 'rd-dialog' });
      dialogueLines.forEach(m => {
        const line = el('div', { class: 'rd-dline' }, el('b', {}, m[1] + ': '));
        line.append(renderGlossedFragment(m[2], gloss));
        box.append(line);
      });
      wrap.append(box);
    } else {
      const p = el('p', { class: 'rd-p' });
      p.append(renderGlossedFragment(block, gloss));
      wrap.append(p);
    }
  }
  return wrap;
}

/* ---------- 理解题 ---------- */
function buildQuestionBlock(q, qi, onDone) {
  const qBox = el('div', { class: 'lh-q' });
  qBox.append(el('div', { class: 'lh-q-text' }, `${qi + 1}. ${q.q}`));
  const opts = el('div', { class: 'lh-q-opts' });
  q.options.forEach((opt, oi) => {
    const optBtn = el('button', { class: 'lh-opt', type: 'button' }, opt);
    optBtn.addEventListener('click', () => {
      if (opts.dataset.answered) return;
      opts.dataset.answered = '1';
      [...opts.children].forEach(b => b.disabled = true);
      const ok = oi === q.answer;
      optBtn.classList.add(ok ? 'correct' : 'wrong');
      if (!ok) opts.children[q.answer].classList.add('correct');
      qBox.append(el('div', { class: 'lh-q-feedback ' + (ok ? 'ok' : 'no') },
        el('b', {}, ok ? '✓ 对了' : '✗ 不对'),
        el('div', {}, q.why)));
      onDone(ok);
    });
    opts.append(optBtn);
  });
  qBox.append(opts);
  return qBox;
}

/* ---------- 阅读态 ---------- */
function showReading(body, item, backToList) {
  body.innerHTML = '';
  closeBubble();

  const backBtn = el('button', { class: 'btn ghost small rd-back', type: 'button' }, '← 返回列表');
  backBtn.addEventListener('click', backToList);
  body.append(backBtn);

  const savedState = getLibraryState('reading', item.id);
  const doneMark = el('span', { class: 'lh-done-badge', hidden: !savedState.done }, '✓ 已达标');
  const bestMark = el('span', { class: 'lh-best-badge', hidden: !savedState.best },
    savedState.best ? '最好 ' + savedState.best + '%' : '');
  body.append(el('div', { class: 'rd-read-head' },
    el('span', { class: 'lh-badge ' + LEVEL_CLASS[item.level] }, item.level),
    el('span', { class: 'lh-type-tag' }, GENRE_LABEL[item.genre] || item.genre),
    bestMark, doneMark));
  body.append(el('h2', { class: 'rd-read-title' }, item.title, el('span', { class: 'de' }, ' · ' + item.de)));
  body.append(el('div', { class: 'rd-read-meta' }, wordCount(item.text) + ' 词'));

  body.append(renderTextBody(item.text, item.gloss));

  const quiz = el('div', { class: 'lh-quiz rd-quiz' });
  const questionBody = el('div', { class: 'lh-quiz-body' });
  const quizResult = el('div', { class: 'lh-score-result', role: 'status' });
  const retryBtn = el('button', { class: 'btn ghost small', type: 'button', hidden: true }, '再做一次');
  quiz.append(el('h4', { class: 'lh-dict-title' }, '理解题'), quizResult, questionBody, retryBtn);

  function renderQuestions() {
    let answered = 0, correct = 0;
    questionBody.innerHTML = '';
    quizResult.textContent = '';
    retryBtn.hidden = true;
    item.questions.forEach((q, qi) => {
      questionBody.append(buildQuestionBlock(q, qi, ok => {
        answered++;
        if (ok) correct++;
        if (answered === item.questions.length) {
          const score = Math.round((correct / item.questions.length) * 100);
          const saved = recordLibraryScore('reading', item.id, score, PASS_SCORE);
          doneMark.hidden = !saved.done;
          bestMark.hidden = false;
          bestMark.textContent = '最好 ' + saved.best + '%';
          quizResult.textContent = score >= PASS_SCORE
            ? '本次 ' + score + '% · 已达标'
            : '本次 ' + score + '% · 需要 70% 才达标，可以再试一次';
          quizResult.className = 'lh-score-result ' + (score >= PASS_SCORE ? 'ok' : 'no');
          retryBtn.hidden = false;
        }
      }));
    });
  }
  retryBtn.addEventListener('click', renderQuestions);
  renderQuestions();
  body.append(quiz);
}

/* ---------- 列表态 ---------- */
function buildCard(item, onOpen) {
  const card = el('div', { class: 'rd-card' });
  const state = getLibraryState('reading', item.id);
  const doneMark = el('span', { class: 'lh-done-badge', hidden: !state.done }, '✓ 已达标');
  card.append(el('div', { class: 'rd-card-head' },
    el('span', { class: 'lh-badge ' + LEVEL_CLASS[item.level] }, item.level),
    el('span', { class: 'lh-type-tag' }, GENRE_LABEL[item.genre] || item.genre),
    doneMark));
  card.append(el('h3', { class: 'rd-card-title' }, item.title));
  card.append(el('p', { class: 'rd-card-de' }, item.de));
  card.append(el('div', { class: 'rd-card-meta' }, wordCount(item.text) + ' 词' + (state.best ? ' · 最好 ' + state.best + '%' : '')));
  card.addEventListener('click', onOpen);
  card.dataset.level = item.level;
  return card;
}

function showList(body) {
  body.innerHTML = '';
  const filterRow = el('div', { class: 'lh-filters' });
  const list = el('div', { class: 'rd-list' });
  body.append(filterRow, list);

  const entries = readingTexts.map(item => ({
    item,
    node: buildCard(item, () => showReading(body, item, () => showList(body))),
  }));
  entries.forEach(({ node }) => list.append(node));

  let current = '全部';
  const chips = ['全部', 'A1', 'A2', 'B1'].map(lv => {
    const chip = el('button', { class: 'lh-chip' + (lv === '全部' ? ' active' : ''), type: 'button' }, lv);
    chip.addEventListener('click', () => {
      current = lv;
      chips.forEach(c => c.classList.toggle('active', c === chip));
      entries.forEach(({ item, node }) => {
        node.style.display = (current === '全部' || current === item.level) ? '' : 'none';
      });
    });
    filterRow.append(chip);
    return chip;
  });
}

export function render(container) {
  ensureDocListener();
  container.append(el('div', { class: 'kicker' }, 'LESEN'));
  container.append(el('h1', { class: 'page' }, '分级阅读文库 ', el('span', { class: 'de' }, 'Lesen')));
  container.append(el('p', { class: 'page-sub' }, '楼道告示、朋友消息、二手广告、邮件、博客、本地简讯、活动推荐——点生词看中文释义，读完做理解题，把词汇量往歌德考纲之外扩一扩。'));

  const body = el('div', { class: 'rd-body' });
  container.append(body);
  showList(body);
}
