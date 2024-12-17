import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import CustomLink from '../routing/CustomLink';

export type displayType = 'full' | 'displayed' | 'hidden';

export type Props = {
  loaded: boolean;
  noLayoutMode: boolean;
  handleAdminModalOpen: () => void;
};

const Footer: React.FC<Props> = ({
  loaded,
  noLayoutMode,
  handleAdminModalOpen,
}) => {
  const footerRef = useRef(null);
  const [displayed, setDisplayed] = useState<displayType>('full');
  const [displayLock, setDisplayLock] = useState<boolean>(false);

  useEffect(() => {
    const footerElement = footerRef.current;
    document.addEventListener('click', (e: any) => {
      if (
        !footerElement.contains(e.target) &&
        displayed === 'displayed' &&
        e.target.tagName !== 'A' &&
        e.target.className !== 'HomeLogo' &&
        e.target.className !== 'more-infos'
      ) {
        setDisplayed('hidden');
      }
    });

    return () => {
      document.removeEventListener('click', (e: any) => {
        if (
          !footerElement.contains(e.target) &&
          displayed === 'displayed' &&
          e.target.tagName !== 'A' &&
          e.target.className !== 'HomeLogo' &&
          e.target.className !== 'more-infos'
        ) {
          setDisplayed('hidden');
        }
      });
    };
  }, [displayed]);

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
          transform: 'translate3d(0, 60%, 0)',
          display: noLayoutMode ? 'none' : 'block',
        };
      default:
        return {
          transform: 'translate3d(0, 93%, 0)',
          display: noLayoutMode ? 'none' : 'block',
        };
    }
  }, [displayed, noLayoutMode]);

  const interactionHandler = useCallback((): void => {
    if ((displayed as displayType) === 'full') return;
    if ((displayed as displayType) === 'hidden') setDisplayed('displayed');
    if ((displayed as displayType) === 'displayed') setDisplayed('hidden');
    return;
  }, [displayed]);

  const handleLogoHover = useCallback(() => {
    setDisplayLock(true);
  }, []);

  const handleLogoLeave = useCallback(() => {
    setDisplayLock(false);
  }, []);

  useEffect(() => {
    if (!loaded) setDisplayed('full');
    else setDisplayed('hidden');
  }, [loaded]);

  return (
    <MainContainer
      style={translationPicker()}
      ref={footerRef}
      className={`d-${displayed}`}>
      <div>
        <span
          className="burger-container"
          onClick={interactionHandler}
          style={{
            opacity: (displayed as displayType) !== 'full' ? 1 : 0,
          }}>
          <MenuIcon />
        </span>
        <div className="side-bars" />
        <div className="flex justify-center">
          <div className="middle-square">
            <div id="border_left" /> <div id="border_right" />
          </div>
        </div>
        <div className="side-bars" style={{ right: 0, top: 0 }} />
      </div>
      <footer
        style={{
          opacity: displayed !== 'full' && displayed !== 'hidden' ? 1 : 0,
        }}>
        <div id="main-footer" className="flex justify-around items-center">
          <div id="left-side">
            <div>
              <h5>Navigation</h5>
              <ul>
                <li>
                  <CustomLink href={'/'}>Accueil</CustomLink>
                </li>
                <li>
                  <CustomLink href={'/realisations'}>
                    Mes réalisations
                  </CustomLink>
                </li>
                <li>
                  <CustomLink href={'/contact'}>Contact</CustomLink>
                </li>
                <li>
                  <CustomLink href={'/about'}>A propos de moi</CustomLink>
                </li>
              </ul>
            </div>
          </div>
          <div id="center">
            <CenterIcon
              style={{ transform: displayLock ? 'rotate(-90deg)' : 'none' }}
              onMouseOver={handleLogoHover}
              onMouseLeave={handleLogoLeave}>
              <img
                src="/res/LOGO_upperpart.png"
                id="logo_upperpart"
                style={{
                  transform:
                    !displayLock &&
                    'translateY(13px) translateX(-2px) rotate(1deg)',
                  height: 30,
                  animation: displayLock
                    ? '0.7s 0.5s upperpart_up ease 1 both'
                    : 'none',
                }}
                alt="LOGO upperpart"
              />
              <VpnKeyIcon
                onClick={handleAdminModalOpen}
                style={{
                  opacity: displayLock ? 0.6 : 0,
                  transform: displayLock
                    ? 'rotate(90deg) scale3d(1,1,1)'
                    : 'rotate(90deg) scale3d(0.7,0.7,1)',
                }}
              />
              <img
                id="logo_lowerpart"
                src="/res/LOGO_lowerpart.png"
                style={{
                  transform: !displayLock && 'translateY(-13.5px)',
                  height: 40,
                }}
                alt="LOGO lowerpart"
              />
            </CenterIcon>
          </div>
          <div id="right-side">
            <div>
              <h5>Réseaux</h5>
              <ul>
                <li>
                  <a
                    href="https://www.malt.fr/profile/pierregodino"
                    target={'_blank'}
                    rel="noreferrer">
                    Malt
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/pierre-godino-50b503186"
                    target={'_blank'}
                    rel="noreferrer">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.fr/maps/place/D%C3%A9veloppeur+WEB+-+Pierre+Godino/@44.2010925,0.6126983,14z/data=!3m1!4b1!4m5!3m4!1s0x12abf374e1251189:0x8265400e1564dd61!8m2!3d44.201063!4d0.6302079"
                    target={'_blank'}
                    rel="noreferrer">
                    Maps
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/PierreG-dev"
                    target={'_blank'}
                    rel="noreferrer">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="sub-footer" className="w-full h-10">
          <p>
            Pierre-godino.com <sup>V{process.env.NEXT_PUBLIC_APP_VERSION}</sup>
          </p>
          <p>
            <CustomLink href="/legal/cgu">CGU</CustomLink>

            <CustomLink href="/legal/cgv">CGV</CustomLink>
          </p>
          <p>2019 - {new Date().getFullYear()}</p>
        </div>
      </footer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 50vh;
  background: transparent;
  transition: 0.5s ease;
  z-index: 9;
  overflow: hidden;
  transition: 0.5s ease;

  .burger-container {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
    top: 1px;
    left: calc(50vw - 105px);
    color: rgba(255, 255, 255, 0.3);
    cursor: pointer;
    backdrop-filter: blur(1.8px);
    border-radius: 0 0 20px 20px;
    border-top: 20px solid rgba(255, 255, 255, 0.2);
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    width: 210px;

    svg {
      position: absolute;
      // width: 10px;
      top: -20px;
      transition: 0.1s;
      font-size: 20px;
    }
  }

  .burger-container:hover {
    border-top: 20px solid rgba(255, 255, 255, 0.3);
  }

  .burger-container:active {
    border-top: 20px solid rgba(255, 255, 255, 0.35);

    svg {
      transform: scale3d(0.9, 0.9, 1);
    }
  }

  .side-bars {
    backdrop-filter: blur(1.8px);
    transition: 0.5s ease;
    // filter: drop-shadow(0 -4px 3px rgba(0, 0, 0, 0.2));
    position: absolute;
    width: calc(50vw - 105px);
    height: 50vh;
    background: #2d343655;
    z-index: 1;
  }

  .middle-square {
    backdrop-filter: blur(1.8px);
    transition: 0.5s ease;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    background: #2d343655;
    width: 210px;
    height: 50vh;
    z-index: 2;
    transform: translateY(20px);
  }

  .middle-square div#border_left {
    backdrop-filter: blur(1.8px);
    transition: 0.5s ease;
    position: absolute;
    top: -20px;
    left: 0;

    content: '';
    width: 1px;
    border-right: 0 solid transparent;
    border-left: 30px solid #2d343655;
    border-top: 20px solid transparent;
  }

  .middle-square div#border_right {
    backdrop-filter: blur(1.8px);
    transition: 0.5s ease;
    position: absolute;
    top: -20px;
    right: 0;

    content: '';
    width: 1px;
    border-left: 0 solid transparent;
    border-right: 30px solid #2d343655;
    border-top: 20px solid transparent;
  }

  /* ------ CONTENT ------ */

  footer {
    position: absolute;
    top: 4vh;
    z-index: 6;
    width: 100vw;
    height: 26vh;
    transition: 1s;

    #main-footer {
      height: 13vh;

      h5 {
        margin-left: -10px;
        text-align: center;
        font-size: 1.1rem;
        color: rgba(255, 255, 255, 0.8);
      }

      ul {
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.6);
        margin-left: 4px;

        li {
          transition: 0.1s;
        }

        li:hover {
          color: rgba(255, 255, 255, 0.7);
          text-shadow: 0 0 7px rgba(255, 255, 255, 0.4);
          cursor: pointer;
        }
      }
    }

    #left-side {
      margin-left: 10px;
      margin-top: -4vh;
      display: flex;
      justify-content: center;
      width: 31%;
      height: 15vh;

      ul {
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        max-height: 100%;
        max-width: 100%;
        flex-wrap: wrap;
      }
    }
    #center {
      display: flex;
      justify-content: center;
      width: 31%;
      img {
        filter: grayscale(0.5);
        width: 100px;
        height: auto;
        margin: auto;
      }
    }

    #right-side {
      margin-top: -4vh;
      display: flex;
      justify-content: center;
      width: 31%;
      height: 15vh;
    }

    #sub-footer {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 3vh;
      background: #26262699;
      color: rgba(255, 255, 255, 0.6);
      font-size: 0.9rem;
      font-family: BebasNeue;
      p {
        width: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
        a {
          margin: 0 7px;
          transition: 0.1s;
          cursor: pointer;
          &:hover {
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
          }
        }
      }
    }
  }

  &.d-full {
    .side-bars {
      background: #121a25;
    }
    .middle-square {
      background: #121a25;
    }
    .middle-square #border_left {
      border-left: 30px solid #121a25;
      border-top: 21px solid transparent;
    }
    .middle-square #border_right {
      border-right: 30px solid #121a25;
      border-top: 21px solid transparent;
    }
  }

  &.d-displayed {
    .side-bars {
      background: #2d3436ee;
    }
    .middle-square {
      background: #2d3436ee;
    }
    .middle-square #border_left {
      border-left: 30px solid #2d3436ee;
      border-top: 20.4px solid transparent;
    }
    .middle-square #border_right {
      border-right: 30px solid #2d3436ee;
      border-top: 20.4px solid transparent;
    }
  }

  /* --------------------- */
  @media (max-width: 800px) {
    /* ---- CONTENT ---- */
    footer {
      #main-footer {
        h5 {
          font-size: 0.9rem;
        }

        ul {
          font-size: 0.8rem;
        }
      }
    }
  }
`;

const CenterIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100px;
  height: 100px;
  position: relative;
  transition: 0.3s;

  img {
    width: auto !important;
    background: transparent;
    transition: 0.5s !important;
    transition-delay: 0.3s !important;
    z-index: 10;
  }
  img:hover {
    transition-delay: 0s !important;
  }

  [data-testid='VpnKeyIcon'] {
    color: gold;
    position: absolute;
    top: 33px;
    left: 38px;
    transition: transform 0.3s ease 0.5s, opacity 0.1s ease 0.5s !important;

    &:hover {
      cursor: pointer;
    }
  }
`;

export default Footer;
