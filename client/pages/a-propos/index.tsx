import React, { useContext, useMemo } from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import CustomLink from '../../src/components/Layout/routing/CustomLink';
import Head from 'next/head';
import { BackgroundContext } from '../../src/contexts/Contexts';

const Index: NextPage = () => {
  // --- Background
  const { background } = useContext(BackgroundContext);

  return (
    <MainContainer>
      <Head>
        <title>Informations personnelles | Pierre G.</title>
        <meta
          property="og:title"
          content="Informations personnelles | Pierre G."
        />
        <meta
          name="description"
          content="Vous cherchez à recruter un développeur ? Vous trouverez toutes les informations dont vous pourriez avoir besoin sur moi ici."
        />
        <meta
          property="og:description"
          content="Vous cherchez à recruter un développeur ? Vous trouverez toutes les informations dont vous pourriez avoir besoin sur moi ici."
        />
        <meta
          name="twitter:description"
          content="Vous cherchez à recruter un développeur ? Vous trouverez toutes les informations dont vous pourriez avoir besoin sur moi ici."
        />
        <meta
          property="og:url"
          content="https://www.pierre-godino.com/a-propos"
        />
        <link rel="canonical" href="https://www.pierre-godino.com/a-propos" />
      </Head>

      {background}
      <section className="flex flex-col buttons-container">
        <div style={{ maxWidth: '100vw' }}>
          <CustomLink
            notALink={true}
            button={true}
            style={{ animationDelay: '0.1s' }}
            href={'/a-propos/technologies'}>
            <video loop autoPlay muted>
              <source src={'/video/skills-preview.mp4'} type={'video/mp4'} />
            </video>
            <h3>Mes spécialités</h3>
          </CustomLink>
          <CustomLink
            notALink={true}
            button={true}
            style={{ animationDelay: '0.3s' }}
            href={'/a-propos/experiences'}>
            <video loop autoPlay muted>
              <source src={'/video/exp-preview.mp4'} type={'video/mp4'} />
            </video>
            <h3>Mon parcours</h3>
          </CustomLink>
        </div>
        <CustomLink
          notALink={true}
          button={true}
          style={{ animationDelay: '0.6s' }}
          href={'/a-propos/curiculum'}>
          <video loop autoPlay muted>
            <source src={'/video/cv-preview.mp4'} type={'video/mp4'} />
          </video>
          <h3>Synthèse</h3>
        </CustomLink>
      </section>
    </MainContainer>
  );
};
const MainContainer = styled.div`
  width: 100vw;
  background: #040e1d;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5vh;
  align-items: center;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    opacity: 0;
    transition: 0.5s;
    transform: scale(1.02);
  }

  button {
    overflow: hidden;
    position: relative;
    border-radius: 15px;
    margin: 10px;
    padding: 60px;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(1px);
    font-size: 2.5rem;
    color: rgba(255, 255, 255, 0.7);
    animation: 3s appearing;
    animation-fill-mode: forwards;
    opacity: 0;
    transition: 0.2s;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 5px 5px 15px 1px rgba(0, 0, 0, 0.4);

    @media (max-width: 703px) {
      width: 95%;
    }
  }
  button h3 {
    z-index: 2;
  }
  button:hover {
    transform: translate3d(0, -15px, 0);
    box-shadow: 5px 20px 15px 1px rgba(0, 0, 0, 0.4);
  }
  button:hover video {
    opacity: 1;
    cursor: pointer;
  }

  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -2;
  }

  h3 {
    font-family: BebasNeue;
  }

  h2,
  p {
    color: #fafafa;
    font-size: 2rem;
    opacity: 0;
    animation: 6s appearingText 0.5s;
    animation-fill-mode: forwards;
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
  }

  h2 {
    font-weight: bold;
  }

  .buttons-container {
    min-height: 100%;
    justify-content: center;
  }

  @keyframes appearing {
    0% {
      opacity: 0;
    }
    75% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes appearingText {
    0% {
      opacity: 0;
    }
    75% {
      opacity: 0;
    }
    100% {
      opacity: 0.9;
    }
  }

  @media (max-width: 500px) {
    h2,
    p {
      font-size: 1.4rem;
    }
  }
`;

export default Index;
