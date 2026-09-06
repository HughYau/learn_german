// Google Analytics 4 上报。
// gtag.js 只在 index.html 里、非本机域名时加载，加载成功会写 window.__gaId；本机开发时这里直接空转。
// 本站是 hash 路由（#/units → #/lesson/u1l1），GA 不会把它当成翻页，所以每次路由切换手动发一次 page_view，
// 并把 hash 折成虚拟路径（/learn_german/lesson/u1l1），报表里才能按页面区分。
export function trackPageView() {
  if (!window.__gaId || typeof window.gtag !== 'function') return;
  const hash = location.hash || '#/';
  const base = location.pathname.replace(/index\.html$/, '').replace(/\/?$/, '/');
  const virtualPath = base + hash.replace(/^#\/?/, '');
  try {
    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: location.origin + virtualPath,
    });
  } catch (e) {
    // 统计失败不影响学习
  }
}
