const CACHE_NAME = 'bg3-tracker-v2'; // Mudamos para v2
const ASSETS_TO_CACHE = [
  './index.html',
  './style.css',
  './app.js',
  './guideData.js',
  './lootData.js',
  './buildsData.js'
];

// Instala o service worker e guarda os ficheiros em cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Interceta os pedidos e serve os ficheiros do cache (Offline Mode)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});