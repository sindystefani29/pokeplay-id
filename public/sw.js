if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,a,t)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const i={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return n;case"module":return i;default:return e(s)}}))).then((e=>{const s=t(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-21b21c9a"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/XcGeDQ1CzXaQ0rD15dk-w/_buildManifest.js",revision:"XcGeDQ1CzXaQ0rD15dk-w"},{url:"/_next/static/XcGeDQ1CzXaQ0rD15dk-w/_ssgManifest.js",revision:"XcGeDQ1CzXaQ0rD15dk-w"},{url:"/_next/static/chunks/279-40c0b3fd190b820788e5.js",revision:"XcGeDQ1CzXaQ0rD15dk-w"},{url:"/_next/static/chunks/398.bb689f1586b2f8830458.js",revision:"XcGeDQ1CzXaQ0rD15dk-w"},{url:"/_next/static/chunks/508.596fbf94907ed64cda9a.js",revision:"XcGeDQ1CzXaQ0rD15dk-w"},{url:"/_next/static/chunks/955.3f068a60c4750c09e8a4.js",revision:"XcGeDQ1CzXaQ0rD15dk-w"},{url:"/_next/static/chunks/framework-1eefeb1ba225146588ca.js",revision:"XcGeDQ1CzXaQ0rD15dk-w"},{url:"/_next/static/chunks/main-12696f30d10d9ebd6fc4.js",revision:"XcGeDQ1CzXaQ0rD15dk-w"},{url:"/_next/static/chunks/pages/_app-b7f2b02418e33dcf6a46.js",revision:"XcGeDQ1CzXaQ0rD15dk-w"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"XcGeDQ1CzXaQ0rD15dk-w"},{url:"/_next/static/chunks/pages/favorites-eb18c5f8804e9f6dff73.js",revision:"XcGeDQ1CzXaQ0rD15dk-w"},{url:"/_next/static/chunks/pages/index-72200cdb0984b5984b46.js",revision:"XcGeDQ1CzXaQ0rD15dk-w"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"XcGeDQ1CzXaQ0rD15dk-w"},{url:"/_next/static/chunks/webpack-2f47ac387691a14f2a77.js",revision:"XcGeDQ1CzXaQ0rD15dk-w"},{url:"/_next/static/css/0cfdfd8a9a54cc1dcb01.css",revision:"XcGeDQ1CzXaQ0rD15dk-w"},{url:"/_next/static/css/cbf37667fdd6043ed58a.css",revision:"XcGeDQ1CzXaQ0rD15dk-w"},{url:"/favicon.ico",revision:"97e58f22324f097b283d4fbb62cffeab"},{url:"/image/logo.webp",revision:"4a7605ab342f20eb4c550b6651e592b0"},{url:"/manifest.json",revision:"6eac830fe456b514587cfafe3570aad9"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
