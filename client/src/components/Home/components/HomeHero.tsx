import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import dynamic from 'next/dynamic';
import CustomLink from '../../Layout/routing/CustomLink';
import COMPUTER from '../lordicons/computer_lordicon';
import SHOP from '../lordicons/shop_lordicon';
import APP from '../lordicons/app_lordicon';
import BOOK from '../lordicons/book_lordicon';

const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

const defaultOptions = {
  loop: false,
  autoplay: true, // Désactivé pour contrôle manuel

  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const HomeHero: FC = () => {
  // --- STATES
  const [displayedPrestations, setDisplayedPrestations] = useState<
    0 | 1 | 2 | 3 | 4
  >(0);

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
        <ul>
          <li
            style={{
              animation:
                displayedPrestations >= 1
                  ? 'appearFromLeft 0.5s 1 ease both'
                  : 'none',
            }}>
            <div>
              {displayedPrestations >= 1 && (
                <Lottie
                  options={{ ...defaultOptions, animationData: COMPUTER }}
                  width={'100%'}
                  // ref={ComputerIconRef}
                />
              )}
            </div>
            <h2>Création de sites internet</h2>
          </li>
          <li
            className="reverse"
            style={{
              animation:
                displayedPrestations >= 2
                  ? 'appearFromRight 0.5s 1 ease both'
                  : 'none',
            }}>
            <div>
              {displayedPrestations >= 2 && (
                <Lottie
                  options={{ ...defaultOptions, animationData: SHOP }}
                  width={'100%'}
                  // ref={ShopIconRef}
                />
              )}
            </div>
            <h2>Boutiques en ligne</h2>
          </li>
          <li
            style={{
              animation:
                displayedPrestations >= 3
                  ? 'appearFromLeft 0.5s 1 ease both'
                  : 'none',
            }}>
            <div>
              {displayedPrestations >= 3 && (
                <Lottie
                  options={{ ...defaultOptions, animationData: APP }}
                  width={'100%'}
                  // ref={AppIconRef}
                />
              )}
            </div>
            <h2>Applications</h2>
          </li>
          <li
            className="reverse"
            style={{
              animation:
                displayedPrestations >= 4
                  ? 'appearFromRight 0.5s 1 ease both'
                  : 'none',
            }}>
            <div>
              {displayedPrestations >= 4 && (
                <Lottie
                  options={{ ...defaultOptions, animationData: BOOK }}
                  width={'100%'}
                  // ref={BookIconRef}
                />
              )}
            </div>
            <h2>Formation</h2>
          </li>
        </ul>
      </section>
    </MainContainer>
  );
};

const MainContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  z-index: 1;
  width: 100%;
  padding-top: 100px;
  gap: 50px;

  section#landing {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 100px;
    position: relative;
    flex: 1;
    width: 100%;
    max-width: 800px;
    padding: 0 50px;

    @media (max-width: 500px) {
      gap: 25px;
    }

    #content {
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
        font-family: 'Space Mono', monospace;
        font-size: 1.7rem;
        font-weight: normal;
        text-shadow: 1px 1px 5px rgba(250, 250, 250, 0.5);
        color: rgba(255, 255, 255, 0.8);

        strong {
          color: rgb(222, 103, 90);
          text-shadow: 0px 0px 5px rgba(231, 76, 60, 0.4);
        }

        span {
          display: block;
          font-size: 2.5rem;
          margin-bottom: 15px;

          strong {
            color: rgb(231, 76, 60);

            text-shadow: 0px 0px 5px rgba(231, 76, 60, 0.4);
          }
        }

        @media (max-width: 500px) {
          span {
            font-size: 1.7rem;
          }
          font-size: 1rem;
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
      gap: 15px;
      width: 100%;
      min-width: fit-content;
      justify-content: space-between;
      flex-wrap: wrap;
      z-index: 5;

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        font-size: 1.2rem;
        color: rgba(255, 255, 255, 0.7);
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(255, 255, 255, 0.05);
        /* box-shadow: 0 0px 7px rgba(255, 255, 255, 0.1); */
        backdrop-filter: blur(1px);
        border-radius: 3px;
        font-family: 'Montserrat';
        flex: 1;
        /* min-width: 320px; */
        max-width: calc(100vw - 100px);
        height: 100px;

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
          @media (max-width: 500px) {
            font-size: 0.9rem;

            svg,
            span {
              font-size: 2rem !important;
            }
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
    margin: 0;
    width: 100%;
    max-width: 900px;
    padding: 0 50px;

    ul {
      width: 100%;
      height: 100%;
      list-style: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 40px;

      li {
        opacity: 0;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 0px;
        font-family: 'BebasNeue';
        color: #fafafa;
        width: 600px;
        max-width: calc(100vw - 100px);
        height: 100px;

        & > div {
          margin: 0 !important;
          width: 150px;
          overflow: visible;

          @media (max-width: 460px) {
            width: 100px;
          }
        }

        &.reverse {
          gap: 0px;
          flex-direction: row-reverse;
          text-align: right;
        }

        h2 {
          font-size: 2.5rem;
          letter-spacing: 1px;
          width: calc(100% - 150px);

          @media (max-width: 460px) {
            font-size: 1.5rem;
            width: calc(100% - 100px);
          }
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

export default HomeHero;
