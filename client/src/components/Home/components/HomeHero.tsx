import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import EuroIcon from '@mui/icons-material/Euro';
import PhoneIcon from '@mui/icons-material/Phone';
import GroupsIcon from '@mui/icons-material/Groups';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

import dynamic from 'next/dynamic';
import CustomLink from '../../Layout/routing/CustomLink';
import COMPUTER from '../lordicons/computer_lordicon';
import SHOP from '../lordicons/shop_lordicon';
import APP from '../lordicons/app_lordicon';
import BOOK from '../lordicons/book_lordicon';

import MALT_LOGO from '@/assets/global/MALT_LOGO.png';
import GOOGLE_LOGO from '@/assets/global/google.png';
import STAR from '@/assets/icons/star.png';
import TARGET from '@/assets/icons/target.png';
import Image from 'next/image';

import LOGO from '@/assets/global/LOGO.png';

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
          <header>
            <Image
              src={LOGO}
              width={150}
              height={80}
              alt="Logo pierre godino"
              priority
            />
            <div>
              <big>
                Pierre
                <strong>GODINO</strong>
              </big>
              <em>Expert WEB & Marketing Digital</em>
            </div>
          </header>

          <main>
            <ul>
              <li>
                <GroupsIcon style={{ color: '#3498db' }} />
                <p>
                  Acquisition <br />
                  de clientèle
                </p>
              </li>
              <li>
                <TrendingUpIcon style={{ color: '#2ecc71' }} />
                <p>
                  Référencement <br />
                  Google
                </p>
              </li>
              <li>
                <AutoAwesomeIcon style={{ color: '#f39c12' }} />
                <p>
                  Refonte <br />
                  de sites
                </p>
              </li>
            </ul>
          </main>
        </div>

        <div id="hero_notes">
          <div>
            <Image
              width={50}
              height={50}
              src={GOOGLE_LOGO}
              alt="google"
              priority
            />
            <div>
              {' '}
              <em>
                <b>Google</b> : 5/5
              </em>
              <div className="stars">
                {Array(5)
                  .fill(null)
                  .map((_, index) => (
                    <Image
                      width={20}
                      height={20}
                      key={index}
                      src={STAR}
                      alt="Etoile"
                      priority
                    />
                  ))}
              </div>
            </div>
          </div>
          <div>
            <Image width={50} height={50} src={MALT_LOGO} alt="malt" priority />

            <div>
              {' '}
              <em>
                <b>Malt</b> : 5/5
              </em>
              <div className="stars">
                {Array(5)
                  .fill(null)
                  .map((_, index) => (
                    <Image
                      width={20}
                      height={20}
                      key={index}
                      src={STAR}
                      alt="Etoile"
                      priority
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>

        <div id="links">
          <a href="tel:+33767249980">
            <button id="tel_btn">
              <PhoneIcon />
              <p>
                Devis gratuit & personnalisé <br />
                <span>07 67 24 99 80</span>
              </p>
            </button>
          </a>
          <CustomLink href="/offres/creation-site-internet">
            <button id="pricing_btn">
              <EuroIcon />
              Combien ça coûte ?
            </button>
          </CustomLink>
          <CustomLink href={'/deroulement-creation-de-site-internet'}>
            <button id="about_btn">
              <span>{'{ '}</span>Comment se passent mes prestations ?
              <span>{' }'}</span>
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
                />
              )}
            </div>
            <h1>Création de sites internet</h1>
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
  padding-top: 50px;
  gap: 50px;

  @media (max-width: 1400px) {
    flex-direction: column;
    align-items: center;
  }

  section#landing {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* gap: 100px; */
    position: relative;
    flex: 1;
    width: 100%;
    max-width: 900px;
    /* min-width: 600px; */
    padding: 0 50px;

    @media (max-width: 500px) {
      /* gap: 25px; */
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
      font-family: 'Montserrat';
      color: rgba(255, 255, 255, 0.8);

      header {
        display: flex;
        gap: 5px;

        img {
          object-fit: contain;
        }

        div {
          display: flex;
          flex-direction: column;
          big {
            display: flex;
            gap: 10px;
            font-size: 2.5rem;
          }
          em {
            font-size: 1.5rem;
            font-weight: 500;
          }
        }
        @media (max-width: 600px) {
          img {
            width: 80px;
          }

          div {
            big {
              font-size: 1.5rem;
            }

            em {
              font-size: 1rem;
            }
          }
        }
      }

      main {
        width: 100%;

        ul {
          display: flex;
          justify-content: space-around;
          /* margin-top: 50px */
          padding: 0px 0 50px 0;

          li {
            display: flex;
            flex-direction: column;
            align-items: center;

            p {
              text-align: center;
              font-size: 1.3rem;
              font-weight: 500;
              font-style: italic;
            }

            svg {
              font-size: 2.5rem;
            }
          }

          @media (max-width: 600px) {
            gap: 0;
            li {
              p {
                font-size: 0.8rem;
              }

              svg {
                font-size: 1.9rem;
              }
            }
          }
        }
      }

      strong {
        color: #ec4434;
        text-shadow: 0px 0px 5px rgba(231, 76, 60, 0.4);
      }
    }

    #hero_notes {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 25px;
      padding: 0 10px;

      // wrapper
      & > div {
        display: flex;
        align-items: end;
        gap: 15px;

        // logo
        & > img {
          width: 50px;

          @media (max-width: 500px) {
            width: 35px;
          }
        }

        // wrapper note + etoiles
        & > div {
          display: flex;
          flex-direction: column;

          em {
            font-family: 'Montserrat';
            opacity: 0.7;
            color: #fafafa;

            @media (max-width: 500px) {
              font-size: 0.9rem;
            }
          }

          // etoiles
          .stars {
            display: flex;

            img {
              width: 20px;
              height: 20px;
              @media (max-width: 500px) {
                width: 10px;
                height: 10px;
              }
            }
          }
        }
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
        /* flex: 1; */
        /* min-width: 320px; */
        max-width: calc(100vw - 100px);
        height: 100px;

        button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-weight: bold;
          letter-spacing: 2px;
          width: 100%;

          @media (max-width: 500px) {
            font-size: 0.9rem;

            svg {
              font-size: 2rem !important;
            }
          }
        }

        &:has(#about_btn) {
          width: calc(50% - (15px / 2));

          @media (max-width: 565px) {
            width: 100%;
          }
          &:hover {
            background: rgba(231, 76, 60, 0.3);
            border: 1px solid rgb(231, 76, 60);
            box-shadow: 0px 0px 7px 1px rgb(231, 76, 60);
          }

          span {
            font-family: 'Montserrat';
            font-size: 2.8rem;
            font-weight: 500;
            transform: translateY(-5px);
            color: rgb(231, 76, 60);
            filter: drop-shadow(0px 0px 5px rgba(231, 76, 60, 0.4));
          }
        }

        &:has(#pricing_btn) {
          width: calc(50% - (15px / 2));

          @media (max-width: 565px) {
            width: 100%;
          }
          svg {
            color: rgba(41, 128, 185, 1);
            font-size: 2.4rem;
          }

          &:hover {
            background: rgba(41, 128, 185, 0.3);
            border: 1px solid rgba(41, 128, 185, 1);
            box-shadow: 0px 0px 7px 1px rgba(41, 128, 185, 1);
          }

          svg {
            filter: drop-shadow(0px 0px 5px rgba(41, 128, 185, 0.4));
          }
        }

        &:has(#tel_btn) {
          width: 100%;

          span {
            color: rgb(46, 204, 113);
            display: inline-block;
          }

          svg {
            color: rgb(46, 204, 113);
            font-size: 3.2rem;
          }
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
    max-width: 800px;
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
        font-family: 'Bebas Neue', serif;
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

        h2,
        h1 {
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
