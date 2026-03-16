/* global self, importScripts, workbox */

importScripts('https://storage.googleapis.com/workbox-cdn/releases/7.0.0/workbox-sw.js');

if (workbox) {
  const { precaching, routing, strategies, expiration, cacheableResponse } = workbox;

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
    new strategies.NetworkFirst({
      cacheName: 'api-cache',
      networkTimeoutSeconds: 4,
      plugins: [
        new expiration.ExpirationPlugin({
          maxEntries: 50,
          maxAgeSeconds: 5 * 60,
        }),
      ],
    })
  );

  routing.registerRoute(
    ({ request }) => request.mode === 'navigate',
    new strategies.NetworkOnly()
  );
}
