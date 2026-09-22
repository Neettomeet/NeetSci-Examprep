// Minimal offline app-shell cache for NEETEdge 2026.
// Caches index.html itself so the app still opens without a network connection.
// Question banks and diagrams are fetched fresh from the CDN each time they're
// needed and are intentionally NOT cached here, so students always get the
// latest question bank without needing an app update.
//
// Strategy: network-first. Always try to fetch the latest index.html/manifest
// over the network first, so edits to the app show up immediately on the next
// reload. Only falls back to the cached copy if there's no network at all.

const CACHE_NAME = 'neetedge2026-shell-v2';
const APP_SHELL = ['./', './index.html', './manifest.json'];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL))
    );
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
        )
    );
    self.clients.claim();
});

self.addEventListener('fetch', event => {
    // Only handle same-origin app-shell requests; let CDN/API requests pass through untouched.
    if (event.request.method !== 'GET' || new URL(event.request.url).origin !== self.location.origin) return;

    event.respondWith(
        fetch(event.request)
            .then(response => {
                if (response && response.ok) {
                    const copy = response.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
                }
                return response;
            })
            .catch(() => caches.match(event.request))
    );
});
