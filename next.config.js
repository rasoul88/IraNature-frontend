const withPWA = require("next-pwa");
const cacheRuntimes = require("./cacheRuntimes");

module.exports = withPWA({
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    domains: ["iranature-r.herokuapp.com"],
  },

  pwa: {
    dest: "public",
    register: true,
    disable: process.env.NODE_ENV === "development",
    runtimeCaching: cacheRuntimes,
  },

  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
});
