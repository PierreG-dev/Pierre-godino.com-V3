import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CustomLink from '../routing/CustomLink';

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

  const translationPicker = useCallback((): 'displayed' | 'full' => {
    // switch (displayed as displayType) {
    //   case 'full':
    //     return {
    //       transform: 'translate3d(0, 0%, 0)',
    //       display: noLayoutMode ? 'none' : 'block',
    //     };
    //   case 'displayed':
    //     return {
    //       transform: 'translate3d(0, calc(-100% + 65px), 0)',
    //       display: noLayoutMode ? 'none' : 'block',
    //     };
    //   default:
    //     return {
    //       transform: 'translate3d(0, calc(-100% + 65px), 0)',
    //       display: noLayoutMode ? 'none' : 'block',
    //     };
    // }
    switch (displayed as displayType) {
      case 'full':
        return 'full';
      case 'displayed':
        return 'displayed';
      default:
        return 'displayed';
    }
  }, [displayed]);

  return (
    <MainContainer
      className={translationPicker()}
      style={{ display: noLayoutMode ? 'none' : 'block' }}>
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
            <CustomLink href={'/realisations'}>Mes réalisations</CustomLink>
          </li>
          <li
            className="effect-underline small-hidden"
            style={{ opacity: displayed === 'full' ? 0 : 1 }}>
            <CustomLink href={'/pricing'}>Prestations</CustomLink>
            {/* <sup
              title="Arrive bientôt"
              style={{
                color: 'rgba(100,100,100,0.8)',
                textShadow: 'none',
                cursor: 'help',
              }}>
              beta
            </sup> */}
          </li>
          <li>
            <CustomLink href={'/'}>
              <img src="/res/LOGO.png" className="HomeLogo" alt="Logo" />
            </CustomLink>
          </li>
          <li
            className="effect-underline"
            style={{ opacity: displayed === 'full' ? 0 : 1 }}>
            <CustomLink href={'/contact'}>Contact</CustomLink>
          </li>
          <li
            className="small-hidden"
            style={{ opacity: displayed === 'full' ? 0 : 1 }}>
            <div>
              <div
                id="custom_nav_dropdown"
                onMouseEnter={() => setDropdownDisplay(true)}
                onMouseLeave={() => setDropdownDisplay(false)}>
                <CustomLink href="/about">A propos de moi</CustomLink>
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
                    <CustomLink href={'/about/skills'}>Technologies</CustomLink>
                  </li>
                  <li style={{ display: dropdownDisplay ? 'block' : 'none' }}>
                    <CustomLink href={'/about/experiences'}>
                      Expériences
                    </CustomLink>
                  </li>
                  <li style={{ display: dropdownDisplay ? 'block' : 'none' }}>
                    <CustomLink href={'/about/curiculum'}>CV</CustomLink>
                  </li>
                </ul>
              </div>
            </div>
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

  &.displayed {
    transform: translate3d(0, calc(-100% + 65px), 0);
  }

  &.full {
    transform: translate3d(0, 0%, 0);
  }

  nav {
    position: absolute;
    display: flex;
    justify-content: space-around;
    width: 100vw;
    height: 50vh;
    background: #2d3436;
    z-index: 3;
    box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.3);

    #custom_nav_dropdown svg {
      @media (max-width: 1000px) {
        display: none;
      }
    }

    #custom_nav_dropdown ul {
      position: absolute;
      max-height: 0;
      min-width: 150px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      padding: 0;
      border-radius: 5px;
      background: #2d3436aa;
      color: white;
      gap: 5px;
      transition: 0.2s;

      @media (max-width: 1000px) {
        display: none;
      }

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
      }

      a:hover {
        color: rgba(255, 255, 255, 0.8) !important;
        cursor: pointer;
        text-shadow: 0 0 7px rgba(255, 255, 255, 0.3);
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

  ul#links_list {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 65px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 5;
    @media (max-width: 550px) {
      align-items: baseline;
      transform: translateY(-20px);
    }

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

      @media (max-width: 1000px) {
        sup {
          display: none;
        }
      }

      a,
      sup,
      #custom_nav_dropdown {
        font-weight: 600;
        color: rgba(255, 255, 255, 0.5);
        transition: 0.2s;
        font-family: 'Montserrat';
        letter-spacing: 1px;
        text-align: center;

        @media (max-width: 1000px) {
          font-size: 0.7rem;
          /* transform: translateY(-10px); */
        }
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
        transition: 0.1s;

        @media (max-width: 1000px) {
          transform: translateY(20px) !important;
          width: 70px !important;
        }

        @media (max-width: 800px) {
          transform: translateY(30px) !important;
          width: 70px !important;
        }
      }
      img:hover {
        filter: grayscale(0.1) drop-shadow(0 0 7px #7d1b1333);
        transform: scale3d(1.1, 1.1, 1) translateY(0.8vw);
      }
    }
    li:hover a,
    li:hover #custom_nav_dropdown {
      color: rgba(255, 255, 255, 0.8);
      cursor: pointer;
      text-shadow: 0 0 7px rgba(255, 255, 255, 0.3);
    }
    li:hover sup {
      color: rgba(255, 255, 255, 0.8);
      text-shadow: 0 0 7px rgba(255, 255, 255, 0.3);
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
