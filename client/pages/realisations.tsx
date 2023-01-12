import React, { useCallback } from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';

const Realisations: NextPage = () => {
  //Générateur d'étoiles
  const starsGenerator = useCallback(() => {
    const myStars: Array<JSX.Element> = [];
    for (let i = 0; i < 200; ++i) {
      const size = Math.ceil(Math.random() * 3) + 'px';

      myStars.push(
        <div
          className="star"
          key={i}
          style={{
            width: size,
            height: size,
            top: Math.floor(Math.random() * 100) + '%',
            left: Math.floor(Math.random() * 100) + '%',
            animationDelay: Math.floor(Math.random() * 500) + 's',
          }}></div>
      );
    }
    return myStars;
  }, []);

  return <MainContainer>{starsGenerator()}</MainContainer>;
};

const MainContainer = styled.div`
  margin-top: 7vh;
  background: #040e1d;
  height: 93vh;
  width: 100vw;

  .star {
    background: #fafafa;
    z-index: 1;
    position: absolute;
    box-shadow: 0px 0px 5px 0px rgba(255, 255, 255, 0.9);
    animation: 6s star_glow infinite linear;
  }

  @keyframes star_glow {
    0% {
      transform: scale3d(1, 1, 1);
    }
    50% {
      transform: scale3d(2, 2, 1);
    }
    100% {
      transform: scale3d(1, 1, 1);
    }
  }
`;

export default Realisations;
