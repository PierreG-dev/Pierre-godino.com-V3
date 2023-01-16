import '@styles/globals.css';
import 'tailwindcss/tailwind.css';
import '../styles/nprogress.min.css';
import '../styles/stars.css';
import '../styles/bubbles.css';
import { useRouter } from 'next/router';
// eslint-disable-next-line no-use-before-define
import React, { useCallback, useEffect, useRef, useState } from 'react';
import NProgress from 'nprogress';
import { ThemeContext } from '../src/contexts';
import Layout from '../src/components/Layout';
import Maintenance from '../src/components/Maintenance/Maintenance';

NProgress.configure({ showSpinner: true });

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);
  const [onMaintenance, setOnMaintenance] = useState(false);
  const visitUpdateInterval = useRef();
  const actualPage = useRef();
  const firstLoad = useRef(true);

  const titlePicker = useCallback((pathname) => {
    switch (pathname.toLowerCase().trim()) {
      case '/':
        return 'Accueil';
      case '/realisations':
        return 'Réalisations';
      case '/simulator':
        return 'Simulation';
      case '/contact':
        return 'Contact';
      case '/about':
        return 'A propos';
      case '/about/curiculum':
        return 'CV';
      case '/about/skills':
        return 'Technologies';
      case '/about/experiences':
        return 'Experiences';
      default:
        return '404';
    }
  }, []);

  const handleLoad = useCallback(() => {
    console.log('loaded !');
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleStart = useCallback(() => {
    NProgress.start();
    setIsLoaded(false);
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleComplete = useCallback(() => {
    setTimeout(() => {
      NProgress.done();
      handleLoad();
    }, 700);
  }, []);

  const initiateMetrics = useCallback(() => {
    //visit init
    fetch('https://api.pierre-godino.com/newVisit', { method: 'POST' }).catch(
      (error) => console.error(error)
    );

    //visit update
    visitUpdateInterval.current = setInterval(() => {
      fetch('https://api.pierre-godino.com/updateVisitTime', {
        method: 'PUT',
      }).catch((error) => console.error(error));
    }, 30000);
  }, []);

  const updateJourney = useCallback((pageName) => {
    //visit journey update
    fetch('https://api.pierre-godino.com/updateVisitJourney', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        newPage: pageName,
      }),
    }).catch((error) => console.error(error));
  });

  const firstLoadFinished = useCallback(() => {
    setTimeout(() => {
      updateJourney(actualPage.current);
      firstLoad.current = false;
    }, 5000);
  }, []);

  useEffect(() => {
    handleLoad();
    initiateMetrics();
    firstLoadFinished();
  }, []);

  useEffect(() => {
    console.log('page changed');
    actualPage.current = titlePicker(window.location.pathname);
    document.title = 'Pierre | ' + actualPage.current;
    if (!firstLoad.current) updateJourney(actualPage.current);
  }, [pageProps]);

  useEffect(() => {
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [handleComplete, handleStart, router.events]);

  return (
    <ThemeContext.Provider>
      <Layout handleLoad={handleLoad} isLoaded={isLoaded} variant="classic">
        {onMaintenance ? (
          <Maintenance />
        ) : (
          <Component {...pageProps}></Component>
        )}
      </Layout>
    </ThemeContext.Provider>
  );
}

export default MyApp;
