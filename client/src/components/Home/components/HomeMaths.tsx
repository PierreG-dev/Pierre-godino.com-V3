import { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PhoneIcon from '@mui/icons-material/Phone';
import CustomLink from '../../Layout/routing/CustomLink';

const HomeMaths: FC = () => {
  const [isGaugeVisible, setIsGaugeVisible] = useState<boolean>(false);
  const MathsWrapperref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsGaugeVisible(true);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );
    observer.observe(MathsWrapperref.current);
  }, []);

  return (
    <MainContainer ref={MathsWrapperref}>
      <h2>Site internet : Obligatoire en {new Date().getFullYear()} ?</h2>
      <p id="subtitle">Les chiffres parlent d'eux-mêmes : </p>
      <ul id="maths_list">
        <li className="math-item">
          <h3>
            <strong>85 % d'internautes</strong> en France en{' '}
            {new Date().getFullYear()}
          </h3>
          <div className="gauge">
            <div
              className="gauge-fill"
              style={{
                transitionDelay: '0.2s',
                width: isGaugeVisible ? '85%' : 0,
              }}></div>
          </div>
        </li>
        <li className="math-item">
          <h3>
            <strong>75% des consommateurs</strong> jugent la crédibilité d’une
            entreprise sur la qualité de son site web.
          </h3>
          <div className="gauge">
            <div
              className="gauge-fill"
              style={{
                transitionDelay: '0.4s',
                width: isGaugeVisible ? '75%' : 0,
              }}></div>
          </div>
        </li>
        <li className="math-item">
          <h3>
            <strong>81% des clients</strong> recherchent en ligne avant
            d’acheter en magasin.
          </h3>
          <div className="gauge">
            <div
              className="gauge-fill"
              style={{
                transitionDelay: '0.6s',
                width: isGaugeVisible ? '81%' : 0,
              }}></div>
          </div>
        </li>
        <li className="math-item">
          <h3>
            <strong>40% des PME qui ont un site internet</strong> ont déclaré
            que celui-ci a été leur principal moteur de croissance.
          </h3>
          <div className="gauge">
            <div
              className="gauge-fill"
              style={{
                transitionDelay: '0.8s',
                width: isGaugeVisible ? '40%' : 0,
              }}></div>
          </div>
        </li>
        <li className="math-item">
          <h3>
            <strong>57% des utilisateurs</strong> ne recommandent pas une
            entreprise ayant un site mal conçu.
          </h3>
          <div className="gauge">
            <div
              className="gauge-fill"
              style={{
                transitionDelay: '1s',
                width: isGaugeVisible ? '57%' : 0,
              }}></div>
          </div>
        </li>
      </ul>

      <p id="conclusion">
        D'après une étude de <strong>Forrester</strong>, un site bien conçu peut
        augmenter les conversions de <strong>200% à 400%</strong>. <br />{' '}
        Autrement dit : un prospect qui s'intéresse à vous a{' '}
        <strong>trois à cinq fois plus de chances</strong> de vous contacter
        avec <strong>un bon site internet</strong>.
      </p>

      <div className="contact-links">
        <a href="tel:+33767249980">
          <button className="tel-btn">
            <PhoneIcon />
            <p>
              Devis gratuit & personnalisé <br />
              <span>07 67 24 99 80</span>
            </p>
          </button>
        </a>
        <CustomLink href={'/contact'}>
          <button className="form-btn">
            <FormatListBulletedIcon />
            <p>Formulaire de contact</p>
          </button>
        </CustomLink>
      </div>
    </MainContainer>
  );
};

const MainContainer = styled.section`
  width: 1200px;
  padding: 0 50px;
  max-width: 100%;
  margin: auto;
  font-family: 'Montserrat';

  h2 {
    color: #040e1d;
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 25px;
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

  p#subtitle {
    color: #fafafa;
    font-size: 1.7rem;
    align-self: left;
    margin-bottom: 5px;
    font-weight: bold;
    @media (max-width: 500px) {
      font-size: 1rem;
    }
  }

  ul#maths_list {
    li.math-item {
      margin-bottom: 25px;
      color: #fafafa;

      h3 {
        @media (max-width: 500px) {
          font-size: 0.7rem;
        }
      }

      div.gauge {
        width: 100%;
        height: 40px;
        background: #ffffff08;
        overflow: hidden;
        border-radius: 5px;

        div.gauge-fill {
          background: rgb(46, 204, 113, 0.9);
          height: 100%;
          transition: 1s ease-out;
        }
      }
    }
  }

  p#conclusion {
    color: #fafafa;
    font-size: 1.4rem;
    align-self: left;
    margin-bottom: 5px;

    strong {
      color: rgb(46, 204, 113, 0.9);
      text-shadow: 0px 0px 5px rgb(46, 204, 113, 0.3);
    }

    @media (max-width: 500px) {
      font-size: 0.8rem;
    }
  }

  div.contact-links {
    display: flex;
    gap: 15px;
    margin-top: 50px;

    @media (max-width: 500px) {
      flex-direction: column;
    }
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-size: 1.2rem;
      color: rgba(255, 255, 255, 0.7);
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(255, 255, 255, 0.05);
      /* box-shadow: 0 0px 7px rgba(255, 255, 255, 0.1); */
      backdrop-filter: blur(1px);
      border-radius: 3px;
      font-family: 'Montserrat';
      /* flex: 1; */
      /* min-width: 320px; */
      max-width: calc(100vw - 100px);
      height: 100px;

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        font-weight: bold;
        letter-spacing: 2px;
        width: 100%;

        @media (max-width: 500px) {
          font-size: 0.9rem;

          svg {
            font-size: 2rem !important;
          }
        }
      }

      &:has(.form-btn) {
        width: calc(50% - (15px / 2));

        @media (max-width: 500px) {
          width: 100%;
        }
        svg {
          color: rgba(41, 128, 185, 1);
          font-size: 2.4rem;
        }

        &:hover {
          background: rgba(41, 128, 185, 0.3);
          border: 1px solid rgba(41, 128, 185, 1);
          box-shadow: 0px 0px 7px 1px rgba(41, 128, 185, 1);
        }

        svg {
          filter: drop-shadow(0px 0px 5px rgba(41, 128, 185, 0.4));
        }
      }

      &:has(.tel-btn) {
        width: calc(50% - (15px / 2));

        @media (max-width: 500px) {
          width: 100%;
        }

        span {
          color: rgb(46, 204, 113);
          display: inline-block;
        }

        svg {
          color: rgb(46, 204, 113);
          font-size: 3.2rem;
        }
        &:hover {
          background: rgba(46, 204, 113, 0.3);
          border: 1px solid rgb(46, 204, 113);
          box-shadow: 0px 0px 7px 1px rgb(46, 204, 113);
        }

        svg {
          filter: drop-shadow(0px 0px 5px rgba(46, 204, 113, 0.4));
        }
      }
    }
  }
`;

export default HomeMaths;
