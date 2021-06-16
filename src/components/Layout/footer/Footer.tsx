import React, { useEffect, useMemo, useState } from 'react';
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

  const translationPicker = (): { transform: string | void } => {
    switch (displayed as displayType) {
      case 'full':
        return { transform: '' };
      case 'displayed':
        return { transform: 'translate3d(0, 60%, 0)' };
      default:
        return { transform: 'translate3d(0, 99%, 0)' };
    }
  };

  const interactionHandler = (): void => {
    if ((displayed as displayType) === 'full') return;
    if ((displayed as displayType) === 'hidden') setDisplayed('displayed');
    if ((displayed as displayType) === 'displayed') setDisplayed('hidden');

    return;
  };

  return (
    <MainContainer style={translationPicker()}>
      <footer>
        <div className="middle-filler"></div>
        <div className="side-bars"></div>
        <div className="flex justify-center">
          <div className="middle-square">
            <span
              onClick={interactionHandler}
              style={{
                opacity: (displayed as displayType) !== 'full' ? 1 : 0,
              }}>
              <MenuIcon></MenuIcon>
            </span>
          </div>
        </div>
        <div className="side-bars" style={{ right: 0, top: 0 }}></div>
      </footer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 50vh;
  background: transparent;
  transition: 0.8s ease;
  z-index: 5;

  .side-bars {
    position: absolute;
    width: calc(50% - 100px);
    height: 50vh;
    background: green;
  }
  .middle-square {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    width: 200px;
    height: 100%;
    border-bottom: 100px solid green;
    border-left: 100px solid green;
    border-right: 100px solid green;
    border-top: 100px solid transparent;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.5s;
      margin-top: -280px;
      border-radius: 50%;
      color: rgba(255, 255, 255, 0.3);
      padding: 4px;
      cursor: pointer;
    }
    span:hover {
      background: rgba(255, 255, 255, 0.4);
    }
  }
  .middle-filler {
    position: absolute;
    width: 100%;
    height: 29vh;
    background: green;
    bottom: 0;
  }
  @media (max-width: 500px) {
    .side-bars {
      position: absolute;
      width: calc(50% - 50px);
      height: 50vh;
      background: green;
    }
    .middle-square {
      background: transparent;
      width: 102px;
      height: 100%;
      border-left: 50px solid green;
      border-right: 50px solid green;
      border-bottom: 50px solid green;
      border-top: 50px solid transparent;
      border-bottom: 0;

      span {
        transition: 0.7s;
        margin-top: -170px;
      }
    }

    .middle-filler {
      position: absolute;
      width: 100%;
      height: 43.2vh;
      background: green;
      bottom: 0;
    }
  }
`;

export default Footer;
