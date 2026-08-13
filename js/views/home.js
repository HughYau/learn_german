// 首页
import { el } from '../ui.js';
import { ttsBtn } from '../audio.js';
import {
  lastLesson, studyDays, doneCount, lessonState,
  isLessonPassed, todayActivityCount,
} from '../state.js';
import { counts, allStudyCards } from '../srs.js';
import { allLessons, findLesson, allVocabCards } from '../../data/course.js';
import { phases } from '../../data/phases.js';

const WD = ['SONNTAG', 'MONTAG', 'DIENSTAG', 'MITTWOCH', 'DONNERSTAG', 'FREITAG', 'SAMSTAG'];
const ART_COLOR = { der: 'blue', die: 'red', das: 'green' };

function dayOfYear(d) {
  const start = new Date(d.getFullYear(), 0, 0);
  return Math.floor((d - start) / 86400000);
}

function learningTarget(lessons) {
  const lastId = lastLesson();
  if (lastId && !isLessonPassed(lastId)) {
    const last = findLesson(lastId);
    if (last) return last;
  }
  const next = lessons.find(({ lesson }) => !isLessonPassed(lesson.id));
  return next || (lessons.length ? lessons[lessons.length - 1] : null);
}

function planRow(icon, title, detail, href, done = false) {
  const attrs = { class: 'today-row' + (done ? ' done' : '') };
  if (href) attrs.href = href;
  const node = el(href ? 'a' : 'div', attrs,
    el('span', { class: 'today-icon' }, done ? '✓' : icon),
    el('span', { class: 'today-copy' },
      el('b', {}, title),
      el('small', {}, detail)
    ),
    href ? el('span', { class: 'today-arrow' }, '→') : null
  );
  return node;
}

export function render(container) {
  const now = new Date();
  const hour = now.getHours();
  const greet = (hour >= 5 && hour < 11) ? 'Guten Morgen'
    : (hour >= 11 && hour < 18) ? 'Guten Tag'
    : 'Guten Abend';

  container.append(el('div', { class: 'kicker' }, `${WD[now.getDay()]} · ${now.getMonth() + 1}月${now.getDate()}日`));
  container.append(el('h1', { class: 'page' }, `${greet},`));
  container.append(el('p', { class: 'page-sub' }, '先完成今天最重要的一步，再自由探索。'));

  const lessons = allLessons();
  const target = learningTarget(lessons);
  const studyCards = allStudyCards();
  const cardCounts = counts(studyCards);
  const activityCount = todayActivityCount();
  const weakLessons = lessons.filter(({ lesson }) => {
    const st = lessonState(lesson.id);
    return st.best > 0 && st.best < 70;
  });

  // ---- 今日计划 ----
  const today = el('section', { class: 'card today-card', 'aria-labelledby': 'today-title' });
  today.append(el('div', { class: 'today-head' },
    el('div', {},
      el('div', { class: 'kicker' }, 'HEUTE · 今日学习'),
      el('h2', { id: 'today-title' }, activityCount ? '继续保持节奏' : '从这一小步开始')
    ),
    el('span', { class: 'today-activity' }, activityCount ? `今日 ${activityCount} 次学习动作` : '尚未开始')
  ));
  today.append(planRow(
    '1',
    cardCounts.due ? `复习 ${cardCounts.due} 张到期词卡` : '到期词卡已清零',
    cardCounts.due ? '先处理快要遗忘的内容' : (cardCounts.fresh ? `还有 ${cardCounts.fresh} 张已解锁新词` : '学完一课会解锁对应词汇'),
    cardCounts.due || cardCounts.fresh ? '#/cards' : null,
    !cardCounts.due
  ));
  if (target) {
    today.append(planRow(
      '2',
      isLessonPassed(target.lesson.id) ? '课程主线已完成' : target.lesson.title,
      `${target.unit.zh} · ${target.lesson.de}`,
      isLessonPassed(target.lesson.id) ? '#/units' : `#/lesson/${target.lesson.id}`,
      isLessonPassed(target.lesson.id)
    ));
  }
  if (weakLessons.length) {
    const weak = weakLessons[0];
    const best = lessonState(weak.lesson.id).best;
    today.append(planRow('3', '加强一门薄弱课', `${weak.lesson.title} · 最好 ${best}%`, `#/lesson/${weak.lesson.id}`));
  } else {
    today.append(planRow('3', '完成一次真实生活任务', '在课时底部勾选，记录真正用过的德语', target ? `#/lesson/${target.lesson.id}` : '#/units'));
  }
  container.append(today);

  const stagger = el('div', { class: 'stagger' });
  container.append(stagger);

  // ---- 继续学习 + 每日一词 ----
  const heroRow = el('div', { class: 'hero-row' });
  stagger.append(heroRow);

  const continueCard = el('div', { class: 'card continue-card' });
  if (target) {
    const { unit, lesson } = target;
    continueCard.append(el('div', { class: `shape bgc-${unit.color}` }));
    continueCard.append(el('div', { class: 'kicker' }, isLessonPassed(lesson.id) ? '课程回顾' : '下一步'));
    continueCard.append(el('h3', {}, lesson.de));
    continueCard.append(el('p', {}, `${unit.zh} · ${lesson.title}`));
    continueCard.append(el('a', { class: 'btn', href: `#/lesson/${lesson.id}` }, isLessonPassed(lesson.id) ? '回顾 →' : '开始 →'));
  } else {
    continueCard.append(el('div', { class: 'kicker' }, '继续学习'));
    continueCard.append(el('p', {}, '课程还在准备中……'));
  }
  heroRow.append(continueCard);

  const dailyPool = studyCards.length ? studyCards : allVocabCards().slice(0, 20);
  const wortCard = el('div', { class: 'card wort-card' });
  if (dailyPool.length) {
    const card = dailyPool[dayOfYear(now) % dailyPool.length];
    wortCard.append(el('div', { class: 'kicker' }, 'WORT DES TAGES · 每日一词'));
    const artColor = ART_COLOR[card.art];
    const wLine = el('div', { class: 'w' });
    if (card.art) wLine.append(el('span', { style: `color:var(--${artColor})` }, card.art + ' '));
    // 名词连冠词一起读——之前每日一词只读光杆名词，听不出词性
    wLine.append(card.de + ' ', ttsBtn(card.de, { art: card.art }));
    wortCard.append(wLine, el('div', { class: 'm' }, card.zh));
    if (card.ex) {
      wortCard.append(el('div', { class: 'ex' }, card.ex));
      if (card.exZh) wortCard.append(el('div', { class: 'exzh' }, card.exZh));
    }
  }
  heroRow.append(wortCard);

  // ---- 可信统计 ----
  const statRow = el('div', { class: 'stat-row' });
  stagger.append(statRow);
  const learnedStat = el('div', { class: 'stat card' },
    el('b', {}, String(cardCounts.learned)), el('span', {}, '已进入复习'),
    el('div', { class: 'under bgc-blue' }));
  const dueStat = el('div', { class: 'stat card' },
    el('b', {}, String(cardCounts.due)), el('span', {}, '待复习'),
    el('div', { class: 'under bgc-yellow' }));
  if (cardCounts.due > 0) {
    dueStat.style.cursor = 'pointer';
    dueStat.addEventListener('click', () => { location.hash = '#/cards'; });
  }
  const daysStat = el('div', { class: 'stat card' },
    el('b', {}, String(studyDays())), el('span', {}, '有效学习天数'),
    el('div', { class: 'under bgc-green' }));
  statRow.append(learnedStat, dueStat, daysStat);

  // ---- 课程地图 ----
  const allIds = lessons.map(l => l.lesson.id);
  const totalLessons = allIds.length;
  const doneTotal = doneCount(allIds);
  const donePct = totalLessons ? Math.round((doneTotal / totalLessons) * 100) : 0;

  let currentPhase = phases[phases.length - 1];
  for (const { unit, lesson } of lessons) {
    if (!isLessonPassed(lesson.id)) {
      const phase = phases.find(ph => ph.unitIds.includes(unit.id));
      if (phase) currentPhase = phase;
      break;
    }
  }

  const mapCard = el('a', { class: 'card map-card', href: '#/units' });
  mapCard.append(el('div', { class: 'kicker' }, '课程地图 · LEKTIONEN'));
  mapCard.append(el('div', { class: 'map-progress-row' },
    el('div', { class: 'map-progress-num' }, el('b', {}, String(doneTotal)), ` / ${totalLessons} 课达标`),
    el('div', { class: 'map-phase-tag' }, `当前 Phase ${currentPhase.num} · ${currentPhase.level}`)
  ));
  mapCard.append(el('div', { class: 'progress-pill' }, el('i', { class: 'bgc-red', style: `width:${donePct}%` })));
  mapCard.append(el('div', { class: 'map-cta' }, '进入课程地图 →'));
  container.append(mapCard);
}
