// #/units 课程总览：按阶段分组、可折叠
import { el } from '../ui.js';
import { doneCount, getFavs, isLessonPassed } from '../state.js';
import { findUnit, findLesson, allLessons } from '../../data/course.js';
import { phases } from '../../data/phases.js';
import { grammarTopics } from '../../data/grammar.js';

function unitCard(unit) {
  const total = unit.lessons.length;
  const done = doneCount(unit.lessons.map(l => l.id));
  const pct = total ? Math.round((done / total) * 100) : 0;
  const shapeEl = el('div', { class: `unit-shape ${unit.shape}` });
  if (unit.shape === 'tri') shapeEl.style.color = `var(--${unit.color})`;
  else shapeEl.classList.add(`bgc-${unit.color}`);
  return el('a', { class: 'card unit-card', href: `#/unit/${unit.id}` },
    el('div', { class: 'unit-num' }, unit.num),
    shapeEl,
    el('h3', {}, unit.de),
    el('div', { class: 'zh' }, unit.zh),
    el('p', {}, unit.desc),
    el('div', { class: 'unit-meta' },
      el('div', { class: 'progress-pill' }, el('i', { class: `bgc-${unit.color}`, style: `width:${pct}%` })),
      el('span', {}, `${done}/${total} 课`)
    )
  );
}

// 收藏区块：收藏课程用 .lesson-row 样式列出，收藏语法用一排 chip 展示；都为空则不渲染
function favoritesBlock() {
  const favs = getFavs();
  const favLessons = favs.lessons.map(id => findLesson(id)).filter(Boolean);
  const favGrammar = favs.grammar.map(id => grammarTopics.find(t => t.id === id)).filter(Boolean);
  if (!favLessons.length && !favGrammar.length) return null;

  const wrap = el('div', { style: 'margin-bottom:28px' });
  wrap.append(el('h2', { class: 'sec' }, '我的收藏 ★'));

  if (favLessons.length) {
    const card = el('div', { class: 'card', style: 'margin-bottom:14px' });
    favLessons.forEach(({ lesson }) => {
      card.append(el('a', { class: 'lesson-row', href: `#/lesson/${lesson.id}` },
        el('div', { class: 'idx' }, '★'),
        el('div', {},
          el('h4', {}, lesson.title),
          el('div', { class: 'de' }, lesson.de)
        )
      ));
    });
    wrap.append(card);
  }

  if (favGrammar.length) {
    const chipRow = el('div', { class: 'fav-chip-row' });
    favGrammar.forEach(topic => {
      chipRow.append(el('a', { class: 'fav-chip', href: `#/grammar/${topic.id}` }, `${topic.num} ${topic.title}`));
    });
    wrap.append(chipRow);
  }

  return wrap;
}

// 当前所处阶段：包含下一节未完成课的阶段；若全部完成，落在最后一个阶段
function currentPhaseNum() {
  for (const { unit, lesson } of allLessons()) {
    if (!isLessonPassed(lesson.id)) {
      const p = phases.find(ph => ph.unitIds.includes(unit.id));
      if (p) return p.num;
      break;
    }
  }
  return phases[phases.length - 1].num;
}

export function render(container) {
  container.append(el('div', { class: 'kicker' }, 'LEKTIONEN'));
  container.append(el('h1', { class: 'page' }, '课程 ', el('span', { class: 'de' }, 'Lektionen')));
  container.append(el('p', { class: 'page-sub' }, '一次一课。当前阶段已为你展开，其余收起备查。'));

  const favBlock = favoritesBlock();
  if (favBlock) container.append(favBlock);

  const openNum = currentPhaseNum();

  phases.forEach(phase => {
    const phaseUnits = phase.unitIds.map(id => findUnit(id)).filter(Boolean);
    const total = phaseUnits.reduce((n, u) => n + u.lessons.length, 0);
    const done = doneCount(phaseUnits.flatMap(u => u.lessons.map(l => l.id)));
    const pct = total ? Math.round((done / total) * 100) : 0;

    const block = el('div', { class: 'phase-block' + (phase.num === openNum ? ' open' : '') });

    const head = el('button', { class: 'phase-head', type: 'button' },
      el('div', { class: 'phase-head-main' },
        el('span', { class: 'phase-num' }, `Phase ${phase.num}`),
        el('span', { class: 'phase-zh' }, phase.zh),
        el('span', { class: 'phase-level' }, phase.level)
      ),
      el('div', { class: 'phase-head-meta' },
        el('div', { class: 'progress-pill phase-bar' }, el('i', { class: 'bgc-red', style: `width:${pct}%` })),
        el('span', { class: 'phase-count' }, `${done}/${total} 课`),
        el('span', { class: 'phase-arrow' }, '▾')
      )
    );
    head.addEventListener('click', () => block.classList.toggle('open'));

    const grid = el('div', { class: 'unit-grid' });
    phaseUnits.forEach(u => grid.append(unitCard(u)));
    const body = el('div', { class: 'phase-body' }, grid);

    block.append(head, body);
    container.append(block);
  });
}
