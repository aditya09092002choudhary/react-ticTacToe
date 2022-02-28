let cacheData = "appV1";
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        "/static/js/main.chunk.js",
        "/static/js/0.chunk.js",
        "/static/js/bundle.js",
        "/main",
        "/manifest.json",
        "/logo192.png",
        "/img/exit.png",
        "/index.html",
        "/",
      ]);
    })
  );
});
