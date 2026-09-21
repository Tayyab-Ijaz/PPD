// Offline support for the PPD-Adapt research prototype.
//
// Cache-first for every same-origin GET, with the whole app precached on install, so after
// the first successful load a full session works with no connection. The app is client-side
// only (its Content-Security-Policy forbids any outbound connection), so there is no API to
// go stale and cache-first is the right strategy, not a trade against freshness.
//
// Bump CACHE_VERSION whenever any precached file changes -- otherwise installed copies keep
// serving the old files. (webapp/parity/pwa_offline_test.mjs fails if a precached file is missing.)
const CACHE_VERSION = 'ppd-adapt-v15';
const PRECACHE_URLS = [
  './',
  './index.html',
  './escalation_content.js',
  './postpartum_module.js',
  './core_symptoms.js',
  './severity_bands.js',
  './manifest.json',
  './icon.svg',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/logo.png',
  './assets/logo1.png',
  './assets/hero.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    // ignoreSearch: the page links its icon as assets/logo.png?v=2
    caches.match(event.request, { ignoreSearch: true }).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        const copy = response.clone();
        caches.open(CACHE_VERSION).then((cache) => cache.put(event.request, copy));
        return response;
      }).catch(() => (event.request.mode === 'navigate' ? caches.match('./index.html') : undefined));
    })
  );
});
