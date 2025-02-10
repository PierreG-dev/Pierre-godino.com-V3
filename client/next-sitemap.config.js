const { execSync } = require('child_process');

/** Fonction pour récupérer la dernière date de modification d'un fichier */
const getLastModDate = (filePath) => {
  try {
    return execSync(`git log -1 --format=%cI ${filePath}`).toString().trim();
  } catch (error) {
    return new Date().toISOString(); // Fallback à aujourd'hui si erreur
  }
};

/** Fonction pour récupérer les slugs des articles */
const getPostSlugs = async () => {
  const res = await fetch(
    'https://blog.api.pierre-godino.com/wp-json/wp/v2/posts'
  );
  const posts = await res.json();
  return posts.map((post) => post.slug);
};

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.creation-sites-godino.fr',
  generateRobotsTxt: false,
  exclude: ['/calendar'],
};
