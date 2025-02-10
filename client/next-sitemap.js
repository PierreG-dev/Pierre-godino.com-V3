const { execSync } = require('child_process');

/** Fonction pour récupérer la dernière date de modification d'un fichier */
const getLastModDate = (filePath) => {
  try {
    return execSync(`git log -1 --format=%cI ${filePath}`).toString().trim();
  } catch (error) {
    return new Date().toISOString(); // Fallback à aujourd'hui si erreur
  }
};

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.creation-sites-godino.fr',
  generateRobotsTxt: false,
  exclude: ['/calendar'],

  additionalPaths: async () => {
    return [
      {
        loc: '/',
        file: 'pages/index.tsx',
        changefreq: 'weekly',
        priority: 1.0,
      },
      {
        loc: '/offres/',
        file: 'pages/offres.tsx',
        changefreq: 'weekly',
        priority: 0.8,
      },
      {
        loc: '/offres/creation-site-internet/',
        file: 'pages/offres/creation-site-internet.tsx',
        changefreq: 'monthly',
        priority: 0.9,
      },
      {
        loc: '/realisations/',
        file: 'pages/realisations.tsx',
        changefreq: 'weekly',
        priority: 0.8,
      },
      {
        loc: '/contact/',
        file: 'pages/contact.tsx',
        changefreq: 'monthly',
        priority: 0.7,
      },
      {
        loc: '/a-propos/',
        file: 'pages/a-propos.tsx',
        changefreq: 'monthly',
        priority: 0.7,
      },
      {
        loc: '/faq-creation-site-internet/',
        file: 'pages/faq-creation-site-internet.tsx',
        changefreq: 'monthly',
        priority: 0.65,
      },
      {
        loc: '/a-propos/technologies/',
        file: 'pages/a-propos/technologies.tsx',
        changefreq: 'monthly',
        priority: 0.6,
      },
      {
        loc: '/a-propos/experiences/',
        file: 'pages/a-propos/experiences.tsx',
        changefreq: 'monthly',
        priority: 0.6,
      },
      {
        loc: '/a-propos/curiculum/',
        file: 'pages/a-propos/curiculum.tsx',
        changefreq: 'monthly',
        priority: 0.6,
      },
      {
        loc: '/legal/cgu/',
        file: 'pages/legal/cgu.tsx',
        changefreq: 'yearly',
        priority: 0.3,
      },
      {
        loc: '/legal/cgv/',
        file: 'pages/legal/cgv.tsx',
        changefreq: 'yearly',
        priority: 0.3,
      },
    ].map((page) => ({
      loc: `https://www.creation-sites-godino.fr${page.loc}`,
      lastmod: getLastModDate(page.file),
      changefreq: page.changefreq,
      priority: page.priority,
    }));
  },
};
