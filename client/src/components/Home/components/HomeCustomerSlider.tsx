import { FC } from 'react';
import styled from 'styled-components';
import VerifiedIcon from '@mui/icons-material/Verified';

const HomeCustomerSlider: FC = () => {
  return (
    <MainContainer>
      <h2>
        Ils m'ont fait confiance <VerifiedIcon />
      </h2>
      <Caroussel>
        <div className="wrapper">
          {' '}
          <img
            loading="lazy"
            className="logo-element"
            src="/icons/oclock.png"
            alt="Ecoles O'Clock"
          />
          <img
            loading="lazy"
            className="logo-element"
            src="/icons/philliance.png"
            alt="Philiance Formations"
          />
          <img
            loading="lazy"
            className="logo-element"
            src="/icons/apformation.png"
            alt="AP Formations"
          />
          <img
            loading="lazy"
            className="logo-element"
            src="/icons/GEMA.jpg"
            alt="GEMA"
          />
          <img
            loading="lazy"
            className="logo-element"
            src="/icons/axeacademy.png"
            alt="Axe academy"
          />
          <img
            loading="lazy"
            className="logo-element"
            src="/icons/ab-nature_full.png"
            alt="AB Nature"
          />
          <img
            loading="lazy"
            className="logo-element"
            src="/icons/checkyoursmile.png"
            alt="Check Your Smile"
          />
          <img
            loading="lazy"
            className="logo-element"
            src="/icons/speedynanie_alpha.png"
            alt="Speedy Nanie"
          />
          <img
            loading="lazy"
            className="logo-element"
            src="/icons/videomenthe_alpha.png"
            alt="Videomenthe"
          />
          <img
            loading="lazy"
            className="logo-element"
            src="/icons/yoop_alpha.png"
            alt="Yoop Digital"
          />
          <img
            loading="lazy"
            className="logo-element"
            src="/icons/misino_icon_alt.png"
            alt="Dr. Misino"
          />
          {/* DEBUT SENTINEL */}
          <img
            loading="lazy"
            className="logo-element"
            src="/icons/oclock.png"
            alt="Ecoles O'Clock"
          />
          <img
            loading="lazy"
            className="logo-element"
            src="/icons/philliance.png"
            alt="Philiance Formations"
          />
          <img
            loading="lazy"
            className="logo-element"
            src="/icons/apformation.png"
            alt="AP Formations"
          />
          <img
            loading="lazy"
            className="logo-element"
            src="/icons/GEMA.jpg"
            alt="GEMA"
          />
          <img
            loading="lazy"
            className="logo-element"
            src="/icons/axeacademy.png"
            alt="Axe academy"
          />
          <img
            loading="lazy"
            className="logo-element"
            src="/icons/ab-nature_full.png"
            alt="AB Nature"
          />
          <img
            loading="lazy"
            className="logo-element"
            src="/icons/checkyoursmile.png"
            alt="Check Your Smile"
          />
          <img
            loading="lazy"
            className="logo-element"
            src="/icons/speedynanie_alpha.png"
            alt="Speedy Nanie"
          />
          <img
            loading="lazy"
            className="logo-element"
            src="/icons/videomenthe_alpha.png"
            alt="Videomenthe"
          />
          <img
            loading="lazy"
            className="logo-element"
            src="/icons/yoop_alpha.png"
            alt="Yoop Digital"
          />
          <img
            loading="lazy"
            className="logo-element"
            src="/icons/misino_icon_alt.png"
            alt="Dr. Misino"
          />
        </div>
      </Caroussel>
    </MainContainer>
  );
};

const MainContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: rgba(255, 255, 255, 1);
    font-size: 2.5rem;
    font-weight: bold;
    letter-spacing: 5px;
    margin: 0 25px;
    text-shadow: 0px 0px 7px rgba(255, 255, 255, 0.3);

    svg {
      font-size: 3rem;
      color: #27ae60;
      filter: drop-shadow(0px 0px 3px rgba(green, 0.2));
    }

    @media (max-width: 700px) {
      letter-spacing: 4px;
      font-size: 1.2rem;

      svg {
        font-size: 1.5rem;
      }
    }
  }
`;

const Caroussel = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  margin: auto;
  max-width: 1200px;
  padding: 25px;
  border-radius: 5px;
  margin: 10px 0;
  background: rgba(255, 255, 255, 0.01);
  overflow: hidden;

  .wrapper {
    display: flex;
    gap: 100px;
    width: fit-content;
    animation: 60s caroussel infinite linear;

    @media (max-width: 800px) {
      gap: 50px;
    }

    img.logo-element {
      border-radius: 15px;
      width: 100px;
      height: 100px;
      object-fit: contain;
      filter: drop-shadow(0px 0px 0.5px rgba(255, 255, 255, 0.5));
    }

    @media (max-width: 800px) {
      animation: 60s carousselSmallSize infinite linear;

      img.logo-element {
        width: 50px;
        height: 50px;
      }
    }
  }

  @keyframes caroussel {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(-2200px, 0, 0);
    }
  }

  @keyframes carousselSmallSize {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(-1100px, 0, 0);
    }
  }
`;

export default HomeCustomerSlider;
