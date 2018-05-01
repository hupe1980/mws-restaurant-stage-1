/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "css/styles.css",
    "revision": "efd2632ba6f433ba26b4199a5ac42bec"
  },
  {
    "url": "img/1-320w.jpg",
    "revision": "d375b3909bb9a4bb69d71a558949deb0"
  },
  {
    "url": "img/1-480w.jpg",
    "revision": "49b06aab0bd5673bfac5f2d291835a75"
  },
  {
    "url": "img/1-800w.jpg",
    "revision": "d0fc5431b85a78a2b8d92df7edb2f2fe"
  },
  {
    "url": "img/10-320w.jpg",
    "revision": "61e9e3c1d6d6ffdfc1e9e40f6ddba6ce"
  },
  {
    "url": "img/10-480w.jpg",
    "revision": "b21eda2bad7edd3e5261caa087b2178b"
  },
  {
    "url": "img/10-800w.jpg",
    "revision": "751887e26d2dcef9532dbbbf44282ed1"
  },
  {
    "url": "img/2-320w.jpg",
    "revision": "5c87527661b9d3c98bc31aae12b9d727"
  },
  {
    "url": "img/2-480w.jpg",
    "revision": "df4a7c9a949085e4e5df5ed20f62f5f1"
  },
  {
    "url": "img/2-800w.jpg",
    "revision": "3d4239a7eb9d053b1fc52418e1ab5b00"
  },
  {
    "url": "img/3-320w.jpg",
    "revision": "44ce5ba69c8d34dd3850eac503b58405"
  },
  {
    "url": "img/3-480w.jpg",
    "revision": "3460c320082840b1ff2b0439a010a40c"
  },
  {
    "url": "img/3-800w.jpg",
    "revision": "a993aa19872cfe4571e81aa504801b77"
  },
  {
    "url": "img/4-320w.jpg",
    "revision": "d140e0e6a5afaec859d24d6ee22aea85"
  },
  {
    "url": "img/4-480w.jpg",
    "revision": "251ebbc1584c1a14e71c160f2953b774"
  },
  {
    "url": "img/4-800w.jpg",
    "revision": "8dd6e13cab2dc30d09e377b8ed6f7953"
  },
  {
    "url": "img/5-320w.jpg",
    "revision": "96dafca955ac2f07a7682234912f0867"
  },
  {
    "url": "img/5-480w.jpg",
    "revision": "cc98270234a3a1dcc4e008f9388539a3"
  },
  {
    "url": "img/5-800w.jpg",
    "revision": "2ec9e3b0667d57bcd11a300acfa74838"
  },
  {
    "url": "img/6-320w.jpg",
    "revision": "284d32ad100f60e2d75c219092422525"
  },
  {
    "url": "img/6-480w.jpg",
    "revision": "e138140337213b12aa051e61058dc834"
  },
  {
    "url": "img/6-800w.jpg",
    "revision": "f246f5d35933d0cbf7b398b6c843bb21"
  },
  {
    "url": "img/7-320w.jpg",
    "revision": "806476ede8aff6225873b3617ccd9977"
  },
  {
    "url": "img/7-480w.jpg",
    "revision": "036799aed3ff9e7b688822112b1f768e"
  },
  {
    "url": "img/7-800w.jpg",
    "revision": "de082c05dde73ae8363dcfe636b479d0"
  },
  {
    "url": "img/8-320w.jpg",
    "revision": "1f091e994e4dc58f779dd64864389025"
  },
  {
    "url": "img/8-480w.jpg",
    "revision": "678b1a91e9903b63489952bd9a15b6e8"
  },
  {
    "url": "img/8-800w.jpg",
    "revision": "2c7458a6b050884610f677799a80557e"
  },
  {
    "url": "img/9-320w.jpg",
    "revision": "6cf452b4b4f3b6afba7f7a1500a1f720"
  },
  {
    "url": "img/9-480w.jpg",
    "revision": "a9eccefaf7779999a78fe88354e2b2af"
  },
  {
    "url": "img/9-800w.jpg",
    "revision": "c078020b64da95b360e6ff3aa1b39c1c"
  },
  {
    "url": "index.html",
    "revision": "9db0d237ea4c5bb1b871e63dfb922034"
  },
  {
    "url": "js/dbhelper.js",
    "revision": "107a99787d61986f660eaac5905b2f2c"
  },
  {
    "url": "js/main.js",
    "revision": "7c7e9da2b5317a1e6c1e1036e486cd02"
  },
  {
    "url": "js/restaurant_info.js",
    "revision": "3b99469fe3d942c898b1034cee797bf0"
  },
  {
    "url": "restaurant.html",
    "revision": "c3a7f38864532f657b23473e039ef440"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\/restaurant.html/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/\/data\/restaurants.json/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/https:\/\/maps.googleapis.com/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/https:\/\/maps.gstatic.com\/mapfiles/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/, workbox.strategies.networkFirst(), 'GET');
