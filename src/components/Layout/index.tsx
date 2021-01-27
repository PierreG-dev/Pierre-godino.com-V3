import React from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

const Index: NextPage = ({ children }) => {
  return (
    <MainContainer>
      <Navbar />
      <div className="relative">{children}</div>
      <Footer />
    </MainContainer>
  );
};

const MainContainer = styled.div``;

export default Index;
