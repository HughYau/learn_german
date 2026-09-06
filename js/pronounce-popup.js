// 长按/右键查发音：任意德语词上长按 500ms 或右键，弹出音节重音 + IPA + 冠词
// 桌面：右键 或 按住 500ms；移动端：触摸按住 500ms
import { el } from './ui.js';
import { analyze } from './pronounce.js';
import { speak, speechSynthesisSupported } from './audio.js';

const HOLD_MS = 500;
const MOVE_TOLERANCE = 10; // 手指移动超过这个距离就当成滚动，取消长按

// 哪些区域算“德语文本”——只在这些地方响应，避免中文说明也弹窗
const DE_SCOPE = [
  '[data-de]', '[data-pron]', '.de', '.sr-de', '.fc-face .w', '.wort-card .w',
  '.vocab-table td.w', '.vocab-table td.ex', '.ex', '.gl', '.cloze-line',
  '.lh-dict-orig', '.dlg-line', '.phrase-de', '.msg-body',
].join(',');

const WORD_CHAR = /[\p{L}ß]/u;

/* ---------------- 取词 ---------------- */

/** 用光标位置取出指针正下方的那个词；取不到就退回元素里的第一个德语词 */
function wordAtPoint(x, y, fallbackEl) {
  let node = null, offset = 0;
  if (document.caretRangeFromPoint) {
    const r = document.caretRangeFromPoint(x, y);
    if (r) { node = r.startContainer; offset = r.startOffset; }
  } else if (document.caretPositionFromPoint) {
    const p = document.caretPositionFromPoint(x, y);
    if (p) { node = p.offsetNode; offset = p.offset; }
  }

  if (node && node.nodeType === Node.TEXT_NODE) {
    const t = node.data;
    const ok = c => c != null && (WORD_CHAR.test(c) || c === '-');
    let s = Math.min(offset, t.length), e = s;
    // 指针落在词尾空格上时向左找一格
    if (!ok(t[s]) && ok(t[s - 1])) s -= 1, e = s;
    while (s > 0 && ok(t[s - 1])) s--;
    while (e < t.length && ok(t[e])) e++;
    const w = t.slice(s, e).replace(/^-+|-+$/g, '');
    if (w && /[a-zA-ZäöüÄÖÜß]/.test(w)) return w;
  }

  const m = String(fallbackEl?.textContent || '').match(/[A-Za-zÄÖÜäöüß][A-Za-zÄÖÜäöüß-]*/);
  return m ? m[0] : '';
}

/** 从 DOM 上下文里找这个词的冠词：同排的 .art 标签或祖先的 data-art */
function articleFromDom(target) {
  const scope = target.closest('tr, .fc-face, .wort-card, .search-row, [data-art]');
  if (!scope) return '';
  const explicit = scope.getAttribute?.('data-art');
  if (explicit) return explicit.toLowerCase();
  const tag = scope.querySelector?.('.art');
  const txt = tag?.textContent?.trim().toLowerCase();
  return ['der', 'die', 'das'].includes(txt) ? txt : '';
}

/* ---------------- 弹窗 ---------------- */

let popup = null;

export function closePronPopup() {
  if (!popup) return;
  popup.remove();
  popup = null;
}

function buildPopup(info) {
  const box = el('div', { class: 'pron-pop', role: 'dialog', 'aria-label': `${info.word} 的发音` });

  // 标题行：冠词 + 单词 + 朗读
  const head = el('div', { class: 'pron-head' });
  if (info.art) head.append(el('span', { class: `art art-${info.art}` }, info.art));
  head.append(el('span', { class: 'pron-word' }, info.word));

  const play = el('button', { class: 'pron-play', type: 'button', 'aria-label': `朗读 ${info.spoken}` }, '▶');
  play.disabled = !speechSynthesisSupported;
  play.addEventListener('click', e => { e.stopPropagation(); speak(info.spoken); });
  const slow = el('button', { class: 'pron-play slow', type: 'button', 'aria-label': `慢速朗读 ${info.spoken}` }, '🐢');
  slow.disabled = !speechSynthesisSupported;
  slow.addEventListener('click', e => { e.stopPropagation(); speak(info.spoken, { slow: true }); });
  head.append(play, slow);
  box.append(head);

  // 音节 + 重音：重音音节高亮，上方带重音符
  const syl = el('div', { class: 'pron-syl' });
  info.syllables.forEach((s, i) => {
    if (i) syl.append(el('span', { class: 'pron-dot' }, '·'));
    syl.append(el('span', { class: i === info.stress ? 'pron-s stressed' : 'pron-s' }, s));
  });
  box.append(syl);

  if (info.ipa) box.append(el('div', { class: 'pron-ipa' }, `[${info.ipa}]`));

  const hint = info.known
    ? (info.art ? '名词 · 冠词随词一起读' : '本地发音词典')
    : '按德语拼读规则推断，未收录 IPA';
  box.append(el('div', { class: 'pron-note' }, hint));

  return box;
}

function place(box, x, y) {
  document.body.append(box);
  const bw = box.offsetWidth, bh = box.offsetHeight;
  let left = x - bw / 2;
  left = Math.max(8, Math.min(left, window.innerWidth - bw - 8));
  let top = y - bh - 14;
  let below = false;
  if (top < 8) { top = y + 18; below = true; }
  box.style.left = `${left}px`;
  box.style.top = `${top}px`;
  box.classList.add(below ? 'pron-below' : 'pron-above');
}

/** 在 (x,y) 处为 word 弹出发音卡片 */
export function showPronPopup(word, x, y, art = '') {
  closePronPopup();
  const info = analyze(word, { art });
  if (!info.word) return;
  popup = buildPopup(info);
  place(popup, x, y);
}

/* ---------------- 事件绑定 ---------------- */

let installed = false;

export function installPronunciationLookup(root = document) {
  if (installed) return;
  installed = true;

  let timer = null;
  let start = null;
  let held = false;

  const clear = () => {
    if (timer) { clearTimeout(timer); timer = null; }
    start = null;
  };

  const scopeOf = target =>
    (target instanceof Element ? target : target?.parentElement)?.closest(DE_SCOPE) || null;

  root.addEventListener('pointerdown', e => {
    if (e.button === 2) return;            // 右键走 contextmenu 分支
    if (popup?.contains(e.target)) return; // 点在弹窗内部不处理
    const scope = scopeOf(e.target);
    if (!scope) return;

    held = false;
    start = { x: e.clientX, y: e.clientY, target: e.target, scope };
    timer = setTimeout(() => {
      timer = null;
      held = true;
      const word = wordAtPoint(start.x, start.y, start.scope);
      if (word) showPronPopup(word, start.x, start.y, articleFromDom(start.scope));
    }, HOLD_MS);
  }, { passive: true });

  root.addEventListener('pointermove', e => {
    if (!start) return;
    if (Math.abs(e.clientX - start.x) > MOVE_TOLERANCE || Math.abs(e.clientY - start.y) > MOVE_TOLERANCE) clear();
  }, { passive: true });

  root.addEventListener('pointerup', clear, { passive: true });
  root.addEventListener('pointercancel', clear, { passive: true });

  // 长按已触发时吞掉随后的 click，避免顺带翻开闪卡 / 跳转链接
  root.addEventListener('click', e => {
    if (!held) return;
    held = false;
    e.preventDefault();
    e.stopPropagation();
  }, true);

  // 长按选中文字很烦人，按住期间禁掉选区
  root.addEventListener('selectstart', e => { if (start) e.preventDefault(); });

  // 桌面右键
  root.addEventListener('contextmenu', e => {
    const scope = scopeOf(e.target);
    if (!scope) return;
    const word = wordAtPoint(e.clientX, e.clientY, scope);
    if (!word) return;
    e.preventDefault();
    showPronPopup(word, e.clientX, e.clientY, articleFromDom(scope));
  });

  // 点外部 / Esc 关闭
  document.addEventListener('pointerdown', e => {
    if (popup && !popup.contains(e.target)) closePronPopup();
  }, true);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closePronPopup(); });
  window.addEventListener('hashchange', closePronPopup);
  window.addEventListener('resize', closePronPopup);
  window.addEventListener('scroll', closePronPopup, { passive: true });
}
