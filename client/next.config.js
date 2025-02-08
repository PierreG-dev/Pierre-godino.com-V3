const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true', // Assurez-vous que la variable d'environnement est définie sur 'true' pour activer l'analyse
});

module.exports = withBundleAnalyzer({
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'localhost', port: '3000' },
      { protocol: 'https', hostname: 'creation-sites-godino.fr' },
      { protocol: 'https', hostname: 'blog.api.pierre-godino.com' },
    ],
  },
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['icon-library'],
  },
  trailingSlash: false,
  webpack: (config) => {
    config.resolve.alias['./main.css'] = false; // Désactivation de l'importation de main.css
    return config;
  },
});
