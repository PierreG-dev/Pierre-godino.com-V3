import { FC, useEffect, useRef } from 'react';
import styled from 'styled-components';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { InlineWidget } from 'react-calendly';
const Calendly: FC = () => {
  const iframeRef = useRef(null);

  return (
    <MainContainer id="calendly">
      <h2>
        <span />
        <KeyboardArrowDownIcon />
        Audit 100% gratuit
        <KeyboardArrowDownIcon />
        <span />
      </h2>
      <em>Prenez rendez-vous en 2 clics</em>
      <a
        href="https://calendly.com/pierre-godino-dev/30min"
        target="_blank"
        rel="noopener noreferrer nofollow"
        ref={iframeRef}>
        <InlineWidget
          url="https://calendly.com/pierre-godino-dev/30min"
          pageSettings={{
            hideLandingPageDetails: true,
            hideEventTypeDetails: true,
            hideGdprBanner: true,
          }}
          styles={{ zIndex: -1 }}
        />
      </a>
    </MainContainer>
  );
};

const MainContainer = styled.section`
  width: 1200px;
  padding: 0 !important;
  max-width: 100%;
  margin: auto;
  font-family: 'Montserrat';

  & > a {
    display: block;
    position: relative;
    cursor: pointer;
    outline: none;
    /* z-index: 10; On met un z-index plus élevé pour que l'élément soit au-dessus */

    iframe {
      user-select: none;
      pointer-events: none;
      position: relative !important;
      z-index: 1 !important; /* Assurer que l'élément Calendly est en dessous du lien */
      height: 750px !important;

      a {
        display: none !important;
      }
    }
  }

  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fafafa;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    letter-spacing: 3px;
    padding: 10px 50px;
    border-radius: 15px;

    span {
      display: block;
      width: 50px;
      height: 5px;
      background: #fafafa;
      flex: 1;
    }

    svg {
      font-size: 3rem;
      color: #2ecc71;
    }

    @media (max-width: 500px) {
      font-size: 1rem;
      padding: 10px 10px;
      margin-bottom: 25px;
    }
  }

  & > em {
    text-align: center;
    color: #fafafa;
    display: block;
    font-weight: 600;
    font-style: normal;
    margin-top: -10px;
    margin-bottom: 5px;
  }
`;

export default Calendly;
