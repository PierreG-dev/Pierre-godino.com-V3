type Technology =
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
  | 'ocaml';

type Environment =
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
  | 'npm';

interface Xp {
  period: 'University' | 'DC' | 'Freelance';
  title: string;
  description: JSX.Element | string;
  collaboratorsAmount: number;
  technologies: Technology[];
  environnements: Environment[];
  date: string;
}

const data: Xp[] = [
  {
    period: 'University',
    date: '',
    title: "Entrée à l'Université Toulouse III",
    description: '',
    collaboratorsAmount: 0,
    technologies: ['js'],
    environnements: [],
  },
  {
    period: 'University',
    date: '',
    title: 'Jeu de KONO sur CLI',
    description: '',
    collaboratorsAmount: 0,
    technologies: ['js'],
    environnements: [],
  },
  {
    period: 'University',
    date: '',
    title: 'Encrypteur | décrypteur avec crack',
    description: '',
    collaboratorsAmount: 0,
    technologies: ['js'],
    environnements: [],
  },
  {
    period: 'University',
    date: '',
    title: 'Simulateur de blockchain',
    description: '',
    collaboratorsAmount: 0,
    technologies: ['js'],
    environnements: [],
  },
  {
    period: 'University',
    date: '',
    title: "Gestionnaire des capteurs de l'université",
    description: '',
    collaboratorsAmount: 0,
    technologies: ['js'],
    environnements: [],
  },
  {
    period: 'University',
    date: '',
    title: "Jeu ludique pour apprendre l'anglais",
    description: '',
    collaboratorsAmount: 0,
    technologies: ['js'],
    environnements: [],
  },
  {
    period: 'University',
    date: '',
    title: "Obtention de ma licence d'informatique",
    description: '',
    collaboratorsAmount: 0,
    technologies: ['js'],
    environnements: [],
  },
  {
    period: 'DC',
    date: '',
    title: 'Entrée à Digital-campus Labège',
    description: '',
    collaboratorsAmount: 0,
    technologies: ['js'],
    environnements: [],
  },
  {
    period: 'DC',
    date: '',
    title: 'Site CV',
    description: '',
    collaboratorsAmount: 0,
    technologies: ['js'],
    environnements: [],
  },
  {
    period: 'DC',
    date: '',
    title: 'Site de E-Commerce ABNature',
    description: '',
    collaboratorsAmount: 0,
    technologies: ['js'],
    environnements: [],
  },
  {
    period: 'DC',
    date: '',
    title: 'Application WEB Speedy-Nanie',
    description: '',
    collaboratorsAmount: 0,
    technologies: ['js'],
    environnements: [],
  },
  {
    period: 'DC',
    date: '',
    title: 'Obtention de mon titre Développeur WEB & Mobile',
    description: '',
    collaboratorsAmount: 0,
    technologies: ['js'],
    environnements: [],
  },
  {
    period: 'Freelance',
    date: '',
    title: 'Site vitrine pour le garage BRINCAT',
    description: '',
    collaboratorsAmount: 0,
    technologies: ['js'],
    environnements: [],
  },
  {
    period: 'Freelance',
    date: '',
    title: 'Gagnant hackathon 60-Dozer',
    description: '',
    collaboratorsAmount: 0,
    technologies: ['js'],
    environnements: [],
  },
];

export default data;
