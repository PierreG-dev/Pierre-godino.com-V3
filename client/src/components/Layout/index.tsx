import React, { useCallback, useEffect, useState } from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import AboutNavbar from './navbar/AboutNavbar';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import AdminModal from './admin/adminModal';
import Dock from './dock/dock';

export type Props = {
  variant: 'classic' | 'about';
  isLoaded: boolean;
  handleLoad: () => void;
};

const Index: React.FC<Props> = ({ children, variant, isLoaded }) => {
  const [noLayoutMode, setNoLayoutMode] = useState(false);
  const [isAdminModalOpened, setIsAdminModalOpened] = useState(false);

  const HandleAdminModalOpen = useCallback(() => {
    setIsAdminModalOpened(true);
  }, []);
  const HandleAdminModalClose = useCallback(() => {
    setIsAdminModalOpened(false);
  }, []);

  const handleKeyDown = useCallback((event) => {
    if (event.key === '$') setNoLayoutMode((prevState) => !prevState);
  }, []);

  const navbarPicker = useCallback(() => {
    switch (variant) {
      case 'classic':
        return <Navbar loaded={isLoaded} noLayoutMode={noLayoutMode} />;
      case 'about':
        return <AboutNavbar />;
      default:
        console.error('unknown navbar type');
        break;
    }
  }, [noLayoutMode, isLoaded, variant]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <MainContainer
      style={{
        background: isLoaded ? 'transparent' : '#373737',
        zIndex: isLoaded ? 0 : 10,
      }}>
      {/* <div
        id="load_screen"
        style={{
          opacity: isLoaded ? 0 : 1,
          zIndex: isLoaded ? -1 : 5,
        }}></div> */}

      <AdminModal
        isOpened={isAdminModalOpened}
        handleClose={HandleAdminModalClose}
      />
      <Dock />

      {noLayoutMode && (
        <NoLayoutWarning>|LayoutLess mode activated|</NoLayoutWarning>
      )}
      {navbarPicker()}
      <div className={'relative'}>{children}</div>
      {variant === 'classic' && (
        <Footer
          loaded={isLoaded}
          noLayoutMode={noLayoutMode}
          handleAdminModalOpen={HandleAdminModalOpen}
        />
      )}
    </MainContainer>
  );
};

const MainContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  transition: 0.3s;

  #load_screen {
    top: 0;
    position: fixed;
    height: 100vh;
    width: 100vw;
    background: #272727;
    z-index: 5;
  }
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
