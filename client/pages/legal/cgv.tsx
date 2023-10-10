import { NextPage } from 'next';
import { useMemo, useEffect, useCallback, useRef } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Head from 'next/head';

const Cgu: NextPage = () => {
  const starsArray = useRef<JSX.Element[]>();
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

  useEffect(() => {
    starsArray.current = starsGenerator();
  }, [starsGenerator]);

  const router = useRouter();
  const metaContentGenerator = useMemo(() => {
    const metaData = {
      title: 'CGU',
      description:
        'Créateur de sites Internet, développeur WEB freelance et formateur | CGU',
      ogUrl: 'https://pierre-godino.com/CGU',
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
      <div id="stars-container">{starsArray.current}</div>
      <div id="satelite_container">
        <img src="/res/satelite.png" alt="Satellite" className="satelite" />
      </div>
      <main>
        <h1>Conditions Générales de Vente (CGV)</h1>

        <p>
          Les présentes CGV ont pour objet de définir les conditions
          commerciales entre Pierre Godino et ses clients pour les services
          offerts sur le Site.
        </p>

        <h2>Services</h2>
        <p>
          Le Site propose une série de services liés au développement, à la
          formation et au mentorat. <br /> Les détails, spécifications et prix
          de ces services sont précisés sur le Site.
        </p>

        <h2>Simulateur de devis</h2>
        <p>
          Le simulateur de devis disponible sur le Site est fourni à titre
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
          Les services commandés sur le Site doivent être payés intégralement au
          moment de la commande, sauf indication contraire. Les moyens de
          paiement acceptés sont détaillés sur le Site.
        </p>

        <h2>Réclamations</h2>
        <p>
          En cas d'insatisfaction ou de problème avec un service commandé,
          veuillez contacter Pierre Godino via les moyens de contact indiqués
          sur le Site.
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

  #stars-container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    .star {
      background: #fafafa;
      z-index: 0;
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
  }

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
