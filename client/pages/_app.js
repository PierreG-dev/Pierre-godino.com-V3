import '@styles/globals.css';
import 'tailwindcss/tailwind.css';
import '../styles/nprogress.min.css';
import '../styles/stars.css';
import '../styles/bubbles.css';
import { useRouter } from 'next/router';
// eslint-disable-next-line no-use-before-define
import React, { useCallback, useEffect, useState } from 'react';
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
    }, 1500);
  }, []);

  useEffect(() => {
    handleLoad();
  }, []);

  useEffect(() => {
    document.title = 'Pierre | ' + titlePicker(window.location.pathname);
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
