// 简化版 SM-2 间隔重复：again / good / easy 三档
import { getSrs, setSrsCard, getEnabledPacks, getUnlockedLessonIds, recordStudyActivity } from './state.js';
import { allVocabCards } from '../data/course.js';
import { wortschatzPacks, packCards } from '../data/wortschatz.js';

const DAY = 24 * 60 * 60 * 1000;

export function gradeCard(cardId, grade, now = Date.now()) {
  const s = getSrs();
  const c = s[cardId] || { interval: 0, ease: 2.5, reps: 0, lapses: 0 };
  if (grade === 'again') {
    c.interval = 0;
    c.ease = Math.max(1.3, c.ease - 0.2);
    c.lapses++;
    c.due = now + 10 * 60 * 1000;
  } else if (grade === 'good') {
    c.interval = c.interval === 0 ? 1 : Math.round(c.interval * c.ease * 10) / 10;
    c.due = now + c.interval * DAY;
  } else if (grade === 'easy') {
    c.ease = Math.min(3.2, c.ease + 0.1);
    c.interval = c.interval === 0 ? 3 : Math.round(c.interval * c.ease * 1.3 * 10) / 10;
    c.due = now + c.interval * DAY;
  } else {
    throw new Error('未知词卡评分');
  }
  c.reps++;
  c.lastGrade = grade;
  c.lastReviewed = now;
  setSrsCard(cardId, c);
  recordStudyActivity();
  return c;
}

/**
 * 已打开课程的核心词卡 + 所有已启用词汇包。
 * 旧数据中已有 SRS 记录的卡片始终保留，避免升级后把学过的卡重新锁住。
 */
export function allStudyCards() {
  const srs = getSrs();
  const unlocked = getUnlockedLessonIds();
  const courseCards = allVocabCards()
    .filter(card => unlocked.has(card.lessonId) || !!srs[card.id])
    .map(card => ({ ...card, source: 'course' }));

  const enabled = new Set(getEnabledPacks());
  const extraCards = wortschatzPacks
    .filter(pack => enabled.has(pack.id))
    .flatMap(pack => packCards(pack))
    .map(card => ({ ...card, source: 'pack' }));

  return [...courseCards, ...extraCards];
}

/** 课程新词与扩展包按 3:1 混排，任何一侧为空时由另一侧补足。 */
export function mixFreshCards(fresh, limit) {
  const course = fresh.filter(card => !card.packId);
  const packs = fresh.filter(card => !!card.packId);
  const out = [];
  let ci = 0, pi = 0;
  while (out.length < limit && (ci < course.length || pi < packs.length)) {
    for (let i = 0; i < 3 && out.length < limit && ci < course.length; i++) {
      out.push(course[ci++]);
    }
    if (out.length < limit && pi < packs.length) out.push(packs[pi++]);
  }
  return out;
}

// 组一次学习队列：所有到期复习 + 最多 newLimit 张已解锁新卡
export function buildQueue(allCards, newLimit = 10, now = Date.now()) {
  const s = getSrs();
  const due = [], fresh = [];
  for (const card of allCards) {
    const st = s[card.id];
    if (!st) fresh.push(card);
    else if (st.due <= now) due.push(card);
  }
  due.sort((a, b) => (s[a.id]?.due || 0) - (s[b.id]?.due || 0));
  return [...due, ...mixFreshCards(fresh, newLimit)];
}

export function counts(allCards, now = Date.now()) {
  const s = getSrs();
  let due = 0, fresh = 0, learned = 0;
  for (const card of allCards) {
    const st = s[card.id];
    if (!st) fresh++;
    else {
      learned++;
      if (st.due <= now) due++;
    }
  }
  return { due, fresh, learned, total: allCards.length };
}
