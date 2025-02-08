/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost',
        port: '3000',
      },
      {
        protocol: 'https',
        hostname: 'creation-sites-godino.fr',
      },
      {
        protocol: 'https',
        hostname: 'blog.api.pierre-godino.com',
      },
    ],
  },
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['icon-library'],
  },
  env: {},
  trailingSlash: false,

  // Configuration Webpack
  webpack: (config) => {
    config.resolve.alias['./main.css'] = false; // Désactivation de l'importation de main.css
    return config;
  },
};

// Ajout de l'analyse du bundle
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true', // TRUE pour faire un rapport à chaque build
});

module.exports = withBundleAnalyzer(nextConfig);
