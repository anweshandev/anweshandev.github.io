// const OFFLINE_URL = '/offline.html';

self.addEventListener('install', (event) => {
  console.log("🛠", 'install', event);
event.waitUntil(
  caches.open('v1').then( cache => cache.addAll([]) )
);
});

self.addEventListener('activate', (event) => {
  console.log('👷', 'activate', event);
  return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  console.log("🏀", 'fetch', event)
  event.respondWith(
      caches.match(event.request)
      .then(function(response) {
          // Cache hit - return response
          if (response) {
              return response;
          }
          return fetch(event.request).then(
              (response) => {
                  return response;
              }
          ).catch(e => console.error(e));
      })
  );
});