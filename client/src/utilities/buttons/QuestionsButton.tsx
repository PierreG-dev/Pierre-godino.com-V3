import { FC } from 'react';
import styled from 'styled-components';
import CustomLink from '../../components/Layout/routing/CustomLink';

const QuestionsButton: FC = () => {
  return (
    <MainContainer>
      <CustomLink href="/contact/">
        <button>
          <img
            src="/icons/communication.png"
            alt="click de souris"
            loading="lazy"
          />
          Envie d'un site internet ?<br /> discutons de votre projet
        </button>
      </CustomLink>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  z-index: 1;
  position: relative;
  width: fit-content;

  a {
    width: fit-content;
    max-width: 800px;
    display: block;
    margin: -80px auto 0 auto;

    @media (max-width: 500px) {
      margin: -60px auto 0 auto;
    }

    button {
      position: relative;
      width: fit-content;
      padding: 10px 25px;
      border-radius: 5px;
      background: rgba(255, 255, 255, 0.05);
      color: rgba(255, 255, 255, 1);
      border: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      gap: 15px;
      justify-content: center;
      font-size: 2rem;
      opacity: 0.7;
      font-family: 'Montserrat';
      font-weight: bold;

      &:hover {
        opacity: 1;
      }

      img {
        align-self: end;
        width: 50px;
        height: 50px;
        filter: brightness(0) saturate(100%) invert(47%) sepia(89%)
          saturate(356%) hue-rotate(93deg) brightness(98%) contrast(95%);
      }

      @media (max-width: 500px) {
        font-size: 1rem;
      }
    }
  }
`;

export default QuestionsButton;
