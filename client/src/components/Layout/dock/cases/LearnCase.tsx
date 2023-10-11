import styled from 'styled-components';
import { FC } from 'react';

const LearnCase: FC = () => {
  return (
    <MainContainer>
      <img src="/icons/learn_icon.png" alt="" />
      <p>
        Envie d'apprendre la programmation ? <br />
        <a href="mailto:contact@pierre-godino.com">contact@pierre-godino.com</a>
      </p>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  font-size: 1rem;
  font-weight: 600;
  color: #fafafa99;

  p {
    width: 400px;
    a {
      color: #798af566;
      position: relative;
      z-index: 8;
      text-shadow: #798af5aa 0 0 2px;
      cursor: pointer;

      &:hover {
        color: #798af5aa;
      }
    }
  }

  img {
    filter: drop-shadow(#798af5aa 0 0 3px);
  }
`;

export default LearnCase;
