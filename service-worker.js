const CACHE_NAME = "ultimate-solution-v1";

// Use absolute paths that include the repository name
const urlsToCache = [
  "/ultimateSolution/",
  "/ultimateSolution/freeSolution.html"
  // Add other assets you want to cache offline (CSS, JS, fonts, icons)
  // Example: "/ultimateSolution/icon-192.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
