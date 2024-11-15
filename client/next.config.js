// next.config.js
module.exports = {
  async rewrites() {
    return [
      // {
      //   source: '/api/:path*',
      //   destination: 'https://pierre-godino.com/:path*',
      // },
    ];
  },
  env: {},
  // trailingSlash: true,

  // Ajout de la configuration Webpack
  webpack: (config) => {
    config.resolve.alias['./main.css'] = false; // Désactivation de l'importation de main.css
    return config; // Retourne la configuration modifiée
  },
};
