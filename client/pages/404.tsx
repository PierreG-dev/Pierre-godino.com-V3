import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import BG404 from '@/assets/404/404.svg';
import dynamic from 'next/dynamic';
const JSONLD = dynamic(() => import('@/utilities/JSONLD'), { ssr: true });

const Error404 = () => {
  const jsonld = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Erreur 404 | Pierre G.',
    url: 'https://www.creation-sites-godino.fr/404',
    description: 'Page non trouvée - Erreur 404',
    publisher: {
      '@type': 'Organization',
      name: 'Création Sites Godino',
      url: 'https://www.creation-sites-godino.fr',
      logo: 'https://www.creation-sites-godino.fr/logo.png',
    },
    robots: 'noindex, nofollow',
  };

  return (
    <MainContainer>
      <Head>
        <title>404 | Pierre G.</title>
        <meta property="og:title" content="404 | Pierre G." />
        <meta name="description" content="Erreur 404" />
        <meta property="og:description" content="Erreur 404" />
        <meta name="twitter:description" content="Erreur 404" />
        <meta name="robots" content="noindex, nofollow" />
        <meta
          property="og:url"
          content={'https://www.creation-sites-godino.fr/404'}
        />
        <link
          rel="canonical"
          href={'https://www.creation-sites-godino.fr/404'}
        />
      </Head>

      <JSONLD data={jsonld} />

      <div className="bg-indigo-900 relative overflow-hidden h-screen">
        <Image
          src={BG404}
          className="absolute h-full w-full object-cover"
          alt="astronaute perdu dans l'espace"
        />
        <div className="inset-0 bg-black opacity-25 absolute"></div>
        <div className="container mx-auto px-6 md:px-12 relative flex items-center py-32 xl:py-40">
          <div className="w-full font-mono flex flex-col items-center relative">
            <p className="font-extrabold text-8xl my-44 text-white animate-bounce">
              404
            </p>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

const MainContainer = styled.main`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export default Error404;
