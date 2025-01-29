import styled from 'styled-components';

const HomeExpert = () => {
  return (
    <MainContainer id="expertise">
      <h2>
        Convaincu ?<strong>Je m'occupe de tout.</strong>
        <img src="/icons/check.png" alt="expert WEB" loading="lazy" />
      </h2>
      <p className="subtitle">
        Spécialiste en création de sites internet depuis 2019, j’accompagne mes
        clients <strong>de la conception à la mise en ligne</strong>. Mon
        approche se base sur <strong>trois piliers fondamentaux</strong> :
      </p>
      <ul>
        <li>
          <img src="/icons/paint-brush.png" alt="expert WEB" loading="lazy" />
          <h3>Un design qui vous ressemble</h3>
          <p>
            Je crée des sites modernes, responsive et optimisés pour une
            expérience utilisateur optimale.
          </p>
        </li>
        <li>
          <img src="/icons/google.png" alt="expert WEB" loading="lazy" />
          <h3>Un référencement performant (SEO)</h3>{' '}
          <p>
            Chaque site que je conçois est optimisé pour le SEO dès le départ.
          </p>
        </li>
        <li>
          <img src="/icons/qualite.png" alt="expert WEB" loading="lazy" />
          <h3>Un accompagnement complet</h3>{' '}
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
  margin: auto;
  padding: 50px 25px;
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
      font-size: 0.8rem;
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 100%;
    gap: 50px;

    li {
      width: 300px;
      max-width: 100%;
      /* background: red; */
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        margin-bottom: 25px;

        @media (max-width: 500px) {
          width: 70px;
          height: 70px;
        }
      }

      h3 {
        font-size: 1.4rem;
        font-weight: bold;
        text-align: center;
      }

      p {
        font-size: 1.2rem;
        text-align: center;
      }
    }
  }
`;

export default HomeExpert;
