self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (url.protocol === 'custom-protocol:') {
    event.respondWith(
      new Response('Esta es una respuesta personalizada del Service Worker', {
        headers: { 'Content-Type': 'text/plain' }
      })
    );
  }
});
