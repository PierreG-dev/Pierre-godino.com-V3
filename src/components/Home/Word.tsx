import React, { useCallback, useEffect, useRef, useState } from 'react';
import Glitch from './Glitch';

export type Props = {
  word: string;
  isGlitching: boolean;
};

const Word: React.FC<Props> = ({ word, isGlitching }) => {
  const wordCutter = useCallback(
    () =>
      word
        .split('')
        .map((elem, key) => (
          <Glitch key={key} letter={elem} isGlitching={isGlitching}></Glitch>
        )),
    [word, isGlitching]
  );

  return <React.Fragment>{wordCutter()} </React.Fragment>;
};

export default Word;
