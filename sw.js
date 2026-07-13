const CACHE_NAME = 'alliance-journaliere-web-pwa-v59';
const ASSETS = [
  './',
  './index.html',
  './styles.css?v=59',
  './app.js?v=59',
  './assets/logos-de-visa-et-mastercard-102631953.webp',
  './assets/wave-logo.jpeg',
  './assets/orange-money-logo.png',
  './assets/moov-money-logo.png',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;

  if (request.method !== 'GET') {
    return;
  }

  const url = new URL(request.url);

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put('./', copy));
          return response;
        })
        .catch(() => caches.match('./index.html')),
    );
    return;
  }

  if (url.pathname.endsWith('/qr.svg')) {
    event.respondWith(fetch(request));
    return;
  }

  if (url.origin === self.location.origin) {
    // Cache d'abord pour la rapidite, mais rafraichissement en arriere-plan
    // pour que les mises a jour arrivent au plus tard au chargement suivant.
    event.respondWith(
      caches.match(request).then((cached) => {
        const refresh = fetch(request)
          .then((response) => {
            if (response.ok) {
              const copy = response.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
            }
            return response;
          })
          .catch(() => cached);

        return cached ?? refresh;
      }),
    );
  }
});
