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
import Maintenance from '../src/components/Maintenance/Maintenance';
import Head from 'next/head';

NProgress.configure({ showSpinner: true });
let handleStart;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function MyApp({ Component, pageProps }) {
  const [metaElements, setMetaElements] = useState({
    title: 'Accueil',
    description:
      'Créateur de sites Internet, développeur WEB freelance et formateur depuis 2019. Développement web, création ou refonte de site internet, intégration, référencement, etc.',
    ogTitle: 'Développement WEB, création de sites internet & formations',
    ogDescription:
      'Créateur de sites Internet, développeur WEB freelance et formateur depuis 2019. Développement web, création ou refonte de site internet, intégration, référencement, etc.',
    ogUrl: 'https://pierre-godino.com',
  });

  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);
  const [onMaintenance, setOnMaintenance] = useState(false);
  const visitUpdateInterval = useRef();
  const firstLoad = useRef(true);

  const metaElementsPicker = useCallback((pathname) => {
    switch (pathname.toLowerCase().trim()) {
      case '/':
        return {
          title: 'Accueil',
          description:
            'Créateur de sites Internet, développeur WEB freelance et formateur',
          ogUrl: 'https://pierre-godino.com',
        };
      case '/realisations':
        return {
          title: 'Réalisations',
          description:
            'Créateur de sites Internet, développeur WEB freelance et formateur | Mes réalisations',
          ogUrl: 'https://pierre-godino.com/realisations',
        };
      case '/simulator':
        return {
          title: 'Simulation',
          description:
            'Créateur de sites Internet, développeur WEB freelance et formateur | Devis en ligne',
          ogUrl: 'https://pierre-godino.com/simulator',
        };
      case '/contact':
        return {
          title: 'Contact',
          description:
            'Créateur de sites Internet, développeur WEB freelance et formateur | Mes coordonnées',
          ogUrl: 'https://pierre-godino.com/contact',
        };
      case '/about':
        return {
          title: 'A propos',
          description:
            'Créateur de sites Internet, développeur WEB freelance et formateur | A propos de moi',
          ogUrl: 'https://pierre-godino.com/about',
        };
      case '/about/curiculum':
        return {
          title: 'CV',
          description:
            'Créateur de sites Internet, développeur WEB freelance et formateur | Mon CV traditionnel',
          ogUrl: 'https://pierre-godino.com/curiculum',
        };
      case '/about/skills':
        return {
          title: 'Technologies',
          description:
            'Créateur de sites Internet, développeur WEB freelance et formateur | Mes technologies',
          ogUrl: 'https://pierre-godino.com/skills',
        };
      case '/about/experiences':
        return {
          title: 'Parcours',
          description:
            'Créateur de sites Internet, développeur WEB freelance et formateur | Mon parcours',
          ogUrl: 'https://pierre-godino.com/experiences',
        };
      default:
        return {
          title: '404',
          description:
            'Créateur de sites Internet, développeur WEB freelance et formateur',
          ogUrl: 'https://pierre-godino.com/',
        };
    }
  }, []);

  const handleLoad = useCallback(() => {
    console.log('loaded !');
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  handleStart = useCallback(() => {
    NProgress.start();
    setIsLoaded(false);
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleComplete = useCallback(() => {
    setTimeout(() => {
      NProgress.done();
      handleLoad();
    }, 700);
  }, [handleLoad]);

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
  }, []);

  const firstLoadFinished = useCallback(() => {
    setTimeout(() => {
      updateJourney(metaElements.title);
      firstLoad.current = false;
    }, 5000);
  }, [updateJourney]);

  useEffect(() => {
    handleLoad();
    initiateMetrics();
    firstLoadFinished();
  }, [firstLoadFinished, handleLoad, initiateMetrics]);

  useEffect(() => {
    setMetaElements(metaElementsPicker(window.location.pathname));
    if (!firstLoad.current) updateJourney(metaElements.title);
  }, [pageProps, updateJourney]);

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
        <title>{'Pierre | ' + metaElements.title}</title>
        <meta name="description" content={metaElements.description} />
        <meta
          property="og:title"
          content={'Pierre GODINO | ' + metaElements.title}
        />
        <meta property="og:url" content={metaElements.ogUrl} />
        <meta property="og:image" content="/res/OG-image.png" />
        <meta property="og:description" content={metaElements.description} />
      </Head>
      <Layout handleLoad={handleLoad} isLoaded={isLoaded} variant="classic">
        {onMaintenance ? (
          <Maintenance />
        ) : (
          <Component {...pageProps}></Component>
        )}
      </Layout>
    </Contexts>
  );
}

export default MyApp;
export { handleStart };
