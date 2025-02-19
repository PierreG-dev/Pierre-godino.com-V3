import React, { FC, JSX, useMemo } from 'react';
import styled from 'styled-components';
import seedrandom from 'seedrandom';

const StarsBackground: FC = React.memo(() => {
  const view = useMemo(() => {
    const myStars: Array<JSX.Element> = [];
    const rng = seedrandom("Vers l'infin et l'au delà !");
    for (let i = 0; i < 200; ++i) {
      const size = Math.ceil(rng() * 3) + 'px';

      myStars.push(
        <div
          className="star"
          key={i}
          style={{
            width: size,
            height: size,
            top: Math.floor(rng() * 100) + '%',
            left: Math.floor(rng() * 100) + '%',
            animationDelay: Math.floor(rng() * 500) + 's',
          }}></div>
      );
    }
    return myStars;
  }, []);

  return <StarsContainer key={'starBackground'}>{view}</StarsContainer>;
});

const StarsContainer = styled.div`
  height: 100vh;
  min-height: 100vh;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 0;
  position: absolute;
  transition: 1s;

  .star {
    transition: 1s;
    position: fixed;
    background: #fafafa;
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

export default StarsBackground;
