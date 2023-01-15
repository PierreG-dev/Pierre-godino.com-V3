//Raccourcis de navigation navbar / footer
const navbarData = [
    {
        francais: 'Accueil',
        english: 'Home',
        href_id: '#accueil'
    },
    {
        francais: 'Competences',
        english: 'Skills',
        href_id: '#competences'
    },
    {
        francais: 'Portfolio',
        english: 'Portfolio',
        href_id: '#portfolio'
    },
    // {
    //     francais: 'A propos',
    //     english: 'About',
    //     href_id: '#about'
    // },
    {
        francais: 'Contact',
        english: 'Contact',
        href_id: '#contact'
    }
];

//Ressources pour les titres de section
const titleData = [
    {
        francais: ['Compétences', 'Design', 'Responsive', 'Informatique'],
        english: ['Skills', 'Design', 'Responsive', 'Computing']
    },
    {
        francais: 'Portfolio',
        english: 'Portfolio'
    },
    {
        francais: 'Contact',
        english: 'Contact'
    }
]

//Milieu du header
const headerData = [
    {
        francais: ['Création de sites Internet','Sites vitrines, applications web'],
        english: ['Websites creation','Showcase website, Web applications'],
        img_src: './res/headerBackground_0.jpg',
        img_alt: 'Personne qui écrit sur un livre, en étant sur un bureau en bois, avec un ordinateur en fond'
    },
    {
        francais: ['Web design','Responsive & user friendly design'],
        english: ['Web design','Responsive & user friendly design'],
        img_src: './res/headerBackground_1.jpg',
        img_alt: 'Personne utilisant sur une tablette, ordinateur en fond'
    }
];



//Différents sites du portfolio
const portfolioData = [
    {
        francais: 'pierre-godino.com V1',
        english: 'pierre-godino.com V1',
        img_src: './res/Space.png',
        href: './res/CV/V1/index.html',
        timestamp: '05/2019'
    },
    {
        francais: 'pierre-godino.com V2',
        english: 'pierre-godino.com V2',
        img_src: './res/pierregodino.comV2thumbnail.jpg',
        href: '#accueil',
        timestamp: '11/2019'
    }
];



//Différents secteurs de compétences
const skillData = [
    {
        francais: "HTML5",
        english: "HTML5",
        img_src: "./res/html5Logo.png",
        img_alt: "logo HTML5",
        category: "front-end"
    },
    {
        francais: "CSS3",
        english: "CSS3",
        img_src: "./res/css3Logo.png",
        img_alt: "logo CSS3",
        category: "front-end"
    },
    {
        francais: "Javascript",
        english: "Javascript",
        img_src: "./res/jsLogo.png",
        img_alt: "logo Javascript",
        category: "front-end"
    },
    {
        francais: "Bootstrap",
        english: "Bootstrap",
        img_src: "./res/bootstrapLogo.png",
        img_alt: "logo Bootstrap",
        category: "front-end"
    },
    {
        francais: "React.js",
        english: "React.js",
        img_src: "./res/reactLogo.png",
        img_alt: "logo React.js",
        category: "front-end"
    },
    {
        francais: "SQL / MongoDB",
        english: "SQL / MongoDB",
        img_src: "./res/databaseLogo.png",
        img_alt: "logo SQL / MongoDB",
        category: "back-end"
    },
    {
        francais: "Node.js",
        english: "Node.js",
        img_src: "./res/nodeJsLogo.png",
        img_alt: "logo Node.js",
        category: "back-end"
    },
    {
        francais: "Java",
        english: "Java",
        img_src: "./res/javaLogo.png",
        img_alt: "logo Java",
        category: "back-end"
    },
    {
        francais: "Git",
        english: "Git",
        img_src: "./res/gitLogo.png",
        img_alt: "logo Git",
        category: "dev-ops"
    },
    {
        francais: "Algorithms",
        english: "Algorithms",
        img_src: "./res/algoLogo.png",
        img_alt: "logo Algorithmie",
        category: "dev-ops"
    }
];

const skillTextData = [
    {
        francais: ['Un Design User Friendly', " pour faciliter l'utilisation et l'accès à l'information"],
        english: ['User Friendly Design', "in order to facilitate the use and access to information"],
    },
    {
        francais: ['Media Queries, Bootstrap,', " autant d'outils que j'utilise pour garantir une adaptabilité à tous types d'écrans pour mes créations"],
        english: ['Media Queries, Bootstrap,', " as many tools that I use to ensure adaptability to all types of screens for my creations"],
    }
]

//ressources Contact
const contactData = [
    {
        francais: ['Emplacement', 'Toulouse'],
        english: ['Location', 'Toulouse'],
        href: 'https://www.google.fr/maps/place/Toulouse'
    },
    {
        francais: ['Email', 'pierregodino.contact@yahoo.com'],
        english: ['Email', 'pierregodino.contact@yahoo.com'],
        href: 'mailto:pierregodino.contact@yahoo.com'
    },
    {
        francais: ['Téléphone', '+33.6.51.71.04.97'],
        english: ['Phone', '+33.6.51.71.04.97'],
        href: 'tel:+33651710497'
    },
    {
        francais: ['LinkedIn', 'Accéder à LinkedIn'],
        english: ['LinkedIn', 'Access to LinkedIn'],
        href: 'https://www.linkedin.com/in/pierre-godino-50b503186'
    },
    {
        francais: ['Malt', 'Accéder à MALT'],
        english: ['Malt', 'Access to malt'],
        href: 'https://www.malt.fr/profile/pierregodino'
    },
    {
        francais: ['S.I.R.E.N.', '850 759 762'],
        english: ['S.I.R.E.N.', '850 759 762'],
        href: 'https://www.societe.com/societe/monsieur-pierre-godino-850759762.html'
    }
];

//ressources mentions legales
const legalData = {
        francais: 'MENTIONS LEGALES',
        english: 'LEGAL MENTIONS'
};

//ressources pour le formulaire
const formData = [
    {
        francais: 'Demande de devis',
        english: 'Quote request'
    },
    {
        francais: 'Nom',
        english: 'Name'
    },
    {
        francais: 'Entrez votre nom',
        english: 'Enter your name'
    },
    {
        francais: 'Téléphone',
        english: 'Phone'
    },
    {
        francais: 'Entrez votre numéro de téléphone',
        english: 'Enter your phone number'
    },
    {
        francais: 'E-mail',
        english: 'E-mail'
    },
    {
        francais: 'Entrez votre e-mail de contact',
        english: 'Enter your contact e-mail'
    },
    {
        francais: 'Résumez brievement votre projet',
        english: 'Briefly summarize your project'
    },
    {
        francais: 'Envoyer',
        english: 'Send'
    },
    {
        francais: 'Demander un devis',
        english: 'Ask for a quote'
    }
];

//Cookie alert
const cookieAlertData = [
    {
        francais: 'Ce site WEB utilise des cookies pour assurer une expérience utilisateur optimale',
        english: 'This WEBSITE uses cookies to ensure an optimal user experience'
    },
    {
        francais: "J'accepte",
        english: 'OK'
    },
    {
        francais: 'En savoir plus',
        english: 'About'
    }
];
