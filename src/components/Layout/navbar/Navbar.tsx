import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link';

export type displayType = 'full' | 'displayed';

export type Props = {
  loaded: boolean;
  noLayoutMode: boolean;
};

const Navbar: React.FC<Props> = ({ loaded, noLayoutMode }) => {
  const [displayed, setDisplayed]: [displayType, any] = useState('full');

  useEffect(() => {
    if (!loaded) setDisplayed('full');
    else setDisplayed('hidden');
  }, [loaded]);

  const translationPicker = useCallback((): {
    transform: string | void;
    display: string | void;
  } => {
    switch (displayed as displayType) {
      case 'full':
        return {
          transform: 'translate3d(0, 0%, 0)',
          display: noLayoutMode ? 'none' : 'block',
        };
      case 'displayed':
        return {
          transform: 'translate3d(0, -80%, 0)',
          display: noLayoutMode ? 'none' : 'block',
        };
      default:
        return {
          transform: 'translate3d(0, -80%, 0)',
          display: noLayoutMode ? 'none' : 'block',
        };
    }
  }, [displayed, noLayoutMode]);

  return (
    <MainContainer style={translationPicker()}>
      <nav>
        <div className="flex column justify-center">
          <div className="flex items-end justify-between">
            <div className="middle-square"></div>
          </div>
        </div>
        <ul>
          <li
            className="effect-underline"
            style={{ opacity: displayed === 'full' ? 0 : 1 }}>
            <Link href={'/realisations'}>Mes réalisations</Link>
          </li>
          <li
            className="effect-underline small-hidden"
            style={{ opacity: displayed === 'full' ? 0 : 1 }}>
            <Link href={'/simulator'}>Devis en ligne</Link>
            <sup>beta</sup>
          </li>
          <li>
            <Link href={'/'}>
              <img src="/res/LOGO.png" className="HomeLogo" />
            </Link>
          </li>
          <li
            className="effect-underline"
            style={{ opacity: displayed === 'full' ? 0 : 1 }}>
            <Link href={'/contact'}>Contact</Link>
          </li>
          <li
            className="effect-underline small-hidden"
            style={{ opacity: displayed === 'full' ? 0 : 1 }}>
            <Link href={'/about'}>A propos de moi</Link>
          </li>
        </ul>
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
    display: flex;
    justify-content: space-around;
    width: 100vw;
    height: 50vh;
    background: #2d3436;
    z-index: 3;
    box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.3);

    ul {
      position: absolute;
      bottom: 0;
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      z-index: 5;

      li {
        position: relative;
        max-width: 20%;
        width: 20%;
        min-width: 10%;
        display: flex;
        justify-content: center;
        transition-delay: 4s;
        transition: 0.2s;
        font-size: 1.1rem;

        a,
        sup {
          color: rgba(255, 255, 255, 0.5);
          transition: 0.2s;
        }
        sup {
          transform: translateY(8px);
        }

        img {
          filter: grayscale(0.3);
          transform: translateY(1.2vw);
          width: 100px;
          cursor: pointer;
          transition: 0.2s;
        }
        img:hover {
          filter: grayscale(0.1);
        }
      }
      li:hover a {
        color: rgba(255, 255, 255, 0.8);
      }
      li:hover sup {
        color: rgba(255, 255, 255, 0.8);
      }
    }
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
    margin-bottom: -2vw;
    width: 21vw;
    border-radius: 0 0 20px 20px;
    border-top: 2vw solid #2d3436;
    border-left: 3vw solid transparent;
    border-right: 3vw solid transparent;
    filter: drop-shadow(0 5px 3px rgba(0, 0, 0, 0.2));
  }
  @media (max-width: 800px) {
    nav li img {
      transform: translateY(2.4vw) !important;
      width: 80px !important;
    }

    nav li {
      max-width: 50% !important;
      width: 30% !important;
    }

    .small-hidden {
      display: none;
    }
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

  /*effect-underline*/
  li.effect-underline a:after {
    content: '';
    position: absolute;
    left: 0;
    display: inline-block;
    height: 1em;
    width: 100px;
    margin-left: calc((100% - 100px) / 2);
    border-bottom: 1px solid;
    margin-top: 10px;
    opacity: 0;
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
    -webkit-transform: scale(0, 1);
    transform: scale(0, 1);
  }

  li.effect-underline a:hover:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`;

export default Navbar;
