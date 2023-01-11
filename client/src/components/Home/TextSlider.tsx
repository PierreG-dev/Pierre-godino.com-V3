import React, { useState, useEffect } from 'react';

export type Props = {
  textArray: string[];
  delay: number;
};

const TextSlider: React.FC<Props> = ({ textArray, delay }) => {
  const [displayedText, setDisplayedText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedText((previousState) =>
        previousState === textArray.length - 1 ? 0 : previousState + 1
      );
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <React.Fragment>
      {textArray.map((text, key) => {
        return (
          <p
            style={{
              opacity: displayedText === key ? 1 : 0,
              transition: '2s',
              transitionDelay: displayedText === key ? '2s' : '0s',
              position: 'absolute',
              width: '40vw',
            }}
            key={key}>
            {text}
          </p>
        );
      })}{' '}
    </React.Fragment>
  );
};

export default TextSlider;
