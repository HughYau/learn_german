// #/listening 听力材料库：车站广播、店铺提示、语音留言、天气预报……全部用浏览器 TTS 朗读
import { el } from '../ui.js';
import { speak, ttsBtn } from '../audio.js';
import { listeningItems } from '../../data/listening.js';
import { getLibraryState, recordLibraryScore } from '../state.js';

const PASS_SCORE = 70;

const TYPE_LABEL = {
  durchsage: '车站广播', ansage: '店铺/诊所广播', nachricht: '语音留言',
  dialog: '对话', wetter: '天气预报', nachrichten: '新闻简讯', termin: '预约电话',
};
const LEVEL_CLASS = { A1: 'lv-a1', A2: 'lv-a2', B1: 'lv-b1' };

// 按词比较，忽略大小写和标点
function wordDiff(input, target) {
  const norm = s => String(s).toLowerCase()
    .replace(/[.,!?;:„“”"'’()]/g, '')
    .trim().split(/\s+/).filter(Boolean);
  const a = norm(input), b = norm(target);
  const len = Math.max(a.length, b.length);
  const out = [];
  for (let i = 0; i < len; i++) out.push({ word: b[i] ?? '(缺词)', ok: a[i] !== undefined && a[i] === b[i] });
  return out;
}

function playBtnRow(text) {
  const playBtn = el('button', { class: 'lh-play-btn', type: 'button' }, '▶ 播放');
  playBtn.addEventListener('click', () => speak(text));
  const slowBtn = el('button', { class: 'lh-play-btn slow', type: 'button' }, '🐢 慢速');
  slowBtn.addEventListener('click', () => speak(text, { slow: true }));
  return el('div', { class: 'lh-play-row' }, playBtn, slowBtn);
}

function formatTranscript(text) {
  if (/^A:\s/.test(text)) {
    const turns = text.split(/(?=[AB]:\s)/).map(t => t.trim()).filter(Boolean);
    const box = el('div', { class: 'lh-dialog' });
    turns.forEach(t => {
      const m = t.match(/^([AB]):\s(.*)$/);
      box.append(m
        ? el('div', { class: 'lh-dline' }, el('b', {}, m[1] + ': '), m[2])
        : el('div', { class: 'lh-dline' }, t));
    });
    return box;
  }
  return el('p', { class: 'lh-transcript-text' }, text);
}

function buildQuestionBlock(item, q, qi, onDone) {
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

function buildDictation(item) {
  const wrap = el('div', { class: 'lh-dict' });
  wrap.append(el('h4', { class: 'lh-dict-title' }, '听写'), playBtnRow(item.dictation));

  const textarea = el('textarea', { class: 'lh-dict-input', rows: '2', placeholder: '听到什么就写什么……' });
  const charRow = el('div', { class: 'lh-char-row' });
  ['ä', 'ö', 'ü', 'ß'].forEach(ch => {
    const b = el('button', { class: 'lh-char-btn', type: 'button' }, ch);
    b.addEventListener('click', () => {
      const start = textarea.selectionStart ?? textarea.value.length;
      const end = textarea.selectionEnd ?? textarea.value.length;
      textarea.value = textarea.value.slice(0, start) + ch + textarea.value.slice(end);
      textarea.focus();
      textarea.selectionStart = textarea.selectionEnd = start + ch.length;
    });
    charRow.append(b);
  });

  const checkBtn = el('button', { class: 'btn small', type: 'button' }, '检查');
  const result = el('div', { class: 'lh-dict-result' });
  checkBtn.addEventListener('click', () => {
    const diff = wordDiff(textarea.value, item.dictation);
    result.innerHTML = '';
    const line = el('div', { class: 'lh-dict-diff' });
    diff.forEach(({ word, ok }) => line.append(el('span', { class: 'lh-word ' + (ok ? 'ok' : 'no') }, word)));
    const origRow = el('div', { class: 'lh-dict-orig' }, '原句：', el('span', { class: 'de' }, item.dictation), ttsBtn(item.dictation));
    result.append(line, origRow);
  });

  wrap.append(textarea, charRow, el('div', { class: 'ex-actions' }, checkBtn), result);
  return wrap;
}

function buildCard(item) {
  const card = el('div', { class: 'lh-card' });

  const savedState = getLibraryState('listening', item.id);
  const doneMark = el('span', { class: 'lh-done-badge', hidden: !savedState.done }, '✓ 已达标');
  const bestMark = el('span', { class: 'lh-best-badge', hidden: !savedState.best },
    savedState.best ? '最好 ' + savedState.best + '%' : '');
  const head = el('div', { class: 'lh-head' },
    el('span', { class: 'lh-badge ' + LEVEL_CLASS[item.level] }, item.level),
    el('span', { class: 'lh-type-tag' }, TYPE_LABEL[item.type] || item.type),
    bestMark, doneMark);
  card.append(head, el('h3', { class: 'lh-title' }, item.title));
  card.append(playBtnRow(item.text));

  const transcript = el('div', { class: 'lh-transcript', hidden: true }, formatTranscript(item.text));
  const toggleBtn = el('button', { class: 'btn ghost small', type: 'button' }, '显示原文（建议先听、做完题再看）');
  toggleBtn.addEventListener('click', () => {
    transcript.hidden = !transcript.hidden;
    toggleBtn.textContent = transcript.hidden ? '显示原文（建议先听、做完题再看）' : '隐藏原文';
  });
  card.append(toggleBtn, transcript);

  const quizBody = el('div', { class: 'lh-quiz-body' });
  const quizResult = el('div', { class: 'lh-score-result', role: 'status' });
  const quizLaunch = el('button', { class: 'btn small', type: 'button' }, '做题（2 题）');
  let answered = 0, correct = 0;
  quizLaunch.addEventListener('click', () => {
    answered = 0;
    correct = 0;
    quizLaunch.disabled = true;
    quizBody.innerHTML = '';
    quizResult.textContent = '';
    item.questions.forEach((q, qi) => {
      quizBody.append(buildQuestionBlock(item, q, qi, ok => {
        answered++;
        if (ok) correct++;
        if (answered === item.questions.length) {
          const score = Math.round((correct / item.questions.length) * 100);
          const saved = recordLibraryScore('listening', item.id, score, PASS_SCORE);
          doneMark.hidden = !saved.done;
          bestMark.hidden = false;
          bestMark.textContent = '最好 ' + saved.best + '%';
          quizResult.textContent = score >= PASS_SCORE
            ? '本次 ' + score + '% · 已达标'
            : '本次 ' + score + '% · 需要 70% 才达标，可以再试一次';
          quizResult.className = 'lh-score-result ' + (score >= PASS_SCORE ? 'ok' : 'no');
          quizLaunch.disabled = false;
          quizLaunch.textContent = '再做一次';
        }
      }));
    });
  });
  card.append(el('div', { class: 'lh-quiz' }, quizLaunch, quizResult, quizBody));

  card.append(buildDictation(item));
  return card;
}

export function render(container) {
  container.append(el('div', { class: 'kicker' }, 'HÖREN'));
  container.append(el('h1', { class: 'page' }, '听力材料库 ', el('span', { class: 'de' }, 'Hören')));
  container.append(el('p', { class: 'page-sub' }, '车站广播、店铺提示、语音留言、天气预报——听懂周围的德语。先听，再做题，最后挑战听写。'));

  const filterRow = el('div', { class: 'lh-filters' });
  container.append(filterRow);
  const list = el('div', { class: 'lh-list' });
  container.append(list);

  const entries = listeningItems.map(item => ({ item, node: buildCard(item) }));
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
