import '@styles/globals.css';
import 'tailwindcss/tailwind.css';
import '../styles/nprogress.min.css';
import '../styles/stars.css'
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import NProgress from 'nprogress';

NProgress.configure({ showSpinner: true });

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const handleStart = useCallback(() => {
    NProgress.start();
  });

  const handleComplete = useCallback(() => {
    NProgress.done();
  });

  useEffect(() => {
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, []);

  return <Component {...pageProps}></Component>;
}

export default MyApp;
