import React, {
  useCallback,
  useState,
  useEffect,
  useRef,
  useContext,
  JSX,
} from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import Head from 'next/head';
import ListIcon from '@mui/icons-material/List';
import EngineeringIcon from '@mui/icons-material/Engineering';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import LinkOffIcon from '@mui/icons-material/LinkOff';
import LockIcon from '@mui/icons-material/Lock';
import { BackgroundContext } from '../src/contexts/Contexts';
import dynamic from 'next/dynamic';
const JSONLD = dynamic(() => import('@/utilities/JSONLD'), { ssr: true });

export type IPersonnalProjectData = {
  name?: string;
  sup?: string;
  icon?: string;
  background?: string;
  auraColor?: string;
  filter?: string;
  link?: string;
  description?: string;
};

export type IProjectdata = {
  thumbnailUrl: string;
  iconUrl: string;
  fontName: string;
  tilted?: boolean;
  title: string;
  description: string;
  link: string;
  repoLink: string;
  online: boolean;
  nature: 'Contribution' | 'Réalisation';
};

const personnalProjectsData: IPersonnalProjectData[] = [
  {
    name: 'Portfolio',
    sup: 'V3',
    icon: '/res/LOGO.svg',
    background:
      'radial-gradient(circle, rgba(38,2,0,1) 0%, rgba(96,15,0,1) 100%, rgba(96,15,0,1) 100%)',
    auraColor: '#600f00',
    filter: 'drop-shadow(1px 1px 6px rgba(0,0,0,0.7))',
    link: 'https://www.creation-sites-godino.fr',
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

const projectsData: IProjectdata[] = [
  {
    thumbnailUrl: '/thumbnails/cabinet_misino_thumbnail.png',
    iconUrl: '/icons/misino_icon_alt.png',
    fontName: '"Poppins", sans-serif',
    title: 'Cabinet Misino',
    tilted: true,
    description:
      'Site vitrine pour le cabinet de stomatologie & orthodontie du Dr. Jérôme Misino basé à Agen (47).',
    link: 'https://cabinet-misino.fr',
    repoLink: '',
    online: true,
    nature: 'Réalisation',
  },
  {
    thumbnailUrl: '/thumbnails/checkyoursmile_thumbnail.png',
    iconUrl: '/icons/checkyoursmile.png',
    fontName: '"Courgette", cursive',
    title: 'CheckYourSmile',
    tilted: true,
    description:
      "Plateforme d'apprentissage de vocabulaire technique dans diverses langues étrangères.",
    link: 'https://www.checkyoursmile.fr',
    repoLink: '',
    online: true,
    nature: 'Contribution',
  },
  {
    thumbnailUrl: '/thumbnails/sarl_garage_brincat_thumbnail.png',
    iconUrl: '/icons/sarlgaragebrincat.png',
    fontName: '"Roboto", sans-serif',
    title: 'SARL Garage Brincat',
    description:
      'Site vitrine & Portail de gestion de contenu pour le concessionnaire automobile sus nommé situé à castelsarrasin (82).',
    link: 'https://sarlgaragebrincat.fr',
    repoLink: '',
    online: true,
    nature: 'Réalisation',
  },
  {
    thumbnailUrl: '/thumbnails/abnature_thumbnail.png',
    iconUrl: '/icons/abnature.svg',
    fontName: '"Mynerve", cursive',
    title: 'AB Nature',
    description:
      'Boutique en ligne sur le thème des cosmétiques bio pour la société AB Nature, basée à Graulhet (81).',
    link: '',
    repoLink: '',
    online: false,
    nature: 'Réalisation',
  },

  {
    thumbnailUrl: '/thumbnails/eoleedit_thumbnail.png',
    iconUrl: '/icons/videomenthe_alpha.png',
    fontName: '"Raleway", sans-serif',
    title: 'EoleEdit',
    tilted: true,
    description:
      'Logiciel de montage vidéo 100% en ligne (distribué par la société Videomenthe).',
    link: 'https://www.videomenthe.fr/montage-en-ligne',
    repoLink: '',
    online: true,
    nature: 'Contribution',
  },

  {
    thumbnailUrl: '/thumbnails/learn_thumbnail.png',
    iconUrl: '/icons/learn_icon.svg',
    fontName: '"Montserrat", sans-serif',
    title: 'LEARN',
    description:
      "Plateforme d'apprentissage de savoirs liés à l'informatique, avec gestion de classes virtuelles et fonctionnalités communautaires.",
    link: 'https://learn.pierre-godino.com',
    repoLink: '',
    online: true,
    nature: 'Réalisation',
  },
];

const Realisations: NextPage = () => {
  // --- Background
  const { background } = useContext(BackgroundContext);

  const [selectedPlanet, setSelectedPlanet] = useState<number>(-1);
  const [windowSize, setWindowSize] = useState(999);
  const [selectedTab, setSelectedTab] = useState<0 | 1>(0);

  const starsArray = useRef<JSX.Element[]>(null);

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
    return personnalProjectsData.map((elem, key) => {
      if (!elem.name) return [];
      return (
        <div className="pos" style={positionPicker(key)} key={key}>
          <div
            className="planet-container"
            style={{
              animationName: 'scale-' + key,
            }}>
            <div
              style={{
                animation: 'planetAppear 0.4s ease backwards',
                animationDelay: `${0.4 + key * 0.1}s`,
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
                    <a
                      href={elem.link}
                      target="_blank"
                      rel="noreferrer nofollow">
                      <LinkIcon />
                    </a>
                  )}
                </div>
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
  }, [selectPlanet]);

  const jsonld = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Réalisations | Pierre G.',
    description:
      'Parcourez mon portfolio de projets WEB, sur mesure pour répondre aux besoins de mes clients.',
    url: 'https://www.creation-sites-godino.fr/realisations',
    image: 'https://www.creation-sites-godino.fr/logo.png',
    publisher: {
      '@type': 'Organization',
      name: 'Création Sites Godino',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.creation-sites-godino.fr/logo.png',
        width: 600,
        height: 60,
      },
    },
  };

  return (
    <MainContainer>
      <Head>
        <title>Réalisations | Pierre G.</title>
        <meta property="og:title" content="Réalisations | Pierre G." />
        <meta
          name="description"
          content="Parcourez mon portfolio de projets WEB, sur mesure pour répondre aux besoins de mes clients."
        />
        <meta
          property="og:description"
          content="Parcourez mon portfolio de projets WEB, sur mesure pour répondre aux besoins de mes clients."
        />
        <meta
          name="twitter:description"
          content="Parcourez mon portfolio de projets WEB, sur mesure pour répondre aux besoins de mes clients."
        />
        <meta
          property="og:url"
          content={'https://www.creation-sites-godino.fr/realisations'}
        />
        <link
          rel="canonical"
          href={'https://www.creation-sites-godino.fr/realisations'}
        />
      </Head>
      <JSONLD data={jsonld} />
      <div
        id="info_block"
        style={{ display: windowSize < 1250 ? 'block' : 'none' }}>
        Meilleure expérience sur écrans larges
      </div>
      {background}
      <div id="tabs">
        <ul className={`${selectedTab === 1 ? 'translate-bar' : ''}`}>
          <li className={`${selectedTab === 0 ? 'selected' : ''}`}>
            <ListIcon
              onClick={() => setSelectedTab(0)}
              style={{
                color: 'rgb(39, 174, 96)',
                filter:
                  selectedTab === 0
                    ? 'drop-shadow(0px 0px 5px rgba(39, 174, 96,0.3))'
                    : '',
              }}
            />
            <span onClick={() => setSelectedTab(0)}>Realisations</span>
          </li>
          <li className={`${selectedTab === 1 ? 'selected' : ''}`}>
            <EngineeringIcon
              onClick={() => setSelectedTab(1)}
              style={{
                color: '#e74c3c',
                filter:
                  selectedTab === 1
                    ? 'drop-shadow(0px 0px 5px rgba(231,76,60,0.3))'
                    : '',
              }}
            />
            <span onClick={() => setSelectedTab(1)}>Projets personnels</span>
          </li>
        </ul>
      </div>

      <div
        id="slider_wrapper"
        className={`${selectedTab === 1 ? 'translated' : ''}`}>
        <div id="realisations_container">
          <ul id="realisations_list">
            {projectsData.map((projectItem: IProjectdata, key: number) => (
              <li className="realisation" key={`realisation_no_${key}`}>
                <img
                  src={projectItem.thumbnailUrl}
                  alt={'Aperçu du projet intitulé ' + projectItem.title}
                  className="realisation-thumbnail"
                  loading="lazy"
                />
                <div className="realisation-text-wrapper">
                  <section>
                    <h5 className={`realisation-nature ${projectItem.nature}`}>
                      {projectItem.nature}
                    </h5>
                    <h3
                      className="realisation-title"
                      style={{
                        fontFamily: projectItem.fontName || 'inherit',
                        fontStyle: projectItem.tilted ? 'italic' : 'inherit',
                      }}>
                      <img
                        src={projectItem.iconUrl}
                        alt={projectItem.title}
                        loading="lazy"
                      />
                      {projectItem.title}
                    </h3>
                    <p
                      className="realisation-description"
                      title={projectItem.description}>
                      {projectItem.description}
                    </p>
                  </section>
                  <section>
                    {projectItem.online ? (
                      <h4 className="realisation-online-status online">
                        En ligne
                      </h4>
                    ) : (
                      <h4 className="realisation-online-status offline">
                        Hors ligne
                      </h4>
                    )}
                    <ul className="realisation-links-list">
                      <li className="realisation-link">
                        {projectItem.link ? (
                          <a
                            href={projectItem.link || '#'}
                            target="_blank"
                            rel="noreferrer"
                            className="online">
                            <LinkIcon />
                          </a>
                        ) : (
                          <a
                            href={projectItem.link || '#'}
                            rel="noreferrer"
                            className="offline">
                            <LinkOffIcon />
                          </a>
                        )}
                      </li>
                      <li className="realisation-link">
                        <a
                          href={projectItem.repoLink || '#'}
                          target={projectItem.repoLink ? '_blank' : ''}
                          rel="noreferrer">
                          <GitHubIcon />{' '}
                          {!projectItem.repoLink && (
                            <LockIcon className="lock-icon" />
                          )}
                        </a>
                      </li>
                    </ul>
                  </section>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div id="fancy_container">
          {selectedTab === 1 && (
            <div id="planets_container">
              <div id="gravity_center">{planetsGenerator()}</div>
            </div>
          )}
        </div>
      </div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Courgette&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Mynerve&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

  padding-top: 7vh;
  background: #040e1d;
  height: 100vh;
  width: 100vw;
  /* overflow: hidden; */
  font-family: 'Space Mono', monospace;
  letter-spacing: -1px;

  #info_block {
    position: absolute;
    top: 5vh;
    right: 15px;
    color: #08666a;
    text-shadow: 1px 1px 2px #08666abb;
    text-align: center;
    width: 100%;
  }

  #tabs {
    position: fixed;
    display: flex;
    justify-content: center;
    top: 120px;
    left: 0;
    width: 100vw;
    z-index: 2;

    ul {
      position: relative;
      width: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 25px;

      &::after {
        position: absolute;
        bottom: 1px;
        left: 65px;
        content: '';
        width: 175px;
        height: 2.5px;
        transition: 0.2s;
        background: rgba(255, 255, 255, 0.5);
      }

      &.translate-bar::after {
        left: 276px;
        width: 229px;
      }

      li {
        color: rgba(255, 255, 255, 0.7);
        opacity: 0.9;
        display: flex;
        align-items: center;
        justify-content: end;
        width: 240px;
        user-select: none;

        span,
        svg {
          padding: 0 10px;
          display: flex;
          align-items: center;
          height: 50px;
          cursor: pointer;
          transition: 0.3s;
          border-radius: 0 5px 0 0;
        }

        &:active {
          span,
          svg {
            background: rgba(255, 255, 255, 0.1);
          }
        }

        svg {
          border-radius: 5px 0 0 0;
          width: 50px;
          font-size: 1.8rem;
        }

        &.selected,
        &:hover {
          opacity: 1;
          text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
          color: rgba(255, 255, 255, 0.8);
        }
      }
    }
  }

  #slider_wrapper {
    position: relative;
    width: 200%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    transition: 0.5s;
    transform: translateX(0vw);

    &.translated {
      transform: translateX(-100vw);
    }
  }

  #realisations_container {
    width: 100vw;
    height: calc(100% - 125px);
    overflow: auto;
    width: 1500px;
    max-width: 90vw;
    margin: auto;
    margin-top: 125px;

    ul#realisations_list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 25px;
      padding: 0 10px;
      padding-bottom: 150px;

      li.realisation {
        box-sizing: content-box;
        display: flex;
        gap: 15px;
        width: 100%;
        max-width: 600px;
        height: 215px;
        padding: 15px;
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(255, 255, 255, 0.02);
        // backdrop-filter: blur(0.3px);

        h3,
        p,
        a {
          color: rgba(255, 255, 255, 0.7);
          text-shadow: 0px 0px 5px rgba(255, 255, 255, 0.3);

          svg {
            filter: drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.1));
          }
        }

        img.realisation-thumbnail {
          width: 250px;
          max-height: 150px;
          object-fit: cover;
          align-self: center;
          border-radius: 5px;
          backface-visibility: hidden;

          @media (max-width: 750px) {
            display: none;
          }
        }

        .realisation-text-wrapper {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: calc(100% - 265px);
          gap: 15px;

          @media (max-width: 750px) {
            width: 100%;
          }

          h5.realisation-nature {
            color: #fafafa;
            font-weight: bold;
            letter-spacing: 0.5px;
            align-self: end;
            background: rgba(255, 255, 255, 0.1);
            width: fit-content;
            padding: 0 7px;
            border-radius: 5px;

            &.Réalisation {
              text-shadow: 0 0 5px rgba(52, 152, 219, 0.8);
              color: rgba(52, 152, 219, 1);
            }
            &.Contribution {
              text-shadow: 0 0 5px rgba(231, 76, 60, 0.5);
              color: rgba(231, 76, 60, 1);
            }
          }

          h3.realisation-title {
            font-size: 1.5rem;
            font-weight: bold;
            letter-spacing: 0.5px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
            text-overflow: ellipsis;
            overflow-wrap: break-word;

            img {
              margin-right: 10px;
              width: 40px;
              height: 40px;
              object-fit: contain;
              display: inline;
            }

            @media (max-width: 750px) {
              font-size: 1.2rem;

              img {
                width: 25px;
                height: 25px;
              }
            }
          }
          section {
            display: flex;
            flex-direction: column;
            &:nth-child(1) {
              flex: 1;
            }
          }

          p.realisation-description {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 4;
            line-height: 20px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: break-spaces;
            overflow-wrap: break-word;
            font-style: italic;
            flex: 1;

            @media (max-width: 480px) {
              -webkit-line-clamp: 3;
            }
          }

          h4.realisation-online-status {
            font-weight: bold;
            letter-spacing: 0.5px;
            font-size: 1.1rem;
            &.online {
              color: rgba(46, 204, 113, 1);
              text-shadow: 0 0 5px rgba(46, 204, 113, 0.3);
            }

            &.offline {
              color: rgba(192, 57, 43, 1);
              text-shadow: 0 0 5px rgba(192, 57, 43, 0.3);
            }
          }

          ul.realisation-links-list {
            padding-top: 5px;
            display: flex;
            justify-content: start;
            gap: 15px;

            li.realisation-link {
              opacity: 0.7;
              &:hover {
                opacity: 1;
                transform: scale3d(1.1, 1.1, 1);
              }
              a {
                position: relative;
                filter: none;

                &.offline {
                  color: rgba(192, 57, 43, 1);
                }

                svg.lock-icon {
                  position: absolute;
                  right: -2px;
                  top: -2px;
                  font-size: 0.8rem;
                  color: rgba(192, 57, 43, 1);
                }
              }
            }
          }
        }
      }
    }
  }

  #fancy_container {
    position: relative;
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #planets_container {
    transform: rotateX(75deg);
    transform-style: preserve-3d;
    width: 100%;
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
      // backdrop-filter: blur(5px);
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

  @keyframes planetAppear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
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
    link: 'https://www.creation-sites-godino.fr/V1/index.html',
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
