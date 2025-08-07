const CACHE_NAME = 'expense-tracker-v1';
const urlsToCache = [
  '/',
  'index.html',
  'manifest.json',
  'icon.png'
];


// Install Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});


// Fetch with cache
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});