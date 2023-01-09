import React, { useCallback, useEffect, useRef, useState } from 'react';
import Sentence from './Sentence';

export type Props = {
  sentences: string[];
  delay: number;
};

const GlitchHandler: React.FC<Props> = ({ sentences, delay }) => {
  const [displayedSentence, setDisplayedSentence] = useState<string>();
  const [isGlitching, setIsGlitching] = useState<boolean>(false);
  const compt = useRef(sentences.length - 1);

  useEffect(() => {
    console.log(compt.current);
  }, [compt]);

  //Choisit une phrase dans la liste
  const sentencePicker = useCallback((): string => {
    ++compt.current;
    if (compt.current === sentences.length) {
      compt.current = 0;
      return sentences[compt.current];
    } else return sentences[compt.current];
  }, [sentences, compt]);

  const sentenceSwitcher = useCallback(() => {
    setIsGlitching(true);
    setTimeout(() => {
      setDisplayedSentence(sentencePicker());
    }, 1000);

    setTimeout(() => {
      setIsGlitching(false);
    }, 1600);
  }, [sentencePicker]);

  useEffect(() => {
    sentenceSwitcher();
    const interval: NodeJS.Timeout = setInterval(sentenceSwitcher, delay);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <React.Fragment>
      {displayedSentence ? (
        <Sentence sentence={displayedSentence} isGlitching={isGlitching} />
      ) : null}
    </React.Fragment>
  );
};

export default GlitchHandler;
