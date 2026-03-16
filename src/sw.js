/* global self, importScripts, workbox */

importScripts('https://storage.googleapis.com/workbox-cdn/releases/7.0.0/workbox-sw.js');

if (workbox) {
  const { precaching, routing, strategies, expiration, cacheableResponse } = workbox;

  // Workbox will inject the manifest array right here
  precaching.precacheAndRoute(self.__WB_MANIFEST || []);
  precaching.cleanupOutdatedCaches();

  routing.registerRoute(
    ({ request }) =>
      request.destination === 'script' ||
      request.destination === 'style',
    new strategies.StaleWhileRevalidate({
      cacheName: 'static-resources',
      plugins: [new expiration.ExpirationPlugin({ maxEntries: 60 })],
    })
  );

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

  const navigationHandler =
    precaching.createHandlerBoundToURL('/index.html');

  routing.registerRoute(
    ({ request }) => request.mode === 'navigate',
    navigationHandler
  );
}
