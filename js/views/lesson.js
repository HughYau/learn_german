// #/lesson/:id 课程详情（核心视图）
import { el } from '../ui.js';
import { ttsBtn } from '../audio.js';
import { touchLesson, lessonState, markDone, markTaskDone, recordScore, toggleFav, isFav, isLessonPassed, isLessonCompleted } from '../state.js';
import { runExercises } from '../exercises.js';
import { findLesson, allLessons } from '../../data/course.js';

function vocabTable(section) {
  const rows = (section.items || []).map(item => {
    const wTd = el('td', { class: 'w' });
    if (item.art) wTd.append(el('span', { class: `art art-${item.art}` }, item.art));
    wTd.append(item.de);
    if (item.pl) wTd.append(el('span', { class: 'pl' }, `pl. ${item.pl}`));

    const mTd = el('td', { class: 'm' }, item.zh);
    if (item.en) mTd.append(el('span', { class: 'en' }, item.en));
    if (item.note) mTd.append(el('span', { class: 'note' }, item.note));

    const exTd = el('td', { class: 'ex' });
    if (item.ex) {
      exTd.append(item.ex, ' ', ttsBtn(item.ex));
      if (item.exZh) exTd.append(el('span', { class: 'zh' }, item.exZh));
    }

    const fullWord = item.art ? `${item.art} ${item.de}` : item.de;
    const aTd = el('td', { class: 'a' }, ttsBtn(fullWord), ttsBtn(fullWord, { slow: true }));

    return el('tr', {}, wTd, mTd, exTd, aTd);
  });
  return el('div', { class: 'vocab-table' }, el('table', {}, ...rows));
}

function dialogueCard(section) {
  const card = el('div', { class: 'card dialogue' });
  if (section.scene) card.append(el('div', { class: 'scene' }, section.scene));
  const speakerClass = {};
  let nextClass = 'a';
  (section.lines || []).forEach(line => {
    const speaker = line.sp || line.who;
    if (!speakerClass[speaker]) {
      speakerClass[speaker] = nextClass;
      nextClass = nextClass === 'a' ? 'b' : 'a';
    }
    const dline = el('div', { class: `dline ${speakerClass[speaker]}` },
      el('div', { class: 'who' }, speaker),
      el('div', { class: 'txt' },
        el('div', { class: 'de' }, line.de),
        el('div', { class: 'zh' }, line.zh)
      ),
      ttsBtn(line.de)
    );
    card.append(dline);
  });
  return card;
}

function renderSection(section) {
  const wrap = el('div', { class: 'lesson-sec' });
  if (section.title) wrap.append(el('h3', {}, section.title));
  if (section.sub) wrap.append(el('div', { class: 'sec-sub' }, section.sub));

  if (section.type === 'vocab') {
    wrap.append(vocabTable(section));
  } else if (section.type === 'dialogue') {
    wrap.append(dialogueCard(section));
  } else if (section.type === 'grammar') {
    wrap.append(el('div', { class: 'card grammar-box', html: section.html }));
  } else if (section.type === 'tip') {
    wrap.append(el('div', { class: 'tip-box', html: section.html }));
  } else {
    wrap.append(el('p', { class: 'empty-note' }, '未知内容类型：' + section.type));
  }
  return wrap;
}

export function render(container, id) {
  const found = findLesson(id);

  if (!found) {
    container.append(el('div', { class: 'crumb' }, el('a', { href: '#/' }, '首页'), ' / ', el('a', { href: '#/units' }, '课程')));
    container.append(el('p', { class: 'empty-note' }, '没有找到这一课。'));
    return;
  }

  const { unit, lesson } = found;
  touchLesson(lesson.id);
  const st = lessonState(lesson.id);

  container.append(el('div', { class: 'crumb' },
    el('a', { href: '#/' }, '首页'), ' / ',
    el('a', { href: `#/unit/${unit.id}` }, unit.zh), ' / ',
    '本课'
  ));

  container.append(el('div', { class: 'kicker' }, `LEKTION ${unit.num} · ${unit.zh}`));

  const favBtn = el('button', {
    class: 'fav-btn' + (isFav('lessons', lesson.id) ? ' active' : ''),
    type: 'button',
    title: isFav('lessons', lesson.id) ? '取消收藏' : '收藏本课',
  }, isFav('lessons', lesson.id) ? '★' : '☆');
  favBtn.addEventListener('click', () => {
    const nowFav = toggleFav('lessons', lesson.id);
    favBtn.classList.toggle('active', nowFav);
    favBtn.textContent = nowFav ? '★' : '☆';
    favBtn.title = nowFav ? '取消收藏' : '收藏本课';
  });
  container.append(el('h1', { class: 'page' }, `${lesson.title} `, el('span', { class: 'de' }, lesson.de), favBtn));

  if (lesson.intro) container.append(el('div', { class: 'intro' }, lesson.intro));

  (lesson.sections || []).forEach(section => container.append(renderSection(section)));

  // ---- exercises ----
  const exSec = el('div', { class: 'lesson-sec' });
  exSec.append(el('h3', {}, '练习 Übungen'));
  const exCard = el('div', { class: 'card' });
  const exercises = lesson.exercises || [];
  if (exercises.length) {
    const launch = el('div', { class: 'ex-launch' },
      el('div', {}, `${exercises.length} 道题 · 做对 70% 即完成本课`)
    );
    const startBtn = el('button', { class: 'btn', type: 'button' }, '开始练习');
    startBtn.addEventListener('click', () => {
      runExercises(exCard, exercises, { onFinish: pct => recordScore(lesson.id, pct) });
    });
    launch.append(startBtn);
    exCard.append(launch);
  } else {
    exCard.append(el('p', { class: 'empty-note' }, '本课暂无练习。'));
  }
  exSec.append(exCard);
  container.append(exSec);

  // ---- task ----
  if (lesson.task) {
    const taskDone = !!st.taskDone;
    const taskBtn = el('button', {
      class: 'btn ghost small', type: 'button', disabled: taskDone,
    }, taskDone ? '✓ 已完成生活任务' : '我完成了这个生活任务');
    taskBtn.addEventListener('click', () => {
      markTaskDone(lesson.id);
      taskBtn.textContent = '✓ 已完成生活任务';
      taskBtn.disabled = true;
    });
    container.append(el('div', { class: 'task-box' },
      el('div', { class: 'kicker' }, 'AUFGABE · 生活任务'),
      el('h4', {}, lesson.task.title),
      el('p', {}, lesson.task.desc),
      taskBtn
    ));
  }

  // ---- bottom nav ----
  const list = allLessons();
  const idx = list.findIndex(x => x.lesson.id === lesson.id);
  const prev = idx > 0 ? list[idx - 1] : null;
  const next = (idx >= 0 && idx < list.length - 1) ? list[idx + 1] : null;

  const navRow = el('div', { style: 'display:flex; align-items:center; justify-content:space-between; gap:12px; margin-top:34px' });
  navRow.append(prev
    ? el('a', { class: 'btn ghost', href: `#/lesson/${prev.lesson.id}` }, '← 上一课')
    : el('span', {}));

  const passed = isLessonPassed(lesson.id);
  const completed = isLessonCompleted(lesson.id);
  const doneBtn = el('button', { class: 'btn', type: 'button' },
    passed ? '✓ 练习已达标' : completed ? '✓ 已学完内容' : '标记已学完');
  if (completed) doneBtn.disabled = true;
  doneBtn.addEventListener('click', () => {
    markDone(lesson.id);
    doneBtn.textContent = '✓ 已学完内容';
    doneBtn.disabled = true;
  });
  navRow.append(doneBtn);

  navRow.append(next
    ? el('a', { class: 'btn ghost', href: `#/lesson/${next.lesson.id}` }, '下一课 →')
    : el('span', {}));

  container.append(navRow);
}
