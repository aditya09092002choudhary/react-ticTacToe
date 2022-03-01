let cacheData = "appV1";
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        // "/static/js/main.chunk.js",
        // "/static/js/0.chunk.js",
        "/static/js/bundle.js",
        "/static/js/bundle.js.map",
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

this.addEventListener("fetch",(event)=>{
  event.respondWith(
    caches.match(event.request).then((resp)=>{
      if(resp){
        return resp;
      }
      return fetch(event.request);
    })
  )
})