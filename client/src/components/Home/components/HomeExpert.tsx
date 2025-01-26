import styled from 'styled-components';

const HomeExpert = () => {
  return (
    <MainContainer id="expertise">
      <h2>
        <img src="/icons/qualite.png" alt="expert WEB" loading="lazy" />
        Mon expertise en création de site internet
      </h2>
      <p>
        Spécialiste en création de sites internet sur mesure, j’accompagne mes
        clients <strong>de la conception à la mise en ligne</strong>. Mon
        approche se base sur <strong>trois piliers fondamentaux</strong> :
      </p>
      <ul>
        <li>
          <strong>
            <big>Un design qui vous ressemble :</big>
          </strong>{' '}
          Je crée des sites modernes, responsive et optimisés pour une
          expérience utilisateur optimale.
        </li>
        <li>
          <strong>
            <big>Un référencement performant (SEO) :</big>
          </strong>{' '}
          Chaque site que je conçois est optimisé pour le SEO dès le départ.
        </li>
        <li>
          <strong>
            <big>Un accompagnement complet :</big>
          </strong>{' '}
          De l’hébergement à la maintenance, je m’assure que votre site reste à
          jour et sécurisé.
        </li>
      </ul>
    </MainContainer>
  );
};

const MainContainer = styled.section`
  margin: auto;
  padding: 0 25px;
  max-width: 1200px;
  z-index: 1;

  * {
    color: #fafafa;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.08);
    font-family: 'Montserrat';
  }

  section,
  header {
    margin: 50px 0;
    padding-left: 70px;

    @media (max-width: 700px) {
      padding-left: 20px;
    }
  }

  h1,
  h2 {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
    color: rgba(255, 255, 255, 1);
    font-size: 2.5rem;
    font-weight: bold;
    letter-spacing: 2px;
    margin-bottom: 10px;
    margin-left: -100px;

    svg,
    img {
      width: 70px;
      color: #27ae60;
      filter: drop-shadow(0px 0px 3px rgba(green, 0.2));
    }

    @media (max-width: 700px) {
      letter-spacing: 4px;
      font-size: 1.2rem !important;
      margin-left: -40px;

      svg,
      img {
        width: 45px;
      }
    }
  }

  h2 {
    font-size: 2rem;
    letter-spacing: 1px;
  }

  p,
  li {
    font-size: 1.2rem;
    font-weight: 500;
    text-align: justify;

    @media (max-width: 450px) {
      font-size: 0.8rem;
    }
  }

  ul {
    padding-left: 40px;
    list-style: disc;
  }
`;

export default HomeExpert;
