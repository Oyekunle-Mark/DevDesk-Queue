const cacheName = 'devDesk';
const filesToCache = ['/', '/index.html', '/bundle/bundle.js'];

// start the service worker and cache all the app's content
self.addEventListener('install', e => {
  e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(filesToCache)));
});

// serve cache content when offline
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request)),
  );
});
