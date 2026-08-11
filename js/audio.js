// 浏览器自带 TTS（speechSynthesis），德语朗读
import { getSettings } from './state.js';

const synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
const Utterance = typeof window !== 'undefined' ? window.SpeechSynthesisUtterance : null;
export const speechSynthesisSupported = !!(synth && Utterance);

let voices = [];
function refreshVoices() { voices = synth ? synth.getVoices() : []; }
refreshVoices();
if (synth) synth.addEventListener('voiceschanged', refreshVoices);

export function germanVoices() {
  return voices.filter(v => v.lang.toLowerCase().startsWith('de'));
}

function pickVoice() {
  const want = getSettings().voiceName;
  const de = germanVoices();
  if (want) {
    const v = de.find(v => v.name === want);
    if (v) return v;
  }
  // 优先 Edge/Chrome 的自然语音
  return de.find(v => /natural/i.test(v.name))
      || de.find(v => /google/i.test(v.name))
      || de[0] || null;
}

export function speak(text, { slow = false } = {}) {
  if (!speechSynthesisSupported) return false;
  synth.cancel();
  const u = new Utterance(text);
  u.lang = 'de-DE';
  const v = pickVoice();
  if (v) u.voice = v;
  u.rate = slow ? 0.6 : (getSettings().rate || 0.92);
  synth.speak(u);
  return true;
}

// 生成朗读按钮（▶ 常速 / 🐢 慢速）
export function ttsBtn(text, { slow = false } = {}) {
  const b = document.createElement('button');
  b.className = 'tts-btn' + (slow ? ' slow' : '');
  b.type = 'button';
  b.textContent = slow ? '🐢' : '▶';
  b.title = speechSynthesisSupported
    ? (slow ? '慢速朗读' : '朗读')
    : '当前浏览器不支持语音朗读';
  b.setAttribute('aria-label', b.title);
  b.disabled = !speechSynthesisSupported;
  b.addEventListener('click', e => {
    e.stopPropagation();
    speak(text, { slow });
  });
  return b;
}
