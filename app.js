if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(registration => console.log('Service Worker registrado', registration))
    .catch(err => console.error('Error en el registro del Service Worker:', err));
}
