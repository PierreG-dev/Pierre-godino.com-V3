// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://pierre-godino.com/:path*',
      },
    ];
  },
  env: {},
  trailingSlash: true,
};
