import { FC } from 'react';
import styled from 'styled-components';
import VerifiedIcon from '@mui/icons-material/Verified';

import Image from 'next/image';
import OCLOCK from '@/assets/icons/oclock.png';
import PHILIANCE from '@/assets/icons/philliance.png';
import APFORMATIONS from '@/assets/icons/apformation.png';
import GEMA from '@/assets/icons/GEMA.jpg';
import AXEACADEMY from '@/assets/icons/axeacademy.png';
import ABNATURE from '@/assets/icons/ab-nature_full.png';
import CHECKYOURSMILE from '@/assets/icons/checkyoursmile.png';
import SPEEDYNANIE from '@/assets/icons/speedynanie_alpha.png';
import VIDEOMENTHE from '@/assets/icons/videomenthe_alpha.png';
import YOOP from '@/assets/icons/yoop_alpha.png';
import MISINO from '@/assets/icons/misino_icon_alt.png';

const HomeCustomerSlider: FC = () => {
  return (
    <MainContainer>
      <h2>
        Ils m'ont fait confiance <VerifiedIcon />
      </h2>
      <Caroussel>
        <div className="wrapper">
          {' '}
          <Image className="logo-element" src={OCLOCK} alt="Ecoles O'Clock" />
          <Image
            className="logo-element"
            src={PHILIANCE}
            alt="Philiance Formations"
          />
          <Image
            className="logo-element"
            src={APFORMATIONS}
            alt="AP Formations"
          />
          <Image className="logo-element" src={GEMA} alt="GEMA" />
          <Image className="logo-element" src={AXEACADEMY} alt="Axe academy" />
          <Image className="logo-element" src={ABNATURE} alt="AB Nature" />
          <Image
            className="logo-element"
            src={CHECKYOURSMILE}
            alt="Check Your Smile"
          />
          <Image
            className="logo-element"
            src={SPEEDYNANIE}
            alt="Speedy Nanie"
          />
          <Image className="logo-element" src={VIDEOMENTHE} alt="Videomenthe" />
          <Image className="logo-element" src={YOOP} alt="Yoop Digital" />
          <Image className="logo-element" src={MISINO} alt="Dr. Misino" />
          {/* DEBUT SENTINEL */}
          <Image className="logo-element" src={OCLOCK} alt="Ecoles O'Clock" />
          <Image
            className="logo-element"
            src={PHILIANCE}
            alt="Philiance Formations"
          />
          <Image
            className="logo-element"
            src={APFORMATIONS}
            alt="AP Formations"
          />
          <Image className="logo-element" src={GEMA} alt="GEMA" />
          <Image className="logo-element" src={AXEACADEMY} alt="Axe academy" />
          <Image className="logo-element" src={ABNATURE} alt="AB Nature" />
          <Image
            className="logo-element"
            src={CHECKYOURSMILE}
            alt="Check Your Smile"
          />
          <Image
            className="logo-element"
            src={SPEEDYNANIE}
            alt="Speedy Nanie"
          />
          <Image className="logo-element" src={VIDEOMENTHE} alt="Videomenthe" />
          <Image className="logo-element" src={YOOP} alt="Yoop Digital" />
          <Image className="logo-element" src={MISINO} alt="Dr. Misino" />
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
      animation: appear 1s 1 ease;

      @keyframes appear {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
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
