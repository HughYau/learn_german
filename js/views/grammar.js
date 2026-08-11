// #/grammar 语法手册（可选深链 #/grammar/:topicId 直接展开对应条目）
import { el } from '../ui.js';
import { grammarTopics } from '../../data/grammar.js';
import { toggleFav, isFav } from '../state.js';

function favSpan(topicId) {
  const span = el('span', {
    class: 'fav-btn' + (isFav('grammar', topicId) ? ' active' : ''),
    role: 'button', tabindex: '0',
    title: isFav('grammar', topicId) ? '取消收藏' : '收藏本条语法',
  }, isFav('grammar', topicId) ? '★' : '☆');
  const doToggle = (e) => {
    e.stopPropagation();
    const nowFav = toggleFav('grammar', topicId);
    span.classList.toggle('active', nowFav);
    span.textContent = nowFav ? '★' : '☆';
    span.title = nowFav ? '取消收藏' : '收藏本条语法';
  };
  span.addEventListener('click', doToggle);
  span.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); doToggle(e); }
  });
  return span;
}

export function render(container, topicId) {
  container.append(el('div', { class: 'kicker' }, 'GRAMMATIK'));
  container.append(el('h1', { class: 'page' }, '语法手册 ', el('span', { class: 'de' }, 'Grammatik')));
  container.append(el('p', { class: 'page-sub' }, '需要用的时候来查——不必死记硬背，点开即用。'));

  const hasTarget = !!topicId && grammarTopics.some(t => t.id === topicId);
  let targetAcc = null;

  grammarTopics.forEach((topic, i) => {
    const isOpen = hasTarget ? topic.id === topicId : i === 0;
    const acc = el('div', { class: 'acc card' + (isOpen ? ' open' : '') });
    const head = el('button', { class: 'acc-head', type: 'button' },
      el('div', { class: 'num' }, String(topic.num)),
      el('h3', {}, topic.title),
      el('div', { class: 'de' }, topic.de),
      favSpan(topic.id),
      el('div', { class: 'arrow' }, '▾')
    );
    head.addEventListener('click', () => acc.classList.toggle('open'));
    const body = el('div', { class: 'acc-body' }, el('div', { class: 'grammar-box', html: topic.html }));
    acc.append(head, body);
    container.append(acc);
    if (hasTarget && topic.id === topicId) targetAcc = acc;
  });

  if (targetAcc) {
    // container 此时已经挂在真实 DOM 上（router 里先滚顶再 render），
    // scrollIntoView 会强制同步计算布局，不需要等下一帧；用 auto（跳转）
    // 而不是 smooth，避免依赖动画帧（后台标签页里动画帧可能被节流/暂停）
    targetAcc.scrollIntoView({ block: 'start' });
  }
}
