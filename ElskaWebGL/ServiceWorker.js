const cacheName = "JA Studios-Elska-2.0";
const contentToCache = [
    "Build/2d703df217655275297311aeb2282c13.loader.js",
    "Build/aac73bc3cd0b3fecfe4732138d64272d.framework.js.br",
    "Build/e0065531a10dc21ba64d9589d4539ab7.data.br",
    "Build/f7cc6ea92de4fe3736d510f729e60eb0.wasm.br",
    "TemplateData/style.css"

];

self.addEventListener('install', function (e) {
    console.log('[Service Worker] Install');
    
    e.waitUntil((async function () {
      const cache = await caches.open(cacheName);
      console.log('[Service Worker] Caching all: app shell and content');
      await cache.addAll(contentToCache);
    })());
});

self.addEventListener('fetch', function (e) {
    e.respondWith((async function () {
      let response = await caches.match(e.request);
      console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
      if (response) { return response; }

      response = await fetch(e.request);
      const cache = await caches.open(cacheName);
      console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
      cache.put(e.request, response.clone());
      return response;
    })());
});
