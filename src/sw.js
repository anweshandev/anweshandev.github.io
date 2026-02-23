/* global self */
import { precacheAndRoute, cleanupOutdatedCaches, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate, NetworkFirst } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';

// --------------------------------------------------
// 🔹 Precache build assets
// --------------------------------------------------
precacheAndRoute(self.__WB_MANIFEST);
cleanupOutdatedCaches();

// --------------------------------------------------
// 📦 Cache JS & CSS
// --------------------------------------------------
registerRoute(
  ({ request }) =>
    request.destination === 'script' ||
    request.destination === 'style',
  new StaleWhileRevalidate({
    cacheName: 'static-resources',
    plugins: [new ExpirationPlugin({ maxEntries: 60 })],
  })
);

// --------------------------------------------------
// 🌐 Cache API calls (network first)
// --------------------------------------------------
registerRoute(
  ({ url }) => url.pathname.startsWith('/api/'),
  new NetworkFirst({
    cacheName: 'api-cache',
    networkTimeoutSeconds: 4,
    plugins: [
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 5 * 60,
      }),
    ],
  })
);

// --------------------------------------------------
// 📄 SPA navigation fallback
// --------------------------------------------------
const navigationHandler = createHandlerBoundToURL('/index.html');

registerRoute(
  ({ request }) => request.mode === 'navigate',
  navigationHandler
);
