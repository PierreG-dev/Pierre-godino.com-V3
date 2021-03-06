import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';

export type displayType = 'full' | 'displayed' | 'hidden';

export type Props = {
  loaded: boolean;
};

const Footer: React.FC<Props> = ({ loaded }) => {
  const [displayed, setDisplayed]: [displayType, any] = useState('full');

  useEffect(() => {
    if (loaded === false) return;
    setDisplayed('hidden');
  }, [loaded]);

  const translationPicker = useCallback((): { transform: string | void } => {
    switch (displayed as displayType) {
      case 'full':
        return { transform: 'translate3d(0, 0%, 0)' };
      case 'displayed':
        return { transform: 'translate3d(0, 60%, 0)' };
      default:
        return { transform: 'translate3d(0, 95%, 0)' };
    }
  }, [displayed]);

  const interactionHandler = useCallback((): void => {
    if ((displayed as displayType) === 'full') return;
    if ((displayed as displayType) === 'hidden') setDisplayed('displayed');
    if ((displayed as displayType) === 'displayed') setDisplayed('hidden');
    return;
  }, [displayed]);

  return (
    <MainContainer style={translationPicker()}>
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
          <div className="middle-square" />
        </div>
        <div className="side-bars" style={{ right: 0, top: 0 }} />
      </div>
      <footer>
        <div id="main-footer" className="flex justify-around items-center">
          <div id="left-side">
            <h5>Navigation</h5>
            <ul>
              <li>Accueil</li>
              <li>Mes réalisations</li>
              <li>
                Devis en ligne <sup>beta</sup>
              </li>
              <li>Contact</li>
              <li>A propos de moi</li>
            </ul>
          </div>
          <div id="center"></div>
          <div id="right-side"></div>
        </div>
        <div id="sub-footer" className="w-full h-10">
          <p>
            Pierre-godino.com <sup>V3</sup>
          </p>
          <p>2019 - 2021</p>
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
  z-index: 5;

  .burger-container {
    position: absolute;
    width: 20vw;
    height: 4vh;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
    top: 1px;
    left: 40vw;
    color: rgba(255, 255, 255, 0.3);
    cursor: pointer;
    z-index: 2;

    svg {
      transition: 0.1s;
      margin-top: -2vh;
      font-size: 20px;
    }
  }

  .burger-container:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  .burger-container:active {
    background: rgba(255, 255, 255, 0.05);

    svg {
      transform: scale3d(0.9, 0.9, 1);
    }
  }

  .side-bars {
    filter: drop-shadow(0 -4px 3px rgba(0, 0, 0, 0.2));
    position: absolute;
    width: 40vw;
    height: 50vh;
    background: #2d3436;
    z-index: 1;
  }

  .middle-square {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    background: #2d3436;
    width: 20vw;
    height: 50vh;
    margin-top: 1.9vw;
    z-index: 2;
  }

  .middle-square::before {
    filter: drop-shadow(3px -4px 3px rgba(0, 0, 0, 0.2));
    content: '';
    width: 1px;
    border-left: 3vw solid #2d3436;
    border-right: 0 solid transparent;
    border-top: 2vw solid transparent;
    margin-top: -1.9vw;
  }

  .middle-square::after {
    filter: drop-shadow(-3px -4px 3px rgba(0, 0, 0, 0.2));
    content: '';
    width: 1px;
    border-left: 0 solid transparent;
    border-right: 3vw solid #2d3436;
    border-top: 2vw solid transparent;
    margin-top: -1.9vw;
  }

  /* ------ CONTENT ------ */

  footer {
    position: absolute;
    top: 4vh;
    z-index: 5;
    width: 100vw;
    height: 26vh;

    #main-footer {
      height: 13vh;

      h5 {
        font-size: 1.1rem;
        color: rgba(255, 255, 255, 0.8);
      }

      ul {
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.6);
        margin-left: 4px;

        li:hover {
          color: rgba(255, 255, 255, 0.7);
          cursor: pointer;
        }
      }
    }

    #left-side {
      margin-top: -4vh;
    }

    #sub-footer {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 3vh;
      background: #262626;
      color: rgba(255, 255, 255, 0.6);
      font-size: 0.9rem;
      font-family: BebasNeue;
    }
  }

  /* --------------------- */
  @media (max-width: 800px) {
    .side-bars {
      position: absolute;
      width: 35vw;
      height: 50vh;
      background: #2d3436;
    }

    .middle-square {
      position: relative;
      background: #2d3436;
      width: 30vw;
      height: 50vh;
      margin-top: 4.8vw;
    }

    .middle-square::before {
      width: 3vw;
      margin-top: -4.8vw;
      border-left: 4.5vw solid #2d3436;
      border-right: 4.5vw solid transparent;
      border-top: 5vw solid transparent;
    }

    .middle-square::after {
      width: 3vw;
      margin-top: -4.8vw;
      border-left: 4.5vw solid transparent;
      border-right: 4.5vw solid #2d3436;
      border-top: 5vw solid transparent;
    }

    .burger-container {
      left: 30vw;
      width: 40vw;

      svg {
        transition: 0.1s;
        margin-top: -4vw;
        font-size: 20px;
      }
    }

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
}
`;

export default Footer;
