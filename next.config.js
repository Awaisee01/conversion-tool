// next.config.js
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

module.exports = withPWA({
   output: 'export',
  reactStrictMode: true,
  images: { unoptimized: true },
  experimental: { appDir: true }, // important for app router
});
