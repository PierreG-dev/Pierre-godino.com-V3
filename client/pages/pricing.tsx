import React, { useCallback, useMemo } from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import BrushIcon from '@mui/icons-material/Brush';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import BadgeIcon from '@mui/icons-material/Badge';
import PublicIcon from '@mui/icons-material/Public';
import SavingsIcon from '@mui/icons-material/Savings';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import CodeIcon from '@mui/icons-material/Code';
import SecurityIcon from '@mui/icons-material/Security';
import InventoryIcon from '@mui/icons-material/Inventory';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsightsIcon from '@mui/icons-material/Insights';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import UpdateIcon from '@mui/icons-material/Update';
import SupportIcon from '@mui/icons-material/Support';
import VerifiedIcon from '@mui/icons-material/Verified';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import HandshakeIcon from '@mui/icons-material/Handshake';

const Simulator: NextPage = () => {
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

  const router = useRouter();
  const metaContentGenerator = useMemo(() => {
    const metaData = {
      title: 'Prestations',
      description:
        'Créateur de sites Internet, développeur WEB freelance et formateur | Détail de mes prestations',
      ogUrl: 'https://pierre-godino.com/simulator',
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
      {starsGenerator()}
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
              A partir de <span>600 €</span>
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
          <p className="service-support">
            Maintenance partir de <span>30 € / mois</span>
          </p>
        </li>
        <li className="service-item e-commerce">
          <h2 className="service-title">Boutique en ligne</h2>
          <p className="service-description">
            Vendez vos produits facilement en ligne, accessible partout et tout
            le temps.
          </p>
          <div className="service-price">
            <h3 className="price">
              A partir de <span>2000 €</span>
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
          <p className="service-support">
            Maintenance A partir de <span>70 € / mois</span>
          </p>
        </li>

        <li className="service-item application">
          <h2 className="service-title">Application | Portail</h2>
          <p className="service-description">
            Passez à l'étape supérieure en proposant votre propre plateforme
          </p>
          <div className="service-price">
            <h3 className="price">
              A partir de <span>5000 €</span>
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
              <HandshakeIcon
                style={{
                  color: '#27ae60',
                  filter: 'drop-shadow(0px 0px 3px rgba(green, 0.2))',
                }}
              />{' '}
              Collaboration continue
            </li>
          </ul>
          <p className="service-support">
            Maintenance à partir de <span>100 € / mois</span>
          </p>
        </li>
      </ul>

      <h3 id="on_budget_title">
        <SavingsIcon />
        Petit budget ?
      </h3>

      <div className="service-item" id="online_visit_card">
        <h2 className="service-title">Carte de visite numérique</h2>
        <p className="service-description">
          Solution efficace pour une présence en ligne minimale, parfait pour
          les petits budgets.
        </p>
        <div className="service-price">
          <h3 className="price">
            Tarif unique <span>150 €</span>
          </h3>
        </div>
        <ul className="service-details-list">
          <li>
            <ShortcutIcon
              style={{
                color: '#27ae60',
                filter: 'drop-shadow(0px 0px 3px rgba(green, 0.2))',
              }}
            />{' '}
            Abordable
          </li>
          <li>
            <BadgeIcon
              style={{
                color: '#27ae60',
                filter: 'drop-shadow(0px 0px 3px rgba(green, 0.2))',
              }}
            />{' '}
            Minimaliste
          </li>
          <li>
            <PublicIcon
              style={{
                color: '#27ae60',
                filter: 'drop-shadow(0px 0px 3px rgba(green, 0.2))',
              }}
            />{' '}
            Présence en ligne
          </li>
          <hr />
          <li>
            <BeenhereIcon
              style={{
                color: '#27ae60',
                filter: 'drop-shadow(0px 0px 3px rgba(green, 0.2))',
              }}
            />{' '}
            Référence l'entreprise
          </li>
          <hr />
          <li>
            <CodeIcon
              style={{
                color: '#27ae60',
                filter: 'drop-shadow(0px 0px 3px rgba(green, 0.2))',
              }}
            />{' '}
            100% codé à la main
          </li>
          <hr />
        </ul>
        <p className="service-support">
          Maintenance <span>20 € / mois</span>
        </p>
      </div>

      <section id="clients">
        <h3>
          Ils m'ont fait confiance <VerifiedIcon />
        </h3>

        <Caroussel>
          <div className="wrapper">
            {' '}
            <img
              className="logo-element"
              src="/icons/oclock.png"
              alt="Ecoles O'Clock"
            />
            <img
              className="logo-element"
              src="/icons/philliance.png"
              alt="Philiance Formations"
            />
            <img
              className="logo-element"
              src="/icons/apformation.png"
              alt="AP Formations"
            />
            <img className="logo-element" src="/icons/GEMA.jpg" alt="GEMA" />
            <img
              className="logo-element"
              src="/icons/axeacademy.png"
              alt="Axe academy"
            />
            <img
              className="logo-element"
              src="/icons/ab-nature_full.png"
              alt="AB Nature"
            />
            <img
              className="logo-element"
              src="/icons/checkyoursmile.png"
              alt="Check Your Smile"
            />
            <img
              className="logo-element"
              src="/icons/speedynanie_alpha.png"
              alt="Speedy Nanie"
            />
            <img
              className="logo-element"
              src="/icons/videomenthe_alpha.png"
              alt="Videomenthe"
            />
            <img
              className="logo-element"
              src="/icons/yoop_alpha.png"
              alt="Yoop Digital"
            />
            <img
              className="logo-element"
              src="/icons/misino_alpha.png"
              alt="Dr. Misino"
            />
            {/* DEBUT SENTINEL */}
            <img
              className="logo-element"
              src="/icons/oclock.png"
              alt="Ecoles O'Clock"
            />
            <img
              className="logo-element"
              src="/icons/philliance.png"
              alt="Philiance Formations"
            />
            <img
              className="logo-element"
              src="/icons/apformation.png"
              alt="AP Formations"
            />
            <img className="logo-element" src="/icons/GEMA.jpg" alt="GEMA" />
            <img
              className="logo-element"
              src="/icons/axeacademy.png"
              alt="Axe academy"
            />
            <img
              className="logo-element"
              src="/icons/ab-nature_full.png"
              alt="AB Nature"
            />
            <img
              className="logo-element"
              src="/icons/checkyoursmile.png"
              alt="Check Your Smile"
            />
            <img
              className="logo-element"
              src="/icons/speedynanie_alpha.png"
              alt="Speedy Nanie"
            />
            <img
              className="logo-element"
              src="/icons/videomenthe_alpha.png"
              alt="Videomenthe"
            />
            <img
              className="logo-element"
              src="/icons/yoop_alpha.png"
              alt="Yoop Digital"
            />
            <img
              className="logo-element"
              src="/icons/misino_alpha.png"
              alt="Dr. Misino"
            />
          </div>
        </Caroussel>
      </section>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  padding: 13vh 0;
  background: #040e1d;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;

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
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 0px 7px rgba(255, 255, 255, 0.3),
      inset 0 0px 7px rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(1px);
    width: 400px;
    flex: 1;
    padding: 25px 25px;
    color: rgba(#fafafa, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    border-radius: 5px;
    transition: 0.1s;
    padding-bottom: 60px;

    &:hover {
      background: rgba(255, 255, 255, 0.3);
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
      color: rgba(255, 255, 255, 0.8);
      font-weight: bold;
      letter-spacing: 1px;
      font-size: 1.5rem;

      span {
        font-size: 2.5rem;
      }
    }
  }

  ul.service-details-list {
    padding-top: 25px;
    color: rgba(255, 255, 255, 0.7);
    display: flex;
    flex-direction: column;
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
      /* gap: 5px; */
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
    width: 100vw;
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

  .star {
    background: #fafafa;
    z-index: 1;
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
    animation: 25s caroussel infinite linear;

    img.logo-element {
      border-radius: 15px;
      width: 100px;
      height: 100px;
      object-fit: contain;

      filter: drop-shadow(0px 0px 0.5px rgba(255, 255, 255, 0.5));
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
`;

export default Simulator;
