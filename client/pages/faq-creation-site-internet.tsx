import { NextPage } from 'next';
import styled from 'styled-components';
import HomeQuestions from '../src/components/Home/components/HomeQuestions';
import { BackgroundContext } from '../src/contexts/Contexts';
import { useContext } from 'react';
import Head from 'next/head';

const FAQ: NextPage = () => {
  const { background } = useContext(BackgroundContext);

  return (
    <MainContainer id="faq">
      <Head>
        <title>FAQ | Pierre G.</title>
        <meta property="og:title" content="FAQ | Pierre G." />
        <meta
          name="description"
          content="Découvrez les réponses aux questions fréquemment posées sur la création de site internet, le SEO et la gestion de votre présence en ligne."
        />
        <meta
          property="og:description"
          content="Découvrez les réponses aux questions fréquemment posées sur la création de site internet, le SEO et la gestion de votre présence en ligne."
        />
        <meta
          name="twitter:description"
          content="Découvrez les réponses aux questions fréquemment posées sur la création de site internet, le SEO et la gestion de votre présence en ligne."
        />
        <meta
          property="og:url"
          content="https://www.creation-sites-godino.fr/faq-creation-site-internet"
        />
        <link
          rel="canonical"
          href="https://www.creation-sites-godino.fr/faq-creation-site-internet"
        />
      </Head>
      {background}
      <main>
        <header>
          <h1>
            <img src="/icons/question.png" alt="question, faq" loading="lazy" />
            FAQ - Création de Site Internet
          </h1>
          <p>
            Découvrez les réponses aux questions fréquemment posées sur la
            création de site internet, le SEO et la gestion de votre présence en
            ligne.
          </p>
        </header>

        <section>
          <h2>Questions fréquemment posées sur la création de site internet</h2>

          <details>
            <summary>
              Pourquoi la création de site internet est-elle importante pour mon
              entreprise ?
            </summary>
            <p>
              Un site internet bien conçu est essentiel pour toute entreprise
              moderne. Il vous permet de renforcer votre présence en ligne,
              d’améliorer votre visibilité sur Google et d’offrir à vos clients
              un accès 24/7 à vos services. En effet, un site internet bien
              structuré inspire confiance et peut devenir un véritable levier
              pour développer votre activité.
            </p>
          </details>

          <details>
            <summary>
              Comment se déroule le processus de création d'un site internet ?
            </summary>
            <p>
              Le processus de création de site internet commence par une analyse
              de vos besoins spécifiques. Ensuite, je passe à la conception du
              design, au développement technique et à l'intégration des
              fonctionnalités. Enfin, j'optimise votre site pour le SEO et vous
              offrons un suivi pour garantir une performance optimale. Chaque
              étape est personnalisée en fonction de vos objectifs, qu’il
              s’agisse de créer une vitrine en ligne ou une boutique e-commerce.
            </p>
          </details>

          <details>
            <summary>
              Quels sont les coûts associés à la création de site internet ?
            </summary>
            <p>
              Les coûts de création de site internet varient en fonction de la
              complexité du projet, du nombre de pages et des fonctionnalités
              spécifiques. Un site vitrine simple peut coûter moins cher qu’un
              site e-commerce avec des fonctionnalités avancées. je vous propose
              un devis sur mesure en fonction de vos besoins et de votre budget.
            </p>
          </details>

          <details>
            <summary>Est-ce que mon site sera optimisé pour le SEO ?</summary>
            <p>
              Oui ! Chaque site internet que je créé est optimisé pour le
              référencement naturel (SEO) dès le départ. Cela comprend la
              recherche de mots-clés pertinents, l'optimisation des titres, des
              balises `{'<meta>'}`, des URL, ainsi que la structure du contenu
              pour améliorer la visibilité de votre site sur Google et autres
              moteurs de recherche.
            </p>
          </details>

          <details>
            <summary>
              Quelles sont les meilleures pratiques en matière de design pour un
              site internet ?
            </summary>
            <p>
              Le design d’un site internet doit être à la fois esthétique et
              fonctionnel. Il doit refléter l’identité de votre entreprise et
              offrir une expérience utilisateur fluide. Les meilleures pratiques
              incluent : une navigation simple, un design responsive (adapté aux
              mobiles), un chargement rapide des pages et l'intégration de
              visuels de qualité. Un bon design peut augmenter la crédibilité de
              votre site et inciter les visiteurs à rester plus longtemps.
            </p>
          </details>

          <details>
            <summary>
              Fournissez-vous une maintenance après la création du site internet
              ?
            </summary>
            <p>
              Oui, j'offre des services de maintenance régulière pour garantir
              la sécurité et la mise à jour continue de votre site internet.
              Cela comprend la mise à jour des plugins, la sauvegarde des
              données, et l'ajustement des contenus si nécessaire pour répondre
              à l’évolution de votre activité.
            </p>
          </details>

          <details>
            <summary>
              Comment puis-je améliorer le SEO de mon site internet après sa
              création ?
            </summary>
            <p>
              Il existe plusieurs stratégies pour améliorer le SEO d'un site
              internet après sa création :
              <ul>
                <li>
                  Créer régulièrement du contenu optimisé pour les moteurs de
                  recherche (articles de blog, pages produits, témoignages,
                  etc.),
                </li>
                <li>
                  Optimiser les performances du site (temps de chargement,
                  images compressées, etc.),
                </li>
                <li>
                  Obtenir des backlinks de qualité provenant d’autres sites
                  pertinents dans votre domaine,
                </li>
                <li>
                  Analyser régulièrement les performances SEO à l’aide d’outils
                  comme Google Analytics ou Google Search Console.
                </li>
              </ul>
              N’hésitez pas à me contacter pour un accompagnement continu dans
              l'optimisation SEO de votre site.
            </p>
          </details>

          <details>
            <summary>
              Qu'est-ce que le référencement local et comment peut-il m'aider ?
            </summary>
            <p>
              Le référencement local est une stratégie SEO qui vise à améliorer
              la visibilité de votre site internet dans les résultats de
              recherche locaux. Cela est particulièrement important si vous avez
              une entreprise physique ou si vous ciblez des clients dans une
              zone géographique spécifique. Je vous aide à optimiser votre site
              pour apparaître dans les résultats locaux, comme dans Google Maps
              ou les recherches "près de chez moi".
            </p>
          </details>

          <details>
            <summary>
              Pourquoi choisir un site responsive pour votre entreprise ?
            </summary>
            <p>
              Un site responsive s'adapte automatiquement aux différentes
              tailles d'écran (smartphone, tablette, ordinateur de bureau). En
              plus d'améliorer l'expérience utilisateur, un site responsive est
              également favorisé par Google dans ses résultats de recherche. De
              plus, avec l'augmentation de la navigation mobile, un site
              responsive est essentiel pour capter un large public et maximiser
              les conversions.
            </p>
          </details>
          <details>
            <summary>
              Quelle est la différence entre un site vitrine et un site
              e-commerce ?
            </summary>
            <p>
              Un site vitrine présente les informations de base de votre
              entreprise (services, produits, informations de contact), souvent
              sous forme de pages statiques. En revanche, un site e-commerce
              permet aux visiteurs d'acheter des produits ou services
              directement en ligne grâce à une interface de panier, de paiement
              et de gestion des commandes. Si vous avez un produit à vendre, un
              site e-commerce est l'option la plus adaptée.
            </p>
          </details>

          <details>
            <summary>Qu'est-ce que le responsive design ?</summary>
            <p>
              Le responsive design est une approche de conception de site web
              qui permet à celui-ci de s'adapter automatiquement à la taille de
              l'écran de l'utilisateur (ordinateur, tablette, smartphone). Cela
              garantit une expérience utilisateur optimale sur tous les
              appareils et est désormais un standard essentiel pour un bon
              référencement SEO, car Google privilégie les sites
              mobiles-friendly.
            </p>
          </details>

          <details>
            <summary>
              Fournissez-vous des services d'intégration avec les réseaux
              sociaux ?
            </summary>
            <p>
              Oui, je propose des services d'intégration avec les réseaux
              sociaux. Cela inclut l'ajout de boutons de partage, la possibilité
              d'afficher des flux sociaux directement sur votre site, ainsi que
              l'intégration des outils de gestion des publicités et des
              campagnes de marketing sur les réseaux sociaux comme Facebook,
              Instagram ou LinkedIn. Cette intégration vous permet de mieux
              engager vos utilisateurs et de promouvoir votre entreprise de
              manière efficace.
            </p>
          </details>

          <details>
            <summary>
              Qu'est-ce que l'optimisation de la vitesse de mon site internet ?
            </summary>
            <p>
              L'optimisation de la vitesse de chargement de votre site est
              essentielle pour offrir une bonne expérience utilisateur et
              améliorer votre classement SEO. Cela inclut des actions telles que
              la compression des images, la réduction des requêtes HTTP,
              l'optimisation du code JavaScript et CSS, ainsi que l'utilisation
              de techniques de mise en cache pour accélérer le chargement des
              pages. Un site rapide réduit également le taux de rebond et
              améliore la conversion des visiteurs en clients.
            </p>
          </details>

          <details>
            <summary>
              Est-ce que vous pouvez gérer l'hébergement de mon site ?
            </summary>
            <p>
              Oui, je propose des services d'hébergement pour votre site
              internet. Je vous aide à choisir l'hébergement adapté à vos
              besoins (performance, sécurité, évolutivité) et je me charge de la
              gestion technique, y compris les sauvegardes, les mises à jour et
              la gestion des performances. Si vous avez déjà un hébergeur, je
              peux aussi travailler avec vous pour intégrer votre site sur la
              plateforme de votre choix.
            </p>
          </details>

          <details>
            <summary>
              Que faire si je souhaite modifier mon site après sa création ?
            </summary>
            <p>
              j'offre des services de maintenance et de modification continue
              après la création de votre site. Si vous avez besoin d'ajouter de
              nouvelles fonctionnalités, de modifier le design, ou de mettre à
              jour les contenus, je suis à votre disposition pour apporter les
              ajustements nécessaires. De plus, j'offre une formation pour que
              vous puissiez gérer certaines mises à jour de manière autonome.
            </p>
          </details>

          <details>
            <summary>
              Est-ce que vous proposez des services de rédaction de contenu ?
            </summary>
            <p>
              Oui, je propose des services de rédaction de contenu pour votre
              site internet, y compris des pages de présentation, des articles
              de blog, des descriptions de produits, etc. Notre équipe de
              rédacteurs professionnels veille à ce que le contenu soit optimisé
              pour le SEO tout en étant attrayant et pertinent pour vos
              visiteurs. Le contenu de qualité est essentiel pour améliorer
              votre classement sur Google et pour convaincre vos visiteurs de
              devenir des clients.
            </p>
          </details>

          <details>
            <summary>
              Puis-je ajouter des fonctionnalités à mon site après sa création ?
            </summary>
            <p>
              Absolument ! Un site internet peut évoluer au fil du temps pour
              s'adapter à vos besoins. Que ce soit pour ajouter un blog, une
              boutique en ligne, un système de gestion des utilisateurs ou toute
              autre fonctionnalité, je peux intégrer des nouvelles
              fonctionnalités selon vos exigences. Notre approche modulaire
              permet de faire évoluer votre site sans nécessiter une refonte
              complète.
            </p>
          </details>

          <details>
            <summary>
              Est-ce que vous pouvez créer un site internet multilingue ?
            </summary>
            <p>
              Oui, je peux créer des sites internet multilingues pour toucher un
              public international. En fonction de vos besoins,j'intègre des
              fonctionnalités permettant aux utilisateurs de choisir leur langue
              et de naviguer dans les pages dans la langue de leur choix. je
              m'assure que le contenu est bien traduit et que le référencement
              multilingue est optimisé pour chaque version du site.
            </p>
          </details>
        </section>

        <footer>
          <HomeQuestions />
        </footer>
      </main>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  main {
    padding: 5px;
    padding-top: 10vh;
    padding-bottom: 100px;
    z-index: 1;
    position: relative;
    section,
    header {
      max-width: 1200px;
      margin: auto;

      * {
        color: #fafafa;
        font-family: 'Montserrat';
      }
    }

    header {
      h1 {
        display: flex;
        align-items: center;
        font-size: 2.5rem;
        font-weight: bold;
        font-family: 'Montserrat';
        gap: 5px;

        img {
          width: 50px;
        }

        @media (max-width: 700px) {
          font-size: 1.2rem;
        }
      }

      p {
        padding-left: 15px;
        @media (max-width: 700px) {
          font-size: 0.8rem;
        }
      }
    }

    section {
      padding-bottom: 100px;

      h2 {
        margin-top: 50px;
        font-weight: bold;
      }

      details {
        cursor: pointer;
        background: #fafafacc;
        border-radius: 5px;
        padding: 15px;
        margin: 10px 0;

        summary {
          color: #040e1d;
          font-weight: bold;
          letter-spacing: 1px;
        }

        ul {
          padding-left: 40px;
          list-style: disc;
        }

        p,
        li {
          text-align: justify;
          color: #040e1d;
          font-weight: 500;
        }
      }
    }
  }
`;

export default FAQ;
