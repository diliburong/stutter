importScripts('/static/js/workbox-sw.prod.v2.1.3.js');/**
 * @file service-worker.js with workbox api
 * @desc [example](https://workbox-samples.glitch.me/examples/workbox-sw/)
 * @author *__ author __*{% if: *__ email __* %}(*__ email __*){% /if %}
 */

/* globals WorkboxSW */

const workboxSW = new WorkboxSW({
    cacheId: 'lavas-cache',
    ignoreUrlParametersMatching: [/^utm_/],
    skipWaiting: true,
    clientsClaim: true
});

// Define precache injection point.
workboxSW.precache([
  {
    "url": "/index.html",
    "revision": "353543334f3cb3dc0f67c2f71923fd45"
  },
  {
    "url": "/static/css/index.c2f06e22.css"
  },
  {
    "url": "/static/fonts/element-icons.6f0a7632.ttf"
  },
  {
    "url": "/static/fonts/fontawesome-webfont.674f50d2.eot"
  },
  {
    "url": "/static/fonts/fontawesome-webfont.b06871f2.ttf"
  },
  {
    "url": "/static/fonts/fontawesome-webfont.fee66e71.woff"
  },
  {
    "url": "/static/img/fontawesome-webfont.912ec66d.svg"
  },
  {
    "url": "/static/js/0.a5052f83.js"
  },
  {
    "url": "/static/js/1.1e25bdff.js"
  },
  {
    "url": "/static/js/2.b5ef7fd5.js"
  },
  {
    "url": "/static/js/3.91a1ad6b.js"
  },
  {
    "url": "/static/js/index.7aa99eac.js"
  },
  {
    "url": "/static/js/manifest.37618e5e.js"
  },
  {
    "url": "/static/js/vue.14e614bd.js"
  },
  {
    "url": "/static/js/workbox-sw.prod.v2.1.3.js",
    "revision": "a9890beda9e5f17e4c68f42324217941"
  }
]);

/**
 * example runningCache with api
 */
workboxSW.router.registerNavigationRoute('/index.html');
// workboxSW.router.registerRoute(new RegExp('https://query\.yahooapis\.com/v1/public/yql'),
workboxSW.router.registerRoute(new RegExp('http://127.0.0.1:3000/api/'),
    workboxSW.strategies.networkFirst());
// workboxSW.router.registerRoute(/^https:\/\/lavas\.baidu\.com\/some\/api/,
//     workboxSW.strategies.networkFirst());


/**
 * example runningCache with resources from CDN
 * including maxAge, maxEntries
 * cacheableResponse is important for CDN
 */
// workboxSW.router.registerRoute(/^https:\/\/cdn\.baidu\.com/i,
//     workboxSW.strategies.cacheFirst({
//         cacheName: 'lavas-cache-images',
//         cacheExpiration: {
//             maxEntries: 100,
//             maxAgeSeconds: 7 * 24 * 60 * 60
//         },
//         cacheableResponse: {
//             statuses: [0, 200]
//         }
//     })
// );
