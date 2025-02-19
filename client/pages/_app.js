import '../styles/globals.css';
// import 'tailwindcss/tailwind.css';
import '../styles/nprogress.min.css';
import '../styles/stars.css';
import '../styles/bubbles.css';
import { useRouter } from 'next/router';
// eslint-disable-next-line no-use-before-define
import React, { useCallback, useEffect, useRef, useState } from 'react';
import NProgress from 'nprogress';
import { Contexts } from '../src/contexts/Contexts';
import Layout from '../src/components/Layout';
import Head from 'next/head';
import { bebasNeue, montserrat, spaceMono } from '@/utilities/fonts';
import useMetrics from '@/utilities/useMetrics';

NProgress.configure({ showSpinner: true });
let handleStart;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);
  // const [onMaintenance, setOnMaintenance] = useState(false);

  const firstLoad = useRef(true);
  const updateFirstLoad = () => (firstLoad.current = false);

  const { firstLoadFinished, updateJourney, initiateMetrics } = useMetrics({
    updateFirstLoad,
  });

  const handleLoad = useCallback(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 200);
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  handleStart = useCallback(() => {
    NProgress.start();
    setIsLoaded(false);
  }, []);

  useEffect(() => {
    if (!firstLoad.current) return;
    handleLoad();
    initiateMetrics();
    firstLoadFinished();
  }, [firstLoadFinished, handleLoad, initiateMetrics]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleComplete = useCallback(() => {
    const pageTitle = document.title;
    setTimeout(() => {
      updateJourney(pageTitle.split('|')[0].trim());
      NProgress.done();
      handleLoad();
    }, 700);
  }, [handleLoad, updateJourney]);

  useEffect(() => {
    // router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      // router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [handleComplete, router.events]);

  return (
    <Contexts suppressHydrationWarning>
      <Head>
        <meta property="og:image" content="/res/OG-image.png" />
        <meta name="author" content="Pierre Godino" />
        <meta name="twitter:image" content="/res/OG-image.png" />
        <meta property="og:type" content="website" />
      </Head>
      <Layout handleLoad={handleLoad} isLoaded={isLoaded} variant="classic">
        <div
          className={`${montserrat.className} ${spaceMono.className} ${bebasNeue.className}`}>
          <Component {...pageProps}></Component>
        </div>
      </Layout>
    </Contexts>
  );
}

export default MyApp;
export { handleStart };
