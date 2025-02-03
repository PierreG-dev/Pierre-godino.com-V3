import { FC } from 'react';
import styled from 'styled-components';
import CustomLink from '../../components/Layout/routing/CustomLink';

const WebsiteButton: FC = () => {
  return (
    <MainContainer>
      <CustomLink href="/offres/creation-site-internet/#simulator">
        <button>
          Devis de site internet en quelques clics{' '}
          <img src="/icons/click.png" alt="click de souris" loading="lazy" />
        </button>
      </CustomLink>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 100%;
  z-index: 1;
  position: relative;

  a {
    width: 90%;
    max-width: 600px;
    display: block;
    margin: auto;

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
        width: 50px;
        height: 50px;
        filter: brightness(0) saturate(100%) invert(34%) sepia(22%)
          saturate(6388%) hue-rotate(344deg) brightness(100%) contrast(82%);
      }

      @media (max-width: 500px) {
        font-size: 1rem;
      }
    }
  }
`;

export default WebsiteButton;
