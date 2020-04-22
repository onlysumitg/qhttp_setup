'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "88566fd192bd394b88b0784b76037b07",
"assets/FontManifest.json": "22db8d5801c6de03e34fa809fbbc23f9",
"assets/fonts/JetBrainsMono-Bold-Italic.ttf": "111bcb2a39ae6140cb21daa3ecd052d1",
"assets/fonts/JetBrainsMono-Bold.ttf": "d8af470e44be6c1d2d07dee84db355f6",
"assets/fonts/JetBrainsMono-Italic.ttf": "8d0942fbfa63674fa465f104ca33e043",
"assets/fonts/JetBrainsMono-Medium-Italic.ttf": "74e35b6e9113ed59ae251ead78276305",
"assets/fonts/JetBrainsMono-Medium.ttf": "902f1cf630c9adcb7ae5408ad36243b0",
"assets/fonts/JetBrainsMono-Regular.ttf": "e1caef645de334fee2f25834b0d03c28",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "449ab8dca78e58b1beccb7b92b016603",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_markdown/assets/logo.png": "67642a0b80f3d50277c44cde8f450e50",
"favicon.png": "880a73926b0639ffa7d85e941352ec82",
"icons/Icon-192.png": "c1d793bdf40f867cef84073f1aaf697a",
"icons/qhttp.png": "c1d793bdf40f867cef84073f1aaf697a",
"index.html": "af428aeac126eb2e31e9956cde178074",
"/": "af428aeac126eb2e31e9956cde178074",
"main.dart.js": "652c817b023e4179129cfb25db236ec4",
"manifest.json": "89b44a1744702891f2945cf014586127"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
