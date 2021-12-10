import React, { useCallback, useEffect, useState } from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import AboutNavbar from './navbar/AboutNavbar';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

export type Props = {
  variant: 'classic' | 'about';
};

const Index: NextPage<Props> = ({ children, variant }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [noLayoutMode, setNoLayoutMode] = useState(false);

  const handleKeyDown = useCallback((event) => {
    if (event.key === '$') setNoLayoutMode((prevState) => !prevState);
  }, []);

  const handleLoad = () => {
    console.log('loaded !');
    setTimeout(() => {
      setIsLoaded((prevState) => !prevState);
    }, 3000);
  };

  useEffect(() => {
    handleLoad();
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      handleLoad();
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const navbarPicker = () => {
    switch (variant) {
      case 'classic':
        return <Navbar loaded={isLoaded} noLayoutMode={noLayoutMode} />;
      case 'about':
        return <AboutNavbar />;
      default:
        console.error('unknown navbar type');
        break;
    }
  };
  return (
    <MainContainer>
      {noLayoutMode && (
        <NoLayoutWarning>|LayoutLess mode activated|</NoLayoutWarning>
      )}
      {navbarPicker()}
      <div className={'relative'}>{children}</div>
      {variant === 'classic' && (
        <Footer loaded={isLoaded} noLayoutMode={noLayoutMode} />
      )}
    </MainContainer>
  );
};

const MainContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`;

const NoLayoutWarning = styled.p`
  color: orangered;
  font-weight: bold;
  letter-spacing: 0.8rem;
  position: fixed;
  top: 15px;
  right: 15px;
  z-index: 100;
`;

export default Index;
