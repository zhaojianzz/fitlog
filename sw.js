// 联网时取最新版本并缓存，健身房没信号时用缓存
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(fetch(e.request).then(r => {
    const c = r.clone(); caches.open('fitlog').then(x => x.put(e.request, c)); return r;
  }).catch(() => caches.match(e.request)));
});
