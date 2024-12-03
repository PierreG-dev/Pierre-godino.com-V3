import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';
import styled from 'styled-components';
const Error404 = () => {
  const router = useRouter();
  const metaContentGenerator = useMemo(() => {
    const metaData = {
      title: '404',
      description:
        'Créateur de sites Internet, développeur WEB freelance et formateur',
      ogUrl: 'https://pierre-godino.com/',
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
      <div className="bg-indigo-900 relative overflow-hidden h-screen">
        <img
          src="/res/404.svg"
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
