self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("diia-cache-v1").then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        "/styles.css",
        "/icons/icon-192.png",
        "/icons/icon-512.png",
        "/icons/icon-1024.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
