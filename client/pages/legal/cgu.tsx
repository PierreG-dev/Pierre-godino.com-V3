import { NextPage } from 'next';
import { useContext } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { BackgroundContext } from '../../src/contexts/Contexts';

const Cgu: NextPage = () => {
  // --- Background
  const { background } = useContext(BackgroundContext);

  return (
    <MainContainer>
      <Head>
        <title>CGU | Pierre G.</title>
        <meta property="og:title" content="CGU | Pierre G." />
        <meta name="description" content="Conditions Générales d'Utilisation" />
        <meta
          property="og:description"
          content="Conditions Générales d'Utilisation"
        />
        <meta
          name="twitter:description"
          content="Conditions Générales d'Utilisation"
        />
        <meta
          property="og:url"
          content="https://www.pierre-godino.com/legal/cgu"
        />
        <link rel="canonical" href="https://www.pierre-godino.com/legal/cgu" />
      </Head>
      {background}
      <div id="satelite_container">
        <img src="/res/satelite.png" alt="Satellite" className="satelite" />
      </div>
      <main>
        <h1>Conditions Générales d'Utilisation (CGU)</h1>

        <i>
          Les présentes CGU ont pour objet de définir les modalités et
          conditions d'utilisation du site internet de Pierre Godino (ci-après
          désigné le "site").
        </i>

        <h2>Accès et Navigation</h2>
        <p>
          En accédant et en naviguant sur le site, vous acceptez sans réserve
          les présentes CGU. <br /> Si vous n'acceptez pas ces conditions,
          veuillez ne pas accéder ni utiliser le site.
        </p>

        <h2>Données personnelles</h2>
        <p>
          Les informations personnelles collectées sur le site sont utilisées
          uniquement à des fins de gestion et ne seront en aucun cas divulguées
          à des tiers sans votre consentement explicite. <br /> Ces informations
          sont traitées conformément à la réglementation en vigueur.
        </p>

        <h2>Cookies</h2>
        <p>
          Le site utilise des cookies pour améliorer l'expérience utilisateur,
          collecter des statistiques de navigation et mémoriser vos préférences.
          En continuant à naviguer sur ce site, vous acceptez l'utilisation des
          cookies.
        </p>

        <h2>Propriété intellectuelle</h2>
        <p>
          Tous les contenus présents sur le site, incluant mais non limité à,
          textes, images, graphiques, logos, sont la propriété exclusive du
          propriétaire. <br />
          Toute reproduction, modification, distribution ou représentation de
          tout ou partie de ces éléments est strictement interdite sans
          l'autorisation explicite du webmaster.
        </p>

        <h2>Mentions légales</h2>
        <a href="https://lordicon.com/">Icons by Lordicon.com</a>
        <a
          href="https://www.flaticon.com/fr/icones-gratuites/google"
          title="google icônes">
          Google icônes créées par Freepik - Flaticon
        </a>
      </main>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding-top: 7vh;
  background: #040e1d;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  main {
    max-width: 60vw;
    min-width: 500px;
    padding: 20px 50px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    box-shadow: 0 0px 7px rgba(255, 255, 255, 0.3),
      inset 0 0px 7px rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(1px);
    border: 1px solid rgba(255, 255, 255, 0.5);
    transition: 0.3s;

    h1 {
      font-size: 2rem;
      margin-bottom: -7px;
      color: rgba(255, 255, 255, 0.9);
    }

    i {
      font-size: 1rem;
      color: rgba(255, 255, 255, 0.4);
    }

    h2 {
      margin-top: 30px;
      font-size: 1.7rem;
      color: rgba(255, 255, 255, 0.7);
    }
    p {
      color: rgba(255, 255, 255, 0.6);
    }
  }

  // --- Decorations

  #satelite_container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    overflow: hidden;
  }

  .satelite {
    position: absolute;
    width: 50px;
    animation: 40s satelite_animation linear infinite;
    filter: contrast(0.6);
  }

  @keyframes satelite_animation {
    0% {
      top: 150%;
      left: 150%;
      transform: rotate(50deg);
    }

    100% {
      top: -50%;
      left: 20%;
      transform: rotate(-180deg);
    }
  }
`;

export default Cgu;
