// 入口 + hash 路由
import { el } from './ui.js';
import { counts, allStudyCards } from './srs.js';
import { trackPageView } from './analytics.js';
import { installPronunciationLookup } from './pronounce-popup.js';

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
  const badges = [document.getElementById('nav-due'), document.getElementById('tab-due')].filter(Boolean);
  let due = 0;
  try { due = counts(allStudyCards()).due; } catch (e) { due = 0; }
  badges.forEach(badge => {
    badge.textContent = String(due);
    badge.hidden = !(due > 0);
  });
}

// 手机端底部导航：首页 / 课程 / 复习 三个直达，其余栏目都归到“更多”
const TAB_OF_ROUTE = { home: 'home', units: 'units', cards: 'cards' };
const sheet = document.getElementById('more-sheet');
const moreBtn = document.getElementById('tab-more');
function toggleSheet(open) {
  if (!sheet) return;
  sheet.hidden = !open;
  document.body.classList.toggle('sheet-open', open);
  if (moreBtn) {
    moreBtn.setAttribute('aria-expanded', String(open));
    moreBtn.classList.toggle('open', open);
  }
}
if (sheet && moreBtn) {
  moreBtn.addEventListener('click', () => toggleSheet(sheet.hidden));
  sheet.querySelector('.sheet-backdrop').addEventListener('click', () => toggleSheet(false));
  sheet.addEventListener('click', e => { if (e.target.closest('a')) toggleSheet(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !sheet.hidden) toggleSheet(false); });
}

function highlightNav(routeName) {
  let label = '';
  document.querySelectorAll('#nav a[data-route]').forEach(a => {
    const on = a.dataset.route === routeName;
    a.classList.toggle('active', on);
    if (on) label = [...a.childNodes].filter(n => n.nodeType === Node.TEXT_NODE).map(n => n.textContent).join('').trim();
  });
  const tab = TAB_OF_ROUTE[routeName] || 'more';
  document.querySelectorAll('#tabbar [data-tab]').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
  document.querySelectorAll('#more-sheet a[data-route]').forEach(a => a.classList.toggle('active', a.dataset.route === routeName));
  document.title = label ? `DailyGerman · ${label}` : 'DailyGerman · 日常德语，一站就够了';
}

function router() {
  const hash = location.hash || '#/';
  toggleSheet(false);
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
  trackPageView();
}

window.addEventListener('hashchange', router);
// 长按/右键查发音：一次性挂在 document 上，用事件委托覆盖所有视图
installPronunciationLookup();

// 离线支持（sw.js）：本机开发不注册，改完代码刷新就要看到最新文件；带 ?sw=1 打开可强制启用来测试
const isLocalHost = ['localhost', '127.0.0.1'].includes(location.hostname);
if ('serviceWorker' in navigator) {
  if (!isLocalHost || new URLSearchParams(location.search).get('sw') === '1') {
    navigator.serviceWorker.register('./sw.js').catch(() => { /* 不支持或被拦截时静默降级为在线使用 */ });
  } else {
    const appScope = new URL('./', location.href).href;
    navigator.serviceWorker.getRegistrations()
      .then(rs => Promise.all(rs.filter(r => r.scope === appScope).map(r => r.unregister())))
      .catch(() => {});
  }
}
// 模块脚本在 DOM 解析完后执行，直接渲染即可——不等 load 事件（模块加载慢于 load 时会错过）
router();
