module.exports = {
  // 🔹 Where Vite outputs files
  globDirectory: 'build/',

  // 🔹 Files to precache (hashed assets from Vite)
  globPatterns: [
    '**/*.{js,css,html,ico,png,svg,webp,woff,woff2,json}'
  ],

  // 🔹 Your custom service worker source
  swSrc: 'src/sw.js',

  // 🔹 Final service worker output
  swDest: 'build/sw.js',

  // 🔹 Ignore analytics/tracking params
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],

  // 🔹 Prevent large files from bloating cache
  maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5 MB

  // 🔹 Useful for SPAs (React Router)
  navigateFallback: '/index.html',

  navigateFallbackDenylist: [
    /^\/api\//,     // don't fallback for API calls
    /\/admin/,      // example protected routes
  ],

  // 🔹 Clean old caches when SW updates
  cleanupOutdatedCaches: true,

  // 🔹 Do not generate sourcemap for SW
  sourcemap: false,
};
