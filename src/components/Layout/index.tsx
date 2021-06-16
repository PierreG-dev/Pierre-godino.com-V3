import React from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import AboutNavbar from './navbar/AboutNavbar';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

export type Props = {
  variant: 'classic' | 'about';
};

const Index: NextPage<Props> = ({ children, variant }) => {
  const navbarPicker = () => {
    switch (variant) {
      case 'classic':
        return <Navbar />;
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
      <div className="relative">{children}</div>
      <Footer loaded={true} />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export default Index;
