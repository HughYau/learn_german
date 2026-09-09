// 全量预缓存本版本的课程、代码和图标。发版时递增 VERSION，并同步 SHELL；
// npm run check:site 会检查清单完整性，防止漏掉间接导入的模块。
// 不强制 skipWaiting：所有旧页面关闭后再启用新版，避免学习途中混用代码。
const VERSION = 'dailygerman-v2';
const SHELL = [
  "./index.html",
  "./manifest.webmanifest",
  "./css/main.css",
  "./js/ai.js",
  "./js/analytics.js",
  "./js/app.js",
  "./js/audio.js",
  "./js/exercises.js",
  "./js/pronounce-popup.js",
  "./js/pronounce.js",
  "./js/speech.js",
  "./js/srs.js",
  "./js/state.js",
  "./js/ui.js",
  "./js/views/cards.js",
  "./js/views/chat.js",
  "./js/views/favorites.js",
  "./js/views/grammar.js",
  "./js/views/home.js",
  "./js/views/lesson.js",
  "./js/views/listening.js",
  "./js/views/phrases.js",
  "./js/views/reading.js",
  "./js/views/search.js",
  "./js/views/settings.js",
  "./js/views/unit.js",
  "./js/views/units.js",
  "./js/views/wortschatz.js",
  "./data/course.js",
  "./data/grammar-p2a.js",
  "./data/grammar-p2b.js",
  "./data/grammar-p3.js",
  "./data/grammar-p4.js",
  "./data/grammar-p5a.js",
  "./data/grammar-p5b.js",
  "./data/grammar-p6.js",
  "./data/grammar.js",
  "./data/listening.js",
  "./data/phases.js",
  "./data/phrases.js",
  "./data/pronunciation.js",
  "./data/reading.js",
  "./data/units/u0.js",
  "./data/units/u1.js",
  "./data/units/u10.js",
  "./data/units/u11.js",
  "./data/units/u12.js",
  "./data/units/u13.js",
  "./data/units/u14.js",
  "./data/units/u15.js",
  "./data/units/u16.js",
  "./data/units/u17.js",
  "./data/units/u18.js",
  "./data/units/u19.js",
  "./data/units/u2.js",
  "./data/units/u20.js",
  "./data/units/u21.js",
  "./data/units/u22.js",
  "./data/units/u23.js",
  "./data/units/u24.js",
  "./data/units/u25.js",
  "./data/units/u26.js",
  "./data/units/u27.js",
  "./data/units/u28.js",
  "./data/units/u29.js",
  "./data/units/u3.js",
  "./data/units/u30.js",
  "./data/units/u31.js",
  "./data/units/u32.js",
  "./data/units/u33.js",
  "./data/units/u4.js",
  "./data/units/u5.js",
  "./data/units/u6.js",
  "./data/units/u7.js",
  "./data/units/u8.js",
  "./data/units/u9.js",
  "./data/wortschatz-a2.js",
  "./data/wortschatz-b1.js",
  "./data/wortschatz.js",
  "./icons/icon-180.png",
  "./icons/icon-192.png",
  "./icons/icon-512-maskable.png",
  "./icons/icon-512.png"
];

// Cache Storage 为同源共享；按应用路径隔离，只清理本应用的版本。
const CACHE_PREFIX = `dailygerman:${self.registration.scope}:`;
const CACHE_NAME = CACHE_PREFIX + VERSION;
const INDEX_URL = new URL('./index.html', self.registration.scope).href;
const ASSET_URLS = new Set(SHELL.map(path => new URL(path, self.registration.scope).href));

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(
      [...ASSET_URLS].map(url => new Request(url, { cache: 'reload' }))
    ))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys
        .filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
        .map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

async function cachedAsset(key, request, allowOpaque = false) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(key);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response.ok || (allowOpaque && response.type === 'opaque')) {
      // 等待写入，避免 worker 提前终止；存储失败不影响在线响应。
      try { await cache.put(key, response.clone()); } catch { /* 存储空间不足 */ }
    }
    return response;
  } catch {
    return new Response('离线资源暂不可用，请联网后重新打开。', {
      status: 503,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  }
}

self.addEventListener('fetch', event => {
  const { request } = event;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.pathname.includes('/api/')) return;

  // 只拦截应用首页导航，不把 404、API 或同源其他站点当作首页缓存。
  if (request.mode === 'navigate') {
    const path = url.origin + url.pathname;
    if (path === self.registration.scope || path === INDEX_URL) {
      event.respondWith(cachedAsset(INDEX_URL, INDEX_URL));
    }
    return;
  }

  // 本版本资源固定使用预缓存，升级交给完整的新 worker，避免逐文件混版。
  const key = url.origin + url.pathname;
  if (ASSET_URLS.has(key)) {
    event.respondWith(cachedAsset(key, key));
  } else if (['fonts.googleapis.com', 'fonts.gstatic.com'].includes(url.hostname)) {
    // 字体按需缓存；首次离线没有远程字体时，CSS 使用系统字体回退。
    event.respondWith(cachedAsset(request, request, true));
  }
});
