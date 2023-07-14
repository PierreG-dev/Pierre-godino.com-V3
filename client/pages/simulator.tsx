import React, { useCallback, useMemo } from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Simulator: NextPage = () => {
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

  const router = useRouter();
  const metaContentGenerator = useMemo(() => {
    const metaData = {
      title: 'Simulation',
      description:
        'Créateur de sites Internet, développeur WEB freelance et formateur | Devis en ligne',
      ogUrl: 'https://pierre-godino.com/simulator',
    };

    return (
      <Head>
        <title>{'Pierre | ' + metaData.title}</title>
        <meta name="description" content={metaData.description} />
        <meta
          property="og:title"
          content={'Pierre GODINO | ' + metaData.title}
        />
        <meta property="og:url" content={metaData.ogUrl} />
        <meta property="og:description" content={metaData.description} />
      </Head>
    );
  }, [router.pathname]);

  return (
    <MainContainer>
      {metaContentGenerator}
      {starsGenerator()}
      <h1>En cours de développement</h1>
      <span>🚧</span>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  margin-top: 7vh;
  background: #040e1d;
  height: 93vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    text-align: center;
    font-size: 2.5rem;
    font-family: 'Space Mono', monospace;
    color: rgba(255, 255, 255, 0.8);
  }

  span {
    font-size: 20vw;
  }

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

export default Simulator;
