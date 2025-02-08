import Head from 'next/head';
import { ChangeEvent, FC, useCallback, useContext, useState } from 'react';
import styled from 'styled-components';
import { BackgroundContext } from '../../src/contexts/Contexts';
import dynamic from 'next/dynamic';
import COMPUTER from '../../src/components/Simulateur/COMPUTER';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import EuroIcon from '@mui/icons-material/Euro';
import CustomLink from '../../src/components/Layout/routing/CustomLink';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PhoneIcon from '@mui/icons-material/Phone';

const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

const defaultOptions = {
  loop: false,
  autoplay: true, // Désactivé pour contrôle manuel
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

type ClientType =
  | 'Artisan (plombiers, électriciens, maçons, etc.)'
  | 'Restaurateur'
  | 'Commerçant de proximité'
  | 'Secteur du bien-être (coachs, thérapeutes, salles de sport, etc.)'
  | 'Profession libérale (avocats, consultants, médecins, etc.)'
  | 'Entreprise de services B2B'
  | 'Immobilier (agences, promoteurs)';

const options = {
  budgets: [
    {
      name: 'Économique',
      basePrice: 500,
      pagePrice: 200,
      design: { theme: 100, customPerPage: 300 },
      modifiable: 300,
    },
    {
      name: 'Équilibré',
      basePrice: 1000,
      pagePrice: 300,
      design: { theme: 200, customPerPage: 400 },
      modifiable: 400,
    },
    {
      name: 'Complet',
      basePrice: 2000,
      pagePrice: 500,
      design: { theme: 300, customPerPage: 600 },
      modifiable: 500,
    },
  ],
  structureOptions: [{ name: 'Mono page', discount: 20 }, { name: '3+ pages' }],
};

type INbPages = number;

const Vitrine: FC = () => {
  // --- Nombre de pages
  const [nbPages, setNbPages] = useState<INbPages>(0);
  //--- Profession
  const [clientType, setClientType] = useState<ClientType>(null);
  // --- Prix calculé
  const [price, setPrice] = useState<number>(null);
  // --- Visibilité du résultat
  const [processing, setProcessing] = useState<boolean>(false);
  console.log(clientType);

  // --- background
  const { background } = useContext(BackgroundContext);

  const chooseNbPages = useCallback((nbPages: INbPages) => {
    if (nbPages <= 0 || nbPages > 10) return;
    setNbPages(nbPages);
  }, []);

  const handleNbPagesChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      chooseNbPages(parseInt(e.target.value));
    },
    [chooseNbPages]
  );

  const processPrice = useCallback(() => {
    if (!nbPages || !clientType) return;
    let total = 0;
    total += options.budgets[1].basePrice;
    total += options.budgets[1].pagePrice * nbPages;
    setProcessing(true);

    setTimeout(() => {
      setPrice(total);
      setProcessing(false);
    }, 1000);
  }, [clientType, nbPages]);

  return (
    <>
      <Head>
        <title>Création de site internet | Pierre G.</title>
        <meta
          property="og:title"
          content="Création de site internet | Pierre G."
        />
        <meta
          name="description"
          content="Obtenez un devis immédiat pour la création de votre site internet, adapté à vos besoins."
        />
        <meta
          property="og:description"
          content="Obtenez un devis immédiat pour la création de votre site internet, adapté à vos besoins."
        />
        <meta
          name="twitter:description"
          content="Obtenez un devis immédiat pour la création de votre site internet, adapté à vos besoins."
        />
        <meta
          property="og:url"
          content={
            'https://www.creation-sites-godino.fr/offres/creation-site-internet'
          }
        />
        <link
          rel="canonical"
          href={
            'https://www.creation-sites-godino.fr/offres/creation-site-internet'
          }
        />
      </Head>
      <MainContainer>
        {background}
        <header>
          {' '}
          <div className="title-wrapper">
            {' '}
            <Lottie
              options={{ ...defaultOptions, animationData: COMPUTER }}
              width={'130px'}
              style={{ margin: 0 }}
              // ref={ComputerIconRef}
            />
            <h1>Faire un site vitrine</h1>
          </div>
          <p id="subtitle">
            Faire un site vitrine est probablement{' '}
            <strong>le meilleur rapport qualité / prix</strong> en termes de
            publicité pour une entreprise.
          </p>
          <a href="#simulator">
            Aller vers l'outil d'estimation en ligne <ArrowForwardIosIcon />
          </a>
          <h2>Pourquoi ?</h2>
          <ul>
            <li>
              <img src="/icons/chercher.png" alt="google" loading="lazy" />
              <h3>Positionnement</h3>
              <p>
                Avoir un <strong>site internet</strong> est un avantage non
                négligeable en ce qui concerne le référencement. Ce dernier
                permettra au travers de son contenu, d'indiquer précisément à
                Google sur quelles recherches apparaître.
              </p>
            </li>
            <li>
              <img src="/icons/qualite.png" alt="qualité" loading="lazy" />
              <h3>Professionnalisme</h3>
              <p>
                Un <strong>site internet</strong> est un gage de sérieux pour
                une entreprise, s'il est <strong>bien pensé</strong>, et{' '}
                <strong>accessible</strong> (Tous mes sites le sont), il
                renverra <strong>une bonne image</strong> de votre entreprise,
                ce qui peut faire pencher la balance.
              </p>
            </li>
            <li>
              <img src="/icons/loupe.png" alt="loupe" loading="lazy" />
              <h3>Information</h3>
              <p>
                Que ce soit pour <strong>détailler les prestations</strong>,{' '}
                <strong>présenter l'équipe</strong> ou donner des informations
                complémentaires qui ne passent pas dans une brochure, un{' '}
                <strong>site internet</strong> est l'endroit idéal pour{' '}
                <strong>renseigner les clients</strong> qui ne savent pas encore
                vers quelle entreprise se tourner.
              </p>
            </li>
            <li>
              <img
                src="/icons/investissement.png"
                alt="investissement"
                loading="lazy"
              />
              <h3>Long-terme</h3>
              <p>
                L'utilisation d'<strong>Internet</strong> ne cessant de croître
                au fil des années, un <strong>site internet</strong> attirera du{' '}
                <strong>traffic en continu</strong>, même plusieurs années après
                l'avoir mis en ligne.{' '}
              </p>
            </li>
          </ul>
        </header>

        <hr />

        <main className="buttons-group" id="simulator">
          <div className="title-wrapper">
            <EuroIcon />
            <h2>Estimer mon site vitrine</h2>
          </div>
          <section>
            <h3>Type de profession</h3>
            <div className="buttons-row">
              <select
                name=""
                id=""
                value={clientType}
                onChange={(e) => setClientType(e.target.value as ClientType)}>
                <option value="">Sélectionnez un secteur d'activité</option>
                <option value="Artisan (plombiers, électriciens, maçons, etc.)">
                  Artisan (plombiers, électriciens, maçons, etc.)
                </option>
                <option value="Restaurateur">Restaurateur</option>
                <option value="Commerçant de proximité">
                  Commerçant de proximité
                </option>
                <option value="Secteur du bien-être (coachs, thérapeutes, salles de sport, etc.)">
                  Secteur du bien-être (coachs, thérapeutes, salles de sport,
                  etc.)
                </option>
                <option value="Profession libérale (avocats, consultants, médecins, etc.)">
                  Profession libérale (avocats, consultants, médecins, etc.)
                </option>
                <option value="Entreprise de services B2B">
                  Entreprise de services B2B
                </option>
                <option value="Immobilier (agences, promoteurs)">
                  Immobilier (agences, promoteurs)
                </option>
              </select>
            </div>
          </section>

          <section className={`${clientType ? '' : 'disabled'}`}>
            <h3>Nombre de pages</h3>
            <div className="buttons-row">
              <input
                disabled={clientType ? false : true}
                type="number"
                className="nbPages-input"
                value={nbPages}
                onChange={handleNbPagesChange}
              />
            </div>
          </section>

          <section className={`${nbPages ? '' : 'disabled'}`}>
            <div className="buttons-row">
              <button
                className="budget-button"
                disabled={!nbPages || !clientType}
                onClick={processPrice}>
                {processing ? (
                  <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                ) : (
                  'Calculer'
                )}
              </button>
            </div>
          </section>

          <section id="result_section" style={{ opacity: price ? 1 : 0 }}>
            <h3>
              Estimation: <span>{price} €</span>
            </h3>

            <p>
              <em>
                <strong>Le prix affiché</strong> représente une{' '}
                <strong>estimation rapide</strong> de la création d'un site
                vitrine <strong>sans fonctionnalités supplémentaires</strong>{' '}
                (réservation en ligne, intégration de services tiers... etc.) .{' '}
                <br />
                Pour le prix définitif, veuillez{' '}
                <CustomLink href={'/contact'}>prendre contact</CustomLink>.
              </em>
            </p>
          </section>

          <section
            id="professions_infos_wrapper"
            style={{ opacity: price ? 1 : 0 }}>
            <div
              className="profession-infos"
              style={{
                opacity:
                  clientType ===
                  'Artisan (plombiers, électriciens, maçons, etc.)'
                    ? 1
                    : 0,
              }}>
              <p>
                Un <strong>site vitrine</strong> bien <strong>optimisé</strong>{' '}
                permet d’<strong>attirer des clients locaux</strong> en
                facilitant la
                <strong> prise de contact</strong> et la{' '}
                <strong>demande de devis</strong>. Combiné à un{' '}
                <strong>bon référencement</strong> et une{' '}
                <strong>présence sur Google My Business</strong>, il devient un
                outil <strong>efficace</strong> pour générer des{' '}
                <strong>chantiers</strong> réguliers.
              </p>
            </div>

            <div
              className="profession-infos"
              style={{ opacity: clientType === 'Restaurateur' ? 1 : 0 }}>
              <p>
                Un <strong>site vitrine</strong> permet de présenter le{' '}
                <strong>menu</strong>, les <strong>horaires</strong>, et
                d’intégrer des <strong>outils de réservation en ligne</strong>.
                Il améliore la <strong>visibilité sur Google</strong> et{' '}
                <strong>rassure</strong> les clients, surtout lorsqu’il est
                couplé aux <strong>réseaux sociaux</strong> et aux{' '}
                <strong>plateformes d’avis</strong>.
              </p>
            </div>

            <div
              className="profession-infos"
              style={{
                opacity: clientType === 'Commerçant de proximité' ? 1 : 0,
              }}>
              <p>
                Un <strong>site vitrine</strong> renforce la{' '}
                <strong>notoriété locale</strong>, permet d’
                <strong>annoncer des promotions</strong> et facilite la{' '}
                <strong>fidélisation</strong>. Il peut être combiné avec une{' '}
                <strong>stratégie de référencement local</strong> et des{' '}
                <strong>campagnes sur les réseaux sociaux</strong> pour attirer
                plus de <strong>clients en boutique</strong>.
              </p>
            </div>

            <div
              className="profession-infos"
              style={{
                opacity:
                  clientType ===
                  'Secteur du bien-être (coachs, thérapeutes, salles de sport, etc.)'
                    ? 1
                    : 0,
              }}>
              <p>
                Un <strong>site web</strong> apporte{' '}
                <strong>crédibilité</strong> et{' '}
                <strong>professionnalisme</strong>. Il facilite la{' '}
                <strong>prise de rendez-vous</strong> et améliore la{' '}
                <strong>visibilité sur Google</strong>. Un{' '}
                <strong>bon référencement local</strong> et des{' '}
                <strong>avis clients positifs</strong> peuvent considérablement{' '}
                <strong>augmenter le nombre de contacts entrants</strong>.
              </p>
            </div>

            <div
              className="profession-infos"
              style={{
                opacity:
                  clientType ===
                  'Profession libérale (avocats, consultants, médecins, etc.)'
                    ? 1
                    : 0,
              }}>
              <p>
                Une <strong>présence en ligne</strong> bien structurée{' '}
                <strong>rassure</strong> les prospects et permet d’{' '}
                <strong>attirer de nouveaux clients</strong>. Un{' '}
                <strong>site vitrine</strong> avec des{' '}
                <strong>études de cas</strong>, des <strong>témoignages</strong>{' '}
                et du <strong>contenu spécialisé</strong> renforce l’
                <strong>image d’expertise</strong> et génère des{' '}
                <strong>leads qualifiés</strong>.
              </p>
            </div>

            <div
              className="profession-infos"
              style={{
                opacity: clientType === 'Entreprise de services B2B' ? 1 : 0,
              }}>
              <p>
                Un <strong>site web</strong> permet de mettre en avant des{' '}
                <strong>biens et services</strong>, de{' '}
                <strong>capter des acheteurs et vendeurs</strong>, et de{' '}
                <strong>faciliter la prise de rendez-vous</strong>. Avec un{' '}
                <strong>bon référencement</strong> et un{' '}
                <strong>contenu pertinent</strong>, il devient un{' '}
                <strong>atout majeur</strong> face à la concurrence.
              </p>
            </div>

            <div
              className="profession-infos"
              style={{
                opacity:
                  clientType === 'Immobilier (agences, promoteurs)' ? 1 : 0,
              }}>
              <p>
                Un <strong>site web</strong> aide à <strong>rassurer</strong> et{' '}
                <strong>attirer de nouveaux clients</strong> en mettant en avant
                les <strong>services</strong>, les <strong>témoignages</strong>{' '}
                et les <strong>possibilités de réservation en ligne</strong>.
                Associé aux <strong>réseaux sociaux</strong> et à un{' '}
                <strong>bon référencement</strong>, il devient une{' '}
                <strong>source constante de nouveaux prospects</strong>.
              </p>
            </div>
          </section>

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
        </main>

        <footer>
          <div className="title-wrapper">
            <img src="/icons/info.png" alt="infos" loading="lazy" />
            <h2>De quoi se compose la prestation ?</h2>
          </div>

          <section>
            <div>
              <img
                src="/undraw/handshake.svg"
                alt="poignée de mains"
                loading="lazy"
              />
            </div>
            <div>
              <h3>Je m'occupe de tout</h3>
              <p>
                <strong>
                  De la conception à la mise en ligne, je prends tout en charge
                </strong>
                , tout en vous impliquant dans les étapes clés du projet si vous
                le souhaitez :
              </p>
              <ul>
                <li>
                  - <strong>Choix du design</strong>
                </li>
                <li>
                  - <strong>Relecture</strong>
                </li>
                <li>
                  - <strong>Validation des images</strong>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <div>
              <h3>Compatibilité</h3>
              <p>
                De nos jours, les petits écrans représentent{' '}
                <strong>82% des visites totales</strong> sur le net. <br />
                <strong>
                  Tous mes sites sont donc évidemment compatibles pour les
                  smartphones et tablettes
                </strong>
                .
              </p>
            </div>
            <div>
              <img
                src="/undraw/responsive.svg"
                alt="responsive"
                loading="lazy"
              />
            </div>
          </section>

          <section>
            <div>
              <img src="/undraw/design.svg" alt="design" loading="lazy" />
            </div>
            <div>
              <h3>Création du design</h3>
              <p>
                Si vous souhaitez un design basé sur des thèmes existants, je
                l'adapterai à vos besoin et en fonctions de votre logo. <br />
                Si vous souhaitez une <strong>apparence sur-mesure</strong> pour
                votre site internet, je ferai appel à des professionnels pour un
                résutat <strong>unique et de qualité</strong>.
              </p>
            </div>
          </section>

          <section>
            <div>
              <h3>Création du site</h3>
              <p>
                Je créé votre site de A à Z,{' '}
                <strong>en fonction de vos besoins</strong>. <br />
                Petit ou gros budget,{' '}
                <strong>tous mes produits sont soignés</strong> et{' '}
                <strong>correspondent aux exigeances du net moderne</strong>.
              </p>
            </div>
            <div>
              <img src="/undraw/coding.svg" alt="coding" loading="lazy" />
            </div>
          </section>

          <section>
            <div>
              <img src="/undraw/seo.svg" alt="search" loading="lazy" />
            </div>
            <div>
              <h3>Optimisation pour Google</h3>
              <p>
                Au delà de l'écriture du contenu, le site sera pensé pour être
                compréhensible aussi bien aux visiteurs qu'aux{' '}
                <strong>moteurs de recherche</strong>, vous donnant un{' '}
                <strong>avantage</strong> sur le référencement.
              </p>
            </div>
          </section>

          <section>
            <div>
              <h3>Mise en ligne</h3>
              <p>
                Je m'occupe du <strong>déploiement</strong> sur le net de votre
                site afin qu'il soit{' '}
                <strong>accessible à tous et de partout</strong>.
              </p>
            </div>
            <div>
              <img src="/undraw/internet.svg" alt="search" loading="lazy" />
            </div>
          </section>
        </footer>
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
    </>
  );
};

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Montserrat';
  align-items: center;
  position: relative;
  padding: 120px 30px;

  * {
    font-family: 'Montserrat';
    color: #fafafa;
  }

  p {
    @media (max-width: 450px) {
      font-size: 0.8rem;
    }
  }

  h2 {
    @media (max-width: 450px) {
      font-size: 1.5rem !important;
    }
  }

  h3 {
    @media (max-width: 450px) {
      font-size: 1.1rem !important;
    }
  }

  .title-wrapper {
    img {
      @media (max-width: 450px) {
        width: 40px !important;
      }
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  strong {
    text-shadow: 0px 0px 5px 3px rgba(255, 255, 255, 0.05);
  }

  header {
    z-index: 1;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    div.title-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 15px;
      margin-bottom: 20px;
      * {
        cursor: auto !important;
      }
      h1 {
        font-family: "Bebas Neue", serif;
        letter-spacing: 1px;
        font-size: 3.5rem;

        @media (max-width: 450px) {
          font-size: 2.5rem;
        }
      }
    }

    #subtitle {
      font-size: 1.1rem;
      margin-bottom: 15px;
    }

    & > a {
      margin-bottom: 100px;
      text-decoration: underline;
      font-size: 1.2rem;
      font-weight: bold;

      svg {
        font-size: 2rem;
        path {
          color: rgba(52, 152, 219, 1) !important;
        }
      }
    }

    h2 {
      font-size: 2.5rem;
      font-weight: bold;
      margin-bottom: 50px;

      @media (max-width: 450px) {
        font-size: 1.7rem;
      }
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 15px;
      width: 100%;

      li {
        flex: 1;
        width: 40%;
        min-width: 300px;
        max-width: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 50px;
        padding: 15px;

        img {
          width: 100px;
          height: 100px;
          object-fit: contain;

          @media (max-width: 450px) {
            width: 65px;
            height: 65px;
          }
        }

        h3 {
          font-weight: bold;
          font-size: 1.2rem;
          height: 60px;
          text-align: center;
          margin: 15px 0;
        }

        p {
          font-size: 0.9rem;
          font-weight: 500;
          text-align: justify;
        }
      }
    }
  }

  hr {
    border: 1px solid rgba(255, 255, 255, 0.7);
    box-shadow: 0px 0px 5px 3px rgba(255, 255, 255, 0.05);
    width: 50%;
    margin-top: 50px;
    margin-bottom: 100px;
  }

  main {
    width: 100%;
    z-index: 1;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title-wrapper {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 50px;

      img {
        width: 50px;
        filter: grayscale(0.3);
      }

      svg {
        font-size: 4rem;
        filter: drop-shadow(0px 0px 5px rgba(52, 152, 219, 0.4));

        path {
          color: rgba(52, 152, 219, 1);
        }
      }
      h2 {
        font-size: 2.5rem;
        font-weight: bold;
        letter-spacing: 1px;

        @media (max-width: 450px) {
          font-size: 1.7rem;
        }
      }
    }

    section {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;
      margin-bottom: 50px;
      transition: 0.2s;

      &.disabled {
        opacity: 0.2;
        filter: grayscale(1);
      }

      &#result_section {
        margin-bottom: 15px;
        h3 {
          padding: 10px 15px;
          font-weight: normal;
          font-size: 1.9rem;
          margin: 0;
          width: fit-content;
          transition: 1s 0.2s;

          span {
            display: inline-block;
            font-weight: bold;
            background: #71b73c;
            padding: 5px 10px;
            border-radius: 5px;
            color: #214207;
            transition: 1s 0.5s;
          }
        }

        em {
          a {
            text-decoration: underline;
            font-weight: bold;
          }

          strong {
            color: rgba(52, 152, 219, 1);
            text-shadow: 0 0 5px rgba(52, 152, 219, 0.3);
          }
        }
      }

      &#professions_infos_wrapper {
        position: relative;
        height: 100px;
        width: 1200px;
        max-width: 100vw;

        @media (max-width: 500px) {
          height: 150px;
        }

        .profession-infos {
          text-align: center;
          position: absolute;
          top: 0;
          left: 0;
          padding: 0 50px;
          width: 100%;
          height: 100%;
          transition: 1s;
          transition-delay: 1s;

          p {
            strong {
              color: rgba(52, 152, 219, 1);
              text-shadow: 0 0 5px rgba(52, 152, 219, 0.3);
            }
          }
        }
      }

      h3 {
        width: fit-content;
        position: relative;
        font-size: 1.2rem;
        font-weight: bold;
        margin-bottom: 25px;

        svg {
          font-size: 1.2rem;
          position: absolute;
          top: -5px;
          right: -22px;
        }
      }

      .buttons-row {
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 25px;

        @media (max-width: 450px) {
          flex-direction: column;
          button {
            display: flex;
            justify-content: center;
          }

          input {
            width: 100% !important;
          }
        }

        select {
          background: #2d343655;
          padding: 15px;
          border-radius: 5px;
          font-weight: 600;

          option {
            font-family: 'Montserrat';
            color: #373737;
            background: #fafafa;
          }
        }

        input {
          background: #2d343655;
          padding: 15px;
          font-weight: bold;
          width: 100px;
          border-radius: 5px;
          font-size: 1.5rem;

          -moz-appearance: textfield;
          &::-webkit-inner-spin-button,
          &::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
        }

        button {
          position: relative;
          display: flex;
          align-items: center;
          padding: 15px 30px;
          gap: 5px;
          background: #2d343655;
          border-radius: 5px;
          font-weight: bold;
          border: 2px solid transparent;

          &.budget-button {
            height: 60px;
            width: 150px;
            justify-content: center;
          }

          &.selected {
            border: 2px solid #71b73c;
          }

          &.default {
            border: 2px solid dodgerblue;
          }

          &.disabled {
            opacity: 0.5;
            filter: grayscale(1);
          }

          &:disabled {
            cursor: auto;
          }
        }
      }
    }
  }

  footer {
    z-index: 1;
    .title-wrapper {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 50px;

      img {
        width: 50px;
        filter: grayscale(0.3);
      }

      h2 {
        font-size: 2.5rem;
        font-weight: bold;
        letter-spacing: 1px;

        @media (max-width: 450px) {
          font-size: 1.3rem;
        }
      }
    }

    section {
      display: flex;
      justify-content: center;
      width: 100%;
      max-width: 1000px;
      margin: 100px 0;
      gap: 25px;
      flex-wrap: wrap;

      & > div {
        width: 100%;
        max-width: 400px;
        text-align: justify;
        display: flex;
        flex-direction: column;

        h3 {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 10px;
          color: #59b6f5;
          text-shadow: 0 0 5px rgba(52, 152, 219, 0.1);

          @media (max-width: 450px) {
            font-size: 1.1rem;
          }
        }

        p {
          width: 100%;

          strong {
            color: rgba(52, 152, 219, 1);
            /* text-shadow: 0 0 5px rgba(52, 152, 219, 0.3); */
          }
        }

        img {
          align-self: center;
          height: 200px;

          @media (max-width: 450px) {
            height: 130px;
          }
        }

        &:has(img) {
          @media (max-width: 886px) {
            order: 3;
          }
        }
      }
    }
  }

  div.contact-links {
    display: flex;
    gap: 15px;
    /* margin-top: 50px; */

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
          path {
            color: rgba(41, 128, 185, 1);
          }
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
          path {
            color: rgb(46, 204, 113);
          }
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

  .lds-ring,
  .lds-ring div {
    box-sizing: border-box;
  }

  .lds-ring {
    display: inline-block;
    position: relative;
    width: 40px; /* Taille réduite de moitié */
    height: 40px; /* Taille réduite de moitié */
  }

  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 32px; /* Taille réduite de moitié */
    height: 32px; /* Taille réduite de moitié */
    margin: 4px; /* Réduit la marge proportionnellement */
    border: 4px solid currentColor; /* Réduit l'épaisseur de la bordure */
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: currentColor transparent transparent transparent;
  }

  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }

  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }

  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Vitrine;
