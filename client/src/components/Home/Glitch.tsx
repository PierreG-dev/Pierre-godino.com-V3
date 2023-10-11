import React, { useCallback, useEffect, useRef, useState } from 'react';

export type Props = {
  letter: string;
  isGlitching: boolean;
};

const Glitch: React.FC<Props> = ({ letter, isGlitching }) => {
  const [displayedLetter, setDisplayedLetter] = useState(letter);
  const intervalCode = useRef<number | null>(null);
  const timeoutCode = useRef<number | null>(null);
  const isMounted = useRef<boolean>(true);
  const delay = useRef<number>(Math.floor(Math.random() * 1500));

  // Fonction qui génère un caractère aléatoire [a-z|A-Z|0-9|symboles]
  const charGenerator = useCallback(() => {
    if (!isMounted.current) return;
    setDisplayedLetter(
      String.fromCharCode(Math.floor(Math.random() * 42) + 48)
    );
  }, []);

  // Fonction pour démarrer le glitch (avec délai)
  const delayedGlitchStart = useCallback(() => {
    // Stocke le code d'identité du setTimeout pour le nettoyage ultérieur
    timeoutCode.current = window.setTimeout(() => {
      // Avant de démarrer un nouvel interval, assurez-vous de nettoyer l'ancien
      if (intervalCode.current) clearInterval(intervalCode.current);
      intervalCode.current = window.setInterval(charGenerator, 150);
    }, delay.current);
  }, [charGenerator]);

  // Fonction pour arrêter le glitch (avec délai)
  const delayedGlitchStop = useCallback(() => {
    timeoutCode.current = window.setTimeout(() => {
      if (intervalCode.current) clearInterval(intervalCode.current);
      setDisplayedLetter(letter);
    }, delay.current);
  }, [letter]);

  // Effet pour coordonner les différentes actions
  useEffect(() => {
    if (isGlitching) delayedGlitchStart();
    else delayedGlitchStop();

    // Cleanup: nettoie l'intervalle et le timeout à chaque changement ou au démontage
    return () => {
      delayedGlitchStop();
      if (timeoutCode.current) clearTimeout(timeoutCode.current);
    };
  }, [isGlitching, delayedGlitchStart, delayedGlitchStop, letter]);

  // Effet de gestion de vie du composant
  useEffect(() => {
    return () => {
      isMounted.current = false;
      if (intervalCode.current) clearInterval(intervalCode.current);
      if (timeoutCode.current) clearTimeout(timeoutCode.current);
    };
  }, []);

  return <React.Fragment>{displayedLetter}</React.Fragment>;
};

export default Glitch;
