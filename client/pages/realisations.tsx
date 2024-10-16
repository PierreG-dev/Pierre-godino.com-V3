import React, {
  useCallback,
  useState,
  useEffect,
  useRef,
  useMemo,
} from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import LinkIcon from '@mui/icons-material/Link';
import { useRouter } from 'next/router';
import Head from 'next/head';

export type Realisation = {
  name?: string;
  sup?: string;
  icon?: string;
  background?: string;
  auraColor?: string;
  filter?: string;
  link?: string;
  description?: string;
};

const data: Realisation[] = [
  {
    name: 'Portfolio',
    sup: 'V3',
    icon: '/res/LOGO.svg',
    background:
      'radial-gradient(circle, rgba(38,2,0,1) 0%, rgba(96,15,0,1) 100%, rgba(96,15,0,1) 100%)',
    auraColor: '#600f00',
    filter: 'drop-shadow(1px 1px 6px rgba(0,0,0,0.7))',
    link: 'https://www.pierre-godino.com',
    description: 'Troisième version de mon portfolio | Vitrine',
  },
  {},
  {
    name: 'Portfolio',
    sup: 'V2',
    icon: '/res/LOGO.svg',
    background:
      'radial-gradient(circle, rgba(38,2,0,1) 0%, rgba(96,15,0,1) 100%, rgba(96,15,0,1) 100%)',
    auraColor: '#600f00',
    filter: 'drop-shadow(1px 1px 6px rgba(0,0,0,0.7))',
    link: '/V2/index.html',
    description: 'Deuxième version de mon portfolio',
  },
  {},
  {
    name: 'LEARN',
    sup: 'V1',
    icon: '/icons/LEARN.png',
    background:
      'radial-gradient(circle, rgba(126,67,32,1) 0%, rgba(225,117,53,1) 100%)',
    auraColor: '#dc7133',
    filter: 'drop-shadow(1px 1px 3px rgba(0,0,0,0.7))',
    link: '/LEARN_V1/index.html',
    description: "1ère version de ma plateforme d'apprentissage",
  },

  {},
  {
    name: 'LEARN',
    sup: 'V2',
    icon: '/icons/LEARN.png',
    background:
      'radial-gradient(circle, rgba(126,67,32,1) 0%, rgba(225,117,53,1) 100%)',
    auraColor: '#dc7133',
    filter: 'drop-shadow(1px 1px 3px rgba(0,0,0,0.7))',
    link: 'https://learn.pierre-godino.com',
    description: "2ème version de ma plateforme d'apprentissage",
  },
];

const Realisations: NextPage = () => {
  const [selectedPlanet, setSelectedPlanet] = useState<number>(-1);
  const [windowSize, setWindowSize] = useState(999);

  const starsArray = useRef<JSX.Element[]>();

  // Générateur d'étoiles
  const starsGenerator = useCallback(() => {
    // --- Création du tableau d'étoiles
    const myStars: JSX.Element[] = [];

    // --- Boucle qui génère les étoiles et qui les push dans le tableau
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

  // Gère la position de la planète en fonction de son ordre (max 8)
  const positionPicker = useCallback(
    (key) => {
      switch (key) {
        case 0:
          return {
            top:
              -500 /
              (windowSize > 1350
                ? 1
                : windowSize > 1025
                ? 1.7
                : windowSize > 660
                ? 2
                : 2.5),
            left:
              -500 /
              (windowSize > 1350
                ? 1
                : windowSize > 1025
                ? 1.7
                : windowSize > 660
                ? 2
                : 2.5),
            animationName: 'invert',
          };
        case 1:
          return {
            top:
              -653.56 /
              (windowSize > 1350
                ? 1
                : windowSize > 1025
                ? 1.7
                : windowSize > 660
                ? 2
                : 2.5),
            left:
              -100 /
              (windowSize > 1350
                ? 1
                : windowSize > 1025
                ? 1.7
                : windowSize > 660
                ? 2
                : 2.5),
            animationName: 'invert',
          };
        case 2:
          return {
            top:
              -500 /
              (windowSize > 1350
                ? 1
                : windowSize > 1025
                ? 1.7
                : windowSize > 660
                ? 2
                : 2.5),
            left:
              300 /
              (windowSize > 1350
                ? 1
                : windowSize > 1025
                ? 1.7
                : windowSize > 660
                ? 2
                : 2.5),
            animationName: 'invert',
          };
        case 3:
          return {
            top:
              -100 /
              (windowSize > 1350
                ? 1
                : windowSize > 1025
                ? 1.7
                : windowSize > 660
                ? 2
                : 2.5),
            left:
              453.56 /
              (windowSize > 1350
                ? 1
                : windowSize > 1025
                ? 1.7
                : windowSize > 660
                ? 2
                : 2.5),
            animationName: 'invert',
          };
        case 4:
          return {
            top:
              300 /
              (windowSize > 1350
                ? 1
                : windowSize > 1025
                ? 1.7
                : windowSize > 660
                ? 2
                : 2.5),
            left:
              300 /
              (windowSize > 1350
                ? 1
                : windowSize > 1025
                ? 1.7
                : windowSize > 660
                ? 2
                : 2.5),
            animationName: 'invert',
          };
        case 5:
          return {
            top:
              453.56 /
              (windowSize > 1350
                ? 1
                : windowSize > 1025
                ? 1.7
                : windowSize > 660
                ? 2
                : 2.5),
            left:
              -100 /
              (windowSize > 1350
                ? 1
                : windowSize > 1025
                ? 1.7
                : windowSize > 660
                ? 2
                : 2.5),
            animationName: 'invert',
          };
        case 6:
          return {
            top:
              300 /
              (windowSize > 1350
                ? 1
                : windowSize > 1025
                ? 1.7
                : windowSize > 660
                ? 2
                : 2.5),
            left:
              -500 /
              (windowSize > 1350
                ? 1
                : windowSize > 1025
                ? 1.7
                : windowSize > 660
                ? 2
                : 2.5),
            animationName: 'invert',
          };
        case 7:
          return {
            top:
              -100 /
              (windowSize > 1350
                ? 1
                : windowSize > 1025
                ? 1.7
                : windowSize > 660
                ? 2
                : 2.5),
            left:
              -653.56 /
              (windowSize > 1350
                ? 1
                : windowSize > 1025
                ? 1.7
                : windowSize > 660
                ? 2
                : 2.5),
            animationName: 'invert',
          };
        default:
          console.error('Probleme de position');
      }
    },
    [windowSize]
  );

  // Sélection de planètes
  const selectPlanet = useCallback((e) => {
    // --- Vérification de l'endroit du clic
    if (
      e.target.localName !== 'img' &&
      e.target.localName !== 'span' &&
      e.target.localName === 'div' &&
      e.target.className !== 'planet'
    ) {
      // --- Le clic est en dehors d'une planete => on déselectionne
      setSelectedPlanet(-1);
      return;
    }

    // --- Si la planete est déjà selectionnée alors on déselectionne, sinon on sélectionne
    const key = parseInt(e.target.dataset.key);
    setSelectedPlanet((previousState) => (previousState === key ? -1 : key));
  }, []);

  // Générateur de planètes
  const planetsGenerator = useCallback(() => {
    // -- Parcours la base de données de planètes et les génère puis retourne le tout
    return data.map((elem, key) => {
      if (!elem.name) return [];
      return (
        <div className="pos" style={positionPicker(key)} key={key}>
          <div
            className="planet-container"
            style={{
              animationName: 'scale-' + key,
            }}>
            <div
              className="planet"
              key={key}
              data-key={key}
              style={{
                background: elem.background,
                color: elem.auraColor,
                borderColor: elem.auraColor,
              }}>
              {elem.sup && <span data-key={key}>{elem.sup}</span>}
              <img
                key={key}
                data-key={key}
                src={elem.icon}
                alt={elem.name}
                style={{
                  filter: elem.filter,
                }}
              />
            </div>
            <div
              className="infos-screen"
              style={{
                animationName:
                  selectedPlanet === key
                    ? windowSize < 920
                      ? 'info_screen_active_sm'
                      : windowSize < 1350
                      ? 'info_screen_active_md'
                      : 'info_screen_active_lg'
                    : windowSize < 920
                    ? 'info_screen_idle_sm'
                    : windowSize < 1350
                    ? 'info_screen_idle_md'
                    : 'info_screen_idle_lg',
              }}>
              <div
                className="info-screen-content"
                style={{
                  animationName:
                    selectedPlanet === key
                      ? 'info_screen_content_appear'
                      : 'info_screen_content_disappear',
                  animationDelay: selectedPlanet === key ? '0.7s' : '0s',
                  animationDuration: selectedPlanet === key ? '0.5s' : '0.1s',
                }}>
                <h3>{elem.name}</h3>
                <p>{elem.description}</p>
                {elem.link && (
                  <a href={elem.link} target="_blank" rel="noreferrer">
                    <LinkIcon />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    });
  }, [positionPicker, selectedPlanet, windowSize]);

  useEffect(() => {
    starsArray.current = starsGenerator();
  }, [starsGenerator]);

  useEffect(() => {
    setTimeout(() => {
      setWindowSize(window.innerWidth);
    }, 1000);

    window.addEventListener('resize', () => {
      setWindowSize(window.innerWidth);
    });

    window.addEventListener('click', selectPlanet);

    return () => {
      window.removeEventListener('resize', () => {
        setWindowSize(window.innerWidth);
      });
      window.removeEventListener('click', selectPlanet);
    };
  }, []);

  const router = useRouter();

  // Génère les meta éléments
  const metaContentGenerator = useMemo(() => {
    const metaData = {
      title: 'Réalisations',
      description:
        'Créateur de sites Internet, développeur WEB freelance et formateur | Mes réalisations',
      ogUrl: 'https://pierre-godino.com/realisations',
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
      <div
        id="info_block"
        style={{ display: windowSize < 1250 ? 'block' : 'none' }}>
        Meilleure expérience sur écrans larges
      </div>
      {starsArray.current}

      <div id="planets_container">
        <div id="gravity_center">{planetsGenerator()}</div>
      </div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  padding-top: 7vh;
  background: #040e1d;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  font-family: 'Space Mono', monospace;
  text-shadow: 1px 1px 2px #08666abb;
  letter-spacing: -1px;
  display: flex;
  justify-content: center;
  align-items: center;

  #info_block {
    position: absolute;
    top: 5vh;
    right: 15px;
    color: #08666a;

    text-align: center;
    width: 100%;
  }

  #planets_container {
    transform: rotateX(75deg);
    transform-style: preserve-3d;
    width: 0;
    height: 0;
    top: 50vh;
    left: 50vw;
    z-index: 0;

    @keyframes invert {
      0% {
        transform: rotateX(-90deg) rotateY(360deg) rotateZ(0deg);
      }

      100% {
        transform: rotateX(-90deg) rotateY(0deg) rotateZ(0deg);
      }
    }

    @media (max-width: 1350px) {
      transform: rotateX(75deg) rotateY(35deg);

      .planet {
        width: 170px;
        height: 170px;

        img {
          width: 70px;
        }

        span {
          top: 25px;
          right: 25px;
        }
      }

      @keyframes invert {
        0% {
          transform: rotateX(-90deg) rotateY(360deg) rotateZ(-35deg);
        }

        100% {
          transform: rotateX(-90deg) rotateY(0deg) rotateZ(-35deg);
        }
      }
    }

    @media (max-width: 1025px) {
      transform: rotateX(75deg) rotateY(45deg);

      .planet {
        width: 140px;
        height: 140px;

        img {
          width: 60px;
        }

        span {
          top: 15px;
          right: 15px;
        }
      }

      @keyframes invert {
        0% {
          transform: rotateX(-90deg) rotateY(360deg) rotateZ(-45deg);
        }

        100% {
          transform: rotateX(-90deg) rotateY(0deg) rotateZ(-45deg);
        }
      }
    }

    @media (max-width: 660px) {
      transform: rotateX(75deg) rotateY(60deg);

      .planet {
        width: 100px;
        height: 100px;

        img {
          width: 50px;
        }

        span {
          top: 10px;
          right: 10px;
          font-size: 1.4rem;
        }
      }

      @keyframes invert {
        0% {
          transform: rotateX(-90deg) rotateY(360deg) rotateZ(-60deg);
        }

        100% {
          transform: rotateX(-90deg) rotateY(0deg) rotateZ(-60deg);
        }
      }
    }
  }

  #gravity_center {
    position: absolute;
    top: 30%;
    left: 50%;
    width: 0px;
    height: 0px;
    transform-style: preserve-3d;
    animation-name: orbit;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-duration: 80s;
    z-index: 1;
  }

  .pos {
    animation: 10 invert linear infinite;
    position: absolute;
    animation-duration: 80s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    z-index: 2;
  }

  .planet-container {
    animation-duration: 80s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-delay: -0.5s;
    z-index: 3;

    .planet {
      font-size: 2rem;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      box-shadow: inset 0px 0px 20px 2px, 0px 0px 30px 3px;
      border-width: 1px;
      border-style: solid;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.2s;

      span {
        position: absolute;
        user-select: none;
        top: 35px;
        right: 35px;
        text-shadow: 0px 0px 6px rgba(0, 0, 0, 0.8);
        filter: contrast(120%);
      }

      &:hover {
        transform: scale3d(1.1, 1.1, 1);
        cursor: pointer;
      }

      &:active {
        transform: scale3d(1.05, 1.05, 1);
        cursor: pointer;
      }

      img {
        width: 100px;
        object-fit: cover;
        transition: 0.2s;
        z-index: 0;
      }

      @media (max-width: 1350px) {
      }

      @media (max-width: 800px) {
      }

      @media (max-width: 660px) {
      }
    }

    .infos-screen {
      position: absolute;
      overflow: hidden;
      cursor: help;
      user-select: none;
      background: transparent;
      box-shadow: inset 0px 0px 50px #08666a, 0px 0px 10px #08666a;
      border: 2px solid #08666a;
      color: #08666a;
      z-index: 25;
      backdrop-filter: blur(5px);
      animation-timing-function: ease;
      animation-duration: 0.6s;
      animation-iteration-count: 1;
      animation-fill-mode: both;

      h3 {
        font-size: 2rem;
        text-align: center;
        padding: 3px;
      }

      p {
        text-align: center;
      }

      a {
        transition: 0.2s;
        svg {
          text-align: center;
          width: 100%;
          font-size: 1.7rem;
        }

        &:hover {
          cursor: pointer;
          z-index: 2;
        }

        &:hover svg {
          filter: drop-shadow(0px 0px 5px #fafafa55);
          transform: scale3d(1.1, 1.1, 1);
        }
      }

      .info-screen-content {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 5%;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        animation-timing-function: ease;
        animation-duration: 0.3s;
        animation-iteration-count: 1;
        animation-fill-mode: both;
      }

      @media (max-width: 1350px) {
        h3 {
          font-size: 1.5rem;
        }

        p {
        }
      }

      @media (max-width: 800px) {
        h3 {
          font-size: 1.1rem;
        }

        p {
          font-size: 0.9rem;
        }
      }
    }

    @keyframes info_screen_content_appear {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    @keyframes info_screen_content_disappear {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }

    @keyframes info_screen_active_lg {
      0% {
        width: 0;
        height: 0;
        left: 0;
        top: 0;
        border-width: 2px;
      }
      50% {
        width: 0px;
        height: 200px;
        left: 0;
        top: -100%;
      }
      100% {
        width: 300px;
        height: 200px;
        left: -150%;
        top: -100%;
      }
    }

    @keyframes info_screen_idle_lg {
      0% {
        width: 300px;
        height: 200px;
        top: -100%;
        left: -150%;
      }
      50% {
        width: 0;
        height: 200px;
        top: -100%;
        left: 0;
      }
      100% {
        width: 0;
        height: 0;
        top: 0;
        left: 0;
        border-width: 0px;
      }
    }

    @keyframes info_screen_active_md {
      0% {
        width: 0;
        height: 0;
        left: 0;
        top: 0;
        border-width: 2px;
      }
      50% {
        width: 0px;
        height: 160px;
        left: 0;
        top: -90%;
      }
      100% {
        width: 250px;
        height: 160px;
        left: -140%;
        top: -90%;
      }
    }

    @keyframes info_screen_idle_md {
      0% {
        width: 250px;
        height: 160px;
        top: -90%;
        left: -140%;
      }
      50% {
        width: 0;
        height: 160px;
        top: -90%;
        left: 0;
      }
      100% {
        width: 0;
        height: 0;
        top: 0;
        left: 0;
        border-width: 0px;
      }
    }

    @keyframes info_screen_active_sm {
      0% {
        width: 0;
        height: 0;
        left: 0;
        top: 0;
        border-width: 2px;
      }
      50% {
        width: 0px;
        height: 125px;
        left: 0;
        top: -120%;
      }
      100% {
        width: 200px;
        height: 125px;
        left: -60%;
        top: -120%;
      }
    }

    @keyframes info_screen_idle_sm {
      0% {
        width: 200px;
        height: 125px;
        top: -120%;
        left: -60%;
      }
      50% {
        width: 0;
        height: 125px;
        top: -120%;
        left: 0;
      }
      100% {
        width: 0;
        height: 0;
        top: 0;
        left: 0;
        border-width: 0px;
      }
    }
  }

  @keyframes orbit {
    0% {
      transform: rotateZ(0deg);
    }

    100% {
      transform: rotateZ(-360deg);
    }
  }

  @keyframes invert-1 {
    0% {
      transform: rotateX(-90deg) rotateY(360deg) rotateZ(50deg);
    }

    100% {
      transform: rotateX(-90deg) rotateY(0deg) rotateZ(0deg);
    }
  }
  @keyframes invert-2 {
    0% {
      transform: rotateX(-90deg) rotateY(360deg) rotateZ(0deg);
    }

    100% {
      transform: rotateX(-90deg) rotateY(0deg) rotateZ(0deg);
    }
  }
  @keyframes invert-3 {
    0% {
      transform: rotateX(-90deg) rotateY(360deg) rotateZ(0deg);
    }

    100% {
      transform: rotateX(-90deg) rotateY(0deg) rotateZ(0deg);
    }
  }
  @keyframes invert-4 {
    0% {
      transform: rotateX(-90deg) rotateY(360deg) rotateZ(0deg);
    }

    100% {
      transform: rotateX(-90deg) rotateY(0deg) rotateZ(0deg);
    }
  }
  @keyframes invert-5 {
    0% {
      transform: rotateX(-90deg) rotateY(360deg) rotateZ(0deg);
    }

    100% {
      transform: rotateX(-90deg) rotateY(0deg) rotateZ(0deg);
    }
  }
  @keyframes invert-6 {
    0% {
      transform: rotateX(-90deg) rotateY(360deg) rotateZ(0deg);
    }

    100% {
      transform: rotateX(-90deg) rotateY(0deg) rotateZ(0deg);
    }
  }
  @keyframes invert-7 {
    0% {
      transform: rotateX(-90deg) rotateY(360deg) rotateZ(0deg);
    }

    100% {
      transform: rotateX(-90deg) rotateY(0deg) rotateZ(0deg);
    }
  }
  @keyframes invert-8 {
    0% {
      transform: rotateX(-90deg) rotateY(360deg) rotateZ(0deg);
    }

    100% {
      transform: rotateX(-90deg) rotateY(0deg) rotateZ(0deg);
    }
  }

  @keyframes scale {
    0% {
      transform: scale3d(0.75, 0.75, 5);
    }
    12% {
      transform: scale3d(0.875, 0.875, 5);
    }
    25% {
      transform: scale3d(1, 1, 5);
    }
    37% {
      transform: scale3d(1.125, 1.125, 5);
    }
    50% {
      transform: scale3d(1, 1, 5);
    }
    62% {
      transform: scale3d(0.875, 0.875, 5);
    }
    75% {
      transform: scale3d(0.75, 0.75, 5);
    }
    87% {
      transform: scale3d(0.625, 0.625, 5);
    }
    100% {
      transform: scale3d(0.75, 0.75, 5);
    }
  }
  @keyframes scale-0 {
    0% {
      transform: scale3d(0.75, 0.75, 5);
    }
    12% {
      transform: scale3d(0.875, 0.875, 5);
    }
    25% {
      transform: scale3d(1, 1, 5);
    }
    37% {
      transform: scale3d(1.125, 1.125, 5);
    }
    50% {
      transform: scale3d(1, 1, 5);
    }
    62% {
      transform: scale3d(0.875, 0.875, 5);
    }
    75% {
      transform: scale3d(0.75, 0.75, 5);
    }
    87% {
      transform: scale3d(0.625, 0.625, 5);
    }
    100% {
      transform: scale3d(0.75, 0.75, 5);
    }
  }
  @keyframes scale-1 {
    0% {
      transform: scale3d(0.625, 0.625, 5);
    }
    12% {
      transform: scale3d(0.75, 0.75, 5);
    }
    25% {
      transform: scale3d(0.875, 0.875, 5);
    }
    37% {
      transform: scale3d(1, 1, 5);
    }
    50% {
      transform: scale3d(1.125, 1.125, 5);
    }
    62% {
      transform: scale3d(1, 1, 5);
    }
    75% {
      transform: scale3d(0.875, 0.875, 5);
    }
    87% {
      transform: scale3d(0.75, 0.75, 5);
    }
    100% {
      transform: scale3d(0.625, 0.625, 5);
    }
  }
  @keyframes scale-2 {
    0% {
      transform: scale3d(0.75, 0.75, 5);
    }
    12% {
      transform: scale3d(0.625, 0.625, 5);
    }
    25% {
      transform: scale3d(0.75, 0.75, 5);
    }
    37% {
      transform: scale3d(0.875, 0.875, 5);
    }
    50% {
      transform: scale3d(1, 1, 5);
    }
    62% {
      transform: scale3d(1.125, 1.125, 5);
    }
    75% {
      transform: scale3d(1, 1, 5);
    }
    87% {
      transform: scale3d(0.875, 0.875, 5);
    }
    100% {
      transform: scale3d(0.75, 0.75, 5);
    }
  }
  @keyframes scale-3 {
    0% {
      transform: scale3d(0.875, 0.875, 5);
    }
    12% {
      transform: scale3d(0.75, 0.75, 5);
    }
    25% {
      transform: scale3d(0.625, 0.625, 5);
    }
    37% {
      transform: scale3d(0.75, 0.75, 5);
    }
    50% {
      transform: scale3d(0.875, 0.875, 5);
    }
    62% {
      transform: scale3d(1, 1, 5);
    }
    75% {
      transform: scale3d(1.125, 1.125, 5);
    }
    87% {
      transform: scale3d(1, 1, 5);
    }
    100% {
      transform: scale3d(0.875, 0.875, 5);
    }
  }
  @keyframes scale-4 {
    0% {
      transform: scale3d(1, 1, 5);
    }
    12% {
      transform: scale3d(0.875, 0.875, 5);
    }
    25% {
      transform: scale3d(0.75, 0.75, 5);
    }
    37% {
      transform: scale3d(0.625, 0.625, 5);
    }
    50% {
      transform: scale3d(0.75, 0.75, 5);
    }
    62% {
      transform: scale3d(0.875, 0.875, 5);
    }
    75% {
      transform: scale3d(1, 1, 5);
    }
    87% {
      transform: scale3d(1.125, 1.125, 5);
    }
    100% {
      transform: scale3d(1, 1, 5);
    }
  }
  @keyframes scale-5 {
    0% {
      transform: scale3d(1.125, 1.125, 5);
    }
    12% {
      transform: scale3d(1, 1, 5);
    }
    25% {
      transform: scale3d(0.875, 0.875, 5);
    }
    37% {
      transform: scale3d(0.75, 0.75, 5);
    }
    50% {
      transform: scale3d(0.625, 0.625, 5);
    }
    62% {
      transform: scale3d(0.75, 0.75, 5);
    }
    75% {
      transform: scale3d(0.875, 0.875, 5);
    }
    87% {
      transform: scale3d(1, 1, 5);
    }
    100% {
      transform: scale3d(1.125, 1.125, 5);
    }
  }
  @keyframes scale-6 {
    0% {
      transform: scale3d(1, 1, 5);
    }
    12% {
      transform: scale3d(1.125, 1.125, 5);
    }
    25% {
      transform: scale3d(1, 1, 5);
    }
    37% {
      transform: scale3d(0.875, 0.875, 5);
    }
    50% {
      transform: scale3d(0.75, 0.75, 5);
    }
    62% {
      transform: scale3d(0.625, 0.625, 5);
    }
    75% {
      transform: scale3d(0.75, 0.75, 5);
    }
    87% {
      transform: scale3d(0.875, 0.875, 5);
    }
    100% {
      transform: scale3d(1, 1, 5);
    }
  }
  @keyframes scale-7 {
    0% {
      transform: scale3d(0.875, 0.875, 5);
    }
    12% {
      transform: scale3d(1, 1, 5);
    }
    25% {
      transform: scale3d(1.125, 1.125, 5);
    }
    37% {
      transform: scale3d(1, 1, 5);
    }
    50% {
      transform: scale3d(0.875, 0.875, 5);
    }
    63% {
      transform: scale3d(0.75, 0.75, 5);
    }
    75% {
      transform: scale3d(0.625, 0.625, 5);
    }
    88% {
      transform: scale3d(0.75, 0.75, 5);
    }
    100% {
      transform: scale3d(0.875, 0.875, 5);
    }
  }

  .star {
    background: #fafafa;
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

// ---------- LEGACY DATA ---------- //
/*
{
name: 'Portfolio',
    sup: 'V1',
    icon: '/res/LOGO.svg',
    background:
      'radial-gradient(circle, rgba(38,2,0,1) 0%, rgba(96,15,0,1) 100%, rgba(96,15,0,1) 100%)',
    auraColor: '#600f00',
    filter: 'drop-shadow(1px 1px 6px rgba(0,0,0,0.7))',
    link: 'https://pierre-godino.com/V1/index.html',
    description: 'Première version de mon portfolio',
},
{
    name: 'AB Nature',
    icon: '/icons/abnature.svg',
    background:
      'radial-gradient(circle, rgba(31,68,8,1) 0%, rgba(73,160,16,1) 100%)',
    auraColor: '#49a010',
    filter: 'drop-shadow(1px 1px 6px rgba(0,0,0,0.7))',
    link: 'https://abnature.fr',
    description: 'Site E-commerce',
  },
  {
    name: 'SARL Garage BRINCAT',
    icon: '/icons/garagebrincat.webp',
    background:
      'radial-gradient(circle, rgba(14,46,103,1) 0%, rgba(29,85,182,1) 100%)',
    auraColor: '#1d55b6',
    filter:
      'invert(30%) sepia(85%) saturate(1334%) hue-rotate(199deg) brightness(90%) contrast(96%) drop-shadow(1px 1px 6px rgba(0,0,0,0.7))',
    link: 'https://www.sarlgaragebrincat.fr',
    description: 'Site vitrine de concession automobile',
  },
    
*/
