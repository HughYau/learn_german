// Service Worker：让站点加到主屏后离线也能学。
// 策略：导航请求走网络、失败回退到缓存的 index.html；其余同源静态文件“先用缓存、后台更新”（stale-while-revalidate），
// 所以第一次打开后课程数据都在缓存里，第二次加载直接命中；改版后再刷新一次就能拿到新文件。
// /api/* 是 AI 陪练的代理，永远不缓存。改动 VERSION 会在激活时清掉旧缓存。
const VERSION = 'dailygerman-v1';
const SHELL = ['./', './index.html', './css/main.css', './js/app.js', './manifest.webmanifest'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(VERSION).then((cache) => cache.addAll(SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function isCacheable(request, url) {
  if (request.method !== 'GET') return false;
  if (url.pathname.includes('/api/')) return false;
  if (url.origin === self.location.origin) return true;
  // Google Fonts 的样式表和字体文件也顺手缓存，离线时排版才不会退化
  return url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  if (!isCacheable(request, url)) return;

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((res) => {
          const copy = res.clone();
          caches.open(VERSION).then((cache) => cache.put('./index.html', copy));
          return res;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  event.respondWith(
    caches.open(VERSION).then(async (cache) => {
      const cached = await cache.match(request);
      const network = fetch(request)
        .then((res) => {
          if (res && (res.ok || res.type === 'opaque')) cache.put(request, res.clone());
          return res;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
