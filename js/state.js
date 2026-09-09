// 本地状态：设置 / 学习进度 / SRS 卡片 / 收藏，全部存 localStorage
const K = {
  settings: 'dl.settings', progress: 'dl.progress', srs: 'dl.srs',
  favs: 'dl.favs', kann: 'dl.kann', packs: 'dl.packs',
  listening: 'dl.listening', reading: 'dl.reading',
};

const DEFAULT_SETTINGS = {
  baseUrl: 'https://chat-ai.academiccloud.de/v1',
  apiKey: '',
  model: 'qwen-3.5-397b-a17b',
  rate: 0.92,
  voiceName: '',
  provider: 'saia',
};

function isRecord(value) {
  return !!value && typeof value === 'object' && !Array.isArray(value);
}

function inferProvider(baseUrl) {
  const b = String(baseUrl || '');
  if (b.includes('academiccloud')) return 'saia';
  if (b.includes('deepseek')) return 'deepseek';
  return 'custom';
}

function normalizeSettings(value) {
  const input = isRecord(value) ? value : {};
  const baseUrl = typeof input.baseUrl === 'string' && input.baseUrl.trim()
    ? input.baseUrl.trim() : DEFAULT_SETTINGS.baseUrl;
  const rate = Number(input.rate);
  return {
    baseUrl,
    apiKey: typeof input.apiKey === 'string' ? input.apiKey : '',
    model: typeof input.model === 'string' ? input.model.trim() : DEFAULT_SETTINGS.model,
    rate: Number.isFinite(rate) ? Math.min(1.2, Math.max(0.5, rate)) : DEFAULT_SETTINGS.rate,
    voiceName: typeof input.voiceName === 'string' ? input.voiceName : '',
    provider: typeof input.provider === 'string' && input.provider.trim()
      ? input.provider.trim() : inferProvider(baseUrl),
  };
}

function normalizeProgress(value) {
  const input = isRecord(value) ? value : {};
  const lessons = isRecord(input.lessons)
    ? Object.fromEntries(Object.entries(input.lessons).filter(([, state]) => isRecord(state)))
    : {};
  const days = isRecord(input.days)
    ? Object.fromEntries(Object.entries(input.days).filter(([, count]) => Number.isFinite(Number(count)) && Number(count) >= 0))
    : {};
  return {
    lessons,
    lastLesson: typeof input.lastLesson === 'string' ? input.lastLesson : null,
    days,
  };
}

function normalizeObject(value) {
  return isRecord(value) ? value : {};
}

function normalizeSrs(value) {
  return Object.fromEntries(Object.entries(normalizeObject(value))
    .filter(([, state]) => isRecord(state)));
}

function stringList(value) {
  return Array.isArray(value)
    ? [...new Set(value.filter(item => typeof item === 'string'))]
    : [];
}

function load(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
  catch { return fallback; }
}
function save(key, val) { localStorage.setItem(key, JSON.stringify(val)); }

/* ---------- 设置 ---------- */
export function getSettings() {
  return normalizeSettings(load(K.settings, DEFAULT_SETTINGS));
}
export function setSettings(patch) {
  save(K.settings, normalizeSettings({ ...getSettings(), ...patch }));
}

/* ---------- 进度 ---------- */
function getProgress() {
  return normalizeProgress(load(K.progress, { lessons: {}, lastLesson: null, days: {} }));
}
function saveProgress(p) { save(K.progress, p); }

function localDateKey(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return y + '-' + m + '-' + d;
}

/** 只在真正完成一次学习动作时计入学习日；单纯打开页面不计数。 */
export function recordStudyActivity() {
  const p = getProgress();
  const key = localDateKey();
  p.days[key] = (Number(p.days[key]) || 0) + 1;
  saveProgress(p);
}

export function touchLesson(id) {
  const p = getProgress();
  p.lastLesson = id;
  p.lessons[id] = p.lessons[id] || {};
  p.lessons[id].visited = Date.now();
  saveProgress(p);
}
export function recordScore(id, pct) {
  const p = getProgress();
  p.lessons[id] = p.lessons[id] || {};
  const st = p.lessons[id];
  st.best = Math.max(st.best || 0, pct);
  st.lastScore = pct;
  st.attempts = (st.attempts || 0) + 1;
  st.practicedAt = Date.now();
  if (pct >= 70) {
    st.passed = true;
    st.done = true; // 保留旧字段，兼容已有视图与旧备份
    st.passedAt = st.passedAt || Date.now();
  }
  saveProgress(p);
  recordStudyActivity();
}
export function markDone(id) {
  const p = getProgress();
  p.lessons[id] = p.lessons[id] || {};
  // 学完页面内容不等于练习达标。旧的 done 字段只由 recordScore 写入。
  p.lessons[id].completed = true;
  p.lessons[id].completedAt = p.lessons[id].completedAt || Date.now();
  saveProgress(p);
  recordStudyActivity();
}
export function markTaskDone(id) {
  const p = getProgress();
  p.lessons[id] = p.lessons[id] || {};
  p.lessons[id].taskDone = true;
  p.lessons[id].taskDoneAt = p.lessons[id].taskDoneAt || Date.now();
  saveProgress(p);
  recordStudyActivity();
}
export function lessonState(id) { return getProgress().lessons[id] || {}; }
export function lastLesson() { return getProgress().lastLesson; }
export function studyDays() { return Object.keys(getProgress().days).length; }
export function todayActivityCount() { return Number(getProgress().days[localDateKey()]) || 0; }
export function isLessonPassed(id) {
  const st = lessonState(id);
  return !!(st.passed || (st.done && (st.best || 0) >= 70));
}
export function isLessonCompleted(id) {
  const st = lessonState(id);
  return !!(st.completed || st.done);
}
export function doneCount(ids) {
  return ids.filter(isLessonPassed).length;
}
export function getUnlockedLessonIds() {
  const p = getProgress();
  return new Set(Object.entries(p.lessons)
    .filter(([, st]) => st && (st.visited || st.completed || st.done || st.passed))
    .map(([id]) => id));
}

/* ---------- SRS 卡片状态 ---------- */
export function getSrs() { return normalizeSrs(load(K.srs, {})); }
export function setSrsCard(cardId, data) {
  const s = getSrs();
  s[cardId] = data;
  save(K.srs, s);
}

/* ---------- 听力 / 阅读掌握状态 ---------- */
function libraryKey(kind) {
  if (kind !== 'listening' && kind !== 'reading') throw new Error('未知学习内容类型');
  return K[kind];
}
export function getLibraryState(kind, id) {
  const all = load(libraryKey(kind), {});
  return id == null ? all : (all[id] || {});
}
export function recordLibraryScore(kind, id, pct, threshold = 70) {
  const key = libraryKey(kind);
  const all = load(key, {});
  const prev = all[id] || {};
  all[id] = {
    ...prev,
    best: Math.max(prev.best || 0, pct),
    lastScore: pct,
    attempts: (prev.attempts || 0) + 1,
    done: !!(prev.done || pct >= threshold),
    practicedAt: Date.now(),
  };
  save(key, all);
  recordStudyActivity();
  return all[id];
}

/* ---------- 收藏（课程 / 语法） ---------- */
export function getFavs() {
  const f = load(K.favs, { lessons: [], grammar: [] });
  return {
    lessons: Array.isArray(f.lessons) ? f.lessons : [],
    grammar: Array.isArray(f.grammar) ? f.grammar : [],
  };
}
function saveFavs(f) { save(K.favs, f); }

/** 切换收藏状态，返回切换后是否已收藏 */
export function toggleFav(type, id) {
  const f = getFavs();
  const list = f[type];
  if (!list) return false;
  const idx = list.indexOf(id);
  let nowFav;
  if (idx === -1) { list.push(id); nowFav = true; }
  else { list.splice(idx, 1); nowFav = false; }
  saveFavs(f);
  return nowFav;
}
export function isFav(type, id) {
  const f = getFavs();
  return !!(f[type] && f[type].includes(id));
}

/* ---------- 单元自评（Kann ich das？） ---------- */
export function getKannState(unitId) {
  const all = load(K.kann, {});
  return all[unitId] || {};
}
export function setKannState(unitId, idx, checked) {
  const all = load(K.kann, {});
  const unitState = { ...(all[unitId] || {}) };
  if (checked) unitState[idx] = true;
  else delete unitState[idx];
  all[unitId] = unitState;
  save(K.kann, all);
}

/* ---------- 词汇包：已启用的可选 SRS 补充词库 ---------- */
export function getEnabledPacks() {
  const p = load(K.packs, []);
  return Array.isArray(p) ? p : [];
}
/** 切换某个词汇包的启用状态，返回切换后是否已启用 */
export function togglePack(id) {
  const list = getEnabledPacks();
  const idx = list.indexOf(id);
  let nowOn;
  if (idx === -1) { list.push(id); nowOn = true; }
  else { list.splice(idx, 1); nowOn = false; }
  save(K.packs, list);
  return nowOn;
}

/* ---------- 数据备份：导出 / 导入 ---------- */
export function exportData({ includeKey = false } = {}) {
  const settings = { ...getSettings() };
  if (!includeKey) delete settings.apiKey;
  return {
    version: 2,
    app: 'dailygerman',
    exportedAt: new Date().toISOString(),
    settings,
    progress: getProgress(),
    srs: getSrs(),
    favs: getFavs(),
    kann: load(K.kann, {}),
    listening: load(K.listening, {}),
    reading: load(K.reading, {}),
    packs: getEnabledPacks(),
  };
}

export function importData(obj) {
  if (!isRecord(obj) || ![1, 2].includes(obj.version)
    || !isRecord(obj.settings) || !isRecord(obj.progress) || !isRecord(obj.srs)
    || (obj.app != null && obj.app !== 'dailygerman')) {
    throw new Error('文件内容不是有效的 DailyGerman 备份数据。');
  }

  const currentSettings = getSettings();
  const allowedSettingKeys = ['baseUrl', 'apiKey', 'model', 'rate', 'voiceName', 'provider'];
  const importedRawSettings = Object.fromEntries(allowedSettingKeys
    .filter(k => Object.hasOwn(obj.settings, k))
    .map(k => [k, obj.settings[k]]));
  const importedSettings = normalizeSettings(importedRawSettings);
  const baseUrl = importedSettings.baseUrl;
  let endpoint;
  try { endpoint = new URL(baseUrl); }
  catch { throw new Error('备份中的 AI 端点格式无效。'); }
  if (endpoint.protocol !== 'https:'
    && !(endpoint.protocol === 'http:' && ['localhost', '127.0.0.1'].includes(endpoint.hostname))) {
    throw new Error('备份中的 AI 端点不安全：仅允许 HTTPS 或本机 HTTP。');
  }
  // 未包含 Key 或明确为空时，只有端点和服务商都没改变，才保留本机 Key。
  // 这样导入不含凭据的备份不会意外清除同一端点的本机配置，也不会把 Key 发往陌生端点。
  if (!importedSettings.apiKey) {
    const sameEndpoint = importedSettings.baseUrl === currentSettings.baseUrl
      && importedSettings.provider === currentSettings.provider;
    importedSettings.apiKey = sameEndpoint ? (currentSettings.apiKey || '') : '';
  }

  const favsIn = normalizeObject(obj.favs);
  const favs = {
    lessons: stringList(favsIn.lessons),
    grammar: stringList(favsIn.grammar),
  };
  const kann = normalizeObject(obj.kann);

  save(K.settings, importedSettings);
  save(K.progress, normalizeProgress(obj.progress));
  save(K.srs, normalizeSrs(obj.srs));
  save(K.favs, favs);
  save(K.kann, kann);
  save(K.listening, normalizeObject(obj.listening));
  save(K.reading, normalizeObject(obj.reading));
  save(K.packs, stringList(obj.packs));
}

export function resetAll() {
  // 清除所有当前和未来的 DailyGerman 本地键，包括动态模型校验缓存。
  for (let i = localStorage.length - 1; i >= 0; i--) {
    const key = localStorage.key(i);
    if (key?.startsWith('dl.')) localStorage.removeItem(key);
  }
  if (typeof sessionStorage !== 'undefined') {
    for (let i = sessionStorage.length - 1; i >= 0; i--) {
      const key = sessionStorage.key(i);
      if (key?.startsWith('dl.')) sessionStorage.removeItem(key);
    }
  }
}
