import React, { useCallback, useEffect, useRef, useState } from 'react';

export type Props = {
  letter: string;
  isGlitching: boolean;
};

const Glitch: React.FC<Props> = ({ letter, isGlitching }) => {
  const [displayedLetter, setDisplayedLetter] = useState(letter);
  const intervalCode: any = useRef();
  const delay: any = useRef();

  //Fonction qui génère un caractère aléatoire [a-z|A-Z|0-9|symboles]
  const charGenerator = useCallback(() => {
    setDisplayedLetter(
      String.fromCharCode(Math.floor(Math.random() * 42) + 48)
    );
  }, []);

  //fonction pour démarrer le glitch (avec délai)
  const delayedGlitchStart = useCallback(() => {
    setTimeout(() => {
      intervalCode.current = setInterval(charGenerator, 100);
    }, delay.current);
  }, [intervalCode, charGenerator]);

  //fonction pour arréter le glitch (avec délai)
  const delayedGlitchStop = useCallback(() => {
    setTimeout(() => {
      intervalCode.current = clearInterval(intervalCode.current);
      setDisplayedLetter(letter);
    }, delay.current);
  }, [intervalCode, letter]);

  //Effet pour coordonner les différentes actions
  useEffect(() => {
    if (isGlitching) delayedGlitchStart();
    else delayedGlitchStop();

    return () => {
      delayedGlitchStop();
    };
  }, [isGlitching, delayedGlitchStart, delayedGlitchStop, letter]);

  // Effet de gestion de vie du composant
  useEffect(() => {
    delay.current = Math.floor(Math.random() * 1000);

    return () => {
      clearInterval(intervalCode.current);
    };
  }, []);

  return <React.Fragment>{displayedLetter}</React.Fragment>;
};

export default Glitch;
