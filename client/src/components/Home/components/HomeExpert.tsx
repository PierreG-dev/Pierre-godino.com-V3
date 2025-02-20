import { NextPage } from 'next';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CustomLink from '../../Layout/routing/CustomLink';

import Image from 'next/image';
import RUSH from '@/assets/icons/rush.png';
import GOOGLE_LOGO from '@/assets/global/google.png';
import CHECK from '@/assets/icons/check.png';
import BRUSH from '@/assets/icons/paint-brush.png';
import QUALITE from '@/assets/icons/qualite.png';

const HomeExpert: NextPage = () => {
  const [isContentVisible, setisContentVisible] = useState<boolean>(false);
  const contentWrapperRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(
          (entry) => entry.isIntersecting && setisContentVisible(true)
        );
      },
      {
        threshold: 0.2,
      }
    );
    observer.observe(contentWrapperRef.current);
  }, []);

  return (
    <MainContainer id="expertise" ref={contentWrapperRef}>
      <h2>
        Convaincu ?<strong>Je m'occupe de tout.</strong>
        <Image width={70} height={70} src={CHECK} alt="expert WEB" />
      </h2>

      <p className="subtitle">
        Spécialiste en création de sites internet depuis 2019, j’accompagne mes
        clients{' '}
        <strong>
          de la conception <br /> à la mise en ligne
        </strong>
        . Mon approche se base sur <strong>trois piliers fondamentaux</strong> :
      </p>

      <ul>
        <li
          style={{
            transform: isContentVisible ? 'none' : 'translateY(50px)',
            opacity: isContentVisible ? 1 : 0,
            transitionDelay: '0.4s',
          }}>
          <Image width={100} height={100} src={BRUSH} alt="expert WEB" />
          <h3>Un design qui vous ressemble</h3>
          <p>
            Je crée des sites modernes, responsive et optimisés pour une
            expérience utilisateur optimale.
          </p>
        </li>
        <li
          style={{
            transform: isContentVisible ? 'none' : 'translateY(50px)',
            opacity: isContentVisible ? 1 : 0,
            transitionDelay: '0.6s',
          }}>
          <Image width={100} height={100} src={GOOGLE_LOGO} alt="expert WEB" />
          <h3>Un référencement performant (SEO)</h3>{' '}
          <p>
            Chaque site que je conçois est optimisé pour le SEO dès le départ.
          </p>
        </li>
        <li
          style={{
            transform: isContentVisible ? 'none' : 'translateY(50px)',
            opacity: isContentVisible ? 1 : 0,
            transitionDelay: '0.8s',
          }}>
          <Image width={100} height={100} src={QUALITE} alt="expert WEB" />
          <h3>Un accompagnement complet</h3>{' '}
          <p>
            De l’hébergement à la maintenance, je m’assure que votre site reste
            à jour et sécurisé.
          </p>
        </li>
      </ul>

      <footer>
        <div
          className="delay"
          style={{
            transform: isContentVisible ? 'none' : 'translateY(50px)',
            opacity: isContentVisible ? 1 : 0,
            transitionDelay: '1s',
          }}>
          {' '}
          <Image width={100} height={100} src={RUSH} alt="expert WEB" />{' '}
          <h3>
            {' '}
            Votre site en ligne en <strong>une à deux semaines</strong>{' '}
          </h3>{' '}
        </div>{' '}
        <p
          style={{
            transform: isContentVisible ? 'none' : 'translateY(50px)',
            opacity: isContentVisible ? 1 : 0,
            transitionDelay: '1.1s',
          }}>
          {' '}
          De <strong>l'idée à la mise en ligne</strong>, chaque étape est
          optimisée pour un <strong>déploiement rapide et efficace</strong>.{' '}
          <br /> En quelques jours seulement, vous obtenez{' '}
          <strong>un site professionnel</strong>, fonctionnel et prêt à{' '}
          <strong>attirer vos premiers clients</strong>.{' '}
        </p>
        <div className="cta">
          <CustomLink href={'/contact'}>
            Et si on lançait votre projet aujourd’hui ? <ArrowForwardIosIcon />
          </CustomLink>
        </div>
      </footer>
    </MainContainer>
  );
};

const MainContainer = styled.section`
  margin: auto;
  padding: 0 25px;
  max-width: 1200px;
  width: 100%;
  z-index: 1;

  * {
    color: #fafafa;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.08);
    font-family: 'Montserrat';
  }

  h2 {
    font-size: 2rem;
    letter-spacing: 1px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: rgba(255, 255, 255, 1);
    margin-bottom: 50px;
    text-shadow: 0px 0px 5px rgba(255, 255, 255, 0.3) !important;

    strong {
      color: rgb(46, 204, 113, 0.9);
      text-shadow: 0px 0px 5px rgba(46, 204, 113, 0.5) !important;
    }

    svg,
    img {
      width: 70px;
      color: #27ae60;
      filter: drop-shadow(0px 0px 3px #27ae6066);
    }

    @media (max-width: 700px) {
      flex-direction: column;
      letter-spacing: 4px;
      font-size: 1.2rem !important;
      margin-bottom: 15px;

      svg,
      img {
        width: 45px;
      }
    }
  }

  p.subtitle {
    font-size: 1.4rem;
    font-weight: 500;
    text-align: justify;
    margin-bottom: 50px;

    strong {
      color: rgb(46, 204, 113, 0.9);
      text-shadow: 0px 0px 5px rgba(46, 204, 113, 0.3) !important;
    }

    @media (max-width: 450px) {
      font-size: 0.9rem;
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 100%;
    width: 100%;
    gap: 50px;
    margin-bottom: 50px;

    li {
      transition: 1s ease-out;
      border: 2px solid #ffffff16;
      background: rgba(255, 255, 255, 0.05);
      padding: 65px 15px;
      border-radius: 15px;
      width: 300px;
      max-width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      @media (max-width: 500px) {
        padding: 15px;
      }

      img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        margin-bottom: 25px;

        @media (max-width: 500px) {
          width: 50px;
          height: 50px;
          margin-bottom: 10px;
        }
      }

      h3 {
        font-size: 1.4rem;
        font-weight: bold;
        text-align: center;

        @media (max-width: 500px) {
          font-size: 1.1rem;
          margin-bottom: 5px;
        }
      }

      p {
        font-size: 1.2rem;
        text-align: center;

        @media (max-width: 500px) {
          font-size: 0.9rem;
        }
      }
    }
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div.delay {
      border: 3px solid #3aa4eb;
      padding: 5px 10px;
      border-radius: 15px;
      display: flex;
      align-items: center;
      gap: 15px;
      transition: 1s;
      margin-bottom: 20px;

      img {
        width: 100px;
        height: 100px;
        filter: drop-shadow(0 0 5px rgba(41, 128, 185, 0.3));
      }

      h3 {
        font-size: 2rem;

        @media (max-width: 500px) {
          font-size: 1.2rem;
        }
        strong {
          color: #3aa4eb;
          text-shadow: 0px 0px 5px rgba(41, 128, 185, 0.4) !important;
        }
      }
    }

    p {
      transition: 1s;
      font-size: 1.3rem;
      text-align: center;
      margin-bottom: 25px;

      @media (max-width: 500px) {
        font-size: 0.9rem;
      }
      strong {
        color: #3aa4eb;
        text-shadow: 0px 0px 5px rgba(41, 128, 185, 0.4) !important;
      }
    }

    div.cta {
      background: #ffffff08;
      backdrop-filter: blur(5px);
      width: 100vw;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 75px;

      a {
        font-size: 1.4rem;
        display: flex;
        align-items: center;
        /* gap: 15px; */
        text-decoration: underline;
        font-weight: 600;

        svg {
          font-size: 2rem;

          path {
            color: #3aa4eb;
          }
        }
        @media (max-width: 500px) {
          font-size: 0.9rem;

          svg {
            font-size: 1.5rem;
          }
        }
      }
    }
  }
`;

export default HomeExpert;
