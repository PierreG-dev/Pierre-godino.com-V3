import React, { useEffect, useState } from 'react';
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

  useEffect(() => {
    handleLoad();

    return () => {
      handleLoad();
    };
  }, []);

  const handleLoad = () => {
    console.log('loaded !');
    setTimeout(() => {
      setIsLoaded((prevState) => !prevState);
    }, 3000);
  };

  const navbarPicker = () => {
    switch (variant) {
      case 'classic':
        return <Navbar loaded={isLoaded} />;
      case 'about':
        return <AboutNavbar />;
      default:
        console.error('unknown navbar type');
        break;
    }
  };
  return (
    <MainContainer>
      {navbarPicker()}
      <div className={'relative' + (variant === 'classic' && ' pt-12')}>
        {children}
      </div>
      {variant === 'classic' && <Footer loaded={isLoaded} />}
    </MainContainer>
  );
};

const MainContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`;

export default Index;
