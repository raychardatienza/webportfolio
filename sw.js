/* Raychard Atienza Portfolio Service Worker (PWA) */
const CACHE_NAME = 'raychard-portfolio-v2026';
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './case-studies/pdmis.html',
  './design-system.html',
  './assets/css/styles.css',
  './assets/js/main.js',
  './manifest.webmanifest',
  './site.webmanifest',
  './assets/fonts/inter-latin.woff2',
  './assets/fonts/space-grotesk-latin.woff2',
  './assets/fonts/jetbrains-mono-latin.woff2',
  './assets/img/avatar.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);

  // Stale-while-revalidate for local origin requests
  if (url.origin === location.origin) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((cachedResponse) => {
          const fetchPromise = fetch(event.request).then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          }).catch(() => cachedResponse);

          return cachedResponse || fetchPromise;
        });
      })
    );
  }
});

