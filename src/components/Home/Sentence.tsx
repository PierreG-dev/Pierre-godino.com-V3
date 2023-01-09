import React, { useCallback, useEffect, useRef, useState } from 'react';
import Word from './Word';

export type Props = {
  sentence: string;
  isGlitching: boolean;
};

const Sentence: React.FC<Props> = ({ sentence, isGlitching }) => {
  const sentenceCutter = useCallback(
    () =>
      sentence
        .split(' ')
        .map((elem, key) => (
          <Word word={elem} isGlitching={isGlitching} key={key} />
        )),
    [sentence, isGlitching]
  );

  console.log(sentenceCutter());

  return <React.Fragment>{sentenceCutter()}</React.Fragment>;
};

export default Sentence;
