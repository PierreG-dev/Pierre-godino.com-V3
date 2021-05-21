export type Rating = 1 | 2 | 3 | 4;

interface Skill {
  id: number;
  name: string;
  icon: string;
  xp: Rating;
  mastery: Rating;
  affinity: Rating;
}

const skills: Skill[] = [
  {
    id: 0,
    name: 'HTML 5',
    icon: '/icons/html.png',
    xp: 4,
    mastery: 4,
    affinity: 4,
  },
  {
    id: 1,
    name: 'CSS 3',
    icon: '/icons/css.png',
    xp: 4,
    mastery: 4,
    affinity: 4,
  },
  {
    id: 3,
    name: 'JavaScript',
    icon: '/icons/js.png',
    xp: 4,
    mastery: 3,
    affinity: 4,
  },
  {
    id: 4,
    name: 'Python',
    icon: '/icons/python.png',
    xp: 1,
    mastery: 2,
    affinity: 2,
  },
  {
    id: 5,
    name: 'Python',
    icon: '/icons/python.png',
    xp: 1,
    mastery: 2,
    affinity: 2,
  },
  {
    id: 6,
    name: 'PHP',
    icon: '/icons/php.png',
    xp: 2,
    mastery: 2,
    affinity: 1,
  },
  {
    id: 7,
    name: 'SQL',
    icon: '/icons/sql.png',
    xp: 2,
    mastery: 2,
    affinity: 1,
  },
  {
    id: 8,
    name: 'NoSQL',
    icon: '/icons/nosql.png',
    xp: 3,
    mastery: 3,
    affinity: 4,
  },
  {
    id: 9,
    name: 'Algorithmie',
    icon: '/icons/algo.png',
    xp: 4,
    mastery: 3,
    affinity: 4,
  },
  {
    id: 10,
    name: 'React.js',
    icon: '/icons/react.png',
    xp: 4,
    mastery: 3,
    affinity: 4,
  },
  {
    id: 11,
    name: 'Next.js',
    icon: '/icons/next.png',
    xp: 3,
    mastery: 3,
    affinity: 4,
  },
  {
    id: 12,
    name: 'Firebase',
    icon: '/icons/firebase.png',
    xp: 3,
    mastery: 3,
    affinity: 3,
  },
  {
    id: 13,
    name: 'Symfony',
    icon: '/icons/symfony.png',
    xp: 3,
    mastery: 3,
    affinity: 2,
  },
  {
    id: 14,
    name: 'Bootstrap',
    icon: '/icons/bootstrap.png',
    xp: 4,
    mastery: 4,
    affinity: 3,
  },
  {
    id: 15,
    name: 'Tailwind',
    icon: '/icons/tailwind.png',
    xp: 2,
    mastery: 3,
    affinity: 3,
  },
  {
    id: 16,
    name: 'GraphQL',
    icon: '/icons/graphql.png',
    xp: 1,
    mastery: 1,
    affinity: 3,
  },
  {
    id: 17,
    name: 'Apollo ',
    icon: '/icons/apollo.png',
    xp: 1,
    mastery: 1,
    affinity: 3,
  },
  {
    id: 18,
    name: 'NodeJs',
    icon: '/icons/nodejs.png',
    xp: 3,
    mastery: 3,
    affinity: 4,
  },
  {
    id: 19,
    name: 'TypeScript',
    icon: '/icons/typescript.png',
    xp: 3,
    mastery: 2,
    affinity: 4,
  },
  {
    id: 20,
    name: 'JSX',
    icon: '/icons/jsx.png',
    xp: 4,
    mastery: 4,
    affinity: 4,
  },
  {
    id: 21,
    name: 'Twig',
    icon: '/icons/twig.png',
    xp: 3,
    mastery: 4,
    affinity: 2,
  },
  {
    id: 22,
    name: 'C',
    icon: '/icons/c.png',
    xp: 4,
    mastery: 3,
    affinity: 2,
  },
  {
    id: 23,
    name: 'Java',
    icon: '/icons/java.png',
    xp: 3,
    mastery: 2,
    affinity: 1,
  },
  {
    id: 24,
    name: 'Prestashop',
    icon: '/icons/prestashop.png',
    xp: 1,
    mastery: 2,
    affinity: 2,
  },
  {
    id: 25,
    name: 'Scrum',
    icon: '/icons/scrum.png',
    xp: 3,
    mastery: 3,
    affinity: 4,
  },
  {
    id: 26,
    name: 'Git',
    icon: '/icons/git.png',
    xp: 4,
    mastery: 3,
    affinity: 4,
  },
  {
    id: 27,
    name: 'Github',
    icon: '/icons/github.png',
    xp: 4,
    mastery: 3,
    affinity: 3,
  },
  {
    id: 28,
    name: 'NPM',
    icon: '/icons/npm.png',
    xp: 4,
    mastery: 3,
    affinity: 3,
  },
  {
    id: 29,
    name: 'YARN',
    icon: '/icons/yarn.png',
    xp: 4,
    mastery: 3,
    affinity: 4,
  },
  {
    id: 29,
    name: 'Adobe XD',
    icon: '/icons/adobexd.png',
    xp: 3,
    mastery: 3,
    affinity: 2,
  },
  {
    id: 30,
    name: 'Webstorm',
    icon: '/icons/webstorm.png',
    xp: 4,
    mastery: 4,
    affinity: 4,
  },
];

export default skills;
