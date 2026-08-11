// 入口 + hash 路由
import { el } from './ui.js';
import { counts, allStudyCards } from './srs.js';

import { render as renderHome } from './views/home.js';
import { render as renderUnits } from './views/units.js';
import { render as renderFavorites } from './views/favorites.js';
import { render as renderUnit } from './views/unit.js';
import { render as renderLesson } from './views/lesson.js';
import { render as renderCards } from './views/cards.js';
import { render as renderWortschatz } from './views/wortschatz.js';
import { render as renderChat } from './views/chat.js';
import { render as renderGrammar } from './views/grammar.js';
import { render as renderPhrases } from './views/phrases.js';
import { render as renderListening } from './views/listening.js';
import { render as renderReading } from './views/reading.js';
import { render as renderSettings } from './views/settings.js';
import { render as renderSearch } from './views/search.js';

const ROUTES = [
  { re: /^#\/$/, name: 'home', render: (c) => renderHome(c) },
  { re: /^#\/favorites$/, name: 'favorites', render: (c) => renderFavorites(c) },
  { re: /^#\/units$/, name: 'units', render: (c) => renderUnits(c) },
  { re: /^#\/unit\/([^/]+)$/, name: 'units', render: (c, m) => renderUnit(c, m[1]) },
  { re: /^#\/lesson\/([^/]+)$/, name: 'units', render: (c, m) => renderLesson(c, m[1]) },
  { re: /^#\/cards$/, name: 'cards', render: (c) => renderCards(c) },
  { re: /^#\/wortschatz$/, name: 'cards', render: (c) => renderWortschatz(c) },
  { re: /^#\/chat$/, name: 'chat', render: (c) => renderChat(c) },
  { re: /^#\/grammar(?:\/([^/]+))?$/, name: 'grammar', render: (c, m) => renderGrammar(c, m[1]) },
  { re: /^#\/phrases$/, name: 'phrases', render: (c) => renderPhrases(c) },
  { re: /^#\/listening$/, name: 'listening', render: (c) => renderListening(c) },
  { re: /^#\/reading$/, name: 'reading', render: (c) => renderReading(c) },
  { re: /^#\/search$/, name: 'search', render: (c) => renderSearch(c) },
  { re: /^#\/settings$/, name: 'settings', render: (c) => renderSettings(c) },
];

function updateNavDue() {
  const badge = document.getElementById('nav-due');
  if (!badge) return;
  try {
    const due = counts(allStudyCards()).due;
    if (due > 0) {
      badge.textContent = String(due);
      badge.hidden = false;
    } else {
      badge.hidden = true;
    }
  } catch (e) {
    badge.hidden = true;
  }
}

function highlightNav(routeName) {
  document.querySelectorAll('#nav a[data-route]').forEach(a => {
    a.classList.toggle('active', a.dataset.route === routeName);
  });
}

function router() {
  const hash = location.hash || '#/';
  const main = document.getElementById('main');
  main.innerHTML = '';
  const container = el('div', { class: 'view' });
  main.append(container);
  // 先归位到顶部，再渲染——这样如果某个视图需要深链定位到页面中部
  // （比如语法手册的 #/grammar/:id），它在 render() 里做的滚动才是最终生效的那次
  window.scrollTo(0, 0);

  let matched = false;
  for (const route of ROUTES) {
    const m = hash.match(route.re);
    if (m) {
      matched = true;
      highlightNav(route.name);
      try {
        route.render(container, m);
      } catch (e) {
        console.error(e);
        container.append(el('p', { class: 'empty-note' }, '页面加载出错：' + (e?.message || e)));
      }
      break;
    }
  }
  if (!matched) {
    highlightNav('home');
    container.append(el('p', { class: 'empty-note' }, '页面不存在'));
  }
  updateNavDue();
}

window.addEventListener('hashchange', router);
// 模块脚本在 DOM 解析完后执行，直接渲染即可——不等 load 事件（模块加载慢于 load 时会错过）
router();
