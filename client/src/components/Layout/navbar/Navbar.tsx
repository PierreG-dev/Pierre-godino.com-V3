import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';

export type displayType = 'full' | 'displayed';

export type Props = {
  loaded: boolean;
  noLayoutMode: boolean;
};

const Navbar: React.FC<Props> = ({ loaded, noLayoutMode }) => {
  const [displayed, setDisplayed]: [displayType, any] = useState('full');
  const [dropdownDisplay, setDropdownDisplay] = useState(false);

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
          transform: 'translate3d(0, -86%, 0)',
          display: noLayoutMode ? 'none' : 'block',
        };
      default:
        return {
          transform: 'translate3d(0, -86%, 0)',
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
        <ul id="links_list">
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
            <Link href={'/about'}>
              <div
                id="custom_nav_dropdown"
                onMouseEnter={() => setDropdownDisplay(true)}
                onMouseLeave={() => setDropdownDisplay(false)}>
                A propos de moi{' '}
                <KeyboardArrowDownIcon
                  style={{
                    transform: dropdownDisplay
                      ? 'rotate(0deg)'
                      : 'rotate(180deg)',
                    transition: '0.2s',
                  }}
                />
                <ul
                  style={{
                    maxHeight: dropdownDisplay ? 1000 : 0,
                    padding: dropdownDisplay ? 5 : 0,
                    boxShadow: dropdownDisplay
                      ? '0 1px 5px 1px rgba(0, 0, 0, 0.3)'
                      : 'none',
                  }}>
                  <li style={{ display: dropdownDisplay ? 'block' : 'none' }}>
                    <Link href={'/about/skills'}>Technologies</Link>
                  </li>
                  <li style={{ display: dropdownDisplay ? 'block' : 'none' }}>
                    <Link href={'/about/experiences'}>Expériences</Link>
                  </li>
                  <li style={{ display: dropdownDisplay ? 'block' : 'none' }}>
                    <Link href={'/about/curiculum'}>CV</Link>
                  </li>
                </ul>
              </div>
            </Link>
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
  height: 50vh;
  z-index: 7;
  transition: 0.5s ease;
  transform: translate3d(0, -80%, 0);

  nav {
    position: absolute;
    display: flex;
    justify-content: space-around;
    width: 100vw;
    height: 50vh;
    background: #2d3436;
    z-index: 3;
    box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.3);

    #custom_nav_dropdown ul {
      position: absolute;
      max-height: 0;
      min-width: 150px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      padding: 0;
      border-radius: 5px;
      background: #2d3436;
      color: white;
      gap: 5px;
      transition: 0.2s;

      li {
        animation: 0.2s links_slide_down ease-out 1;
        transition: 0.1s;
        width: 100% !important;
        max-width: 100% !important;
        position: relative !important;

        a {
          color: rgba(255, 255, 255, 0.5) !important;
          transition: 0.2s;
          font-family: 'Montserrat';
          letter-spacing: 1px;
          width: 100% !important;
          display: block;
        }

        a:hover {
          color: rgba(255, 255, 255, 0.8) !important;
          cursor: pointer;
        }

        a::after {
          content: none !important;
        }
      }

      li:hover {
        position: relative;
        max-width: 20%;
        width: 20%;
        min-width: 10%;
        display: flex;
        justify-content: center;
        transition-delay: 4s;
        transition: 0.2s;
        font-size: 1.1rem;
      }
    }

    #links_list {
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
        sup,
        #custom_nav_dropdown {
          color: rgba(255, 255, 255, 0.5);
          transition: 0.2s;
          font-family: 'Montserrat';
          letter-spacing: 1px;
        }
        sup {
          transform: translateY(8px);
          font-size: 0.6rem;
        }

        img {
          filter: grayscale(0.3);
          transform: translateY(0.8vw);
          width: 85px;
          cursor: pointer;
          transition: 0.2s;
        }
        img:hover {
          filter: grayscale(0.1);
          transform: scale3d(1.1, 1.1, 1) translateY(0.8vw);
        }
      }
      li:hover a,
      li:hover #custom_nav_dropdown {
        color: rgba(255, 255, 255, 0.8);
        cursor: pointer;
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
    margin-bottom: -1.95vw;
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
  #links_list > li.effect-underline a::after {
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

  #links_list > li.effect-underline a:hover::after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  @keyframes links_slide_down {
    0% {
      opacity: 0;
      margin-top: -20px;
      margin-left: 5px;
      margin-right: 5px;
    }
    100% {
      opacity: 1;
      margin-top: 0;
      margin-left: 0px;
      margin-right: 0px;
    }
  }
`;

export default Navbar;