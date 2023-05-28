import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';
import createGlobe from 'cobe';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import GlitchHandler from '../src/components/Home/GlitchHandler';
import TextSlider from '../src/components/Home/TextSlider';
import Head from 'next/head';

const Home: NextPage = () => {
  const prefixArray = useRef<string[]>([
    'Je suis',
    'Je forge',
    'I am',
    'I forge',
  ]);
  const titleArray = useRef<string[]>([
    'développeur',
    'formateur',
    'le net',
    'des esprits',
    'a developer',
    'a trainer',
    'the internet',
    'minds',
  ]);
  const sentencesArray = useRef<string[]>([
    "Les logiciels et les cathédrales, c'est un peu la même chose: d'abord on les construit, ensuite on prie.",
    "Tout le monde peut écrire du code qu'un ordinateur peut comprendre. Les bons programmeurs écrivent du code que les humains peuvent comprendre.",
    'Toute technologie suffisamment avancée est indiscernable de la magie.',
    "L'enseignement devrait être tel que ce qui est offert soit perçu comme un cadeau précieux et non comme une tâche difficile.",
    'Software and cathedrals are a bit the same thing: first we build them, then we pray.',
    'Everyone can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Any sufficiently advanced technology is indistinguishable from magic.',
    'Teaching should be such that what is offered is perceived as a precious gift and not as a difficult task.',
  ]);
  const canvasRef = useRef();
  const starsArray: any = useRef();

  const router = useRouter();
  const metaContentGenerator = useMemo(() => {
    const metaData = {
      title: 'Accueil',
      description:
        'Créateur de sites Internet, développeur WEB freelance et formateur',
      ogUrl: 'https://pierre-godino.com',
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
            top: Math.floor(Math.random() * 100) + 'vh',
            left: Math.floor(Math.random() * 100) + 'vw',
            animationDelay: Math.floor(Math.random() * 500) + 's',
          }}></div>
      );
    }
    return myStars;
  }, []);

  //Génère la Terre et les étoiles
  useEffect(() => {
    starsArray.current = starsGenerator();
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 1.4,
      width: 2200,
      height: 2200,
      phi: 1,
      theta: 0.01,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [0.102, 0.357, 0.7395],
      markers: [
        // longitude latitude
        { location: [43.6, 1.433333], size: 0.03 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        if (window.innerWidth > 1200) phi += 0.001;
        else {
          phi = 2;
        }
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <MainContainer>
      {metaContentGenerator}
      <section id="landing">
        {starsArray.current}
        <canvas ref={canvasRef} id="globe" />
        <div id="content">
          <h1>
            <GlitchHandler sentences={prefixArray.current} delay={17000} />
            <GlitchHandler sentences={titleArray.current} delay={8500} />
          </h1>
          <i>
            <TextSlider textArray={sentencesArray.current} delay={8500} />
          </i>
        </div>
      </section>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  background: #040e1d;
  width: 100vw;
  height: 93vh;
  display: flex;
  flex-direction: column;
  margin-top: 7vh;

  section#landing {
    display: flex;
    position: relative;
    height: 100vh;
    width: 100vw;
    overflow: hidden;

    #content {
      padding: 5vw;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 50vw;
      justify-content: center;
      gap: 10px;

      h1 {
        margin-top: -20vh;
        font-family: 'Space Mono', monospace;
        font-size: 2.5rem;
        text-shadow: 1px 1px 5px rgba(250, 250, 250, 0.7);
        color: rgba(255, 255, 255, 0.8);

        @media (max-width: 600px) {
          margin-top: -50vh;
          width: 90vw;
        }
      }

      i {
        color: rgba(255, 255, 255, 0.6);
        text-shadow: 1px 1px 4px rgba(250, 250, 250, 0.4);
        font-size: 1.2rem;
        margin-left: 10px;
      }

      @media (max-width: 600px) {
        width: 70vw;
      }
    }

    #globe {
      width: 1500px;
      height: 1500px;
      position: absolute;
      top: 5vh;
      left: 40vw;
      z-index: 2;
      border-radius: 50%;
      @media (max-width: 1250px) {
        & {
          left: 20vw;
        }
      }
      @media (max-width: 600px) {
        & {
          left: 10vw;
        }
      }
    }

    .star {
      background: #fafafa;
      z-index: 1;
      position: absolute;
      box-shadow: 0px 0px 5px 0px rgba(255, 255, 255, 0.9);
      animation: 6s star_glow infinite linear;
    }
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

export default Home;
