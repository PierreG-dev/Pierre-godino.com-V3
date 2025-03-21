import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import MaintenenanceVideo from './MaintenanceVideo';
import { NextPage } from 'next';
import Link from 'next/link';

const Maintenance: NextPage = () => {
  const [devMode, setDevMode] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [displayLoadingScreen, setDisplayLoadingScreen] = useState(false);

  const handleKeyDown = useCallback((event) => {
    switch (event.key) {
      case 'g':
        setDevMode((prevState) => !prevState);
        console.info('DEV MODE ACTIVATED');
        break;

      default:
        break;
    }
  }, []);

  const handleTouch = useCallback(() => {
    console.info('DEV MODE ACTIVATED');
    setTimeout(() => {
      setDevMode((prevState) => !prevState);
    }, 200);
  }, []);

  const handleLoad = useCallback(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 500);
  }, []);

  const handleLoadingScreen = useCallback(() => {
    setTimeout(() => {
      setDisplayLoadingScreen(true);
    }, 1500);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line no-restricted-globals
    addEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line no-restricted-globals
    addEventListener('touchend', handleTouch);
    // eslint-disable-next-line no-restricted-globals
    removeEventListener('DOMContentLoaded', handleLoad);

    setLoaded(true);

    return () => {
      // eslint-disable-next-line no-restricted-globals
      removeEventListener('keydown', handleKeyDown);
      // eslint-disable-next-line no-restricted-globals
      removeEventListener('touchend', handleTouch);
      // eslint-disable-next-line no-restricted-globals
      removeEventListener('DOMContentLoaded', handleLoad);
    };
  }, [handleKeyDown, handleLoad, handleTouch]);

  return (
    <MainContainer>
      <LoadingScreen
        className={displayLoadingScreen ? 'opacity-0' : 'opacity-1'}
        style={{
          position: 'absolute',
          background: '#373737',
          height: '100%',
          width: '100%',
          top: 0,
          left: 0,
          color: '#fafafa',
        }}></LoadingScreen>

      {loaded ? (
        <MaintenenanceVideo
          url={'/video/neon-background.webm'}
          handleLoadingScreen={handleLoadingScreen}
        />
      ) : null}

      <div
        className="w-full h-full m-auto flex flex-col text-center gap-5 justify-center -my-24"
        style={{ zIndex: 2 }}>
        {devMode ? (
          <React.Fragment>
            <Link href={'/a-propos'}>ESPACE RECRUTEUR</Link>
            <Link href={'/a-propos/experiences'}>EXPERIENCES</Link>
            <Link href={'/a-propos/technologies'}>TECHNOLOGIES</Link>
            <Link href={'/a-propos/curiculum'}>CV</Link>
            <Link href={'/contact'}>CONTACT</Link>
            <Link href={'/realisations'}>REALISATIONS</Link>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <h1 style={{ fontSize: '4rem' }}>Site en maintenance</h1>
            <p className="text-sm">Revenez plus tard</p>
          </React.Fragment>
        )}
      </div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  background: #373737;
  display: flex;
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  color: #fafafa;

  h1 {
    font-family: "Bebas Neue", serif;
  }
  p {
    font-family: Montserrat;
  }
`;

const LoadingScreen = styled.div`
  position: absolute;
  z-index: 2;
  background: #373737;
  transition: 1.5s;
  display: flex;
`;

export default Maintenance;
