/* eslint-disable react-hooks/exhaustive-deps */
import { NextPage } from 'next';
import { useContext } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { BackgroundContext } from '../../src/contexts/Contexts';
import JSONLD from '@/utilities/JSONLD';

const Cgu: NextPage = () => {
  // --- Background
  const { background } = useContext(BackgroundContext);

  const jsonld = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Conditions Générales de Vente | Pierre G.',
    url: 'https://www.creation-sites-godino.fr/legal/cgv',
    description:
      'Conditions générales de vente pour les services de Création Sites Godino.',
    publisher: {
      '@type': 'Organization',
      name: 'Création Sites Godino',
      url: 'https://www.creation-sites-godino.fr',
      logo: 'https://www.creation-sites-godino.fr/logo.png',
    },
  };

  return (
    <MainContainer>
      <Head>
        <title>CGV | Pierre G.</title>
        <meta property="og:title" content="CGV | Pierre G." />
        <meta name="description" content="Conditions générales de vente" />
        <meta
          property="og:description"
          content="Conditions générales de vente"
        />
        <meta
          name="twitter:description"
          content="Conditions générales de vente"
        />
        <meta
          property="og:url"
          content={'https://www.creation-sites-godino.fr/legal/cgv'}
        />
        <link
          rel="canonical"
          href={'https://www.creation-sites-godino.fr/legal/cgv'}
        />
      </Head>

      <JSONLD data={jsonld} />

      {background}
      <div id="satelite_container">
        <img src="/res/satelite.png" alt="Satellite" className="satelite" />
      </div>
      <main>
        <h1>Conditions Générales de Vente (CGV)</h1>

        <p>
          Les présentes CGV ont pour objet de définir les conditions
          commerciales entre Pierre Godino et ses clients pour les services
          offerts sur le site.
        </p>

        <h2>Services</h2>
        <p>
          Le site propose une série de services liés au développement, à la
          formation et au mentorat. <br /> Les détails, spécifications et prix
          de ces services sont précisés sur le site.
        </p>

        <h2>Simulateur de devis</h2>
        <p>
          Le simulateur de devis disponible sur le site est fourni à titre
          indicatif. <br /> Le devis final pourrait varier en fonction des
          besoins spécifiques du client et d'autres facteurs non pris en compte
          par le simulateur.
        </p>

        <h2>Prix</h2>
        <p>
          Les prix des services sont indiqués en euros et hors taxes. <br />
          Pierre Godino se réserve le droit de modifier ses prix à tout moment
          sans préavis.
        </p>

        <h2>Paiement</h2>
        <p>
          Les services commandés sur le site doivent être payés intégralement au
          moment de la commande, sauf indication contraire. Les moyens de
          paiement acceptés sont détaillés sur le site.
        </p>

        <h2>Réclamations</h2>
        <p>
          En cas d'insatisfaction ou de problème avec un service commandé,
          veuillez contacter Pierre Godino via les moyens de contact indiqués
          sur le site.
        </p>

        <h2>Responsabilité</h2>
        <p>
          Pierre Godino ne saurait être tenu responsable des dommages indirects
          résultant de l'utilisation des services fournis. <br /> La
          responsabilité de Pierre Godino est strictement limitée au montant
          payé par le client pour le service en question.
        </p>
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
