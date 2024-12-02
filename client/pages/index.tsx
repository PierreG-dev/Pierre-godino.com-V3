import React, {
  useCallback,
  useContext,
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
import CustomLink from '../src/components/Layout/routing/CustomLink';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { BackgroundContext } from '../src/contexts/Contexts';

const Home: NextPage = () => {
  // --- Background
  const { background } = useContext(BackgroundContext);
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
    'des développeurs',
    'a developer',
    'a trainer',
    'the internet',
    'developers',
  ]);
  const sentencesArray = useRef<string[]>([
    "Les logiciels et les cathédrales, c'est un peu la même chose: d'abord on les construit, ensuite on prie.",
    'Il y a 10 types de personnes dans le monde : ceux qui comprennent le binaire et ceux qui ne le comprennent pas.',
    'Toute technologie suffisamment avancée est indiscernable de la magie.',
    "Enseigner l'informatique, c'est comme apprendre à quelqu'un à nager... dans une piscine pleine de requins appelés 'bugs'.",
    'Software and cathedrals are a bit the same thing: first we build them, then we pray.',
    "There are 10 types of people in the world: those who understand binary and those who don't.",
    'Any sufficiently advanced technology is indistinguishable from magic.',
    "Teaching computer science is like teaching someone to swim... in a pool full of sharks called 'bugs'.",
  ]);
  const canvasRef = useRef();

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

  //Génère la Terre et les étoiles
  useEffect(() => {
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
        {background}
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

        <div id="links">
          <CustomLink href="/pricing">
            <button id="pricing_btn">
              <FormatListBulletedIcon />
              Prestations
            </button>
          </CustomLink>
          <CustomLink href="/about">
            <button id="about_btn">
              <span>{'{ '}</span>Compétences techniques<span>{' }'}</span>
            </button>
          </CustomLink>
        </div>
      </section>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  background: #040e1d;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 7vh;

  section#landing {
    display: flex;
    flex-direction: column;
    padding-top: 20vh;
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
      z-index: 5;

      h1 {
        height: 100px;
        /* margin-top: -20vh; */
        font-family: 'Space Mono', monospace;
        font-size: 2.5rem;
        text-shadow: 1px 1px 5px rgba(250, 250, 250, 0.7);
        color: rgba(255, 255, 255, 0.8);

        @media (max-width: 600px) {
          /* margin-top: -50vh; */
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

    #links {
      display: flex;
      padding-left: 5vw;
      gap: 25px;
      width: 50vw;
      min-width: fit-content;
      z-index: 5;
      padding-top: 25px;

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        font-size: 1.2rem;
        color: rgba(255, 255, 255, 0.7);
        border: 1px solid rgba(255, 255, 255, 0.25);
        background: rgba(255, 255, 255, 0.25);
        box-shadow: 0 0px 7px rgba(255, 255, 255, 0.3),
          inset 0 0px 7px rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(1px);
        border-radius: 3px;
        font-family: 'Montserrat';
        width: 380px;
        height: 100px;
        transition: 0.1s;

        button {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: bold;
          letter-spacing: 2px;

          span {
            font-family: 'Montserrat';
            font-size: 2.8rem;
            font-weight: 500;
            transform: translateY(-5px);
            color: rgb(231, 76, 60);
          }

          svg {
            color: rgb(46, 204, 113);
            font-size: 2.4rem;
          }
        }

        &:has(#about_btn):hover {
          &:hover {
            background: rgba(231, 76, 60, 0.3);
            border: 1px solid rgb(231, 76, 60);
            box-shadow: 0px 0px 7px 1px rgb(231, 76, 60);
          }

          span {
            color: rgb(231, 76, 60);
            filter: drop-shadow(0px 0px 5px rgba(231, 76, 60, 0.4));
          }
        }

        &:has(#pricing_btn):hover {
          &:hover {
            background: rgba(46, 204, 113, 0.3);
            border: 1px solid rgb(46, 204, 113);
            box-shadow: 0px 0px 7px 1px rgb(46, 204, 113);
          }

          svg {
            filter: drop-shadow(0px 0px 5px rgba(46, 204, 113, 0.4));
          }
        }
      }

      @media (max-width: 1300px) {
        padding-top: 50px;

        a {
          font-size: 1rem;
          width: 300px;

          button {
            gap: 5px;
            span {
              font-size: 1.9rem;
              transform: translateY(-1px);
            }
          }
        }
      }

      @media (max-width: 920px) {
        display: none;
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
  }
`;

export default Home;
