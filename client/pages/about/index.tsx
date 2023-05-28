import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import CustomLink from '../../src/components/Layout/routing/CustomLink';
import { useRouter } from 'next/router';
import Head from 'next/head';

const Index: NextPage = () => {
  const starsArray = useRef<JSX.Element[]>();

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

  useEffect(() => {
    starsArray.current = starsGenerator();
  }, [starsGenerator]);

  const router = useRouter();
  const metaContentGenerator = useMemo(() => {
    const metaData = {
      title: 'A propos',
      description:
        'Créateur de sites Internet, développeur WEB freelance et formateur | A propos de moi',
      ogUrl: 'https://pierre-godino.com/about',
    };

    return (
      <Head>
        <title>
          {'Pierre | ' + metaData.title} {router.pathname}
        </title>
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
      {starsArray.current}
      <section className="flex flex-col buttons-container">
        <div style={{ maxWidth: '100vw' }}>
          <CustomLink
            notALink={true}
            button={true}
            style={{ animationDelay: '0s' }}
            href={'/about/skills'}>
            <video loop autoPlay muted>
              <source src={'/video/skills-preview.mp4'} type={'video/mp4'} />
            </video>
            <h3>Mes technologies</h3>
          </CustomLink>
          <CustomLink
            notALink={true}
            button={true}
            style={{ animationDelay: '0.5s' }}
            href={'/about/experiences'}>
            <video loop autoPlay muted>
              <source src={'/video/exp-preview.mp4'} type={'video/mp4'} />
            </video>
            <h3>Mon parcours</h3>
          </CustomLink>
        </div>
        <CustomLink
          notALink={true}
          button={true}
          style={{ animationDelay: '1s' }}
          href={'/about/curiculum'}>
          <video loop autoPlay muted>
            <source src={'/video/cv-preview.mp4'} type={'video/mp4'} />
          </video>
          <h3>Mon CV</h3>
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

  .star {
    background: #fafafa;
    z-index: 0;
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

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
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
