export type Technology =
  | 'python'
  | 'js'
  | 'algo'
  | 'sql'
  | 'symfony'
  | 'html'
  | 'css'
  | 'js'
  | 'php'
  | 'bootstrap'
  | 'twig'
  | 'nosql'
  | 'react'
  | 'firebase'
  | 'nodejs'
  | 'jsx'
  | 'graphql'
  | 'apollo'
  | 'next'
  | 'materialui'
  | 'typescript'
  | 'c'
  | 'ocaml'
  | 'java'
  | 'swing'
  | 'prestashop'
  | 'tailwind';

export type Environment =
  | 'trello'
  | 'scrum'
  | 'git'
  | 'phpmyadmin'
  | 'atom'
  | 'composer'
  | 'wamp'
  | 'vscode'
  | 'adobexd'
  | 'lamp'
  | 'webstorm'
  | 'yarn'
  | 'npm'
  | 'bash'
  | 'netbeans'
  | 'intellijIdea';

interface Xp {
  period: 'University' | 'DC' | 'Freelance';
  title: string;
  description: JSX.Element | string;
  collaboratorsAmount?: number;
  technologies?: Technology[];
  environnements?: Environment[];
  date: string;
  link?: string;
}

const data: Xp[] = [
  {
    period: 'University',
    date: '09/2016',
    title: "Entrée à l'Université Toulouse III",
    description:
      "Entrée à l'Université Toulouse III Paul Sabatier, section informatique",
    technologies: [],
    environnements: [],
  },
  {
    period: 'University',
    date: '02/2017',
    title: 'Jeu de KONO sur CLI',
    description:
      "Création d'un jeu de Kono sur invité de commande dans le cadre d'un projet pour l'Université." +
      ' Possibilité de jouer seul contre une IA et de jouer à deux joueurs chacun son tour.',
    collaboratorsAmount: 1,
    technologies: ['python'],
    environnements: ['atom'],
    link: 'https://github.com/PierreG-dev/Kono',
  },
  {
    period: 'University',
    date: '12/2017',
    title: 'Encrypteur | décrypteur avec crack',
    description:
      "Création d'un logiciel sur CLI permettant d'encrypter n'importe quel fichier à l'aide de l'opérateur XOR." +
      "Le logiciel fournit une clé d'encryption lors de l'encryption, permettant à l'utilisateur de décrypter son fichier à n'importe quel moment si il possède la clé." +
      "Le logiciel possède aussi une fonctionnalité pour cracker le fichier crypté (l'obtenir sans l'avoir eu lors de l'encryption) et ainsi pouvoir le déchiffrer même sans la clé qui lui est associée." +
      'Le crack est réalisé via un brute force qui va utiliser un dictionnaire afin de décoder les mots présents dans le fichier encrypté et retenir la bonne clé en cas de forte probabilité de réussite (basé sur un score).' +
      'Projet réalisé en 2 semaines.',
    collaboratorsAmount: 1,
    technologies: ['c'],
    environnements: ['atom', 'bash'],
    link: 'https://github.com/PierreG-dev/XorCipher',
  },
  {
    period: 'University',
    date: '02/2018',
    title: 'Simulateur de blockchain',
    description:
      "Création d'un logiciel simulant une blockchain." +
      'Permet de générer aléatoirement des transactions entre différentes personnes tout en garantissant la fiabilité de ces données en recalculant les hashs de chaque block de transaction à partir des anciens,' +
      " garantissant ainsi qu'aucun bloc n'a pu être rajouté entre temps (évitant ainsi que de la monnaie ne soit créée)." +
      "possibilité de générer une blockchain dont la longueur est décidée par l'utilisateur, de vérifier son intégrité, de la sauvegarder au format JSON, et de rajouter des transactions manuellement, " +
      'et le tout dans une interface faite en SWING.' +
      'Projet réalisé sur trois semaines en deux versions: une en C et une en JAVA.',
    collaboratorsAmount: 2,
    technologies: ['c', 'java', 'swing'],
    environnements: ['netbeans', 'git'],
    link: 'https://github.com/PierreG-dev/WoredCoin',
  },
  {
    period: 'University',
    date: '12/2018',
    title: "Gestionnaire des capteurs de l'université",
    description:
      "Création d'un logiciel de gestion des capteurs (pluie, humidité, température etc...) présents dans l'Université." +
      "Le logiciel permet de gérer les capteurs en temps réel en visionnant les informations qu'ils procurent, un graphique montrant l'évolution des informations récoltées," +
      " ainsi qu'un historique montrant à une période donnée l'état de ces derniers avec leur évolution." +
      'Projet réalisé en 3 semaines.',
    collaboratorsAmount: 3,
    technologies: ['java', 'swing'],
    environnements: ['intellijIdea', 'git'],
    link: 'https://github.com/Trietch/projetS5',
  },
  {
    period: 'University',
    date: '03/2019',
    title: "Jeu ludique pour apprendre l'anglais",
    description:
      "Projet d'amélioration d'une plateforme en ligne, en y ajoutant un jeu pour apprendre l'anglais oral." +
      'Jeu ayant pour concept de réécrire un mot entendu avec un temps de plus en plus limité selon la difficultée choisie.' +
      'Méthodologie Scrum utilisée avec des daily scrums & et des réunions avec le client toutes les semaines.' +
      "Je considère que ce projet m'a fait trouver la branche de l'informatique dans laquelle je voulais me diriger: le WEB." +
      "Projet réalisé sur deux mois (durée du bureau d'étude).",
    collaboratorsAmount: 4,
    technologies: ['html', 'css', 'js', 'php', 'symfony', 'sql'],
    environnements: ['vscode', 'composer', 'git', 'phpmyadmin', 'wamp'],
    link: 'https://www.checkyoursmile.fr',
  },
  {
    period: 'University',
    date: '07/2019',
    title: "Obtention de ma licence d'informatique",
    description:
      "J'obtiens ma licence informatique après trois années à l'Université Paul Sabatier." +
      "Malheureusement ce sera ma dernière année à l'Université, étant donné qu'aucun cursus de développement WEB n'y était disponible pour la suite." +
      'Lancement de mon entreprise de création de sites internet dans la même période.',
    collaboratorsAmount: 0,
    technologies: [],
    environnements: [],
  },
  {
    period: 'DC',
    date: '09/2019',
    title: 'Entrée à Digital-campus Toulouse',
    description:
      "Entrée à l'école Digital Campus spécialisée dans les métiers du numérique (design, programmation..) " +
      'section développement WEB (condensé en 1 année).',
    collaboratorsAmount: 0,
    technologies: [],
    environnements: [],
  },
  {
    period: 'DC',
    date: '11/2019',
    title: 'Pierre-godino.com V2',
    description:
      "Refonte totale de mon site vitrine pour l'entreprise, site sans back-end, avec script PHP pour envoyer des mails." +
      'Design réalisé sur Adobe XD, puis intégré en HTML CSS pur.' +
      'Projet réalisé en 2 semaines sur mon temps libre.',
    collaboratorsAmount: 1,
    technologies: ['html', 'css', 'js', 'php'],
    environnements: ['vscode', 'git', 'trello', 'adobexd', 'bash'],
    link: 'https://github.com/PierreG-dev/pierre-godino.com_V2',
  },
  {
    period: 'DC',
    date: '01/2020',
    title: 'Site de E-Commerce ABNature',
    description:
      "Production d'un site de E-commerce sur Prestashop pour une jeune entreprise fabricant des produits de soins pour le corps à partir d'ingrédients d'origine naturels et bio." +
      "Réalisé en 1 semaine sur mon temps libre à l'aide d'un thème déjà fait auquel j'ai effectuée quelques modifications.",
    collaboratorsAmount: 1,
    technologies: ['php', 'prestashop', 'sql'],
    environnements: ['vscode', 'wamp', 'bash', 'phpmyadmin'],
  },
  {
    period: 'DC',
    date: '04/2020',
    title: 'Application WEB Speedy-Nanie',
    description:
      'Développeur pour une startup Toulousaine de mise en relation entre parents et nounous.' +
      "Une 1ère partie d'analyse du cahier des charges fait par le client, et modification de ce dernier pour coller avec les ressources allouées." +
      'Par la suite nous avons produits des maquettes sur Adobe XD et après le feu vert du client nous avons commencés à développer.' +
      "J'ai été en charge de créer tout le workflow, une grande partie du back-end, de la base de données ainsi que la sécurité de celle-ci et l'API REST." +
      "Le reste du temps j'ai fait la partie fron-end du site avec mon coéquipier en React pur." +
      "En résumé j'ai assumé les responsabilités d'un développeur full-stack sur 4 mois. " +
      'Nous avons coordonnés tout le projet avec une méthodologie Scrum avec des daily scrums, des sprints, ' +
      'des réunions régulières avec le client et des burning charts afin de gérer le temps de la manière la plus efficace possible.',
    collaboratorsAmount: 2,
    technologies: [
      'jsx',
      'js',
      'html',
      'css',
      'react',
      'firebase',
      'nosql',
      'nodejs',
    ],
    environnements: [
      'webstorm',
      'trello',
      'scrum',
      'npm',
      'adobexd',
      'git',
      'bash',
    ],
  },
  {
    period: 'DC',
    date: '07/2020',
    title: 'Obtention de mon titre Développeur WEB & Mobile',
    description:
      "Obtention de mon titre de Développeur WEB & Mobile après une année à Digital Campus Toulouse en présentant au jury l'application faite pour la startup Speedy-Nanie.",
    collaboratorsAmount: 0,
    technologies: [],
    environnements: [],
  },
  {
    period: 'Freelance',
    date: '08/2020',
    title: 'Site vitrine pour le garage BRINCAT',
    description:
      "Création d'un petit CMS en Symfony pour le compte d'un garage basé sur Castelsarrasin." +
      'Design produit en premiers lieux sur Adobe XD, puis je suis passé au développement.' +
      'Le site possède un back office pour gérer les voitures actuellement en vente dans la concession, ' +
      'ainsi que les messages laissés par les clients.' +
      'Site réalisé en 3 semaine avec un entretien sur quelques semaines de plus par rapport au SEO général du site.',
    collaboratorsAmount: 1,
    technologies: [
      'html',
      'css',
      'js',
      'symfony',
      'sql',
      'bootstrap',
      'twig',
      'php',
    ],
    environnements: [
      'webstorm',
      'trello',
      'git',
      'adobexd',
      'phpmyadmin',
      'composer',
      'bash',
      'lamp',
    ],
    link: 'https://www.sarlgaragebrincat.fr',
  },
  {
    period: 'Freelance',
    date: '12/2020',
    title: 'Gagnant hackathon 60-Dozer',
    description:
      "Je me suis inscrit au hackathon 60-dozer pour participer à l'initiative d'aider les commerces toulousains en ces temps de crise. " +
      "Le projet à réaliser en 3 jours consiste en un CMS E-commerce sur lequel des entreprises toulousaines peuvent s'inscrire et vendre leurs produits en click-and-collect." +
      'Ils peuvent orienter la récupération du produit par le client au commerce directement ou à un marché qui regroupe plusieurs points de collecte en un.' +
      "Pour le design, une équipe de designers de l'école Digital Campus nous l'a fourni (conformément aux règles)." +
      'En équipe avec un autre participant, nous avons produit un CMS quasi terminé en 42 heures de travail dispatchées sur 3 jours, et avons fini à la première place.' +
      'Nous nous sommes gérés avec un trello et des objectifs bien définis pour être efficaces au maximum.',
    collaboratorsAmount: 2,
    technologies: [
      'html',
      'css',
      'js',
      'nodejs',
      'react',
      'next',
      'apollo',
      'graphql',
      'jsx',
      'nosql',
      'materialui',
      'typescript',
      'firebase',
      'tailwind',
    ],
    environnements: ['webstorm', 'trello', 'git', 'bash', 'yarn', 'adobexd'],
    link: 'https://github.com/Hackathon-60-Dozer/Hackathon-2020',
  },
  {
    period: 'Freelance',
    date: '01/2020',
    title: 'Pierre-godino.com V3',
    description:
      "Deuxième refonte de mon site personnel, pour que cette fois-ci il corresponde autant à des clients de petites entreprises qu'à des recruteurs de grosses sociétés/startups." +
      "Plus recherché, plus moderne dans les technologies utilisées, ce site me correspond beaucoup plus que l'ancien que j'ai eu pendant près d'un an." +
      'Réalisé sur 3 semaines (seul évidemment).',
    technologies: [
      'html',
      'css',
      'js',
      'nodejs',
      'typescript',
      'tailwind',
      'jsx',
      'next',
      'react',
    ],
    environnements: ['webstorm', 'trello', 'git', 'adobexd', 'bash', 'yarn'],
    link: 'https://github.com/PierreG-dev/Pierre-godino.com-V3',
  },
];

export default data;
