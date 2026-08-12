// 浏览器自带 TTS（speechSynthesis），德语朗读
import { getSettings } from './state.js';
import { spokenForm } from './pronounce.js';

const synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
const Utterance = typeof window !== 'undefined' ? window.SpeechSynthesisUtterance : null;
export const speechSynthesisSupported = !!(synth && Utterance);

export const GERMAN_LANG = 'de-DE';

let voices = [];
function refreshVoices() { voices = synth ? (synth.getVoices() || []) : []; }
refreshVoices();
if (synth) synth.addEventListener('voiceschanged', refreshVoices);

/** 语音列表在 Chrome 里是异步就绪的，取用前兜底再读一次，避免开局拿到空列表 */
function currentVoices() {
  if (!voices.length) refreshVoices();
  return voices;
}

/** 有些平台把 lang 写成 de_DE / DE-de，统一成小写连字符再判断 */
function isGerman(voice) {
  return String(voice?.lang || '').toLowerCase().replace(/_/g, '-').startsWith('de');
}

export function germanVoices() {
  return currentVoices().filter(isGerman);
}

// 按音质排序的偏好列表：Issue #1 点名的 Google Deutsch / Microsoft Hedda 排在前面
const VOICE_PREFERENCE = [
  /google\s*deutsch/i,
  /^google\b.*(de|deutsch|german)/i,
  /hedda/i,
  /katja|conrad|amala|killian|louisa|seraphina/i, // Microsoft 德语音色
  /natural/i,                                     // Edge 的 Natural 系列
  /google/i,
  /german|deutsch/i,
];

let warnedNoGermanVoice = false;

function pickVoice() {
  const de = germanVoices();

  // 用户在设置里手动指定的优先
  const want = getSettings().voiceName;
  if (want) {
    const chosen = de.find(v => v.name === want) || currentVoices().find(v => v.name === want);
    if (chosen) return chosen;
  }

  for (const re of VOICE_PREFERENCE) {
    const hit = de.find(v => re.test(v.name));
    if (hit) return hit;
  }
  if (de.length) return de[0];

  // 没有任何德语语音：不抛错，只提醒一次，交给浏览器按 lang='de-DE' 尽力而为
  if (!warnedNoGermanVoice) {
    warnedNoGermanVoice = true;
    console.warn(
      '[DailyGerman] 没有找到德语语音（de-*）。朗读仍会以 lang="de-DE" 发出，'
      + '但音质取决于系统默认语音，发音可能不准。'
      + '建议使用 Edge/Chrome，或在系统里安装德语语音包。'
    );
  }
  return null;
}

/** 当前是否真的能用德语音色朗读——设置页据此提示用户 */
export function hasGermanVoice() {
  return germanVoices().length > 0;
}

/**
 * 朗读德语文本。
 * @param {string} text
 * @param {{slow?:boolean, art?:string}} opts 传 art 时名词会连冠词一起读
 */
export function speak(text, { slow = false, art = '' } = {}) {
  if (!speechSynthesisSupported) return false;
  const phrase = art ? spokenForm(text, art) : String(text || '');
  if (!phrase.trim()) return false;

  try { synth.cancel(); } catch { /* Safari 偶发抛错，忽略 */ }

  const u = new Utterance(phrase);
  const v = pickVoice();
  // 先定 voice 再定 lang：部分浏览器会用 voice.lang 覆盖，保持两者一致
  if (v) u.voice = v;
  u.lang = v ? v.lang : GERMAN_LANG;
  u.rate = slow ? 0.6 : (getSettings().rate || 0.92);
  u.pitch = 1;
  u.onerror = e => {
    if (e?.error === 'interrupted' || e?.error === 'canceled') return; // 连点朗读按钮属正常
    console.warn('[DailyGerman] 朗读失败：', e?.error || e);
  };

  // Chrome 上 cancel() 之后立刻 speak() 有概率被吞掉，让出一帧更稳
  setTimeout(() => {
    try { synth.speak(u); } catch (err) { console.warn('[DailyGerman] 朗读失败：', err); }
  }, 0);
  return true;
}

/** 名词专用：带冠词一起读，性别是这个词声音记忆的一部分 */
export function speakWord(word, art, opts = {}) {
  return speak(spokenForm(word, art), opts);
}

// 生成朗读按钮（▶ 常速 / 🐢 慢速）
export function ttsBtn(text, { slow = false, art = '' } = {}) {
  const phrase = art ? spokenForm(text, art) : String(text || '');
  const b = document.createElement('button');
  b.className = 'tts-btn' + (slow ? ' slow' : '');
  b.type = 'button';
  b.textContent = slow ? '🐢' : '▶';
  b.title = speechSynthesisSupported
    ? (slow ? '慢速朗读' : '朗读')
    : '当前浏览器不支持语音朗读';
  b.setAttribute('aria-label', `${b.title}：${phrase}`);
  b.disabled = !speechSynthesisSupported;
  b.addEventListener('click', e => {
    e.stopPropagation();
    speak(phrase, { slow });
  });
  return b;
}
