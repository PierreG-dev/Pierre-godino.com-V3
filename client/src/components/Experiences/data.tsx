export type Technology =
  | 'python'
  | 'js'
  | 'algo'
  | 'sql'
  | 'symfony'
  | 'html'
  | 'css'
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
  | 'tailwind'
  | 'express'
  | 'pug';

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
  | 'intellijIdea'
  | 'github';

interface Xp {
  period: 'University' | 'DC' | 'Freelance';
  title: string;
  description: JSX.Element | string;
  collaboratorsAmount?: number;
  technologies?: Technology[];
  environnements?: Environment[];
  date: string;
  icon: string;
  link?: string;
  actual?: boolean;
  success?: boolean;
}

const data: Xp[] = [
  {
    period: 'University',
    date: '09/2016',
    title: "Entrée à l'Université Toulouse III 🎓",
    icon: '/icons/ups.jpg',
    description: (
      <p>
        Entrée à l'Université Toulouse III Paul Sabatier, section informatique
      </p>
    ),
    technologies: [],
    environnements: [],
  },
  {
    period: 'University',
    date: '02/2017',
    title: 'Jeu de KONO sur CLI 🎮',
    icon: '/icons/ups.jpg',
    description: (
      <p>
        Création d'un jeu de Kono sur invité de commande dans le cadre d'un
        projet pour l'Université. <br /> <br />
        Possibilité de jouer seul contre une IA ou de jouer à deux joueurs
        chacun son tour.
      </p>
    ),
    collaboratorsAmount: 1,
    technologies: ['python'],
    environnements: ['atom'],
    link: 'https://github.com/PierreG-dev/Kono',
  },
  {
    period: 'University',
    date: '12/2017',
    title: 'Encrypteur | décrypteur avec crack 💾',
    icon: '/icons/ups.jpg',
    description: (
      <p>
        Création d'un logiciel sur CLI permettant d'encrypter n'importe quel
        fichier à l'aide de l'opérateur XOR. <br /> <br />
        Le logiciel fournit une clé d'encryptage qui offre à l'utilisateur la
        possibilité de décrypter son fichier à n'importe quel moment s'il la
        possède. <br /> <br />
        Le logiciel possède aussi une fonctionnalité de crack de fichiers
        cryptés et peut ainsi déchiffrer sans la clé associée.
        <br /> <br />
        Le crack est réalisé via une "brute force" qui va utiliser un
        dictionnaire afin de décoder les mots présents dans le fichier encrypté
        et retenir la bonne clé en cas de forte ressemblance (basé sur un
        score).
        <br /> <br />
        Projet réalisé en 2 semaines.
      </p>
    ),
    collaboratorsAmount: 1,
    technologies: ['c'],
    environnements: ['atom', 'bash'],
    link: 'https://github.com/PierreG-dev/XorCipher',
  },
  {
    period: 'University',
    date: '02/2018',
    title: 'Blockchain de transactions financières 💰',
    icon: '/icons/ups.jpg',
    description: (
      <p>
        Création d'un logiciel simulant une blockchain. <br /> <br />
        Permet de générer aléatoirement des transactions entre différentes
        personnes tout en garantissant la fiabilité de ces données en
        recalculant les hashs de chaque block. <br />
        Possibilité de générer une blockchain dont la longueur est décidée par
        l'utilisateur, de vérifier son intégrité, de la sauvegarder au format
        JSON, et de rajouter des transactions manuellement, <br />
        le tout dans une interface faite en SWING. <br /> <br />
        Projet réalisé sur 3 semaines en 2 versions: C et JAVA.
      </p>
    ),
    collaboratorsAmount: 2,
    technologies: ['c', 'java', 'swing'],
    environnements: ['netbeans', 'git'],
    link: 'https://github.com/PierreG-dev/WoredCoin',
  },
  {
    period: 'University',
    date: '12/2018',
    title: "Gestionnaire des capteurs de l'université 📡",
    icon: '/icons/ups.jpg',
    description: (
      <p>
        Création d'un logiciel de gestion des capteurs (pluie, humidité,
        température etc...) présents dans l'Université. <br /> <br />
        Le logiciel permet de gérer des capteurs météorologiques en temps réel
        grâce à un graphique montrant l'évolution des informations récoltées.
        <br />
        Un historique indique à une période donnée l'état de ces derniers.
        <br /> <br />
        Projet réalisé en 3 semaines.
      </p>
    ),
    collaboratorsAmount: 3,
    technologies: ['java', 'swing'],
    environnements: ['intellijIdea', 'git'],
    link: 'https://github.com/Trietch/projetS5',
  },
  {
    period: 'University',
    date: '03/2019',
    title: "Jeu ludique pour apprendre l'anglais 📚",
    icon: '/icons/checkyoursmile.png',
    description: (
      <p>
        Projet d'amélioration d'une plateforme en ligne, en y ajoutant un jeu
        pour apprendre l'anglais parlé. <br /> <br />
        Jeu ayant pour concept de réécrire un mot entendu dans un temps imparti
        (plusieurs difficultés disponibles). <br />
        Méthodologie Scrum utilisée avec des daily, et des réunions avec le
        client toutes les semaines. <br /> <br />
        Je considère que ce projet a été un tournant pour mes futurs choix
        professionnels.
        <br /> <br />
        Projet réalisé sur 2 mois (durée du bureau d'étude).
      </p>
    ),
    collaboratorsAmount: 4,
    technologies: ['html', 'css', 'js', 'php', 'symfony', 'sql'],
    environnements: ['vscode', 'composer', 'git', 'phpmyadmin', 'wamp'],
    link: 'https://www.checkyoursmile.fr',
  },
  {
    period: 'University',
    date: '07/2019',
    title: "Obtention de ma licence d'informatique 🎉",
    icon: '/icons/confettis.png',
    description: (
      <p>
        J'ai obtenu ma licence informatique après trois années à l'Université
        Paul Sabatier. <br /> <br />
        Malheureusement ce fût ma dernière année là-bas car aucun cursus de
        développement WEB n'était disponible à cette date.
        <br /> <br />
        Lancement de mon entreprise de création de sites internet dans la même
        période.
      </p>
    ),
    collaboratorsAmount: 0,
    technologies: [],
    environnements: [],
    success: true,
  },
  {
    period: 'DC',
    date: '09/2019',
    title: 'Entrée à Digital-campus Toulouse 🎓',
    icon: '/icons/dc.png',
    description: (
      <p>
        Entrée à l'école Digital Campus spécialisée dans les métiers du
        numérique (design, programmation...). <br /> <br />
        Section développement WEB (condensé en 1 année).
      </p>
    ),
    collaboratorsAmount: 0,
    technologies: [],
    environnements: [],
  },
  {
    period: 'DC',
    date: '11/2019',
    title: 'Pierre-godino.com V2 🚩',
    icon: '/res/LOGO.svg',
    description: (
      <p>
        Refonte totale de ma vitrine, site sans back-end, avec script PHP pour
        envoyer des mails. <br /> <br />
        Design réalisé sur Adobe XD, puis intégré en HTML CSS Vanilla. <br />
        Projet réalisé en 2 semaines sur mon temps libre.
      </p>
    ),
    collaboratorsAmount: 1,
    technologies: ['html', 'css', 'js', 'php'],
    environnements: ['vscode', 'git', 'trello', 'adobexd', 'bash'],
    link: 'https://github.com/PierreG-dev/pierre-godino.com_V2',
  },
  {
    period: 'Freelance',
    date: '01/2020',
    title: "Site d'E-Commerce ABNature 🧪",
    icon: '/icons/abnature.svg',
    description: (
      <p>
        Production d'un site de E-commerce sur Prestashop pour une jeune
        entreprise fabricant des produits de soins pour le corps à partir
        d'ingrédients d'origine naturelle et bio. <br /> <br />
        Réalisé en 1 semaine sur mon temps libre à l'aide d'un thème auquel j'ai
        effectué quelques modifications.
      </p>
    ),
    collaboratorsAmount: 1,
    technologies: ['php', 'prestashop', 'sql'],
    environnements: ['vscode', 'wamp', 'bash', 'phpmyadmin'],
  },
  {
    period: 'Freelance',
    date: '04/2020',
    title: 'Application WEB Speedy-Nanie 🧸',
    icon: 'https://www.speedynanie.fr/wp-content/uploads/2020/09/Plan-de-travail-1.svg',
    description: (
      <p>
        Développement d'une application pour une start-up Toulousaine, qui met
        en relation parents et babysitters. <br /> <br />
        Analyse du cahier des charges avec le client, et modification de ce
        dernier afin d'optimiser les coûts.
        <br /> <br />
        Maquettes produites sur Adobe XD et développement après validation du
        client. <br /> <br />
        Chargé de la création du workflow, d'une grande partie du back-end
        (REST), de la base de données ainsi que de sa sécurité, en parallèle,
        j'ai grandement contribué au développement du front-end.
        <br />
        <br />
        En résumé j'ai assumé les responsabilités d'un développeur full-stack
        sur 4 mois. <br /> <br />
        Nous avons coordonnés tout le projet avec une méthodologie Scrum, donc
        des daily, des sprints et des réunions régulières avec le client.
      </p>
    ),
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
    title: 'Obtention de mon titre Développeur WEB & Mobile 🎉',
    icon: '/icons/confettis.png',
    description: (
      <p>
        Obtention de mon titre de Développeur WEB & Mobile après une année à
        Digital Campus Toulouse. <br /> <br /> Présentation au jury de la
        plateforme Speedy-Nanie.
      </p>
    ),
    collaboratorsAmount: 0,
    technologies: [],
    environnements: [],
    success: true,
  },
  {
    period: 'Freelance',
    date: '08/2020',
    title: 'Site vitrine pour le garage BRINCAT 👓',
    icon: '/icons/garagebrincat.webp',
    description: (
      <p>
        Création d'un CMS en Symfony pour le compte d'un garage basé sur
        Castelsarrasin. <br /> <br />
        Le design a été produit sur Adobe XD. <br /> <br />
        Le site possède un back office pour gérer les voitures en vente dans la
        concession, <br />
        ainsi que les messages laissés par les clients. <br /> <br />
        Plateforme réalisée en 3 semaines avec un entretien long terme.
      </p>
    ),
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
    title: '1ère place hackathon 60-Dozer 🥇',
    icon: '/icons/dozer.png',
    description: (
      <p>
        Afin de soutenir les commerces toulousains en cette période de crise,
        j'ai participé au Hackathon de l'association Dozer. <br /> <br />
        Le but étant de créer un CMS d'E-Commerce permettant aux entreprises
        toulousaines de s'inscrire et d'y vendre leurs produits en
        click-and-collect. <br />
        <br />
        Une équipe de designers de l'école Digital Campus nous a fournie une
        maquette, ainsi, nous avons produit un CMS en 42 heures de travail.
        <br /> <br />
        Nous avons utilisé la méthode agile et des objectifs bien définis afin
        d'être le plus efficace possible.
      </p>
    ),
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
    success: true,
  },
  {
    period: 'Freelance',
    date: '01/2020',
    title: 'Pierre-godino.com V3 🚀',
    icon: '/res/LOGO.svg',
    description: (
      <p>
        Deuxième refonte de mon site personnel, afin qu'il corresponde autant à
        des clients de petites entreprises qu'à des recruteurs de grosses
        sociétés/startups. <br /> <br />
        Plus recherché, plus moderne dans les technologies utilisées, ce site me
        correspond beaucoup plus que l'ancien que j'ai eu pendant près d'un an.{' '}
        <br />
        Réalisé sur 3 semaines.
      </p>
    ),
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
    actual: true,
  },
  {
    period: 'Freelance',
    date: '02/2020',
    title: '1ère place Ultra Dev Challenge Février 2021 🥇',
    icon: '/icons/js.png',
    description: (
      <p>
        Gagnant de l'Ultra Dev Challenge (Association JS & Co) <br /> <br />
        Le challenge consistait à reproduire le front-end de Netflix en 4
        heures, le tout en React Vanilla.
      </p>
    ),
    technologies: [
      'html',
      'css',
      'js',
      'nodejs',
      'tailwind',
      'jsx',
      'react',
      'typescript',
      'graphql',
    ],
    environnements: [
      'webstorm',
      'git',
      'bash',
      'yarn',
      'npm',
      'scrum',
      'vscode',
      'github',
    ],
    link: 'https://github.com/PierreG-dev/Ultra-dev-challenge',
    success: true,
  },
  {
    period: 'Freelance',
    date: '03/2020',
    title: 'Consultant 👔',
    icon: '/icons/videomenthe.png',
    description: <p>Consultant pour la société VideoMenthe</p>,
    technologies: [
      'html',
      'css',
      'js',
      'nodejs',
      'jsx',
      'react',
      'graphql',
      'typescript',
    ],
    environnements: ['webstorm', 'git', 'bash', 'yarn', 'github'],
    link: '',
  },
  {
    period: 'Freelance',
    date: '07/2021',
    title: 'Formateur Philliance 📘',
    icon: '/icons/philliance.png',
    description: (
      <p>
        Formateur pour le compte de l'école Philliance. <br /> Ingéniérie
        logicielle, culture du WEB, la palette de compétences transmises est
        large.
      </p>
    ),
    technologies: [
      'html',
      'css',
      'js',
      'algo',
      'nodejs',
      'react',
      'bootstrap',
      'jsx',
    ],
    environnements: ['bash', 'git', 'github', 'npm', 'vscode', 'yarn'],
    link: '',
    actual: true,
  },
  {
    period: 'Freelance',
    date: '12/2021',
    title: 'Formateur Axe Academy 📗',
    icon: '/icons/axeacademy.png',
    description: <p>Formateur chez Axe Academy.</p>,
    technologies: [
      'html',
      'css',
      'js',
      'algo',
      'nodejs',
      'react',
      'bootstrap',
      'jsx',
    ],
    environnements: ['bash', 'git', 'github', 'npm', 'vscode', 'yarn'],
    link: '',
    actual: true,
  },
  {
    period: 'Freelance',
    date: '01/2021',
    title: 'Formateur AP Formation 📚',
    icon: '/icons/apformation.png',
    description: <p>Formateur chez AP Formation Toulouse.</p>,
    technologies: [
      'html',
      'css',
      'js',
      'algo',
      'nodejs',
      'react',
      'bootstrap',
      'jsx',
    ],
    environnements: ['bash', 'git', 'github', 'npm', 'vscode', 'yarn'],
    link: '',
    actual: true,
  },
  {
    period: 'Freelance',
    date: '09/2022',
    title: 'Plateforme LEARN',
    icon: '/icons/LEARN.png',
    description: (
      <p>
        Plateforme permettant à mes apprenants d'avoir à disposition les
        instructions pratiques, corrections d'exercices et avancement du cours
        en temps réel. <br />
        Fournit également un support de cours produit par mes soins.
        <br />
        Toutes les informations sont en accès dynamique, synchronisé en temps
        réel au back office piloté par moi-même pendant la classe.
        <br />
        <br />
        Projet ambitieux, mais qui a fait ses preuves et a nettement amélioré
        l'apprentissage des élèves.
      </p>
    ),
    technologies: [
      'html',
      'css',
      'js',
      'nodejs',
      'bootstrap',
      'jsx',
      'next',
      'react',
      'nosql',
      'pug',
      'express',
      'materialui',
    ],
    environnements: ['vscode', 'trello', 'git', 'adobexd', 'bash', 'npm'],
    link: 'https://github.com/PierreG-dev/LEARN',
    actual: true,
  },
];

export default data;
