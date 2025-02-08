import { Montserrat, Space_Mono, Bebas_Neue } from 'next/font/google';

// Initialisation de la police Montserrat
export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap', // Pour une meilleure gestion de l'affichage des polices
});

// Initialisation de la police Space Mono
export const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

// Initialisation de la police Bebas Neue
export const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});
