import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import HomeIcon from '@material-ui/icons/Home';
import Link from 'next/link';

const Navbar: React.FC = (props) => {
  return (
    <MainContainer>
      <div className="side-bars"></div>
      <div className="flex justify-center">
        <div className="middle-square"></div>
      </div>
      <div className="side-bars" style={{ right: 0, top: 0 }}></div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 50vh;
  background: #373737;
  z-index: 5;
  transition: 0.8s ease;
  transform: translate3d(0, -80%, 0);

  .side-bars {
    position: absolute;
    width: 50%;
    height: 50vh;
    background: red;
  }
  .middle-square {
    position: absolute;
    top: 50vh;
    background: transparent;
    width: 202px;
    border-left: 100px solid transparent;
    border-right: 100px solid transparent;
    border-top: 100px solid red;
    border-bottom: 0;
  }

  @media (max-width: 500px) {
    .middle-square {
      position: absolute;
      top: 50vh;
      background: transparent;
      width: 102px;
      border-left: 50px solid transparent;
      border-right: 50px solid transparent;
      border-top: 50px solid red;
      border-bottom: 0;
    }
  }
`;

export default Navbar;

/*
<ul>
        <li className={'section-marker home'}>Accueil</li>
        <li className={'section-marker portfolio'}>Réalisations</li>
        <li className={'section-marker simulator'}>
          Simulateur de devis <span>BETA</span>
        </li>
        <li className={'section-marker contact'}>Contact</li>
        <li className={'section-marker about'}>A propos de moi</li>
      </ul>
 */
