import { FC } from 'react';
import styled from 'styled-components';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const PhoneButton: FC = () => {
  return (
    <MainContainer className="phone_button">
      <a href="tel:+33767249980">
        <button>
          <LocalPhoneIcon />
          07 67 24 99 80
        </button>
      </a>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: fit-content;
  z-index: 1;
  position: relative;

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
      height: 100%;
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

      svg {
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

export default PhoneButton;
