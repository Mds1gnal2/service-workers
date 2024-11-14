self.addEventListener('fetch', function(event) {
  const url = new URL(event.request.url);

  // Interceptar solo solicitudes a Shodan.
  if (url.hostname === 'www.shodan.io') {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request).then(function(fetchResponse) {
          // Almacena en caché la nueva respuesta.
          return caches.open('shodan-cache').then(function(cache) {
            cache.put(event.request, fetchResponse.clone());
            return fetchResponse;
          });
        });
      })
    );
  }
});
