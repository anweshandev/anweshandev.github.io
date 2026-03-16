/* global self, importScripts, workbox */

importScripts('https://storage.googleapis.com/workbox-cdn/releases/7.0.0/workbox-sw.js');

if (workbox) {
  const { precaching, routing, strategies, expiration, cacheableResponse } = workbox;
  const isDevHost =
    self.location.hostname === 'localhost' ||
    self.location.hostname === '127.0.0.1' ||
    self.location.hostname.endsWith('.local');

  if (isDevHost) {
    self.addEventListener('install', () => {
      self.skipWaiting();
    });

    self.addEventListener('activate', (event) => {
      event.waitUntil(
        caches.keys().then((cacheNames) =>
          Promise.all(cacheNames.map((cacheName) => caches.delete(cacheName)))
        )
      );
      self.clients.claim();
    });

    // In dev/local environments do not register any caching routes.
  } else {

  // Do not precache JS/CSS/index.html
  const filteredManifest = (self.__WB_MANIFEST || []).filter((entry) => {
    const url = typeof entry === 'string' ? entry : entry.url;
    return !url.endsWith('.js') && !url.endsWith('.css') && !url.endsWith('/index.html') && url !== 'index.html';
  });

  precaching.precacheAndRoute(filteredManifest);
  precaching.cleanupOutdatedCaches();

  routing.registerRoute(
    ({ request }) => request.destination === 'font',
    new strategies.CacheFirst({
      cacheName: 'font-cache',
      plugins: [
        new cacheableResponse.CacheableResponsePlugin({ statuses: [0, 200] }),
        new expiration.ExpirationPlugin({
          maxEntries: 30,
          maxAgeSeconds: 60 * 60 * 24 * 365,
        }),
      ],
    })
  );

  routing.registerRoute(
    ({ url }) => url.pathname.startsWith('/api/'),
    new strategies.NetworkOnly()
  );

  routing.registerRoute(
    ({ request }) => request.mode === 'navigate',
    new strategies.NetworkOnly()
  );
  }
}
