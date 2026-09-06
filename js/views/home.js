// 首页：不做仪表盘、不打卡——打开就能学。一张“现在开始”大卡 + 每日一词 + 课程地图 + 随便看看
import { el } from '../ui.js';
import { ttsBtn } from '../audio.js';
import { lastLesson, doneCount, isLessonPassed } from '../state.js';
import { counts, allStudyCards } from '../srs.js';
import { allLessons, findLesson, allVocabCards } from '../../data/course.js';
import { phases } from '../../data/phases.js';

const WD = ['SONNTAG', 'MONTAG', 'DIENSTAG', 'MITTWOCH', 'DONNERSTAG', 'FREITAG', 'SAMSTAG'];
const ART_COLOR = { der: 'blue', die: 'red', das: 'green' };

const EXPLORE = [
  { href: '#/listening', zh: '听力', de: 'Hören', icon: 'nb-wave' },
  { href: '#/reading', zh: '阅读', de: 'Lesen', icon: 'nb-page' },
  { href: '#/phrases', zh: '短语', de: 'Phrasen', icon: 'nb-dot' },
  { href: '#/chat', zh: 'AI 陪练', de: 'Tandem', icon: 'nb-half' },
  { href: '#/grammar', zh: '语法', de: 'Grammatik', icon: 'nb-lines' },
];

function dayOfYear(d) {
  const start = new Date(d.getFullYear(), 0, 0);
  return Math.floor((d - start) / 86400000);
}

// 上次没学完的课优先；否则主线上第一节未达标的课；全都达标就停在最后一课
function learningTarget(lessons) {
  const lastId = lastLesson();
  if (lastId && !isLessonPassed(lastId)) {
    const last = findLesson(lastId);
    if (last) return last;
  }
  const next = lessons.find(({ lesson }) => !isLessonPassed(lesson.id));
  return next || (lessons.length ? lessons[lessons.length - 1] : null);
}

function startCard(target, cardCounts) {
  const card = el('section', { class: 'card start-card', 'aria-labelledby': 'start-title' });
  if (!target) {
    card.append(el('h2', { id: 'start-title' }, '课程还在准备中'));
    return card;
  }
  const { unit, lesson } = target;
  const passed = isLessonPassed(lesson.id);
  const resumed = lastLesson() === lesson.id && !passed;
  card.append(el('div', { class: `shape bgc-${unit.color}` }));
  card.append(el('div', { class: 'kicker' }, resumed ? '接着上次' : (passed ? '回顾' : '下一课')));
  card.append(el('h2', { id: 'start-title' }, lesson.de));
  card.append(el('p', { class: 'where' }, `${unit.zh} · ${lesson.title}`));

  const actions = el('div', { class: 'start-actions' });
  actions.append(el('a', { class: 'btn big', href: `#/lesson/${lesson.id}` }, resumed ? '继续 →' : (passed ? '回顾 →' : '开始 →')));
  if (cardCounts.due > 0) {
    actions.append(el('a', { class: 'btn ghost', href: '#/cards' }, `复习 ${cardCounts.due} 张`));
  } else if (cardCounts.fresh > 0) {
    actions.append(el('a', { class: 'btn ghost', href: '#/cards' }, '新词卡'));
  }
  card.append(actions);
  return card;
}

function wortCard(studyCards, now) {
  const pool = studyCards.length ? studyCards : allVocabCards().slice(0, 20);
  const card = el('div', { class: 'card wort-card' });
  if (!pool.length) return card;
  const w = pool[dayOfYear(now) % pool.length];
  card.append(el('div', { class: 'kicker' }, 'WORT DES TAGES · 每日一词'));
  const line = el('div', { class: 'w' });
  if (w.art) line.append(el('span', { style: `color:var(--${ART_COLOR[w.art]})` }, w.art + ' '));
  // 名词连冠词一起读，听得出词性
  line.append(w.de + ' ', ttsBtn(w.de, { art: w.art }));
  card.append(line, el('div', { class: 'm' }, w.zh));
  if (w.ex) {
    card.append(el('div', { class: 'ex' }, w.ex));
    if (w.exZh) card.append(el('div', { class: 'exzh' }, w.exZh));
  }
  return card;
}

function mapCard(lessons) {
  const allIds = lessons.map(l => l.lesson.id);
  const pct = allIds.length ? Math.round((doneCount(allIds) / allIds.length) * 100) : 0;
  let current = phases[phases.length - 1];
  for (const { unit, lesson } of lessons) {
    if (!isLessonPassed(lesson.id)) {
      const phase = phases.find(ph => ph.unitIds.includes(unit.id));
      if (phase) current = phase;
      break;
    }
  }
  const card = el('a', { class: 'card map-card', href: '#/units' });
  card.append(el('div', { class: 'kicker' }, '课程地图 · LEKTIONEN'));
  card.append(el('div', { class: 'map-phase' }, `Phase ${current.num} · ${current.zh}`));
  card.append(el('div', { class: 'map-level' }, current.level));
  card.append(el('div', { class: 'progress-pill' }, el('i', { class: 'bgc-red', style: `width:${pct}%` })));
  card.append(el('div', { class: 'map-cta' }, '课程地图 →'));
  return card;
}

export function render(container) {
  const now = new Date();
  const hour = now.getHours();
  const greet = (hour >= 5 && hour < 11) ? 'Guten Morgen'
    : (hour >= 11 && hour < 18) ? 'Guten Tag'
    : 'Guten Abend';

  container.append(el('div', { class: 'kicker' }, `${WD[now.getDay()]} · ${now.getMonth() + 1}月${now.getDate()}日`));
  container.append(el('h1', { class: 'page' }, `${greet},`));

  const lessons = allLessons();
  const studyCards = allStudyCards();
  const cardCounts = counts(studyCards);

  const stagger = el('div', { class: 'stagger' });
  container.append(stagger);

  stagger.append(startCard(learningTarget(lessons), cardCounts));

  const row = el('div', { class: 'hero-row' });
  row.append(wortCard(studyCards, now), mapCard(lessons));
  stagger.append(row);

  // ---- 随便看看 ----
  const explore = el('section', { class: 'explore' });
  explore.append(el('h2', { class: 'sec' }, '随便看看'));
  const grid = el('div', { class: 'explore-grid' });
  EXPLORE.forEach(x => {
    grid.append(el('a', { class: 'explore-chip', href: x.href },
      el('i', { class: `nb ${x.icon}` }),
      el('span', {}, x.zh),
      el('em', {}, x.de)
    ));
  });
  explore.append(grid);
  stagger.append(explore);
}
