// #/unit/:id 单元详情
import { el } from '../ui.js';
import { lessonState, getKannState, setKannState, isLessonPassed, isLessonCompleted } from '../state.js';
import { findUnit } from '../../data/course.js';

function lessonRow(lesson, idx) {
  const st = lessonState(lesson.id);
  const passed = isLessonPassed(lesson.id);
  const completed = isLessonCompleted(lesson.id);
  const status = st.best
    ? (passed ? '最好 ' + st.best + '% · 已达标' : '最好 ' + st.best + '% · 待加强')
    : (completed ? '已学完 · 待练习' : '');
  return el('a', {
    class: 'lesson-row' + (passed ? ' done' : completed ? ' completed' : ''),
    href: '#/lesson/' + lesson.id,
  },
    el('div', { class: 'idx' }, passed ? '✓' : completed ? '•' : String(idx + 1)),
    el('div', {},
      el('h4', {}, lesson.title),
      el('div', { class: 'de' }, lesson.de)
    ),
    el('div', { class: 'score' }, status)
  );
}

function kannCard(unit) {
  const items = unit.kann;
  if (!items || !items.length) return null;

  const card = el('div', { class: 'card kann-card' });
  const badge = el('span', { class: 'kann-done-badge' }, '✓ 完成');
  const head = el('div', { class: 'kann-head' },
    el('h3', {}, 'Kann ich das？', el('span', { class: 'zh' }, '学完自测')),
    badge
  );
  const list = el('ul', { class: 'kann-list' });

  function refreshBadge() {
    const state = getKannState(unit.id);
    const allDone = items.every((_, i) => !!state[i]);
    badge.classList.toggle('show', allDone);
  }

  items.forEach((item, idx) => {
    const state = getKannState(unit.id);
    const checkbox = el('input', {
      type: 'checkbox',
      checked: !!state[idx],
      onchange: (e) => {
        setKannState(unit.id, idx, e.target.checked);
        refreshBadge();
      }
    });
    const li = el('li', { class: 'kann-item' },
      el('label', {},
        checkbox,
        el('span', { class: 'kann-text' },
          el('span', { class: 'de' }, item.de),
          el('span', { class: 'zh' }, item.zh)
        )
      )
    );
    list.append(li);
  });

  refreshBadge();
  card.append(head, list);
  return card;
}

export function render(container, id) {
  const unit = findUnit(id);

  container.append(el('div', { class: 'crumb' },
    el('a', { href: '#/' }, '首页'), ' / ',
    el('a', { href: '#/units' }, '课程')
  ));

  if (!unit) {
    container.append(el('p', { class: 'empty-note' }, '没有找到这个单元。'));
    return;
  }

  container.append(el('div', { class: 'kicker' }, `LEKTION ${unit.num}`));
  container.append(el('h1', { class: 'page' }, `${unit.zh} `, el('span', { class: 'de' }, unit.de)));
  container.append(el('p', { class: 'page-sub' }, unit.desc));

  const card = el('div', { class: 'card' });
  unit.lessons.forEach((lesson, idx) => card.append(lessonRow(lesson, idx)));
  container.append(card);

  const kc = kannCard(unit);
  if (kc) container.append(kc);
}
