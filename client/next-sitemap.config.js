const { execSync } = require('child_process');

/** Fonction pour récupérer la dernière date de modification d'un fichier */
const getLastModDate = (filePath) => {
  try {
    return execSync(`git log -1 --format=%cI ${filePath}`).toString().trim();
  } catch (error) {
    console.error(
      `Erreur lors de la récupération de la date de modification pour ${filePath}:`,
      error
    );
    return new Date().toISOString(); // Fallback à aujourd'hui si erreur
  }
};

/** Fonction pour récupérer les slugs et les dates de modification des articles */
const getPostSlugsAndDates = async () => {
  const res = await fetch(
    'https://blog.api.pierre-godino.com/wp-json/wp/v2/posts'
  );
  const posts = await res.json();
  return posts.map((post) => ({
    slug: post.slug,
    lastmod: post.modified, // Utiliser la date de modification de l'article
  }));
};

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.creation-sites-godino.fr',
  generateRobotsTxt: false,
  exclude: ['/calendar'],
  transform: async (config, path) => {
    // Ajouter la date de dernière modification pour les pages statiques
    if (path.startsWith('/')) {
      const filePath = `pages${path}.tsx`;
      let priority = config.priority;

      // Définir des priorités personnalisées pour certaines pages
      if (path === '/') {
        priority = 1.0; // Priorité maximale pour la page d'accueil
      } else if (path === '/offres') {
        priority = 0.9; // Priorité élevée pour la page des offres
      } else if (path === '/offres/creation-site-internet') {
        priority = 0.9; // Priorité élevée pour la page des offres
      } else if (path === '/contact') {
        priority = 0.8; // Priorité moyenne pour la page de contact
      } else if (path === '/faq-creation-site-internet') {
        priority = 0.9; // Priorité élevée pour la page FAQ
      }

      return {
        loc: `${config.siteUrl}${path}`, // Construire l'URL complète
        lastmod: getLastModDate(filePath),
        changefreq: config.changefreq,
        priority: priority,
      };
    }
    return {
      loc: path, // `path` est déjà une URL complète
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.lastmod,
    };
  },
  additionalPaths: async () => {
    const posts = await getPostSlugsAndDates();
    return posts.map((post) => ({
      loc: `https://www.creation-sites-godino.fr/blog/${post.slug}`,
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: post.lastmod, // Utiliser la date de modification de l'article
    }));
  },
};
