// 语音识别（Web Speech API，Chrome/Edge 需联网），用于跟读打分
const SR = typeof window !== 'undefined' && (window.SpeechRecognition || window.webkitSpeechRecognition);

export const speechSupported = !!SR;

export function listen() {
  return new Promise((resolve, reject) => {
    if (!SR) return reject(new Error('unsupported'));
    const r = new SR();
    r.lang = 'de-DE';
    r.interimResults = false;
    r.maxAlternatives = 3;
    let settled = false;
    r.onresult = e => {
      settled = true;
      const alts = [...e.results[0]].map(a => a.transcript);
      resolve(alts);
    };
    r.onerror = e => { if (!settled) reject(new Error(e.error)); };
    r.onend = () => { if (!settled) reject(new Error('no-speech')); };
    r.start();
  });
}

function norm(s) {
  return s.toLowerCase()
    .replace(/ß/g, 'ss')
    .replace(/[.,!?;:"'’«»„“”\-–]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

// 词重合率 0..1
export function similarity(target, heardList) {
  const t = norm(target).split(' ').filter(Boolean);
  let best = 0;
  for (const heard of heardList) {
    const h = new Set(norm(heard).split(' ').filter(Boolean));
    const hit = t.filter(w => h.has(w)).length;
    best = Math.max(best, t.length ? hit / t.length : 0);
  }
  return best;
}
