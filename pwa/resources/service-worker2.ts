import * as Q from 'q';

// tick this to make the cache invalidate and update
const CACHE_VERSION = 1;
const CURRENT_CACHES = {
  'read-through': 'read-through-cache-v' + CACHE_VERSION
};


export class AppServiceWorker {
  constructor(public appWindow: Window, public appCaches: CacheStorage) {
    this.registerActivateEvents();
  }


  private registerActivateEvents(): void {

    // 
    



    this.appWindow.addEventListener('activate', (event: ExtendableEvent) => {
      
      // in dev mode, we clean all caches

      var deferred: Q.Deferred<any> = Q.defer<any>();

      let expectedCacheNames: string[] = Object.keys(CURRENT_CACHES).map((key) => {
        return CURRENT_CACHES[key];
      });

      // Property '[Symbol.toStringTag]' is missing in type 'Promise<any>'.
      // event.waitUntil(deferred.promise); 


      // we use standard Promises for now
      event.waitUntil(
        this.appCaches.keys().then((cacheNames: string[]) => {
          return Promise.all(
            cacheNames.map((cacheName: string) => {
              if (expectedCacheNames.indexOf(cacheName) === -1) {
                // If this cache name isn't present in the array of "expected" cache names, then delete it.
                console.log('Deleting out of date cache:', cacheName);
                return this.appCaches.delete(cacheName);
              }
            })
          );
        })
      );
    });
  }

  private registerFetchEvents():void {
    this.appWindow.addEventListener('fetch', (event: FetchEvent) => {
      
    }); 
  }
}



// This sample illustrates an aggressive approach to caching, in which every valid response is
// cached and every request is first checked against the cache.
// This may not be an appropriate approach if your web application makes requests for
// arbitrary URLs as part of its normal operation (e.g. a RSS client or a news aggregator),
// as the cache could end up containing large responses that might not end up ever being accessed.
// Other approaches, like selectively caching based on response headers or only caching
// responses served from a specific domain, might be more appropriate for those use cases.
self.addEventListener('fetch', (event: FetchEvent) => {

  event.respondWith(
    caches.open(CURRENT_CACHES['read-through']).then((cache) => {
      return cache.match(event.request).then((response) => {
        if (response) {
          // If there is an entry in the cache for event.request, then response will be defined
          // and we can just return it.

          return response;
        }

        // Otherwise, if there is no entry in the cache for event.request, response will be
        // undefined, and we need to fetch() the resource.
        console.log(' No response for %s found in cache. ' +
          'About to fetch from network...', event.request.url);

        // We call .clone() on the request since we might use it in the call to cache.put() later on.
        // Both fetch() and cache.put() "consume" the request, so we need to make a copy.
        // (see https://fetch.spec.whatwg.org/#dom-request-clone)
        return fetch(event.request.clone()).then((response) => {

          // Optional: add in extra conditions here, e.g. response.type == 'basic' to only cache
          // responses from the same domain. See https://fetch.spec.whatwg.org/#concept-response-type
          if (response.status < 400 && response.type === 'basic') {
            // We need to call .clone() on the response object to save a copy of it to the cache.
            // (https://fetch.spec.whatwg.org/#dom-request-clone)
            cache.put(event.request, response.clone());
          }

          // Return the original response object, which will be used to fulfill the resource request.
          return response;
        });
      }).catch((error) => {
        // This catch() will handle exceptions that arise from the match() or fetch() operations.
        // Note that a HTTP error response (e.g. 404) will NOT trigger an exception.
        // It will return a normal response object that has the appropriate error code set.
        console.error('  Read-through caching failed:', error);

        throw error;
      });
    })
  );

  this.appWindow.addEventListener('push', (event: PushEvent) => {
      //   event.
        // check https://gauntface.github.io/simple-push-demo/


        // Serverseitig vielleicht ein einfaches PHP skript auf dem Server
    }); 

});

