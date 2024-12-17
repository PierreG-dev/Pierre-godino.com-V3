import React, { useContext, useMemo } from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import Head from 'next/head';
import BrushIcon from '@mui/icons-material/Brush';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import CodeIcon from '@mui/icons-material/Code';
import SecurityIcon from '@mui/icons-material/Security';
import InventoryIcon from '@mui/icons-material/Inventory';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsightsIcon from '@mui/icons-material/Insights';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import VerifiedIcon from '@mui/icons-material/Verified';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import HandshakeIcon from '@mui/icons-material/Handshake';
import BuildIcon from '@mui/icons-material/Build';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import { BackgroundContext } from '../src/contexts/Contexts';
import CustomLink from '../src/components/Layout/routing/CustomLink';

const Pricing: NextPage = () => {
  // --- Background
  const { background } = useContext(BackgroundContext);
  const metaContentGenerator = useMemo(() => {
    const metaData = {
      title: 'Création de sites internet sur Agen',
      description:
        'Détail de mes prestations de création de sites internet sur Agen et dans toute la France',
      ogUrl: 'https://pierre-godino.com/pricing',
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

  return (
    <MainContainer>
      {metaContentGenerator}
      {background}
      <h1>Prestations</h1>
      <ul id="services_list">
        <li className="service-item vitrine">
          <h2 className="service-title">Site vitrine</h2>
          <p className="service-description">
            Faites connaître votre activité avec un site simple et efficace qui
            présente vos services et attire des clients.
          </p>
          <div className="service-price">
            <h3 className="price">
              Devis en ligne disponible{' '}
              <img src="/icons/check.png" alt="Disponible" />
            </h3>
          </div>
          <ul className="service-details-list">
            <li>
              <KeyboardDoubleArrowUpIcon
                style={{
                  color: '#27ae60',
                  filter: 'drop-shadow(0px 0px 3px rgba(green, 0.2))',
                }}
              />{' '}
              Attire les clients
            </li>
            <li>
              <BrushIcon
                style={{
                  color: '#27ae60',
                  filter: 'drop-shadow(0px 0px 3px rgba(green, 0.2))',
                }}
              />{' '}
              Design sur mesure
            </li>
            <hr />
            <li>
              <PhoneIphoneIcon
                style={{
                  color: '#27ae60',
                  filter: 'drop-shadow(0px 0px 3px rgba(green, 0.2))',
                }}
              />{' '}
              Adapté mobile et tablette
            </li>
            <hr />
            <li>
              <SearchIcon
                style={{
                  color: '#27ae60',
                  filter: 'drop-shadow(0px 0px 3px rgba(green, 0.2))',
                }}
              />{' '}
              Optimisé pour Google
            </li>
            <hr />
            <hr />
            <li>
              <CodeIcon
                style={{
                  color: '#27ae60',
                  filter: 'drop-shadow(0px 0px 3px rgba(green, 0.2))',
                }}
              />{' '}
              100% Codé à la main
            </li>
          </ul>
          <CustomLink href="/simulateur/site-vitrine">
            Faire une simulation
          </CustomLink>
          {/* <p className="service-support">
            Maintenance à partir de <span>30 € / mois</span> *
          </p> */}
        </li>
        <li className="service-item e-commerce">
          <h2 className="service-title">Boutique en ligne</h2>
          <p className="service-description">
            Vendez vos produits facilement en ligne, accessible partout et tout
            le temps.
          </p>
          <div className="service-price">
            <h3 className="price">
              Devis en 24h{' '}
              <img src="/icons/three-o-clock-clock.png" alt="horloge" />
            </h3>
          </div>
          <ul className="service-details-list">
            <li>
              <KeyboardDoubleArrowUpIcon
                style={{
                  color: '#27ae60',
                  filter: 'drop-shadow(0px 0px 3px rgba(green, 0.2))',
                }}
              />{' '}
              Attire les clients
            </li>
            <hr />
            <li>
              <SecurityIcon
                style={{
                  color: '#27ae60',
                  filter: 'drop-shadow(0px 0px 3px rgba(green, 0.2))',
                }}
              />{' '}
              Paiement sécurisé
            </li>
            <hr />
            <li>
              <InventoryIcon
                style={{
                  color: '#27ae60',
                  filter: 'drop-shadow(0px 0px 3px rgba(green, 0.2))',
                }}
              />{' '}
              Gestion facile des produits
            </li>
            <hr />
            <li>
              <LocalShippingIcon
                style={{
                  color: '#27ae60',
                  filter: 'drop-shadow(0px 0px 3px rgba(green, 0.2))',
                }}
              />{' '}
              Suivi des livraisons
            </li>
            <hr />
            <li>
              <InsightsIcon
                style={{
                  color: '#27ae60',
                  filter: 'drop-shadow(0px 0px 3px rgba(green, 0.2))',
                }}
              />{' '}
              Statistiques en temps réel
            </li>
          </ul>
          <CustomLink href="/contact">En savoir plus</CustomLink>
          {/* <p className="service-support">
            Maintenance à partir de <span>70 € / mois</span> *
          </p> */}
        </li>

        <li className="service-item application">
          <h2 className="service-title">Application | Portail</h2>
          <p className="service-description">
            Passez à l'étape supérieure en proposant votre propre plateforme
          </p>
          <div className="service-price">
            <h3 className="price">
              Devis en 72h <img src="/icons/clock.png" alt="horloge" />
            </h3>
          </div>
          <ul className="service-details-list">
            <li>
              <AppShortcutIcon
                style={{
                  color: '#27ae60',
                  filter: 'drop-shadow(0px 0px 3px rgba(green, 0.2))',
                }}
              />{' '}
              Application sur mesure
            </li>
            <hr />
            <li>
              <DevicesOtherIcon
                style={{
                  color: '#27ae60',
                  filter: 'drop-shadow(0px 0px 3px rgba(green, 0.2))',
                }}
              />{' '}
              Compatibilité
            </li>
            <hr />
            <li>
              <WhatshotIcon
                style={{
                  color: '#27ae60',
                  filter: 'drop-shadow(0px 0px 3px rgba(green, 0.2))',
                }}
              />{' '}
              Technologies modernes
            </li>
            <hr />
            <li>
              <BuildIcon
                style={{
                  color: '#27ae60',
                  filter: 'drop-shadow(0px 0px 3px rgba(green, 0.2))',
                }}
              />{' '}
              Maintenabilité
            </li>
            <hr />
            <li>
              <HandshakeIcon
                style={{
                  color: '#27ae60',
                  filter: 'drop-shadow(0px 0px 3px rgba(green, 0.2))',
                }}
              />{' '}
              Collaboration continue
            </li>
          </ul>
          <CustomLink href="/contact">En savoir plus</CustomLink>
          {/* <p className="service-support">Maintenance sur devis</p> */}
        </li>
      </ul>

      <section id="clients">
        <h3>
          Ils m'ont fait confiance <VerifiedIcon />
        </h3>

        <Caroussel>
          <div className="wrapper">
            {' '}
            <img
              loading="lazy"
              className="logo-element"
              src="/icons/oclock.png"
              alt="Ecoles O'Clock"
            />
            <img
              loading="lazy"
              className="logo-element"
              src="/icons/philliance.png"
              alt="Philiance Formations"
            />
            <img
              loading="lazy"
              className="logo-element"
              src="/icons/apformation.png"
              alt="AP Formations"
            />
            <img
              loading="lazy"
              className="logo-element"
              src="/icons/GEMA.jpg"
              alt="GEMA"
            />
            <img
              loading="lazy"
              className="logo-element"
              src="/icons/axeacademy.png"
              alt="Axe academy"
            />
            <img
              loading="lazy"
              className="logo-element"
              src="/icons/ab-nature_full.png"
              alt="AB Nature"
            />
            <img
              loading="lazy"
              className="logo-element"
              src="/icons/checkyoursmile.png"
              alt="Check Your Smile"
            />
            <img
              loading="lazy"
              className="logo-element"
              src="/icons/speedynanie_alpha.png"
              alt="Speedy Nanie"
            />
            <img
              loading="lazy"
              className="logo-element"
              src="/icons/videomenthe_alpha.png"
              alt="Videomenthe"
            />
            <img
              loading="lazy"
              className="logo-element"
              src="/icons/yoop_alpha.png"
              alt="Yoop Digital"
            />
            <img
              loading="lazy"
              className="logo-element"
              src="/icons/misino_icon_alt.png"
              alt="Dr. Misino"
            />
            {/* DEBUT SENTINEL */}
            <img
              loading="lazy"
              className="logo-element"
              src="/icons/oclock.png"
              alt="Ecoles O'Clock"
            />
            <img
              loading="lazy"
              className="logo-element"
              src="/icons/philliance.png"
              alt="Philiance Formations"
            />
            <img
              loading="lazy"
              className="logo-element"
              src="/icons/apformation.png"
              alt="AP Formations"
            />
            <img
              loading="lazy"
              className="logo-element"
              src="/icons/GEMA.jpg"
              alt="GEMA"
            />
            <img
              loading="lazy"
              className="logo-element"
              src="/icons/axeacademy.png"
              alt="Axe academy"
            />
            <img
              loading="lazy"
              className="logo-element"
              src="/icons/ab-nature_full.png"
              alt="AB Nature"
            />
            <img
              loading="lazy"
              className="logo-element"
              src="/icons/checkyoursmile.png"
              alt="Check Your Smile"
            />
            <img
              loading="lazy"
              className="logo-element"
              src="/icons/speedynanie_alpha.png"
              alt="Speedy Nanie"
            />
            <img
              loading="lazy"
              className="logo-element"
              src="/icons/videomenthe_alpha.png"
              alt="Videomenthe"
            />
            <img
              loading="lazy"
              className="logo-element"
              src="/icons/yoop_alpha.png"
              alt="Yoop Digital"
            />
            <img
              loading="lazy"
              className="logo-element"
              src="/icons/misino_icon_alt.png"
              alt="Dr. Misino"
            />
          </div>
        </Caroussel>
      </section>

      <section id="call_to_action">
        <h3>
          <LanguageIcon />
          Intéressé par une stratégie en ligne ?
        </h3>
        <p>
          Estimations, informations, précisions... <br />
          <span>Faisons le point ensemble ☕</span>
        </p>
        <div className="btn-group">
          {' '}
          <a href="tel:+767249980">
            <button id="tel_btn">
              <CallIcon />
              07 67 24 99 80
            </button>
          </a>
          <a href="mailto:contact@pierre-godino.com">
            <button id="email_btn">
              <EmailIcon />
              contact@pierre-godino.com
            </button>
          </a>
        </div>
      </section>
    </MainContainer>
  );
};

const MainContainer = styled.main`
  padding: 13vh 10px;
  background: #040e1d;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;

  section {
    z-index: 1;
  }

  h1 {
    letter-spacing: 5px;
    text-align: center;
    font-size: 3.2rem;
    font-family: 'BebasNeue';
    color: rgba(255, 255, 255, 0.8);
  }

  ul#services_list {
    width: 100%;
    max-width: 1500px;
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    justify-content: space-between;
    padding-top: 50px;
    z-index: 1;

    @media (max-width: 1550px) {
      flex-direction: column;
      align-items: center;
    }
  }

  li.service-item,
  div.service-item {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    /* box-shadow: 0 0px 7px rgba(255, 255, 255, 0.3),
      inset 0 0px 7px rgba(255, 255, 255, 0.3); */
    // backdrop-filter: blur(1px);
    width: 400px;
    max-width: 100%;
    flex: 1;
    padding: 25px 25px;
    color: rgba(#fafafa, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    border-radius: 5px;
    transition: 0.1s;
    /* padding-bottom: 60px; */

    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    &.vitrine {
      h2.service-title {
        background: rgba(41, 128, 185, 0.3);
        border: 1px solid rgb(41, 128, 185);
        box-shadow: 0px 0px 7px 1px rgb(41, 128, 185);

        &::before,
        &::after {
          border: 3px solid rgb(41, 128, 185);
        }
      }
    }
    &.e-commerce {
      h2.service-title {
        background: rgba(39, 174, 96, 0.3);
        border: 1px solid rgb(39, 174, 96);
        box-shadow: 0px 0px 7px 1px rgb(39, 174, 96);

        &::before,
        &::after {
          border: 3px solid rgb(39, 174, 96);
        }
      }
    }
    &.application {
      h2.service-title {
        background: rgba(231, 76, 60, 0.3);
        border: 1px solid rgb(231, 76, 60);
        box-shadow: 0px 0px 7px 1px rgb(231, 76, 60);

        &::before,
        &::after {
          border: 3px solid rgb(231, 76, 60);
        }
      }
    }

    a {
      display: flex;
      justify-content: center;
      color: #373737;
      font-weight: bold;
      border-radius: 5px;
      padding: 15px;
      background: #fafafa;
      width: 100%;
      opacity: 0.7;
      transition: 0.1s;

      &:hover {
        opacity: 1;
      }
    }
  }

  h2.service-title {
    width: 100%;
    text-align: center;
    font-weight: bold;
    letter-spacing: 5px;
    font-size: 1.65rem;
    font-family: 'BebasNeue';
    color: rgba(255, 255, 255, 0.9);
    position: relative;
    display: inline-block;
    padding: 10px 15px;
    text-shadow: 0px 0px 7px rgba(255, 255, 255, 0.3);

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 15px;
      height: 15px;
    }

    &::before {
      top: -2px;
      left: -2px;
      border-right: none !important;
      border-bottom: none !important;
    }

    &::after {
      bottom: -2px;
      right: -2px;
      border-left: none !important;
      border-top: none !important;
    }
  }

  p.service-description {
    width: 300px;
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
    height: 70px;
    font-weight: bold;
    text-shadow: 0px 0px 7px rgba(255, 255, 255, 0.2);
  }

  .service-price {
    h3.price {
      display: flex;
      align-items: center;
      gap: 10px;
      color: rgba(255, 255, 255, 0.8);
      font-weight: bold;
      letter-spacing: 1px;
      font-size: 1.5rem;

      img {
        width: 30px;
        height: 30px;
        filter: brightness(0) saturate(100%) invert(47%) sepia(89%)
          saturate(356%) hue-rotate(93deg) brightness(98%) contrast(95%);
      }
    }
  }

  ul.service-details-list {
    flex: 1;
    padding: 25px 0;
    color: rgba(255, 255, 255, 0.7);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 20px;

    hr {
      display: none;
      width: 100%;
      border: 1px solid rgba(255, 255, 255, 0.8);
    }

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-weight: bold;
      letter-spacing: 1px;

      svg {
        font-size: 2.9rem;
      }
    }
  }

  p.service-support {
    color: rgba(255, 255, 255, 0.7);
    font-weight: bold;
    position: absolute;
    bottom: 15px;
    font-size: 1.2rem;

    span {
      color: rgba(255, 255, 255, 0.8);
      font-size: 1.3rem;
    }
  }

  h5#maintenance_infos {
    color: rgba(255, 255, 255, 0.8);
    text-shadow: 0px 0px 7px rgba(255, 255, 255, 0.3);
    font-weight: bold;
    margin-top: 15px;
    width: 400px;

    @media (min-width: 1550px) {
      width: 100%;
      max-width: 1500px;
    }
  }

  h3#on_budget_title {
    display: flex;
    align-items: center;
    gap: 10px;
    color: rgba(255, 255, 255, 0.8);
    font-size: 2.5rem;
    font-weight: bold;
    letter-spacing: 5px;
    margin: 25px;
    text-shadow: 0px 0px 7px rgba(255, 255, 255, 0.3);

    svg {
      color: #27ae60;
      font-size: 3rem;
    }

    @media (max-width: 700px) {
      letter-spacing: 4px;
      font-size: 1.2rem;

      svg {
        font-size: 1.5rem;
      }
    }
  }

  div#online_visit_card {
    @media (min-width: 1550px) {
      padding-bottom: 100px;
      width: 100%;
      max-width: 1500px;

      p.service-description {
        width: 90%;
        height: fit-content;
      }

      p.service-price {
        height: fit-content;
      }

      ul.service-details-list {
        width: 100%;
        padding-top: 20px;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
      }
    }

    h2.service-title {
      width: fit-content;
      background: rgba(211, 84, 0, 0.3);
      border: 1px solid rgb(211, 84, 0);
      box-shadow: 0px 0px 7px 1px rgb(211, 84, 0);

      &::before,
      &::after {
        border: 3px solid rgb(211, 84, 0);
      }
    }
  }

  section#clients {
    padding-top: 100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      color: rgba(255, 255, 255, 0.8);
      font-size: 2.5rem;
      font-weight: bold;
      letter-spacing: 5px;
      margin: 25px;
      text-shadow: 0px 0px 7px rgba(255, 255, 255, 0.3);

      svg {
        font-size: 3rem;
        color: #27ae60;
        filter: drop-shadow(0px 0px 3px rgba(green, 0.2));
      }

      @media (max-width: 700px) {
        letter-spacing: 4px;
        font-size: 1.2rem;

        svg {
          font-size: 1.5rem;
        }
      }
    }
  }

  section#call_to_action {
    width: 100%;
    padding-top: 100px;

    h3 {
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      color: rgba(255, 255, 255, 0.8);
      font-size: 2.5rem;
      font-weight: bold;
      letter-spacing: 5px;
      margin: 25px;
      text-shadow: 0px 0px 7px rgba(255, 255, 255, 0.3);
      max-width: 100%;

      svg {
        font-size: 3rem;
        color: #27ae60;
        filter: drop-shadow(0px 0px 3px rgba(green, 0.2));
      }

      @media (max-width: 700px) {
        letter-spacing: 4px;
        font-size: 1.5rem;

        svg {
          font-size: 1.5rem;
        }
      }
    }

    p {
      text-align: center;
      color: rgba(255, 255, 255, 0.8);
      text-shadow: 0px 0px 7px rgba(255, 255, 255, 0.3);
      font-weight: 500;
      font-size: 1.8rem;
      letter-spacing: 2px;
      margin-top: -15px;

      span {
        font-weight: bold;
      }

      @media (max-width: 700px) {
        font-size: 1.1rem;
      }
    }

    div.btn-group {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      margin-top: 80px;

      @media (max-width: 900px) {
        flex-direction: column;
      }

      a {
        display: block;
        width: 100%;
        display: flex;
        justify-content: center;
        button {
          width: 100%;
          max-width: 400px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          padding: 25px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(1px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 3px;
          font-weight: bold;
          font-size: 1.1rem;
          height: 100px;
          transition: 0.1s;
          color: rgba(255, 255, 255, 0.7);
          letter-spacing: 1px;
          text-shadow: 0px 0px 7px rgba(255, 255, 255, 0.3);
          font-family: 'Montserrat';

          svg {
            font-size: 2rem;
          }

          &#tel_btn {
            /* text-shadow: 0px 0px 7px rgba(46, 204, 113, 0.3); */
            &:hover {
              background: rgba(46, 204, 113, 0.3);
              border: 1px solid rgb(46, 204, 113);
              box-shadow: 0px 0px 7px 1px rgb(46, 204, 113);
            }

            svg {
              color: rgb(46, 204, 113);
              filter: drop-shadow(0px 0px 5px rgba(46, 204, 113, 0.4));
            }
          }

          &#email_btn {
            /* text-shadow: 0px 0px 7px rgba(52, 152, 219, 0.3); */
            &:hover {
              background: rgba(52, 152, 219, 0.3);
              border: 1px solid rgb(52, 152, 219);
              box-shadow: 0px 0px 7px 1px rgb(52, 152, 219);
            }

            svg {
              color: rgb(52, 152, 219);
              filter: drop-shadow(0px 0px 5px rgba(52, 152, 219, 0.4));
            }
          }
        }
      }
    }
  }
`;

const Caroussel = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  margin: auto;
  max-width: 1200px;
  padding: 25px;
  border-radius: 5px;
  margin: 10px 0;
  background: rgba(255, 255, 255, 0.01);
  overflow: hidden;

  .wrapper {
    display: flex;
    gap: 100px;
    width: fit-content;
    animation: 60s caroussel infinite linear;

    @media (max-width: 800px) {
      width: 50px;
    }

    img.logo-element {
      border-radius: 15px;
      width: 100px;
      height: 100px;
      object-fit: contain;
      filter: drop-shadow(0px 0px 0.5px rgba(255, 255, 255, 0.5));
    }

    @media (max-width: 800px) {
      animation: 60s carousselSmallSize infinite linear;

      img.logo-element {
        width: 50px;
        height: 50px;
      }
    }
  }

  @keyframes caroussel {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(-2200px, 0, 0);
    }
  }

  @keyframes carousselSmallSize {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(-1100px, 0, 0);
    }
  }
`;

export default Pricing;
