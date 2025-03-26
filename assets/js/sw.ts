// HTML files: try the network first, then the cache.
// Other files: try the cache first, then the network.
// Both: cache a fresh version if possible.

const cacheName = 'files';

addEventListener('fetch', (ev: FetchEvent) => {
  const request = ev.request;
  if (request.method !== 'GET') {
    return;
  }
  ev.respondWith(async function() {
    const responseFromFetch = fetch(request);
    ev.waitUntil(async function() {
      const responseCopy = (await responseFromFetch).clone();
      const myCache = await caches.open(cacheName);
      await myCache.put(request, responseCopy);
    }());
    if (request.headers.get('Accept').includes('text/html')) {
      try {
        return await responseFromFetch;
      }
      catch (error) {
        return caches.match(request);
      }
    } else {
      const responseFromCache = await caches.match(request);
      return responseFromCache || responseFromFetch;
    }
  }());
});
