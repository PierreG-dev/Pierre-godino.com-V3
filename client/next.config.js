const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'false', // Assurez-vous que la variable d'environnement est définie sur 'true' pour activer l'analyse
});

module.exports = withBundleAnalyzer({
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.creation-sites-godino.fr',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.blog.api.pierre-godino.com',
        pathname: '/**',
      },
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
