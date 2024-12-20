import '@styles/globals.css';
import 'tailwindcss/tailwind.css';
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

NProgress.configure({ showSpinner: true });
let handleStart;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);
  // const [onMaintenance, setOnMaintenance] = useState(false);
  const visitUpdateInterval = useRef();
  const firstLoad = useRef(true);

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

  const devicePicker = useCallback(() => {
    const width = window.innerWidth;
    if (!width) return;

    if (width <= 480) return 'Mobile';
    else if (width <= 768) return 'Tablette';
    else if (width <= 1024) return 'Ordinateur portable | SM';
    else return 'Ordinateur de bureau | LG';
  }, []);

  const initiateMetrics = useCallback(() => {
    if (!process.env.NEXT_PUBLIC_API_URL) return;
    //visit init
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/newVisit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        device: devicePicker(),
      }),
    }).catch((error) => console.error(error));

    //visit update
    visitUpdateInterval.current = setInterval(() => {
      if (!process.env.NEXT_PUBLIC_API_URL) return;
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/updateVisitTime`, {
        method: 'PUT',
      }).catch((error) => console.error(error));
    }, 30000);
  }, [devicePicker]);

  const updateJourney = useCallback((pageName) => {
    if (!process.env.NEXT_PUBLIC_API_URL) return;
    //visit journey update
    try {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/updateVisitJourney`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          newPage: pageName,
        }),
      }).catch((error) => console.error(error));
    } catch (err) {
      console.error(err);
    }
  }, []);

  const firstLoadFinished = useCallback(() => {
    setTimeout(() => {
      const title = document.title;
      updateJourney(title.split('|')[0]?.trim());
      firstLoad.current = false;
    }, 700);
  }, [updateJourney]);

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
    <Contexts>
      <Head>
        <meta property="og:image" content="/res/OG-image.png" />
        <meta name="twitter:image" content="/res/OG-image.png" />
        <meta property="og:type" content="website" />
      </Head>
      <Layout handleLoad={handleLoad} isLoaded={isLoaded} variant="classic">
        <Component {...pageProps}></Component>
      </Layout>
    </Contexts>
  );
}

export default MyApp;
export { handleStart };
