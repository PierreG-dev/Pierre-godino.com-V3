import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import HomeIcon from '@material-ui/icons/Home';
import Link from 'next/link';

export type displayType = 'full' | 'displayed';

export type Props = {
  loaded: boolean;
};

const Navbar: React.FC<Props> = ({ loaded }) => {
  const [displayed, setDisplayed]: [displayType, any] = useState('full');

  useEffect(() => {
    if (loaded === false) return;
    setDisplayed('displayed');
  }, [loaded]);

  const translationPicker = (): { transform: string | void } => {
    switch (displayed as displayType) {
      case 'full':
        return { transform: 'translate3d(0, 0%, 0)' };
      case 'displayed':
        return { transform: 'translate3d(0, -80%, 0)' };
      default:
        console.error('wrong translation type in Navbar');
    }
  };

  return (
    <MainContainer style={translationPicker()}>
      <nav>
        <div className="flex column justify-center">
          <div className="flex items-end justify-between">
            <div className="middle-square"></div>
          </div>
        </div>
      </nav>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 54vh;
  z-index: 5;
  transition: 0.5s ease;
  transform: translate3d(0, -80%, 0);
  z-index: 6;

  nav {
    position: absolute;
    width: 100vw;
    height: 50vh;
    background: #2d3436;
    z-index: 3;
    box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.3);
  }

  .middle-square {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background: #2d3436;
    width: 16.3vw;
    height: 50vh;
    z-index: 2;
  }
  .middle-square::before {
    content: '';
    margin-bottom: -1.9vw;
    width: 21vw;
    border-radius: 0 0 20px 20px;
    border-top: 2vw solid #2d3436;
    border-left: 3vw solid transparent;
    border-right: 3vw solid transparent;
    filter: drop-shadow(0 6px 5px rgba(0, 0, 0, 0.2));
  }
  @media (max-width: 800px) {
    .side-bars {
      position: absolute;
      width: 30vw;
      height: 50vh;
      background: #2d3436;
    }
    .middle-square {
      position: relative;
      background: #2d3436;
      width: 41vw;
      height: 50vh;
    }
    .middle-square::before {
      content: '';
      margin-bottom: -4.9vw;
      width: 30vw;
      border-radius: 0 0 20px 20px;
      border-top: 5vw solid #2d3436;
      border-left: 4.5vw solid transparent;
      border-right: 4.5vw solid transparent;
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
