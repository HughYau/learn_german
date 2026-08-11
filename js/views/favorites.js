// #/favorites 收藏夹：集中展示课程和语法收藏
import { el } from '../ui.js';
import { getFavs, toggleFav } from '../state.js';
import { findLesson } from '../../data/course.js';
import { grammarTopics } from '../../data/grammar.js';

function removeButton(type, id, container) {
  const btn = el('button', { class: 'favorite-remove', type: 'button', title: '取消收藏' }, '取消收藏');
  btn.addEventListener('click', () => {
    toggleFav(type, id);
    container.innerHTML = '';
    render(container);
  });
  return btn;
}

export function render(container) {
  const favs = getFavs();
  const lessons = favs.lessons.map(findLesson).filter(Boolean);
  const grammar = favs.grammar.map(id => grammarTopics.find(topic => topic.id === id)).filter(Boolean);

  container.append(el('div', { class: 'kicker' }, 'FAVORITEN'));
  container.append(el('h1', { class: 'page' }, '收藏夹 ', el('span', { class: 'de' }, 'Favoriten')));
  container.append(el('p', { class: 'page-sub' }, `已收藏 ${lessons.length} 节课程和 ${grammar.length} 条语法，所有收藏只保存在当前浏览器。`));

  if (!lessons.length && !grammar.length) {
    container.append(el('div', { class: 'card favorites-empty' },
      el('h3', {}, '收藏夹还是空的'),
      el('p', {}, '在课程标题或语法条目旁点击 ☆，以后就能从这里快速回来。'),
      el('div', { class: 'favorites-actions' },
        el('a', { class: 'btn', href: '#/units' }, '浏览课程'),
        el('a', { class: 'btn ghost', href: '#/grammar' }, '打开语法手册')
      )
    ));
    return;
  }

  if (lessons.length) {
    container.append(el('h2', { class: 'sec' }, '收藏课程'));
    const list = el('div', { class: 'card favorites-list' });
    lessons.forEach(({ unit, lesson }) => {
      list.append(el('div', { class: 'favorite-entry' },
        el('a', { class: 'favorite-main', href: `#/lesson/${lesson.id}` },
          el('span', { class: 'favorite-star' }, '★'),
          el('span', {}, el('b', {}, lesson.title), el('small', {}, `${lesson.de} · ${unit.zh}`))
        ),
        removeButton('lessons', lesson.id, container)
      ));
    });
    container.append(list);
  }

  if (grammar.length) {
    container.append(el('h2', { class: 'sec' }, '收藏语法'));
    const list = el('div', { class: 'card favorites-list' });
    grammar.forEach(topic => {
      list.append(el('div', { class: 'favorite-entry' },
        el('a', { class: 'favorite-main', href: `#/grammar/${topic.id}` },
          el('span', { class: 'favorite-star' }, '★'),
          el('span', {}, el('b', {}, `${topic.num} ${topic.title}`), el('small', {}, topic.de))
        ),
        removeButton('grammar', topic.id, container)
      ));
    });
    container.append(list);
  }
}
