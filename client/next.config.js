/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [
      'localhost:3000',
      'creation-sites-godino.fr',
      'blog.api.pierre-godino.com',
    ],
  },
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['icon-library'],
  },
  async rewrites() {
    return [
      // {
      //   source: '/api/:path*',
      //   destination: 'https://pierre-godino.com/:path*',
      // },
    ];
  },
  env: {},
  trailingSlash: true,

  // Ajout de la configuration Webpack
  webpack: (config) => {
    config.resolve.alias['./main.css'] = false; // Désactivation de l'importation de main.css
    return config;
  },
};

// Ajout de l'analyse du bundle
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'false', // TRUE pour faire un rapport a chaque build
});

module.exports = withBundleAnalyzer(nextConfig);
