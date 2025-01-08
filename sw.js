// sw.js

self.addEventListener('install', event => {
  console.log('Service worker installed');
  event.waitUntil(
    caches.open('my-pwa-cache')
      .then(cache => cache.addAll([
        '/', // 你的首頁 URL
        'index.html', // index.html 的 URL
        'main.css', // 你的樣式表文件URL
        // ... 其他必要的資源 URLs
      ]))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});

