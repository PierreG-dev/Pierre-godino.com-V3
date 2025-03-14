import React, { useContext } from 'react';
import styled from 'styled-components';
import { NextPage } from 'next';
import Head from 'next/head';
import { BackgroundContext } from '../src/contexts/Contexts';
import HomeHero from '../src/components/Home/components/HomeHero';

import dynamic from 'next/dynamic';

const JSONLD = dynamic(() => import('@/utilities/JSONLD'), { ssr: true });

const HomeCustomerSlider = dynamic(
  () => import('../src/components/Home/components/HomeCustomerSlider'),
  { ssr: false }
);
const Calendly = dynamic(
  () => import('../src/components/Home/components/Calendly'),
  { ssr: false }
);
const HomeRealisations = dynamic(
  () => import('../src/components/Home/components/HomeRealisations'),
  { ssr: false }
);
const HomeExpert = dynamic(
  () => import('../src/components/Home/components/HomeExpert'),
  { ssr: true }
);
const HomeRatings = dynamic(
  () => import('../src/components/Home/components/HomeRatings'),
  { ssr: false }
);

const HomeMaths = dynamic(
  () => import('../src/components/Home/components/HomeMaths'),
  { ssr: true }
);

const HomeNotes = dynamic(
  () => import('../src/components/Home/components/HomeNotes'),
  { ssr: true }
);
const Home: NextPage = () => {
  // --- Background
  const { background } = useContext(BackgroundContext);

  const jsonld = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Création Sites Godino',
    url: 'https://www.creation-sites-godino.fr',
    description:
      'Expert en création de sites Internet, boutiques en ligne et SEO. Contactez-moi au 06 12 34 56 78 pour des solutions sur-mesure.',
    publisher: {
      '@type': 'Organization',
      name: 'Pierre G.',
      logo: 'https://www.creation-sites-godino.fr/logo.png',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.creation-sites-godino.fr',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+33 6 12 34 56 78',
      contactType: 'Customer Service',
      areaServed: 'FR',
      availableLanguage: 'fr',
    },
  };

  return (
    <MainContainer>
      <Head>
        <title>Création de sites internet professionnels | Pierre G.</title>

        <meta
          property="og:title"
          content=" Création de sites internet professionnels | Pierre G."
        />

        <meta
          name="description"
          content="Expert en création de sites Internet, boutiques en ligne et SEO. Contactez-moi au 06 12 34 56 78 pour des solutions sur-mesure."
        />

        <meta
          property="og:description"
          content="Expert en création de sites Internet, boutiques en ligne et SEO. Contactez-moi au 06 12 34 56 78 pour des solutions sur-mesure."
        />

        <meta
          name="twitter:description"
          content="Expert en création de sites Internet, boutiques en ligne et SEO. Contactez-moi au 06 12 34 56 78 pour des solutions sur-mesure."
        />

        <meta
          property="og:url"
          content="https://www.creation-sites-godino.fr"
        />
        <link rel="canonical" href="https://www.creation-sites-godino.fr" />
      </Head>

      <JSONLD data={jsonld} />

      {background}
      <HomeHero />
      <HomeRatings />
      <Calendly />
      <HomeMaths />
      {/* <hr /> */}
      <HomeRealisations />
      <HomeExpert />
      {/* <HomeNotes /> */}
      <HomeCustomerSlider />
      {/* <HomeServices /> */}
      {/* <hr /> */}
      {/* <HomeSEOContent /> */}
      {/* <HomeSimulator /> */}
      {/* <HomeQuestions /> */}
    </MainContainer>
  );
};

const MainContainer = styled.div`
  background: #040e1d;
  display: flex;
  flex-direction: column;
  gap: 100px;
  width: 100%;
  min-height: 100vh;
  padding: 7vh 0;
  z-index: 1;

  @media (max-width: 500px) {
    gap: 70px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  strong,
  span {
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.08);
  }

  hr {
    border: 1px solid #fafafaaa;
    width: 50%;
    margin: auto;
    border-radius: 5px;
    box-shadow: 0 0 5px 3px rgba(255, 255, 255, 0.05);
    margin-bottom: 50px;
  }

  section {
    position: relative;
  }
`;

export default Home;
