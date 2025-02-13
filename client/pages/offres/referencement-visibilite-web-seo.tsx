import Head from 'next/head';
import { FC, useContext } from 'react';
import styled from 'styled-components';
import { BackgroundContext } from '../../src/contexts/Contexts';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import VerifiedIcon from '@mui/icons-material/Verified';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

import JSONLD from '@/utilities/JSONLD';
import Image from 'next/image';
import GOOGLE_LOGO from '@/assets/global/google.png';
import GOLD_KEY from '@/assets/referencement-visibilite-web-seo/gold-key.png';
import CustomLink from '@/components/Layout/routing/CustomLink';

const Seo: FC = () => {
  // --- background
  const { background } = useContext(BackgroundContext);

  const jsonld = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Création de site internet | Pierre G.',
    description:
      'Un site invisible ne sert à rien ! Améliorez votre référencement SEO, attirez plus de clients et développez votre activité avec une stratégie efficace.',
    url: 'https://www.creation-sites-godino.fr/offres/referencement-visibilite-web-seo',
    serviceType: 'Création de site internet',
    provider: {
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
    <>
      <Head>
        <title>Boostez votre visibilité sur Google | SEO & Référencement</title>
        <meta
          property="og:title"
          content="Boostez votre visibilité sur Google | SEO & Référencement"
        />
        <meta
          name="description"
          content="Un site invisible ne sert à rien ! Améliorez votre référencement SEO, attirez plus de clients et développez votre activité avec une stratégie efficace."
        />
        <meta
          property="og:description"
          content="Un site invisible ne sert à rien ! Améliorez votre référencement SEO, attirez plus de clients et développez votre activité avec une stratégie efficace."
        />
        <meta
          name="twitter:description"
          content="Un site invisible ne sert à rien ! Améliorez votre référencement SEO, attirez plus de clients et développez votre activité avec une stratégie efficace."
        />
        <meta
          property="og:url"
          content="https://www.creation-sites-godino.fr/offres/referencement-visibilite-web-seo"
        />
        <link
          rel="canonical"
          href="https://www.creation-sites-godino.fr/offres/referencement-visibilite-web-seo"
        />
      </Head>

      <JSONLD data={jsonld} />
      <MainContainer>
        {background}
        <section className="blurred" id="hero">
          <h1>
            <FormatQuoteIcon />
            Un site internet invisible ne sert à rien !<FormatQuoteIcon />
          </h1>
        </section>
        <section>
          <main>
            <h2>
              {' '}
              <HeartBrokenIcon />
              Aïe ! Pas de visiteurs...
            </h2>
            <p>
              <strong>
                <big>
                  Vous avez un{' '}
                  <CustomLink href="/offres/creation-site-internet">
                    site
                  </CustomLink>
                  , mais il n’attire pas de visiteurs ?
                </big>
              </strong>{' '}
              <br /> Sans une bonne stratégie de référencement (SEO), votre site
              reste perdu dans les profondeurs de Google. Découvrez comment nous
              pouvons vous aider à améliorer votre visibilité et à attirer plus
              de clients.
            </p>
          </main>
        </section>

        <section className="blurred" id="SEO">
          <main>
            {' '}
            <h2>
              <Image
                src={GOOGLE_LOGO}
                alt="Logo GOOGLE"
                width={50}
                height={50}
              />
              Pourquoi la visibilité sur Google est essentielle ?
            </h2>
            <p>
              <big>
                {' '}
                Saviez-vous que{' '}
                <strong className="yellow">
                  93% des expériences en ligne{' '}
                </strong>
                commencent par un moteur de recherche ?
              </big>
              <br /> Si votre site n’apparaît pas sur la{' '}
              <strong className="red">première page de Google</strong>, vous
              perdez des opportunités.
            </p>
            <ul>
              <li>
                Un bon référencement{' '}
                <strong className="blue">augmente votre trafic</strong> et vos
                ventes.
              </li>
              <li>
                Un site bien positionné inspire{' '}
                <strong className="green">confiance</strong> aux visiteurs.
              </li>
              <li>
                Vous dépensez <strong className="red">moins</strong> en
                publicité payante (Google Ads).
              </li>
            </ul>
          </main>
        </section>

        <section id="SEO_KEYS">
          <main>
            <h2>
              <Image src={GOLD_KEY} width={50} height={50} alt="clé en or" />
              Les clés d’une stratégie SEO gagnante
            </h2>
            <p>
              <big>
                {' '}
                Pour améliorer votre classement sur Google, nous travaillons sur
                <strong> trois axes majeurs </strong>:
              </big>
            </p>
            <ul>
              <li>
                <h3>Un site optimisé pour le référencement</h3>
                <p>
                  Un site rapide, sécurisé et adapté aux mobiles est
                  indispensable pour un bon SEO.
                </p>
              </li>
              <li>
                <h3>Du contenu ciblé et optimisé</h3>
                <p>
                  Les moteurs de recherche favorisent les sites qui apportent de
                  la valeur aux internautes. Nous rédigeons du contenu pertinent
                  en intégrant des mots-clés stratégiques.
                </p>
              </li>
              <li>
                <h3>Un réseau de backlinks puissants</h3>
                <p>
                  Plus votre site est cité par d’autres sites de confiance, plus
                  Google lui accorde d’importance. Nous mettons en place une
                  stratégie de netlinking efficace.
                </p>
              </li>
            </ul>
          </main>
        </section>

        <section id="solutions">
          <main>
            {' '}
            <h2>
              <VerifiedIcon />
              Mes solutions pour booster votre visibilité
            </h2>
            <ul>
              <li>
                <strong>Audit SEO complet</strong> et recommandations
                personnalisées.
              </li>
              <li>
                <strong>Optimisation technique</strong> (performance, structure
                HTML, sécurité).
              </li>
              <li>
                <strong>Rédaction de contenu optimisé</strong> et gestion de
                blog.
              </li>
              <li>
                <strong>Stratégie de netlinking</strong> et référencement local.
              </li>
            </ul>
          </main>
        </section>

        <section className="blurred" id="ADS">
          <main>
            <h2>
              <TrendingUpIcon />
              Boostez instantanément votre visibilité avec la publicité payante
            </h2>
            <p>
              Si le référencement naturel (SEO) est une stratégie à long terme,
              la publicité payante comme <strong>Google Ads</strong> permet
              d’obtenir des résultats immédiats. Grâce à des campagnes bien
              ciblées, vous pouvez attirer des visiteurs qualifiés dès
              aujourd’hui et maximiser votre taux de conversion.
            </p>
            <ul>
              <li>
                <strong>Apparaissez en première position</strong> sur Google dès
                que vos clients recherchent vos services.
              </li>
              <li>
                <strong>Générez des leads rapidement</strong> avec des annonces
                optimisées et un ciblage précis.
              </li>
              <li>
                <strong>Optimisez votre budget</strong> en ne payant que pour
                les visiteurs réellement intéressés.
              </li>
            </ul>
            <p>
              Associez SEO et publicité payante pour une stratégie digitale
              complète et performante !
            </p>
          </main>
        </section>

        <section id="cta1">
          <main>
            {' '}
            <h2>🚀 Faites décoller votre visibilité dès aujourd’hui !</h2>
            <p>
              <big>
                {' '}
                Ne laissez pas votre site rester invisible. Contactez-nous dès
                maintenant pour un{' '}
              </big>
              <strong>
                <CustomLink href="/contact">audit SEO gratuit</CustomLink>
              </strong>{' '}
              et commencez à attirer plus de clients !
            </p>
          </main>
        </section>

        <section className="blurred" id="cta2">
          <CustomLink href="/contact">
            Demander un audit SEO gratuit <ArrowForwardIosIcon />
          </CustomLink>
        </section>
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Montserrat';
  align-items: center;
  position: relative;
  padding: 120px 30px;
  color: #fafafa;
  font-weight: 500;

  * {
    font-family: 'Montserrat';
  }

  section {
    margin-bottom: 100px;
    z-index: 1;
    width: 100%;

    &.blurred {
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(5px);
      width: 100vw;
      /* margin-top: 50px; */
      margin-bottom: 50px;
      padding: 50px;
    }

    h1 {
      font-size: 1.5rem;
      text-align: center;
      svg {
        margin: 5px;
        transform: translateY(-10px);
      }

      @media (max-width: 700px) {
        font-size: 1.3rem;
      }
    }

    main {
      max-width: 1200px;
      width: 100%;
      margin: auto;

      h2 {
        display: flex;
        align-items: center;
        gap: 15px;
        font-size: 2rem;
        font-weight: 500;
        margin-bottom: 50px;

        img {
          width: 50px;
          height: 50px;
          object-fit: contain;
        }

        svg {
          font-size: inherit;
        }
        @media (max-width: 450px) {
          font-size: 1.7rem;
        }
      }
    }

    ul,
    ol {
      padding-left: 80px;
      list-style: decimal;

      li {
        margin: 5px 0;

        &::marker {
          font-size: 1.3rem;
          margin-right: 5px;
        }
      }
      @media (max-width: 700px) {
        padding-left: 30px;

        li::marker {
          font-size: 1.1rem;
        }
      }
    }

    a {
      text-decoration: underline;
    }

    &:nth-of-type(2) {
      svg,
      strong {
        color: #fa7768;
      }
    }

    &:nth-of-type(3) {
      .red {
        color: #ff8376;
      }
      .yellow {
        color: #f1c40f;
      }
      .green {
        color: #27ae60;
      }
      .blue {
        color: #3498db;
      }
    }

    &:nth-of-type(4) {
      strong {
        color: #f1c40f;
      }

      h3 {
        color: #f1c40f;
        font-weight: 600;
      }
    }
    &:nth-of-type(5) {
      strong,
      svg {
        color: #2ecc71;
      }
    }

    &:nth-of-type(6) {
      strong,
      svg {
        color: #f39c12;
      }

      svg {
      }
    }

    &:nth-of-type(7) {
      strong,
      svg {
        color: #3498db;
      }
    }

    &:nth-of-type(8) {
      display: flex;
      justify-content: center;
      a {
        font-size: 1.5rem;

        svg {
          font-size: 2rem;
          color: #3498db;
        }
        @media (max-width: 700px) {
          font-size: 1.1rem;
          svg {
            font-size: 1.5rem;
          }
        }
      }
    }
  }
`;

export default Seo;
