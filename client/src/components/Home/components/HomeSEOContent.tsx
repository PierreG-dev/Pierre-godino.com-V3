import { FC } from 'react';
import styled from 'styled-components';

const HomeSEOContent: FC = () => {
  return (
    <MainContainer>
      <header>
        <h1>
          <img src="/icons/web.webp" alt="WEB" loading="lazy" />
          Création de site internet : Donnez vie à vos idées en ligne
        </h1>
      </header>

      <section id="intro">
        <p>
          Aujourd’hui, avoir un site internet n’est plus une option, mais une{' '}
          <strong>nécessité</strong>. Que vous soyez une petite entreprise, un
          artisan ou une startup, un site internet bien conçu est votre vitrine
          numérique, accessible 24h/24, 7j/7.
        </p>
      </section>

      <section id="benefits">
        <h2>
          <img src="/icons/loupe.png" alt="pourquoi?" loading="lazy" />
          Pourquoi la création de site internet est essentielle pour votre
          entreprise ?
        </h2>
        <ul>
          <li>
            <strong>Visibilité accrue :</strong> Soyez présent sur Google et
            atteignez vos clients là où ils vous cherchent.
          </li>
          <li>
            <strong>Crédibilité renforcée :</strong> Un design moderne et des
            contenus bien structurés inspirent confiance.
          </li>
          <li>
            <strong>Développement de votre activité :</strong> Générez des leads
            qualifiés, augmentez vos ventes et fidélisez vos clients.
          </li>
        </ul>
      </section>

      <section id="expertise">
        <h2>
          <img src="/icons/qualite.png" alt="expert WEB" loading="lazy" />
          Mon expertise en création de site internet
        </h2>
        <p>
          Spécialiste en création de sites internet sur mesure, j’accompagne mes
          clients de la conception à la mise en ligne. Mon approche se base sur
          trois piliers fondamentaux :
        </p>
        <ul>
          <li>
            <strong>Un design qui vous ressemble :</strong> Je crée des sites
            modernes, responsive et optimisés pour une expérience utilisateur
            optimale.
          </li>
          <li>
            <strong>Un référencement performant (SEO) :</strong> Chaque site que
            je conçois est optimisé pour le SEO dès le départ.
          </li>
          <li>
            <strong>Un accompagnement complet :</strong> De l’hébergement à la
            maintenance, je m’assure que votre site reste à jour et sécurisé.
          </li>
        </ul>
      </section>

      <section id="steps">
        <h2>
          <img
            src="/icons/target.png"
            alt="étapes de création de site internet"
            loading="lazy"
          />{' '}
          Les étapes de création de votre site internet
        </h2>
        <ol>
          <li>
            <strong>Analyse de vos besoins :</strong>
            <ul>
              <li>
                Quels sont vos objectifs (visibilité, vente en ligne, prise de
                contact) ?
              </li>
              <li>Qui sont vos clients cibles ?</li>
              <li>Quels contenus souhaitez-vous mettre en avant ?</li>
            </ul>
          </li>
          <li>
            <strong>Conception et design :</strong>
            <ul>
              <li>Création d’une maquette sur mesure.</li>
              <li>
                Intégration de votre identité visuelle (logo, couleurs,
                typographie).
              </li>
            </ul>
          </li>
          <li>
            <strong>Développement et intégration :</strong>
            <ul>
              <li>
                Mise en place d’un CMS (WordPress, Shopify) ou d’un
                développement sur mesure.
              </li>
              <li>
                Intégration des fonctionnalités nécessaires : formulaire de
                contact, boutique en ligne, blog, etc.
              </li>
            </ul>
          </li>
          <li>
            <strong>Optimisation SEO :</strong>
            <ul>
              <li>
                Recherche de mots-clés stratégiques comme "création de site
                internet professionnel".
              </li>
              <li>Rédaction de contenus optimisés et attractifs.</li>
            </ul>
          </li>
          <li>
            <strong>Mise en ligne et suivi :</strong>
            <ul>
              <li>Hébergement sécurisé et rapide.</li>
              <li>Maintenance et mises à jour régulières.</li>
            </ul>
          </li>
        </ol>
      </section>
    </MainContainer>
  );
};

const MainContainer = styled.main`
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

export default HomeSEOContent;
