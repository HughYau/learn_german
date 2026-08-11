import test from 'node:test';
import assert from 'node:assert/strict';

class MemoryStorage {
  constructor() { this.data = new Map(); }
  get length() { return this.data.size; }
  key(index) { return [...this.data.keys()][index] ?? null; }
  getItem(key) { return this.data.has(String(key)) ? this.data.get(String(key)) : null; }
  setItem(key, value) { this.data.set(String(key), String(value)); }
  removeItem(key) { this.data.delete(String(key)); }
  clear() { this.data.clear(); }
}

globalThis.localStorage = new MemoryStorage();
globalThis.sessionStorage = new MemoryStorage();

const state = await import('../js/state.js');
const srs = await import('../js/srs.js');
const ai = await import('../js/ai.js');
const { allVocabCards } = await import('../data/course.js');

function resetStorage() {
  localStorage.clear();
  sessionStorage.clear();
}

test('resetAll 清除所有 dl.* 数据但保留无关键', { concurrency: false }, () => {
  resetStorage();
  localStorage.setItem('dl.listening', '{}');
  localStorage.setItem('dl.future', '{}');
  localStorage.setItem('other.app', 'keep');
  sessionStorage.setItem('dl.modelcheck.test', '{}');
  sessionStorage.setItem('other.session', 'keep');

  state.resetAll();

  assert.equal(localStorage.getItem('dl.listening'), null);
  assert.equal(localStorage.getItem('dl.future'), null);
  assert.equal(sessionStorage.getItem('dl.modelcheck.test'), null);
  assert.equal(localStorage.getItem('other.app'), 'keep');
  assert.equal(sessionStorage.getItem('other.session'), 'keep');
});

test('打开课程只解锁词卡，完成学习动作才计入学习日', { concurrency: false }, () => {
  resetStorage();
  state.touchLesson('u0l1');
  assert.equal(state.studyDays(), 0);
  assert.ok(srs.allStudyCards().length > 0);
  assert.ok(srs.allStudyCards().every(card => card.lessonId === 'u0l1'));

  state.recordScore('u0l1', 60);
  assert.equal(state.isLessonPassed('u0l1'), false);
  assert.equal(state.studyDays(), 1);

  state.recordScore('u0l1', 80);
  assert.equal(state.isLessonPassed('u0l1'), true);
  assert.equal(state.doneCount(['u0l1']), 1);
});
test('课程和语法收藏可以集中保存与取消', { concurrency: false }, () => {
  resetStorage();
  assert.equal(state.toggleFav('lessons', 'u0l1'), true);
  assert.equal(state.toggleFav('grammar', 'g1'), true);
  assert.deepEqual(state.getFavs(), { lessons: ['u0l1'], grammar: ['g1'] });
  assert.equal(state.isFav('lessons', 'u0l1'), true);
  assert.equal(state.toggleFav('lessons', 'u0l1'), false);
  assert.deepEqual(state.getFavs(), { lessons: [], grammar: ['g1'] });
});

test('公开站直连用户端点，本地站继续使用同源代理', { concurrency: false }, () => {
  assert.equal(ai.aiRequestUrl('/models', 'https://api.example.com/v1', 'hughyau.com'), 'https://api.example.com/v1/models');
  assert.equal(ai.aiRequestUrl('/models', 'https://api.example.com/v1', '127.0.0.1'), '/api/models');
  assert.throws(() => ai.aiRequestUrl('/models', 'http://api.example.com/v1', 'hughyau.com'), /unsafe-endpoint/);
});


test('已有 SRS 记录的旧卡在升级后不会重新锁定', { concurrency: false }, () => {
  resetStorage();
  const lockedCard = allVocabCards().find(card => card.lessonId !== 'u0l1');
  state.setSrsCard(lockedCard.id, { due: 0, interval: 1, ease: 2.5, reps: 1, lapses: 0 });
  assert.ok(srs.allStudyCards().some(card => card.id === lockedCard.id));
});

test('课程新词与扩展词包按 3:1 公平混排', { concurrency: false }, () => {
  resetStorage();
  const course = Array.from({ length: 8 }, (_, i) => ({ id: 'c' + i }));
  const packs = Array.from({ length: 4 }, (_, i) => ({ id: 'p' + i, packId: 'pack' }));
  const mixed = srs.mixFreshCards([...course, ...packs], 8);
  assert.deepEqual(mixed.slice(0, 4).map(card => card.id), ['c0', 'c1', 'c2', 'p0']);
  assert.equal(mixed.filter(card => card.packId).length, 2);
});

test('又忘了的卡片真正等待 10 分钟后再到期', { concurrency: false }, () => {
  resetStorage();
  const now = 1_700_000_000_000;
  const card = { id: 'test-card' };
  const graded = srs.gradeCard(card.id, 'again', now);
  assert.equal(graded.due, now + 10 * 60 * 1000);
  assert.deepEqual(srs.buildQueue([card], 10, now), []);
  assert.deepEqual(srs.buildQueue([card], 10, graded.due).map(item => item.id), [card.id]);
});

test('备份切换 AI 端点时不会沿用本机已有 Key', { concurrency: false }, () => {
  resetStorage();
  state.setSettings({
    provider: 'openai',
    baseUrl: 'https://api.openai.com/v1',
    apiKey: 'local-secret',
    model: 'test',
  });

  state.importData({
    version: 2,
    settings: {
      provider: 'custom',
      baseUrl: 'https://example.com/v1',
      model: 'other',
      rate: 1,
      voiceName: '',
    },
    progress: { lessons: {}, lastLesson: null, days: {} },
    srs: {},
  });

  assert.equal(state.getSettings().apiKey, '');
  assert.equal(state.getSettings().baseUrl, 'https://example.com/v1');
});

test('同一 AI 端点的无 Key 备份可以保留本机 Key', { concurrency: false }, () => {
  resetStorage();
  state.setSettings({
    provider: 'openai',
    baseUrl: 'https://api.openai.com/v1',
    apiKey: 'local-secret',
    model: 'test',
  });

  state.importData({
    version: 1,
    settings: {
      provider: 'openai',
      baseUrl: 'https://api.openai.com/v1',
      model: 'other',
      rate: 1,
      voiceName: '',
    },
    progress: { lessons: {}, lastLesson: null, days: {} },
    srs: {},
  });

  assert.equal(state.getSettings().apiKey, 'local-secret');
});
