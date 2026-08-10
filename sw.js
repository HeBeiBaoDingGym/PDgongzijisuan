const CACHE_NAME = 'pd-salary-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './pd-icon-192.png',
  './pd-icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});