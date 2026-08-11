// 练习引擎：mcq / cloze / order / match / listen / speak
import { el, shuffle } from './ui.js';
import { speak, ttsBtn } from './audio.js';
import { speechSupported, listen, similarity } from './speech.js';

function makeFeedback(ok, correctText, why, audioText) {
  const f = el('div', { class: 'ex-feedback ' + (ok ? 'ok' : 'no') });
  f.append(el('b', {}, ok ? '✓ richtig!' : `✗ 正确答案：${correctText}`));
  if (why) f.append(el('div', {}, why));
  if (audioText) {
    const row = el('div', { style: 'margin-top:8px;display:flex;align-items:center;gap:8px' });
    row.append(el('span', { style: 'font-family:var(--font-de)' }, audioText), ttsBtn(audioText));
    f.append(row);
  }
  return f;
}

// 通用选择题选项区：options[], answerIdx, onPick(ok) 在判定后调用一次
function buildOptions(options, answerIdx, onPick) {
  const opts = el('div', { class: 'ex-opts' });
  options.forEach((opt, i) => {
    // 含中文的选项用界面字体，纯德语选项用衬线体
    const hasCJK = /[一-鿿]/.test(opt);
    const btn = el('button', { class: 'ex-opt', type: 'button' }, hasCJK ? opt : el('span', { class: 'de-opt' }, opt));
    btn.addEventListener('click', () => {
      if (opts.dataset.answered) return;
      opts.dataset.answered = '1';
      [...opts.children].forEach(b => b.disabled = true);
      const ok = i === answerIdx;
      btn.classList.add(ok ? 'correct' : 'wrong');
      if (!ok) opts.children[answerIdx].classList.add('correct');
      onPick(ok);
    });
    opts.append(btn);
  });
  return opts;
}

function renderMcq(body, ex, { onAnswered }) {
  body.append(el('div', { class: 'ex-q' }, ex.q));
  if (ex.de) {
    const deLine = el('div', { class: 'ex-de' }, ex.de + ' ');
    deLine.append(ttsBtn(ex.de));
    body.append(deLine);
  }
  body.append(buildOptions(ex.options, ex.answer, ok => {
    onAnswered(ok, makeFeedback(ok, ex.options[ex.answer], ex.why));
  }));
}

function renderCloze(body, ex, { onAnswered }) {
  if (ex.zhHint) body.append(el('div', { class: 'ex-zh-hint' }, ex.zhHint));
  const gap = el('span', { class: 'cloze-gap' }, '___');
  const line = el('div', { class: 'cloze-line' }, (ex.before || '') + ' ', gap, ' ' + (ex.after || ''));
  body.append(line);
  body.append(buildOptions(ex.options, ex.answer, ok => {
    const answerText = ex.options[ex.answer];
    gap.textContent = answerText;
    const full = `${ex.before || ''} ${answerText} ${ex.after || ''}`.replace(/\s+/g, ' ').trim();
    line.append(' ', ttsBtn(full));
    onAnswered(ok, makeFeedback(ok, answerText, ex.why));
  }));
}

function renderOrder(body, ex, { onAnswered }) {
  body.append(el('div', { class: 'ex-q' }, '把词排成正确的句子'));
  if (ex.zh) body.append(el('div', { class: 'ex-zh-hint' }, ex.zh));

  const answerLine = el('div', { class: 'answer-line' });
  const bank = el('div', { class: 'word-bank' });
  body.append(answerLine, bank);

  const order = shuffle(ex.words.map((_, i) => i));
  const chosenIdx = [];
  let checked = false;

  function syncBank() {
    [...bank.children].forEach(c => {
      const i = Number(c.dataset.idx);
      c.classList.toggle('used', chosenIdx.includes(i));
    });
  }
  function renderAnswerLine() {
    answerLine.innerHTML = '';
    chosenIdx.forEach((i, pos) => {
      const chip = el('button', { class: 'word-chip', type: 'button' }, ex.words[i]);
      chip.addEventListener('click', () => {
        if (checked) return;
        chosenIdx.splice(pos, 1);
        renderAnswerLine();
        syncBank();
      });
      answerLine.append(chip);
    });
  }
  order.forEach(i => {
    const chip = el('button', { class: 'word-chip', type: 'button' }, ex.words[i]);
    chip.dataset.idx = i;
    chip.addEventListener('click', () => {
      if (checked || chip.classList.contains('used')) return;
      chosenIdx.push(i);
      renderAnswerLine();
      syncBank();
    });
    bank.append(chip);
  });

  const checkBtn = el('button', { class: 'btn', type: 'button' }, '检查');
  body.append(el('div', { class: 'ex-actions' }, checkBtn));
  checkBtn.addEventListener('click', () => {
    if (checked) return;
    checked = true;
    checkBtn.disabled = true;
    const correctStr = ex.words.join(' ');
    const userStr = chosenIdx.map(i => ex.words[i]).join(' ');
    const ok = userStr === correctStr;
    onAnswered(ok, makeFeedback(ok, correctStr, ex.why, correctStr));
  });
}

function renderMatch(body, ex, { onAnswered }) {
  body.append(el('div', { class: 'ex-q' }, '把左右两边配对'));
  const grid = el('div', { class: 'match-grid' });
  body.append(grid);

  const n = ex.pairs.length;
  const left = shuffle(ex.pairs.map((_, i) => i));
  const right = shuffle(ex.pairs.map((_, i) => i));
  let selLeft = null, selRight = null, wrongCount = 0;
  const matched = new Set();

  for (let r = 0; r < n; r++) {
    const li = left[r];
    const lb = el('button', { class: 'match-item de-side', type: 'button' }, ex.pairs[li][0]);
    lb.addEventListener('click', () => onPick(lb, li, true));
    const ri = right[r];
    const rb = el('button', { class: 'match-item', type: 'button' }, ex.pairs[ri][1]);
    rb.addEventListener('click', () => onPick(rb, ri, false));
    grid.append(lb, rb);
  }

  function onPick(node, idx, isLeft) {
    if (node.classList.contains('matched')) return;
    if (isLeft) {
      if (selLeft) selLeft.el.classList.remove('sel');
      selLeft = { idx, el: node };
      node.classList.add('sel');
    } else {
      if (selRight) selRight.el.classList.remove('sel');
      selRight = { idx, el: node };
      node.classList.add('sel');
    }
    if (selLeft && selRight) {
      if (selLeft.idx === selRight.idx) {
        selLeft.el.classList.remove('sel');
        selRight.el.classList.remove('sel');
        selLeft.el.classList.add('matched');
        selRight.el.classList.add('matched');
        matched.add(selLeft.idx);
        selLeft = null; selRight = null;
        if (matched.size === n) finish();
      } else {
        wrongCount++;
        const a = selLeft.el, b = selRight.el;
        a.classList.add('wrong'); b.classList.add('wrong');
        setTimeout(() => { a.classList.remove('wrong', 'sel'); b.classList.remove('wrong', 'sel'); }, 300);
        selLeft = null; selRight = null;
      }
    }
  }

  function finish() {
    const ok = wrongCount <= 1;
    const summary = ex.pairs.map(p => `${p[0]} – ${p[1]}`).join('，');
    onAnswered(ok, makeFeedback(ok, summary, ex.why));
  }
}

function renderListen(body, ex, { onAnswered }) {
  body.append(el('div', { class: 'ex-q' }, ex.q));
  const row = el('div', { style: 'display:flex; align-items:center; justify-content:center; gap:14px' });
  const big = el('button', { class: 'listen-big', type: 'button' }, '▶');
  big.addEventListener('click', () => speak(ex.audio));
  row.append(big, ttsBtn(ex.audio, { slow: true }));
  body.append(row);
  setTimeout(() => speak(ex.audio), 150);

  body.append(buildOptions(ex.options, ex.answer, ok => {
    onAnswered(ok, makeFeedback(ok, ex.options[ex.answer], ex.why, ex.audio));
  }));
}

function speakFeedback(ok, msg) {
  const f = el('div', { class: 'ex-feedback ' + (ok ? 'ok' : 'no') });
  f.append(el('b', {}, ok ? '✓ richtig!' : '✗ 没关系，多练几次就会了'));
  if (msg) f.append(el('div', {}, msg));
  return f;
}

function renderSpeak(body, ex, { onAnswered }) {
  const deLine = el('div', { class: 'ex-de' }, ex.de + ' ');
  deLine.append(ttsBtn(ex.de), ttsBtn(ex.de, { slow: true }));
  body.append(deLine);
  if (ex.zh) body.append(el('div', { class: 'ex-zh-hint' }, ex.zh));

  if (!speechSupported) {
    renderFallback();
    return;
  }

  let attempts = 0;
  const maxAttempts = 3;
  const actions = el('div', { class: 'ex-actions' });
  const micBtn = el('button', { class: 'btn', type: 'button' }, '🎤 开始跟读');
  const heard = el('div', { class: 'speak-heard' }, '');
  actions.append(micBtn);
  body.append(actions, heard);

  micBtn.addEventListener('click', async () => {
    micBtn.disabled = true;
    micBtn.textContent = '正在听…';
    try {
      const alts = await listen();
      heard.textContent = alts[0] || '';
      const sim = similarity(ex.de, alts);
      attempts++;
      if (sim >= 0.55) {
        onAnswered(true, speakFeedback(true, '语音识别结果与原句匹配。'));
      } else if (attempts >= maxAttempts) {
        onAnswered(false, speakFeedback(false, `正确说法：${ex.de}`));
      } else {
        heard.textContent += `（再试一次，还有 ${maxAttempts - attempts} 次机会）`;
        micBtn.disabled = false;
        micBtn.textContent = '🎤 再试一次';
      }
    } catch (e) {
      body.removeChild(actions);
      body.removeChild(heard);
      renderFallback();
    }
  });

  function renderFallback() {
    body.append(el('p', { class: 'ex-zh-hint' }, '你的浏览器不支持语音识别，点 ▶ 听原句，自己跟读一遍。这里记录的是完成情况，不是发音评分：'));
    const row = el('div', { class: 'ex-actions' });
    const okBtn = el('button', { class: 'btn', type: 'button' }, '我读出来了（算对）');
    const skipBtn = el('button', { class: 'btn ghost', type: 'button' }, '跳过（算错）');
    okBtn.addEventListener('click', () => onAnswered(true, speakFeedback(true, '很好！')));
    skipBtn.addEventListener('click', () => onAnswered(false, speakFeedback(false, '下次再试试看。')));
    row.append(okBtn, skipBtn);
    body.append(row);
  }
}

const RENDERERS = {
  mcq: renderMcq,
  cloze: renderCloze,
  order: renderOrder,
  match: renderMatch,
  listen: renderListen,
  speak: renderSpeak,
};

export function runExercises(container, exercises, { onFinish } = {}) {
  let idx = 0;
  let correctCount = 0;
  const results = new Array(exercises.length).fill(null); // 'correct' | 'wrong'

  container.innerHTML = '';
  const wrap = el('div', { class: 'ex-wrap' });
  const progress = el('div', { class: 'ex-progress' });
  exercises.forEach(() => progress.append(el('i')));
  const body = el('div', { class: 'ex-body' });
  wrap.append(progress, body);
  container.append(wrap);

  function updateProgress() {
    [...progress.children].forEach((n, i) => {
      n.classList.remove('cur', 'done', 'wrong');
      if (results[i] === 'correct') n.classList.add('done');
      else if (results[i] === 'wrong') n.classList.add('wrong');
      else if (i === idx) n.classList.add('cur');
    });
  }

  function onAnswered(ok, feedbackNode) {
    results[idx] = ok ? 'correct' : 'wrong';
    if (ok) correctCount++;
    updateProgress();
    const actions = el('div', { class: 'ex-actions' });
    const btn = el('button', { class: 'btn', type: 'button' }, idx === exercises.length - 1 ? '完成 →' : '继续 →');
    btn.addEventListener('click', next);
    actions.append(btn);
    body.append(feedbackNode, actions);
  }

  function next() {
    idx++;
    if (idx >= exercises.length) { showResult(); return; }
    renderQuestion();
  }

  function renderQuestion() {
    updateProgress();
    body.innerHTML = '';
    const ex = exercises[idx];
    const renderer = RENDERERS[ex.type];
    if (renderer) renderer(body, ex, { onAnswered });
    else body.append(el('p', { class: 'empty-note' }, '未知题型：' + ex.type));
  }

  function showResult() {
    updateProgress();
    const pct = Math.round((correctCount / exercises.length) * 100);
    const comment = pct >= 90 ? 'Ausgezeichnet! 优秀' : pct >= 70 ? 'Gut gemacht! 通过' : '再练一次吧，语法区和词汇就在上面';
    body.innerHTML = '';
    const actions = el('div', { class: 'ex-actions', style: 'justify-content:center' });
    const againBtn = el('button', { class: 'btn', type: 'button' }, '再做一遍');
    const topBtn = el('button', { class: 'btn ghost', type: 'button' }, '返回顶部');
    againBtn.addEventListener('click', restart);
    topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    actions.append(againBtn, topBtn);
    body.append(el('div', { class: 'ex-result' },
      el('div', { class: 'big' }, pct + '%'),
      el('p', {}, comment),
      actions
    ));
    if (onFinish) onFinish(pct);
  }

  function restart() {
    idx = 0; correctCount = 0; results.fill(null);
    renderQuestion();
  }

  renderQuestion();
}
