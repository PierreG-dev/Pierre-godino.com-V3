import { NextPage } from 'next';
import { useState } from 'react';
import styled from 'styled-components';
import LearnCase from './cases/LearnCase';
import AgendaCase from './cases/Agendacase';
import CookiesCase from './cases/CookiesCase';
import ContactCase from './cases/ContactCase';

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
  const [selectedCase, setSelectedCase] = useState(0);
  return (
    <MainContainer>
      <ul>
        {cases.map((elem) => (
          <DockElement
            key={elem.id}
            className={selectedCase === elem.id ? 'selected' : ''}
            onClick={() => {
              setSelectedCase(selectedCase === elem.id ? 0 : elem.id);
            }}>
            {elem.element}
          </DockElement>
        ))}
      </ul>
    </MainContainer>
  );
};

const MainContainer = styled.nav`
  position: absolute;
  top: 25vh;
  right: 0;
  z-index: 6;
  overflow: hidden;

  ul {
    display: flex;
    flex-direction: column;
  }
`;

const DockElement = styled.li`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(1px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding-right: 15px;
  box-sizing: unset;
  width: 250px;
  height: 65px;
  transition: 0.2s;
  transform: translateX(calc(100% - 65px));
  border-radius: 5px 0 0 5px;
  display: flex;

  &:not(:first-child) {
    border-top: 0;
  }
  &.selected {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
    transform: translateX(0px);
    transition: 0.2s, transform 0.2s ease-out;
    border: 1px solid rgba(255, 255, 255, 0.1);

    img {
      opacity: 1;
    }
  }

  &:hover:not(.selected) {
    background: rgba(255, 255, 255, 0.2);
    cursor: pointer;
    transform: translateX(calc(100% - 75px));

    img {
      opacity: 1;
    }
  }

  img {
    box-sizing: border-box;
    padding: 10px;
    opacity: 0.4;
    width: 65px;
    height: 100%;
  }
`;

export default Dock;
