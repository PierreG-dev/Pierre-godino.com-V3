import React, { useContext, useMemo } from 'react';
import styled from 'styled-components';
import { NextPage } from 'next';
import Head from 'next/head';
import { BackgroundContext } from '../src/contexts/Contexts';
import HomeHero from '../src/components/Home/components/HomeHero';
import HomeRatings from '../src/components/Home/components/HomeRatings';
import HomeServices from '../src/components/Home/components/HomeServices';
import HomeCustomerSlider from '../src/components/Home/components/HomeCustomerSlider';
import HomeSimulator from '../src/components/Home/components/HomeSimulator';
import HomeQuestions from '../src/components/Home/components/HomeQuestions';
import HomeSEOContent from '../src/components/Home/components/HomeSEOContent';
import HomeExpert from '../src/components/Home/components/HomeExpert';

const Home: NextPage = () => {
  // --- Background
  const { background } = useContext(BackgroundContext);

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

      {background}
      <HomeHero />
      <HomeRatings />
      {/* <hr /> */}
      <HomeExpert />
      <HomeServices />
      {/* <hr /> */}
      <HomeCustomerSlider />
      <HomeSEOContent />
      <HomeSimulator />
      <HomeQuestions />
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
