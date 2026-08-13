// 德语发音分析：音节切分、重音判定、IPA 查询
// 纯逻辑模块，不依赖 DOM，可在 Node 里直接测试（tests/pronounce.test.mjs）
import { pronunciationDict } from '../data/pronunciation.js';

/* ---------------- 音节切分 ---------------- */

const VOWELS = 'aeiouäöüy';
// 复合元音（二合字母）：必须整体作为一个音节核心
const DIGRAPH_VOWELS = ['au', 'äu', 'eu', 'ei', 'ai', 'ey', 'ay', 'ie', 'aa', 'ee', 'oo'];
// 不可拆分的辅音组合：整体归入后一个音节
const UNSPLITTABLE = ['sch', 'ch', 'ck', 'ph', 'th', 'rh', 'sh', 'qu'];

// 构词前缀：音节边界必须落在前缀后面，否则会切出 "vers-te-hen" 这种错的形
// （长的排前面，先匹配长前缀）
const MORPH_PREFIXES = [
  'zurück', 'unter', 'über', 'zusammen', 'nach', 'vor', 'ent', 'emp', 'ver', 'zer',
  'auf', 'aus', 'ein', 'mit', 'ab', 'an', 'zu', 'be', 'ge', 'er', 'un', 'hin', 'her', 'weg',
];
// 合法的德语音节起始辅音组合——用来判断“前缀后面接得上吗”
const LEGAL_ONSETS = [
  'schl', 'schm', 'schn', 'schr', 'schw', 'sch', 'spr', 'str', 'spl',
  'chl', 'chr', 'thr', 'pfl', 'pfr',
  'bl', 'br', 'dr', 'fl', 'fr', 'gl', 'gr', 'kl', 'kr', 'pl', 'pr', 'tr', 'kn', 'gn',
  'pf', 'ps', 'qu', 'sp', 'st', 'sk', 'sl', 'zw', 'tw', 'dw', 'ch', 'th', 'ph', 'rh',
];

/** 前缀后面的词干能否作为一个音节开头 */
function startsLegally(rest) {
  if (!rest) return false;
  if (isVowel(rest[0])) return true;
  const cons = rest.match(/^[^aeiouäöüy]+/);
  if (!cons) return true;
  const c = cons[0];
  if (c.length === 1) return true;
  return LEGAL_ONSETS.some(o => c === o || c.startsWith(o));
}

function isVowel(ch) { return VOWELS.includes(ch); }

/** 找出所有元音核心的 [start, end) 区间（已合并二合元音） */
function vowelNuclei(lower) {
  const nuclei = [];
  let i = 0;
  while (i < lower.length) {
    if (!isVowel(lower[i])) { i++; continue; }
    const pair = lower.slice(i, i + 2);
    // 只有当第二个字母也是元音时才考虑二合元音，避免把 "ia" 之类误合
    const len = DIGRAPH_VOWELS.includes(pair) ? 2 : 1;
    nuclei.push([i, i + len]);
    i += len;
  }
  return nuclei;
}

/**
 * 把一个德语单词切成音节。
 * 规则（贴近德语正字法断词法）：
 *   - 两个元音核心之间没有辅音 → 直接在中间断开（Fa-mi-li-e 的 li|e 型）
 *   - 只有一个辅音 → 归后一个音节（schö-ne）
 *   - 多个辅音 → 最后一个归后一个音节（Kat-ze、Leip-zig）
 *   - ch/sch/ck/ph/th/rh/qu 视为一个整体，整体归后一个音节（Zu-cker、Fla-sche）
 * @param {string} word
 * @returns {string[]} 音节数组；无法切分时返回 [word]
 */
export function syllabify(word) {
  const raw = String(word || '').trim();
  if (!raw) return [];
  // 带连字符的复合词分别处理，保留连字符
  if (raw.includes('-')) {
    return raw.split('-').flatMap((part, idx) => {
      const syls = part ? syllabify(part) : [];
      return idx === 0 ? syls : ['-' + (syls[0] ?? ''), ...syls.slice(1)].filter(Boolean);
    });
  }

  const lower = raw.toLowerCase();

  // 词典可以直接覆盖切分结果——外来词（Universität）规则判不准，人工写死最省事
  const override = pronunciationDict[lower]?.syl;
  if (Array.isArray(override) && override.join('').length === raw.length) {
    let at = 0;
    return override.map(s => { const piece = raw.slice(at, at + s.length); at += s.length; return piece; });
  }

  const nuclei = vowelNuclei(lower);
  if (nuclei.length <= 1) return [raw];

  // 前缀边界优先：ver|stehen 而不是 vers|tehen
  const forced = new Set();
  for (const p of MORPH_PREFIXES) {
    if (!lower.startsWith(p)) continue;
    const at = p.length;
    const rest = lower.slice(at);
    // 词干太短（Ente 的 "ent"）或接不上（Ernte 的 "er"+"nte"）就不是真前缀
    if (rest.length < 3 || !startsLegally(rest)) continue;
    // 切点不能落在二合元音中间（beide 的 "be"+"ide"）
    if (nuclei.some(([s, e]) => at > s && at < e)) continue;
    // 前缀本身和词干都得有元音
    if (!nuclei.some(([s]) => s < at) || !nuclei.some(([s]) => s >= at)) continue;
    forced.add(at);
    break;
  }

  const cuts = [];
  for (let n = 0; n < nuclei.length - 1; n++) {
    const clusterStart = nuclei[n][1];
    const clusterEnd = nuclei[n + 1][0];
    const cluster = lower.slice(clusterStart, clusterEnd);

    // 这一段里有前缀边界就用它，跳过通用规则
    const f = [...forced].find(x => x >= clusterStart && x <= clusterEnd);
    if (f != null) { cuts.push(f); continue; }

    if (cluster.length === 0) {
      cuts.push(clusterStart);
      continue;
    }
    // 不可拆分组合整体归后一个音节
    const whole = UNSPLITTABLE.find(d => cluster.endsWith(d));
    if (whole && cluster.length >= whole.length) {
      const cut = clusterEnd - whole.length;
      // 后一个音节至少要有一个字母的起始，且不能切在词首
      if (cut > nuclei[n][0]) { cuts.push(cut); continue; }
    }
    // 常规：最后一个辅音归后一个音节
    const cut = clusterEnd - 1;
    if (cut > nuclei[n][0]) cuts.push(cut);
  }

  const out = [];
  let prev = 0;
  for (const c of cuts) {
    if (c <= prev || c >= raw.length) continue;
    out.push(raw.slice(prev, c));
    prev = c;
  }
  out.push(raw.slice(prev));
  return out.filter(Boolean);
}

/* ---------------- 重音判定 ---------------- */

// 永不重读的动词/名词前缀：be-, ge-, er-, ver-, zer-, ent-, emp-
const UNSTRESSED_PREFIXES = ['ver', 'zer', 'ent', 'emp', 'be', 'ge', 'er'];
// 外来词后缀 → 重音落在倒数第 n 个音节（1 = 最后一个音节）
const SUFFIX_STRESS = [
  { re: /ieren?$/i, fromEnd: 2 },   // studieren → stu-DIE-ren
  { re: /ie$/i, fromEnd: 1 },       // Batterie → Batte-RIE
  { re: /(t|s)ion$/i, fromEnd: 1 }, // Nation → Nati-ON
  { re: /ität$/i, fromEnd: 1 },     // Universität → …-TÄT
  { re: /tät$/i, fromEnd: 1 },
  { re: /ismus$/i, fromEnd: 2 },
  { re: /(ent|ant|ist|eur|ös|iv|al|ell)$/i, fromEnd: 1 },
  { re: /ei$/i, fromEnd: 1 },       // Bäckerei → …-REI
  { re: /(ur|age|anz|enz)$/i, fromEnd: 1 },
];

/**
 * 判断重音落在第几个音节（0 起）。
 * 顺序：词典覆盖 > 外来词后缀 > 非重读前缀 > 默认第一个音节。
 */
export function stressIndex(word, syllables = syllabify(word)) {
  if (syllables.length <= 1) return 0;
  const lower = String(word || '').toLowerCase();

  const entry = lookupEntry(word);
  if (entry && Number.isInteger(entry.stress)) {
    return Math.min(Math.max(entry.stress, 0), syllables.length - 1);
  }

  for (const { re, fromEnd } of SUFFIX_STRESS) {
    if (re.test(lower)) {
      const idx = syllables.length - fromEnd;
      if (idx >= 0) return idx;
    }
  }

  // zurück- 自身重音就在第二个音节：zu-RÜCK-kom-men
  if (lower.startsWith('zurück') && syllables.length > 1) return 1;

  for (const p of UNSTRESSED_PREFIXES) {
    // 前缀必须正好等于第一个音节，否则可能是词根的一部分（如 "gehen" 的 ge 不是前缀）
    if (lower.startsWith(p) && syllables[0].toLowerCase() === p && syllables.length > 1) {
      return 1;
    }
  }

  return 0;
}

/* ---------------- 词典查询 ---------------- */

function normKey(word) {
  return String(word || '').trim().toLowerCase().replace(/[.,!?;:"'’«»„“”()]/g, '');
}

/** 从本地词典取原始条目（{ ipa, stress, art } 任意子集），没有则 null */
export function lookupEntry(word) {
  const key = normKey(word);
  if (!key) return null;
  return pronunciationDict[key] || null;
}

/* ---------------- 对外主接口 ---------------- */

/**
 * 分析一个德语词，返回给 UI 用的完整发音信息。
 * @param {string} word 单词（可带冠词，如 "die Stadt"，会自动剥离）
 * @param {{art?: string}} [opts] 已知冠词（来自课程数据）
 */
export function analyze(word, opts = {}) {
  const raw = String(word || '').trim();
  const stripped = raw.replace(/^(der|die|das)\s+/i, '');
  const artFromText = raw !== stripped ? raw.slice(0, raw.length - stripped.length).trim().toLowerCase() : '';

  const entry = lookupEntry(stripped);
  const art = opts.art || artFromText || entry?.art || '';
  const syllables = syllabify(stripped);
  const stress = stressIndex(stripped, syllables);

  return {
    word: stripped,
    art,
    /** 朗读用文本：名词带冠词一起读 */
    spoken: art ? `${art} ${stripped}` : stripped,
    syllables,
    stress,
    /** "LEIP·zig" 形式，重音音节大写 */
    marked: syllables.map((s, i) => (i === stress ? s.toUpperCase() : s)).join('·'),
    ipa: entry?.ipa || null,
    known: !!entry,
  };
}

/** 名词朗读文本：把冠词和词一起读，性别是这个词声音记忆的一部分 */
export function spokenForm(word, art) {
  const w = String(word || '').trim();
  if (!w) return '';
  if (/^(der|die|das)\s+/i.test(w)) return w;      // 已经带冠词
  const a = art || lookupEntry(w)?.art || '';
  return a ? `${a} ${w}` : w;
}
