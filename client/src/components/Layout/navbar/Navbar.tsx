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
      <nav className={`${displayed === 'full' ? 'd-full' : ''}`}>
        <div className="flex column justify-center">
          <div className="flex items-end justify-between">
            <div className="middle-square"></div>
          </div>
        </div>
        <ul id="links_list">
          <li
            className="effect-underline classic-link"
            style={{ opacity: displayed === 'full' ? 0 : 1 }}>
            <CustomLink href={'/realisations'}>Mes réalisations</CustomLink>
          </li>
          <li
            className="effect-underline small-hidden classic-link"
            style={{ opacity: displayed === 'full' ? 0 : 1 }}>
            <CustomLink href={'/pricing'}>Tarifs & services</CustomLink>
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
            className="effect-underline classic-link"
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
                      ? 'rotate(180deg)'
                      : 'rotate(0deg)',
                    transition: '0.2s',
                  }}
                />
                <ul
                  style={{
                    maxHeight: dropdownDisplay ? 1000 : 0,
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
  height: calc(50%);
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
    background: #2d343655;
    z-index: 3;
    backdrop-filter: blur(0.8px);
    transition: 0.5s ease;
    // box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.3);

    #custom_nav_dropdown {
      position: relative;
      svg {
        cursor: pointer;
        @media (max-width: 1000px) {
          display: none;
        }
      }
    }

    #custom_nav_dropdown ul {
      position: absolute;
      right: 0;
      max-height: 0;
      min-width: 150px;
      width: 180px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      padding: 0 !important;
      border-radius: 5px;
      background: #2d343655;
      color: white;
      transition: 0.2s;

      @media (max-width: 1000px) {
        display: none;
      }

      li {
        margin-right: 0 !important;
        margin-left: 0 !important;
        animation: 0.2s links_slide_down ease-out 1;
        transition: 0.1s;
        width: 100% !important;
        max-width: 100% !important;
        position: relative !important;

        a {
          border-radius: 0 !important;
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
        background: rgba(255, 255, 255, 0.02);
        /* text-shadow: 0 0 7px rgba(255, 255, 255, 0.3); */
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
      min-width: 10%;
      width: 20%;
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
        padding: 5px 12px;
        border-radius: 5px;
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
    li.classic-link a:hover {
      background: rgba(255, 255, 255, 0.02);
      cursor: pointer;
      color: rgba(255, 255, 255, 0.8);
    }

    li #custom_nav_dropdown:hover a {
      color: rgba(255, 255, 255, 0.8);
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
    background: transparent;
    width: 210px;
    height: 50vh;
    z-index: 2;
  }
  .middle-square::before {
    transition: 0.5s ease;
    position: absolute;
    bottom: -20px;
    z-index: 10;
    content: '';
    width: 213px;
    border-radius: 0 0 20px 20px;
    border-top: 20px solid #2d343655;
    backdrop-filter: blur(0.8px);
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    // filter: drop-shadow(0 5px 3px rgba(0, 0, 0, 0.2));
  }

  nav.d-full {
    background: #121a25;
    .middle-square:before {
      border-top: 20px solid #121a25;
    }
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
