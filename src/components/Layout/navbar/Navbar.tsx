import React from 'react';
import styled from 'styled-components';

const Navbar: React.FC = () => {
  return (
    <MainContainer>
      <nav className="">
        <div className="flex justify-center gap-12">
          <a href="/about/curiculum">CV</a>
          <a href="/about/experiences">Expériences</a>
          <a href="/about/technologies">Technologies</a>
        </div>
      </nav>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  position: absolute;
  width: 100%;
  padding: 1rem;
  transition: 0.2s;
  color: #fafafa;
  background: rgba(0, 0, 0, 0.1);
  font-family: BebasNeue;
  box-shadow: 0 0px 1px rgba(0, 0, 0, 0.12);
  font-size: 1.7rem;
  z-index: 10;

  a {
    opacity: 0.7;
    transition: 0.2s;
  }

  &:hover {
    background: rgba(40, 40, 40, 0.8);
    padding: 2rem;
  }
  &:hover a {
    opacity: 1;
  }
`;

export default Navbar;
