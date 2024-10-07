const CACHE_NAME = "static-cache-v3"; // Change this version when routes change

const FILES_TO_CACHE = [
  "/",
  "/about",
  "/manifest.json",
  "/icon/icon-48-48.png",
  "/icon/icon-72-72.png",
  "/icon/icon-192-192.png",
  "/icon/icon-256-256.png",
  "/icon/window-150.png",
  "/icon/window-200.png",
];

// Install event
self.addEventListener("install", (event) => {
  console.log("Service Worker: Installed");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Service Worker: Caching files");
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate event
self.addEventListener("activate", (event) => {
  console.log("Service Worker: Activated");
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log("Service Worker: Deleting old cache:", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event
self.addEventListener("fetch", (event) => {
  console.log("Service Worker: Fetching", event.request.url);
  event.respondWith(
    caches.match(event.request).then((response) => {
      return (
        response ||
        fetch(event.request).then((fetchResponse) => {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, fetchResponse.clone());
            return fetchResponse;
          });
        })
      );
    })
  );
});

// Message event for handling updates
self.addEventListener("message", (event) => {
  if (event.data === "SKIP_WAITING") {
    self.skipWaiting(); // Activate the new service worker immediately
  }
});
