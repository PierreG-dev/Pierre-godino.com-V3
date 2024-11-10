import { skills, Skill } from '../Skills/data';

const selectSkillsByName = (names: string[]) => {
  return skills.filter((skill) => names.includes(skill.name));
};

interface Xp {
  period: 'University' | 'DC' | 'Freelance';
  title: string;
  description: JSX.Element | string;
  collaboratorsAmount?: number;
  technologies?: Skill[];
  environnements?: Skill[];
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
    technologies: selectSkillsByName([]),
    environnements: selectSkillsByName([]),
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
    technologies: selectSkillsByName(['Python']),
    environnements: selectSkillsByName(['Atom']),
    link: 'https://Github.com/PierreG-dev/Kono',
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
    technologies: selectSkillsByName(['C']),
    environnements: selectSkillsByName(['Atom', 'Bash']),
    link: 'https://Github.com/PierreG-dev/XorCipher',
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
        JavaScriptON, et de rajouter des transactions manuellement, <br />
        le tout dans une interface faite en SWING. <br /> <br />
        Projet réalisé sur 3 semaines en 2 versions: C et JAVA.
      </p>
    ),
    collaboratorsAmount: 2,
    technologies: selectSkillsByName(['C', 'Java', 'Swing']),
    environnements: selectSkillsByName(['Netbeans', 'Git']),
    link: 'https://Github.com/PierreG-dev/WoredCoin',
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
    technologies: selectSkillsByName(['Java', 'Swing']),
    environnements: selectSkillsByName(['IntelliJ Idea', 'Git']),
    link: 'https://Github.com/Trietch/projetS5',
  },
  {
    period: 'University',
    date: '03/2019',
    title: "Plateforme d'apprentissage de vocabulaire technique 📕",
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
    technologies: selectSkillsByName([
      'HTML 5',
      'CSS 3',
      'JavaScript',
      'PHP',
      'Symfony',
      'SQL',
    ]),
    environnements: selectSkillsByName([
      'VSCode',
      'Composer',
      'Git',
      'PHPMyAdmin',
      'WAMP',
    ]),
    link: 'https://www.checkyoursmile.fr',
  },
  {
    period: 'University',
    date: '07/2019',
    title: "Obtention de ma licence d'informatique",
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
    technologies: selectSkillsByName([]),
    environnements: selectSkillsByName([]),
    success: true,
  },
  {
    period: 'DC',
    date: '09/2019',
    title: 'Entrée à DiGital-campus Toulouse 🎓',
    icon: '/icons/dc.png',
    description: (
      <p>
        Entrée à l'école DiGital Campus spécialisée dans les métiers du
        numérique (design, programmation...). <br /> <br />
        Section développement WEB (condensé en 1 année).
      </p>
    ),
    collaboratorsAmount: 0,
    technologies: selectSkillsByName([]),
    environnements: selectSkillsByName([]),
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
        Design réalisé sur Adobe XD, puis intégré en HTML 5 CSS 3 & JS Vanilla.{' '}
        <br />
        Projet réalisé en 2 semaines sur mon temps libre.
      </p>
    ),
    collaboratorsAmount: 1,
    technologies: selectSkillsByName(['HTML 5', 'CSS 3', 'JavaScript', 'PHP']),
    environnements: selectSkillsByName([
      'VSCode',
      'Git',
      'Trello',
      'Adobe XD',
      'Bash',
    ]),
    link: 'https://Github.com/PierreG-dev/pierre-godino.com_V2',
  },
  {
    period: 'Freelance',
    date: '01/2020',
    title: "Site d'E-Commerce ABNature",
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
    technologies: selectSkillsByName([
      'PHP',
      'Prestashop',
      'SQL',
      'HTML 5',
      'CSS 3',
      'JavaScript',
    ]),
    environnements: selectSkillsByName([
      'VSCode',
      'WAMP',
      'Bash',
      'PHPMyAdmin',
    ]),
  },
  {
    period: 'Freelance',
    date: '04/2020',
    title: 'Application WEB Speedy-Nanie 🧸',
    icon: '/icons/speedynanie.png',
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
    technologies: selectSkillsByName([
      'JSX',
      'JavaScript',
      'HTML 5',
      'CSS 3',
      'React.js',
      'Firebase',
      'NoSQL',
      'SQL',
      'NodeJs',
    ]),
    environnements: selectSkillsByName([
      'Webstorm',
      'Trello',
      'Scrum',
      'NPM',
      'Adobe XD',
      'Git',
      'Bash',
    ]),
  },
  {
    period: 'DC',
    date: '07/2020',
    title: 'Obtention de mon titre Développeur WEB & Mobile',
    icon: '/icons/confettis.png',
    description: (
      <p>
        Obtention de mon titre de Développeur WEB & Mobile après une année à
        DiGital Campus Toulouse. <br /> <br /> Présentation au jury de la
        plateforme Speedy-Nanie.
      </p>
    ),
    collaboratorsAmount: 0,
    technologies: selectSkillsByName([]),
    environnements: selectSkillsByName([]),
    success: true,
  },
  {
    period: 'Freelance',
    date: '08/2020',
    title: 'Site vitrine pour le garage BRINCAT',
    icon: '/icons/sarlgaragebrincat.png',
    description: (
      <p>
        Création d'un CMS en Symfony pour le compte d'un garage basé sur
        Castelsarrasin. <br /> <br />
        Le site possède un back office pour gérer les voitures en vente dans la
        concession, <br />
        ainsi que les messages laissés par les clients. <br /> <br />
        Plateforme réalisée en 3 semaines avec un entretien long terme.
      </p>
    ),
    collaboratorsAmount: 1,
    technologies: selectSkillsByName([
      'HTML 5',
      'CSS 3',
      'JavaScript',
      'Symfony',
      'SQL',
      'Bootstrap',
      'Twig',
      'PHP',
    ]),
    environnements: selectSkillsByName([
      'Webstorm',
      'Trello',
      'Git',
      'Adobe XD',
      'PHPMyAdmin',
      'Composer',
      'Bash',
      'LAMP',
    ]),
    link: '',
    actual: true,
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
        Une équipe de designers de l'école DiGital Campus nous a fournie une
        maquette, ainsi, nous avons produit un CMS en 42 heures de travail.
        <br /> <br />
        Nous avons utilisé la méthode agile et des objectifs bien définis afin
        d'être le plus efficace possible.
      </p>
    ),
    collaboratorsAmount: 2,
    technologies: selectSkillsByName([
      'HTML 5',
      'CSS 3',
      'JavaScript',
      'NodeJs',
      'React.js',
      'Next.js',
      'Apollo',
      'GraphQL',
      'JSX',
      'NoSQL',
      'Material UI',
      'TypeScript',
      'Firebase',
      'Tailwind',
    ]),
    environnements: selectSkillsByName([
      'Webstorm',
      'Trello',
      'Git',
      'Bash',
      'YARN',
      'Adobe XD',
    ]),
    link: 'https://Github.com/Hackathon-60-Dozer/Hackathon-2020',
    success: true,
  },
  {
    period: 'Freelance',
    date: '01/2021',
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
    technologies: selectSkillsByName([
      'HTML 5',
      'CSS 3',
      'JavaScript',
      'NodeJs',
      'TypeScript',
      'Tailwind',
      'Express.js',
      'JSX',
      'Next.js',
      'React.js',
      'NoSQL',
    ]),
    environnements: selectSkillsByName([
      'Webstorm',
      'Trello',
      'Git',
      'Adobe XD',
      'Bash',
      'YARN',
    ]),
    link: 'https://Github.com/PierreG-dev/Pierre-godino.com-V3',
    actual: true,
    collaboratorsAmount: 1,
  },
  {
    period: 'Freelance',
    date: '02/2021',
    title: '1ère place Ultra Dev Challenge Février 2021 🥇',
    icon: '/icons/js.png',
    description: (
      <p>
        Gagnant de l'Ultra Dev Challenge (Association JS & Co) <br /> <br />
        Le challenge consistait à reproduire le front-end de Netflix en 4
        heures, le tout en React.js Vanilla.
      </p>
    ),
    technologies: selectSkillsByName([
      'HTML 5',
      'CSS 3',
      'JavaScript',
      'NodeJs',
      'Tailwind',
      'JSX',
      'React.js',
      'TypeScript',
      'GraphQL',
    ]),
    environnements: selectSkillsByName([
      'Webstorm',
      'Git',
      'Bash',
      'YARN',
      'NPM',
      'Scrum',
      'VSCode',
      'Github',
    ]),
    link: 'https://Github.com/PierreG-dev/Ultra-dev-challenge',
    success: true,
    collaboratorsAmount: 1,
  },
  {
    period: 'Freelance',
    date: '03/2021',
    title: 'Consultant YOOP 🚀',
    icon: '/icons/yoop.jpg',
    description: <p>Consultant pour la société Yoop basée sur Toulouse.</p>,
    technologies: selectSkillsByName([
      'HTML 5',
      'CSS 3',
      'JavaScript',
      'NodeJs',
      'JSX',
      'React.js',
      'GraphQL',
      'TypeScript',
    ]),
    environnements: selectSkillsByName([
      'Webstorm',
      'Git',
      'Bash',
      'YARN',
      'Github',
    ]),
    link: 'https://spoom.net/',
  },
  {
    period: 'Freelance',
    date: '07/2021',
    title: 'Formateur Philliance',
    icon: '/icons/philliance.png',
    description: (
      <p>
        Formateur pour le compte de l'école Philliance. <br /> Ingéniérie
        logicielle, culture du WEB, la palette de compétences transmises est
        large.
      </p>
    ),
    technologies: selectSkillsByName([
      'HTML 5',
      'CSS 3',
      'JavaScript',
      'Algorithmie',
      'NodeJs',
      'React.js',
      'Bootstrap',
      'JSX',
    ]),
    environnements: selectSkillsByName([
      'Bash',
      'Git',
      'Github',
      'NPM',
      'VSCode',
      'YARN',
    ]),
    link: 'https://www.philiance.com/',
  },
  {
    period: 'Freelance',
    date: '12/2021',
    title: 'Formateur Axe Academy',
    icon: '/icons/axeacademy.png',
    description: <p>Formateur chez Axe Academy.</p>,
    technologies: selectSkillsByName([
      'HTML 5',
      'CSS 3',
      'JavaScript',
      'Algorithmie',
      'NodeJs',
      'React.js',
      'Bootstrap',
      'JSX',
    ]),
    environnements: selectSkillsByName([
      'Bash',
      'Git',
      'Github',
      'NPM',
      'VSCode',
      'YARN',
    ]),
    link: 'https://axeacademy.fr/',
    actual: false,
  },
  {
    period: 'Freelance',
    date: '01/2022',
    title: 'Formateur AP Formation',
    icon: '/icons/apformation.png',
    description: (
      <p>
        Formateur chez AP Formation Toulouse. <br /> Les Eleves sont préparés à
        la certification CDA
      </p>
    ),
    technologies: selectSkillsByName([
      'HTML 5',
      'CSS 3',
      'JavaScript',
      'Algorithmie',
      'NodeJs',
      'React.js',
      'Bootstrap',
      'JSX',
    ]),
    environnements: selectSkillsByName([
      'Bash',
      'Git',
      'Github',
      'NPM',
      'VSCode',
      'YARN',
    ]),
    link: 'https://www.apformation.com/',
  },
  {
    period: 'Freelance',
    date: '09/2022',
    title: 'Plateforme LEARN V1',
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
    technologies: selectSkillsByName([
      'HTML 5',
      'CSS 3',
      'JavaScript',
      'NodeJs',
      'Bootstrap',
      'JSX',
      'Next.js',
      'React.js',
      'NoSQL',
      'Pug',
      'Express.js',
      'Material UI',
    ]),
    environnements: selectSkillsByName([
      'VSCode',
      'Trello',
      'Git',
      'Adobe XD',
      'Bash',
      'NPM',
    ]),
    actual: false,
    collaboratorsAmount: 1,
    link: 'https://learn.pierre-godino.com',
  },
  {
    period: 'Freelance',
    date: '07/2023',
    title: 'Plateforme LEARN V2',
    icon: '/icons/learn_icon.svg',
    description: (
      <p>
        Plateforme permettant à mes apprenants d'avoir à disposition les
        instructions pratiques, corrections d'exercices et avancement du cours
        en temps réel. <br />
        Fournit également un support de cours produit par mes soins.
        <br />
        Apporte une toute nouvelle interface permettant de chatter, s'entrainer
        directement sur place, faire des examens en ligne... <br />
        Version beaucoup plus complète en vue de devenir la base d'une école.
      </p>
    ),
    technologies: selectSkillsByName([
      'HTML 5',
      'CSS 3',
      'JavaScript',
      'NodeJs',
      'Redux',
      'JSX',
      'Next.js',
      'React.js',
      'NoSQL',
      'Pug',
      'Express.js',
      'Material UI',
    ]),
    environnements: selectSkillsByName([
      'VSCode',
      'Trello',
      'Git',
      'Adobe XD',
      'Bash',
      'NPM',
    ]),
    link: 'https://learn.pierre-godino.com',
    actual: true,
    collaboratorsAmount: 1,
  },
  {
    period: 'Freelance',
    date: '05/2023',
    title: "Formateur O'Clock",
    icon: '/icons/oclock.png',
    description: (
      <p>
        Formateur au sein d'O'Clock. <br /> Animation de sessions de formation
        en téléprésentiel centrées sur le développement web, tout en guidant les
        étudiants dans leurs projets et en assurant une veille technologique
        constante.
      </p>
    ),
    technologies: selectSkillsByName([
      'HTML 5',
      'CSS 3',
      'JavaScript',
      'Algorithmie',
      'NodeJs',
      'React.js',
      'Redux',
      'Next',
      'JSX',
    ]),
    environnements: selectSkillsByName([
      'Bash',
      'Git',
      'Github',
      'NPM',
      'VSCode',
      'YARN',
    ]),
    link: 'https://oclock.io/',
    actual: true,
  },
  {
    period: 'Freelance',
    date: '09/2023',
    title: 'Mentor CEF',
    icon: '/icons/cenef.svg',
    description: (
      <p>
        Mentor, correcteur au sein du Centre Européen de formation. <br />
        Assistance et accompagnement d'élèves en e-learning, en vue d'une
        certification DWWM.
      </p>
    ),
    technologies: selectSkillsByName([
      'HTML 5',
      'CSS 3',
      'JavaScript',
      'Algorithmie',
      'NoSQL',
      'PHP',
      'Python',
      'NodeJs',
      'React.js',
      'Bootstrap',
      'JSX',
      'SQL',
      'Express.js',
      'Next.js',
      'Symfony',
      'Bootstrap',
    ]),
    environnements: selectSkillsByName([
      'Bash',
      'Git',
      'Github',
      'NPM',
      'VSCode',
      'YARN',
      'PHPMyAdmin',
      'Composer',
      'WAMP',
      'VSCode',
    ]),
    link: 'https://www.centre-europeen-formation.fr/',
  },
  {
    period: 'Freelance',
    date: '04/2024',
    title: 'Formateur GEMA',
    icon: '/icons/GEMA.jpg',
    description: (
      <p>
        Formateur sur les modules portant sur le développement WEB au sein du
        groupe GEMA
      </p>
    ),
    technologies: selectSkillsByName([
      'HTML 5',
      'CSS 3',
      'JavaScript',
      'Algorithmie',
      'NoSQL',
      'PHP',
      'Python',
      'NodeJs',
      'React.js',
      'JSX',
      'SQL',
      'Express.js',
    ]),
    environnements: selectSkillsByName([
      'Bash',
      'Git',
      'Github',
      'NPM',
      'VSCode',
      'YARN',
      'VSCode',
    ]),
    link: 'https://www.groupe-gema.com/',
    actual: true,
  },
  {
    period: 'Freelance',
    date: '10/2024',
    title: 'Site vitrine cabinet Misino',
    icon: '/icons/misino_icon_alt.png',
    description: (
      <p>
        Conception d'un site vitrine pour le cabinet de stomatologie &
        orthodontie du Dr. Jérôme Misino
      </p>
    ),
    technologies: selectSkillsByName([
      'HTML 5',
      'CSS 3',
      'JavaScript',
      'Algorithmie',
    ]),
    environnements: selectSkillsByName(['Bash', 'Git', 'Github', 'VSCode']),
    link: 'https://cabinet-misino./',
    actual: true,
  },
];

export default data;
