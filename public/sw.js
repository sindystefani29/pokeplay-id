if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,c,i)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const t={uri:location.origin+s.slice(1)};return Promise.all(c.map((s=>{switch(s){case"exports":return n;case"module":return t;default:return e(s)}}))).then((e=>{const s=i(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-21b21c9a"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Transparent.webp",revision:"cda661faf5e60e281e5f56067e7909db"},{url:"/_next/static/chunks/135-90869b8b69b76b0d62c0.js",revision:"ysuqcAEMv9AF4x3Cb8G0n"},{url:"/_next/static/chunks/190-b2601f54a8765c70a662.js",revision:"ysuqcAEMv9AF4x3Cb8G0n"},{url:"/_next/static/chunks/525.457cfc4f9d354e5cb05a.js",revision:"ysuqcAEMv9AF4x3Cb8G0n"},{url:"/_next/static/chunks/638.0dc19a068f29302c4b22.js",revision:"ysuqcAEMv9AF4x3Cb8G0n"},{url:"/_next/static/chunks/765-42fa50706b53f4b68eba.js",revision:"ysuqcAEMv9AF4x3Cb8G0n"},{url:"/_next/static/chunks/825-409a00e6e5a6c52e44b1.js",revision:"ysuqcAEMv9AF4x3Cb8G0n"},{url:"/_next/static/chunks/955.3ed15c10bb04c0a5af25.js",revision:"ysuqcAEMv9AF4x3Cb8G0n"},{url:"/_next/static/chunks/958.3a04848de69629282554.js",revision:"ysuqcAEMv9AF4x3Cb8G0n"},{url:"/_next/static/chunks/framework-1eefeb1ba225146588ca.js",revision:"ysuqcAEMv9AF4x3Cb8G0n"},{url:"/_next/static/chunks/main-12696f30d10d9ebd6fc4.js",revision:"ysuqcAEMv9AF4x3Cb8G0n"},{url:"/_next/static/chunks/pages/_app-9021125f702ba76c9468.js",revision:"ysuqcAEMv9AF4x3Cb8G0n"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"ysuqcAEMv9AF4x3Cb8G0n"},{url:"/_next/static/chunks/pages/detail/%5Bname%5D-77f93338c3f9a5c6319f.js",revision:"ysuqcAEMv9AF4x3Cb8G0n"},{url:"/_next/static/chunks/pages/favorites-ede0e8423c8ea69eb38f.js",revision:"ysuqcAEMv9AF4x3Cb8G0n"},{url:"/_next/static/chunks/pages/index-86fd565dca8817cf8cda.js",revision:"ysuqcAEMv9AF4x3Cb8G0n"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"ysuqcAEMv9AF4x3Cb8G0n"},{url:"/_next/static/chunks/webpack-b370c6e5a92d4930679f.js",revision:"ysuqcAEMv9AF4x3Cb8G0n"},{url:"/_next/static/css/0cfdfd8a9a54cc1dcb01.css",revision:"ysuqcAEMv9AF4x3Cb8G0n"},{url:"/_next/static/css/1a1f438fa2135b5b6076.css",revision:"ysuqcAEMv9AF4x3Cb8G0n"},{url:"/_next/static/css/58e65785e0964177217c.css",revision:"ysuqcAEMv9AF4x3Cb8G0n"},{url:"/_next/static/ysuqcAEMv9AF4x3Cb8G0n/_buildManifest.js",revision:"ysuqcAEMv9AF4x3Cb8G0n"},{url:"/_next/static/ysuqcAEMv9AF4x3Cb8G0n/_ssgManifest.js",revision:"ysuqcAEMv9AF4x3Cb8G0n"},{url:"/favicon.ico",revision:"97e58f22324f097b283d4fbb62cffeab"},{url:"/icon-512.png",revision:"937d367b3c12e54ee1a5c0883c074699"},{url:"/icon.png",revision:"46f462a086e5c4e733bd1f9fc1f46073"},{url:"/image/logo-630.png",revision:"fd7fcbdffd94520674660d55852b0d52"},{url:"/image/logo.png",revision:"1d80306d998df6e11beafe1fe5398203"},{url:"/image/logo.webp",revision:"4a7605ab342f20eb4c550b6651e592b0"},{url:"/manifest.json",revision:"d54e409b1d6b5d3164318bb25a4a819e"},{url:"/no-image.webp",revision:"38b3dd232a68db6c49aca27527f87fce"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
