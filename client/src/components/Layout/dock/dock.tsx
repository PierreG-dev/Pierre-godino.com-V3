import { NextPage } from 'next';
import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import LearnCase from './cases/LearnCase';
import AgendaCase from './cases/AgendaCase';
import CookiesCase from './cases/CookiesCase';
import ContactCase from './cases/ContactCase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';

const cases = [
  {
    id: 1,
    name: 'Contact',
    element: <ContactCase />,
  },
  {
    id: 2,
    name: 'Formation',
    element: <LearnCase />,
  },
  {
    id: 3,
    name: 'Disponibilités',
    element: <AgendaCase />,
  },
  {
    id: 4,
    name: 'Cookies',
    element: <CookiesCase />,
  },
];

const Dock: NextPage = () => {
  const [isDisplayed, setIsDisplayed] = useState(true);
  const [selectedCase, setSelectedCase] = useState(0);

  const clickDetector = useCallback((e: MouseEvent) => {
    if (!(e.target as HTMLElement).classList.contains('dock-case-identifier'))
      setSelectedCase(0);
  }, []);

  useEffect(() => {
    window.addEventListener('click', clickDetector);

    return () => {
      window.removeEventListener('click', clickDetector);
    };
  }, []);

  return (
    <MainContainer>
      <button
        style={{
          borderBottom: isDisplayed
            ? '1px solid transparent'
            : '1px solid rgba(255,255,255,0.1)',
        }}
        onClick={() => {
          setIsDisplayed((prevstate) => !prevstate);
          setSelectedCase(0);
        }}>
        {!isDisplayed ? (
          <FontAwesomeIcon icon={faEye} />
        ) : (
          <FontAwesomeIcon icon={faEyeSlash} />
        )}
      </button>
      <ul className={isDisplayed ? '' : 'hidden'}>
        {cases.map((elem) => (
          <DockElement
            key={elem.id}
            id={elem.name}
            className={selectedCase === elem.id ? 'selected' : ''}
            onClick={() => {
              setSelectedCase(selectedCase === elem.id ? 0 : elem.id);
            }}>
            <div className="dock-case-identifier" />
            {elem.element}
          </DockElement>
        ))}
      </ul>
    </MainContainer>
  );
};

const MainContainer = styled.nav`
  position: fixed;
  top: 25vh;
  right: 0;
  width: 50px;
  z-index: 6;
  transition: 0.2s;

  button {
    position: fixed;
    top: calc(25vh - 20px);
    right: 0;
    border-radius: 5px 0 0 5px;
    color: #fafafa88;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 0;
    width: 40px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
    transition: 0.1s;

    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    transition: 0.2s;

    &.hidden {
      transform: translateX(calc(100% + 5px));
    }
  }
`;

const DockElement = styled.li`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(2px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding-right: 15px;
  box-sizing: unset;
  min-width: 250px;
  width: fit-content;
  height: 50px;
  transition: 0.2s;
  transform: translateX(-5px);
  border-radius: 5px 0 0 5px;
  display: flex;

  &:not(:first-child) {
    border-top: 0;
  }
  &.selected {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
    transform: translateX(calc(-100% + 50px));
    transition: 0.2s, transform 0.2s ease-out;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.2);

    img {
      opacity: 1;
    }
  }

  &:hover:not(.selected) {
    background: rgba(255, 255, 255, 0.2);
    cursor: pointer;
    transform: translateX(-20px);

    img {
      opacity: 1;
    }
  }

  img {
    box-sizing: border-box;
    padding: 10px;
    opacity: 0.4;
    width: 50px;
    height: 100%;
  }

  .dock-case-identifier {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 6;
  }
`;

export default Dock;
