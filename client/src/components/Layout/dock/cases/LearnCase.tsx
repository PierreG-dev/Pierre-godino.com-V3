import styled from 'styled-components';
import { FC } from 'react';
import Image from 'next/image';
import GEARS from '@/assets/icons/learn_icon.svg';

const LearnCase: FC = () => {
  return (
    <MainContainer>
      <Image src={GEARS} alt="Learn" />
      <p>
        Envie d'apprendre la programmation ? <br />
        <a href="https://www.learn.pierre-godino.com" rel="nofollow">
          <u>learn.pierre-godino.com</u>
        </a>
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
      color: #df7a5f66;
      position: relative;
      z-index: 8;
      text-shadow: #df7a5faa 0 0 1px;
      cursor: pointer;

      &:hover {
        color: #df7a5faa;
      }
    }
  }

  img {
    filter: drop-shadow(#df7a5faa 0 0 1px);
  }
`;

export default LearnCase;
