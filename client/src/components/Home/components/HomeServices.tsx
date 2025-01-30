import { FC } from 'react';
import styled from 'styled-components';
import CustomLink from '../../Layout/routing/CustomLink';

// DEPRECATED

const HomeServices: FC = () => {
  return (
    <MainContainer>
      <h2>
        Création de site internet sur mesure : Ce que je peux faire pour vous
      </h2>

      <ul id="expectations">
        <li id="delay">
          <header>
            <img src="/icons/rush.png" alt="expert WEB" loading="lazy" />
            <h3>
              Comptez <strong>une</strong> à <strong>deux</strong> semaines
            </h3>{' '}
          </header>
          <p>
            De l’hébergement à la maintenance, je m’assure que votre site reste
            à jour et sécurisé.
          </p>
        </li>
      </ul>
    </MainContainer>
  );
};

const MainContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 50px;

  h2 {
    color: #040e1d;
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 75px;
    font-family: 'Montserrat';
    letter-spacing: 3px;
    background: #fafafaee;
    padding: 10px 25px;
    border-radius: 15px;
    text-align: center;

    @media (max-width: 500px) {
      font-size: 1rem;
      padding: 10px 10px;
      margin-bottom: 25px;
    }
  }

  ul#expectations {
    li {
      width: 1000px;
      max-width: calc(100vw - 50px);
      color: #fafafaee;
      border: 2px solid #ffffff16;
      background: rgba(255, 255, 255, 0.05);
      padding: 65px 15px;
      border-radius: 15px;

      header {
        padding: 0;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;

        strong {
          color: #3aa4eb;
          text-shadow: 0px 0px 5px rgba(41, 128, 185, 0.3) !important;
        }

        img {
          width: 100px;
          height: 100px;
          object-fit: cover;
          margin: 0;

          @media (max-width: 500px) {
            width: 70px;
            height: 70px;
          }
        }

        h3 {
          font-size: 2rem;
          font-weight: bold;
          text-align: center;
          letter-spacing: 1px;
        }
      }
    }
  }
`;

export default HomeServices;
