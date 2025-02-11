import React, { useContext } from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import Head from 'next/head';
import JSONLD from '@/utilities/JSONLD';
import { BackgroundContext } from '@/contexts/Contexts';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import SupportIcon from '@mui/icons-material/Support';
import HomeNotes from '@/components/Home/components/HomeNotes';
import CustomLink from '@/components/Layout/routing/CustomLink';

const PrestationDetails: NextPage = () => {
  // --- Background
  const { background } = useContext(BackgroundContext);

  const jsonld = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Pierre Godino',
    url: 'https://www.creation-sites-godino.fr/deroulement-creation-de-site-internet',
    description:
      'Vous cherchez à recruter un développeur ? Vous trouverez toutes les informations dont vous pourriez avoir besoin sur moi ici.',
    jobTitle: 'Développeur Web',
    image: 'https://www.creation-sites-godino.fr/logo.png',
    worksFor: {
      '@type': 'Organization',
      name: 'Création Sites Godino',
      url: 'https://www.creation-sites-godino.fr',
    },
    sameAs: [
      'https://www.linkedin.com/in/pierre-godino',
      'https://github.com/pierregodino',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Recruitment',
      email: 'contact@creation-sites-godino.fr',
      url: 'https://www.creation-sites-godino.fr/contact',
    },
  };

  return (
    <MainContainer>
      <Head>
        <title>Comment se déroulent mes prestations ? | Pierre G.</title>
        <meta
          property="og:title"
          content="Comment se déroulent mes prestations ? | Pierre G."
        />
        <meta
          name="description"
          content="Vous cherchez à recruter un développeur ? Vous trouverez toutes les informations dont vous pourriez avoir besoin sur moi ici."
        />
        <meta
          property="og:description"
          content="Vous cherchez à recruter un développeur ? Vous trouverez toutes les informations dont vous pourriez avoir besoin sur moi ici."
        />
        <meta
          name="twitter:description"
          content="Vous cherchez à recruter un développeur ? Vous trouverez toutes les informations dont vous pourriez avoir besoin sur moi ici."
        />
        <meta
          property="og:url"
          content={
            'https://www.creation-sites-godino.fr/deroulement-creation-de-site-internet'
          }
        />
        <link
          rel="canonical"
          href={
            'https://www.creation-sites-godino.fr/deroulement-creation-de-site-internet'
          }
        />
      </Head>

      <JSONLD data={jsonld} />

      {background}

      <main>
        <h1>Comment se déroulent mes prestations ?</h1>

        <section id="sommaire">
          <div className="title-wrapper">
            <h2>Table des matières</h2>
          </div>
          <ul>
            <li>
              <a href="#website">
                Comment se déroule la création d'un site internet ?
              </a>
            </li>
            <li>
              <a href="#maintainance">
                Comment se déroule une maintenance de site internet ?
              </a>
            </li>
            <li>
              <a href="#SEO">
                Comment se déroule une campagne de référencement ?
              </a>
            </li>
            <li>
              <a href="#ADS">Comment se déroule une campagne publicitaire ?</a>
            </li>
          </ul>
        </section>

        <section id="website">
          <div className="title-wrapper">
            <LocalOfferIcon />
            <div>
              <h2>Création de site internet</h2>
              <i>
                Essentiel <br /> <em>1 ~ 2 semaines de délai</em>
              </i>
            </div>
          </div>
          <ol>
            <li>
              <span className="step-number">1</span>
              <strong>Mise en place du projet</strong> Je prends le temps
              d’échanger avec vous pour bien comprendre vos objectifs, votre
              identité de marque et vos attentes. Je vous guide sur les
              meilleures pratiques et vous propose des solutions adaptées à
              votre activité.
            </li>
            <li>
              <span className="step-number">2</span>
              <strong>Production du site</strong> Je conçois un site à votre
              image, moderne, rapide et ergonomique. Chaque élément est pensé
              pour offrir la meilleure expérience utilisateur et maximiser votre
              impact en ligne.
            </li>
            <li>
              <span className="step-number">3</span>
              <strong>Optimisation du site</strong> Je peaufine chaque détail :
              vitesse de chargement, navigation intuitive, référencement naturel
              (SEO). Mon but ? Un site performant qui attire et retient vos
              visiteurs.
            </li>
            <li>
              <span className="step-number">4</span>
              <strong>Validation</strong> Avant la mise en ligne, nous faisons
              ensemble un tour complet du site. Je prends en compte vos retours
              et apporte les derniers ajustements pour garantir un résultat
              parfait.
            </li>
            <li>
              <span className="step-number">5</span>
              <strong>Mise en ligne</strong> Je gère l’hébergement, le
              déploiement et la configuration technique. Votre site est prêt à
              accueillir ses premiers visiteurs en toute sérénité.
            </li>
          </ol>

          <CustomLink href="/creation-site-internet">En savoir plus</CustomLink>
        </section>

        <div className="section-wrapper">
          <section id="maintainance">
            <div className="title-wrapper">
              <SupportIcon />
              <div>
                <h2>Maintenance & Support</h2>
                <i>
                  Distribution du site <br /> <em>En continu</em>
                </i>
              </div>
            </div>
            <ul>
              <li>
                <strong>Mises à jour régulières</strong> Je veille à ce que
                votre site reste sécurisé, compatible avec les dernières
                technologies et toujours performant.
              </li>
              <li>
                <strong>Support technique</strong> Une question, un souci
                technique ? Je suis disponible pour vous aider rapidement et
                assurer la continuité de votre activité en ligne.
              </li>
              <li>
                <strong>Améliorations continues</strong> Votre site évolue avec
                votre activité. J’ajoute de nouvelles fonctionnalités et
                optimise les performances pour qu’il reste toujours au top.
              </li>
              <li>
                <strong>Surveillance et sauvegardes</strong> Pour éviter toute
                perte de données, je mets en place des sauvegardes régulières et
                une surveillance proactive.
              </li>
            </ul>
            <CustomLink href="/creation-site-internet#maintenance">
              En savoir plus
            </CustomLink>
          </section>
        </div>

        <section id="SEO">
          <div className="title-wrapper">
            <LocalOfferIcon />
            <div>
              <h2>Campagne SEO - Référencement</h2>
              <i>
                Croissance moyen/long-terme <br /> <em>Durée 2 ~ 5 mois</em>
              </i>
            </div>
          </div>
          <ol>
            <li>
              <span className="step-number">1</span>
              <strong>Étude du marché</strong> J’analyse votre secteur
              d’activité, vos concurrents et les mots-clés les plus pertinents
              pour vous positionner efficacement sur Google.
            </li>
            <li>
              <span className="step-number">2</span>
              <strong>Validation du devis</strong> Je vous propose un plan
              d’action détaillé avec des objectifs clairs pour maximiser votre
              visibilité sur les moteurs de recherche.
            </li>
            <li>
              <span className="step-number">3</span>
              <strong>Campagne de netlinking</strong> J’augmente l’autorité de
              votre site en obtenant des liens entrants de qualité, pour
              améliorer durablement votre positionnement.
            </li>
            <li>
              <span className="step-number">4</span>
              <strong>Lancement du blog</strong> Je mets en place une stratégie
              de contenu optimisée pour le référencement, attirant un trafic
              qualifié et renforçant votre crédibilité en ligne.
            </li>
          </ol>

          <CustomLink href="/referencement-visibilite-web-seo#SEO">
            En savoir plus
          </CustomLink>
        </section>

        <section id="ADS">
          <div className="title-wrapper">
            <LocalOfferIcon />
            <div>
              <h2>Campagne publicitaire</h2>
              <i>
                Croissance court-terme <br /> <em>Durée à définir</em>
              </i>
            </div>
          </div>
          <ol>
            <li>
              <span className="step-number">1</span>
              <strong>Étude du marché</strong> J’analyse votre audience cible et
              vos concurrents pour définir la meilleure stratégie publicitaire
              et maximiser votre retour sur investissement.
            </li>
            <li>
              <span className="step-number">2</span>
              <strong>Validation du devis</strong> Je vous propose un plan
              détaillé avec un budget maîtrisé, des objectifs précis et des
              prévisions réalistes.
            </li>
            <li>
              <span className="step-number">3</span>
              <strong>Lancement de la campagne Google Ads</strong> Je mets en
              place des annonces percutantes et optimisées pour générer un
              maximum de clics qualifiés et booster votre chiffre d’affaires.
            </li>
          </ol>
          <CustomLink href="/referencement-visibilite-web-seo#ADS">
            En savoir plus
          </CustomLink>
        </section>
      </main>
      <HomeNotes />
    </MainContainer>
  );
};
const MainContainer = styled.div`
  width: 100vw;
  background: #040e1d;
  min-height: 100vh;
  padding: 100px 0;

  main {
    z-index: 1;
    position: relative;
    color: #fafafa;
    font-family: 'Montserrat';

    h1 {
      font-family: 'Bebas Neue';
      letter-spacing: 2px;
      font-size: 2.5rem;
      margin-bottom: 50px;
      text-align: center;
    }

    .section-wrapper {
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(5px);
      width: 100vw;
      margin-top: 100px;
      padding: 50px 0;

      section {
        padding: 0 50px;
        margin: auto;
      }
    }

    section {
      padding: 0 50px;
      margin: auto;
      max-width: 1200px;
      padding-top: 100px;
      padding-bottom: 50px;

      .title-wrapper {
        display: flex;
        gap: 15px;
        margin-bottom: 15px;
        /* background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.1); */
        border-radius: 5px;
        padding: 15px 30px;
        width: fit-content;
        transition: 0.1s;

        @media (max-width: 1200px) {
          padding: 0px;
        }

        &:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        svg {
          font-size: 3.5rem;

          @media (max-width: 700px) {
            font-size: 2rem;
          }
        }
        h2 {
          display: flex;
          gap: 15px;
          /* font-family: 'Bebas Neue'; */
          letter-spacing: 3px;
          font-size: 1.7rem;
          font-weight: bold;

          @media (max-width: 700px) {
            font-size: 1.2rem;
          }
        }

        div {
          display: flex;
          flex-direction: column;
          align-items: start;

          i {
            margin-top: -8px;
            font-weight: bold;

            em {
              font-weight: 500;
              color: #fafafaaa;
            }

            @media (max-width: 700px) {
              font-size: 0.9rem;
            }
          }
        }
      }

      ol,
      ul {
        list-style: decimal !important;
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding-left: 100px;
        @media (max-width: 1200px) {
          padding: 25px;
        }

        li {
          display: flex;
          flex-direction: column;
          gap: 1px;
          position: relative;
          text-align: justify;
          font-weight: 500;

          @media (max-width: 700px) {
            font-size: 0.9rem;
          }

          span.step-number {
            position: absolute;
            left: -40px;
            top: -10px;
            font-size: 2.5rem;
            font-family: 'Montserrat';
            font-weight: bold;
            color: #fafafaca;
          }

          strong {
            font-size: 1.1rem;
            letter-spacing: 1px;
            text-align: left;

            @media (max-width: 700px) {
              font-size: 1rem;
            }
          }
        }
      }

      & > a {
        display: block;
        margin-left: 100px;
        margin-top: 50px;
        padding: 10px 15px;
        font-weight: bold;
        background: #fafafaee;
        color: #040e1d;
        width: fit-content;
        border-radius: 5px;

        &:hover {
          background: #fafafa;
        }

        @media (max-width: 1200px) {
          margin-left: 25px;
        }
      }

      &#sommaire {
        padding: 0 50px;

        li {
          a {
            text-align: left;
            text-decoration: underline;
            font-size: 1.1rem;
            color: #2ecc71;

            @media (max-width: 700px) {
              font-size: 1rem;
            }
          }
        }
      }

      &#website {
        .title-wrapper {
          svg {
            color: #2980b9;
          }

          i {
            color: #2980b9;
          }
        }

        li strong {
          color: #2980b9;
        }
      }
      &#maintainance {
        .title-wrapper {
          svg {
            color: #2ecc71;
          }

          i {
            color: #2ecc71;
          }
        }

        li strong {
          color: #2ecc71;
        }
      }
      &#SEO {
        .title-wrapper {
          svg {
            color: #3498db;
          }

          i {
            color: #3498db;
          }
        }

        li strong {
          color: #3498db;
        }
      }
      &#ADS {
        .title-wrapper {
          svg {
            color: #f39c12;
          }

          i {
            color: #f39c12;
          }
        }

        li strong {
          color: #f39c12;
        }
      }
    }
  }
`;

export default PrestationDetails;
