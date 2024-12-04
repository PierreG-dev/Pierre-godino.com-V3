import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import { NextPage } from 'next';
import Head from 'next/head';
import CustomLink from '../src/components/Layout/routing/CustomLink';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { BackgroundContext } from '../src/contexts/Contexts';
import dynamic from 'next/dynamic';
import COMPUTER from '../src/components/Home/lordicons/computer_lordicon.js';
import SHOP from '../src/components/Home/lordicons/shop_lordicon.js';
import APP from '../src/components/Home/lordicons/app_lordicon.js';
import BOOK from '../src/components/Home/lordicons/book_lordicon.js';
import bookIcon from '../src/components/Home/lordicons/book_lordicon.js';
const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

const defaultOptions = {
  loop: false,
  autoplay: true, // Désactivé pour contrôle manuel

  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const Home: NextPage = () => {
  // --- Background
  const { background } = useContext(BackgroundContext);

  // --- Lordicons
  const ComputerIconRef = useRef<any>(null);
  const ShopIconRef = useRef<any>(null);
  const AppIconRef = useRef<any>(null);
  const BookIconRef = useRef<HTMLDivElement>(null);

  // --- STATES
  const [displayedPrestations, setDisplayedPrestations] = useState<
    0 | 1 | 2 | 3 | 4
  >(0);

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
  }, []);

  useEffect(() => {
    let timer = setTimeout(() => {
      setDisplayedPrestations(1);
      timer = setTimeout(() => {
        setDisplayedPrestations(2);
        timer = setTimeout(() => {
          setDisplayedPrestations(3);
          timer = setTimeout(() => {
            setDisplayedPrestations(4);
          }, 300);
        }, 300);
      }, 300);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <MainContainer>
      {metaContentGenerator}
      {background}
      <section id="landing">
        <div id="content">
          <h1>
            <span>
              Salut, moi c'est <strong>Pierre</strong>
            </span>
            Je développe des <strong>sites internet</strong>,{' '}
            <strong>boutiques en ligne</strong> et <strong>applications</strong>
            .
          </h1>
          {/* <h1>
            <GlitchHandler sentences={prefixArray.current} delay={17000} />
            <GlitchHandler sentences={titleArray.current} delay={8500} />
          </h1>
          <i>
            <TextSlider textArray={sentencesArray.current} delay={8500} />
          </i> */}
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

      <section id="prestations">
        {displayedPrestations && (
          <ul>
            <li>
              <div>
                {displayedPrestations >= 1 && (
                  <Lottie
                    options={{ ...defaultOptions, animationData: COMPUTER }}
                    height={100}
                    width={100}
                    ref={ComputerIconRef}
                  />
                )}
              </div>
              <h2>Création de sites internet</h2>
            </li>
            <li className="reverse" style={{ animationDelay: '0.3s' }}>
              <div>
                {displayedPrestations >= 2 && (
                  <Lottie
                    options={{ ...defaultOptions, animationData: SHOP }}
                    height={100}
                    width={100}
                    ref={ShopIconRef}
                  />
                )}
              </div>
              <h2>Boutiques en ligne</h2>
            </li>
            <li style={{ animationDelay: '0.6s' }}>
              <div>
                {displayedPrestations >= 3 && (
                  <Lottie
                    options={{ ...defaultOptions, animationData: APP }}
                    height={100}
                    width={100}
                    ref={AppIconRef}
                  />
                )}
              </div>
              <h2>Applications</h2>
            </li>
            <li className="reverse" style={{ animationDelay: '0.9s' }}>
              <div>
                {displayedPrestations >= 4 && (
                  <Lottie
                    options={{ ...defaultOptions, animationData: BOOK }}
                    height={100}
                    width={100}
                    ref={BookIconRef}
                  />
                )}
              </div>
              <h2>Formation</h2>
            </li>
          </ul>
        )}
      </section>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  background: #040e1d;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  padding-top: 7vh;

  section#landing {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 100px;
    padding-top: 100px;
    position: relative;
    height: fit-content;
    width: 50%;

    #content {
      padding: 5vw;
      padding-top: 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      justify-content: center;
      gap: 10px;
      z-index: 5;
      height: fit-content;
      h1 {
        /* height: 100px; */
        font-family: 'Space Mono', monospace;
        font-size: 1.7rem;
        font-weight: normal;
        text-shadow: 1px 1px 5px rgba(250, 250, 250, 0.5);
        color: rgba(255, 255, 255, 0.8);

        span {
          display: block;
          font-size: 2.5rem;

          strong {
            color: rgb(231, 76, 60);

            text-shadow: 0px 0px 5px rgba(231, 76, 60, 0.4);
          }
        }
      }

      i {
        color: rgba(255, 255, 255, 0.6);
        text-shadow: 1px 1px 4px rgba(250, 250, 250, 0.4);
        font-size: 1.2rem;
        margin-left: 10px;
      }
    }

    #links {
      display: flex;
      padding-left: 5vw;
      gap: 25px;
      width: 100%;
      min-width: fit-content;
      justify-content: center;
      flex-wrap: wrap;
      z-index: 5;

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
        width: 100%;
        max-width: 300px;
        height: 100px;
        // transition: 0.1s;

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
    }
  }

  section#prestations {
    padding: 0;
    margin: 0;
    width: 50vw;
    height: 100vh;

    ul {
      width: 100%;
      height: 100%;
      list-style: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;

      li {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 10px;
        font-family: 'BebasNeue';
        color: #fafafa;
        width: 400px;
        max-width: 90vw;
        height: 100px;
        animation: appearFromLeft 0.5s 1 ease both;

        & > div {
          margin: 0 !important;
          width: 100px;
        }

        &.reverse {
          flex-direction: row-reverse;
          animation: appearFromRight 0.5s 1 ease both;
        }

        h2 {
          font-size: 2rem;
        }

        @keyframes appearFromLeft {
          0% {
            opacity: 0;
            transform: translate3d(50px, 0, 0);
          }
          100% {
            opacity: 0.9;
            transform: translate3d(0, 0, 0);
          }
        }
        @keyframes appearFromRight {
          0% {
            opacity: 0;
            transform: translate3d(-50px, 0, 0);
          }
          100% {
            opacity: 0.9;
            transform: translate3d(0, 0, 0);
          }
        }
      }
    }
  }
`;

export default Home;
