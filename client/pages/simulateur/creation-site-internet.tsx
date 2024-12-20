import Head from 'next/head';
import {
  ChangeEvent,
  FC,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import styled from 'styled-components';
import { BackgroundContext } from '../../src/contexts/Contexts';
import dynamic from 'next/dynamic';
import COMPUTER from '../../src/components/Simulateur/Computer';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Title from '../../src/utilities/Title';
const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

const defaultOptions = {
  loop: false,
  autoplay: true, // Désactivé pour contrôle manuel
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

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

type IBudget = undefined | 0 | 1 | 2;
type IDesignType = 0 | 1;
type IEditable = undefined | boolean;
type INbPages = number;
type IDeploy = undefined | boolean;

const Vitrine: FC = () => {
  // --- Choix du budget
  const [budgetIndex, setBudgetIndex] = useState<IBudget>();
  // --- Choix du type de design
  const [designType, setDesignType] = useState<IDesignType>();
  // --- CMS ou non
  const [editable, setEditable] = useState<IEditable>(undefined);
  // --- Nombre de pages
  const [nbPages, setNbPages] = useState<INbPages>(0);
  // --- Type de déploiement
  const [deployIndex, setDeployIndex] = useState<IDeploy>();

  // --- Visibilité du résultat
  const [showResult, setShowResult] = useState<boolean>(false);

  // --- background
  const { background } = useContext(BackgroundContext);

  const chooseBudget = useCallback((budget: IBudget) => {
    setBudgetIndex(budget);
    if (budget === 0) setDesignType(0);
    if (budget === 2) setDesignType(1);
  }, []);

  const chooseDesignType = useCallback(
    (design: IDesignType) => {
      if (budgetIndex === 0) setDesignType(0);
      if (budgetIndex === 2) setDesignType(1);
      setDesignType(design);
    },
    [budgetIndex]
  );

  const chooseEditable = useCallback((editable: IEditable) => {
    setEditable(editable);
  }, []);

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

  const handleShowResult = useCallback(() => {
    setShowResult(true);
  }, []);

  const price = useMemo(() => {
    if (
      budgetIndex === undefined ||
      designType === undefined ||
      editable === undefined ||
      !nbPages
    )
      return;
    let total = 0;

    // --- Ajout du prix de base (budget)
    total += options.budgets[budgetIndex].basePrice;

    // --- Ajout du prix en fonction du dynamisme
    if (editable) total += options.budgets[budgetIndex].modifiable;

    // --- Ajout du prix en fonction du nombre de pages et du type de design
    if (designType === 0) {
      total += options.budgets[budgetIndex].pagePrice * nbPages;
      total += options.budgets[budgetIndex].design.theme;
    } else if (designType === 1) {
      total += options.budgets[budgetIndex].pagePrice * nbPages;
      total += options.budgets[budgetIndex].design.customPerPage * nbPages;
    }

    return total;
  }, [budgetIndex, designType, editable, nbPages]);

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
          content="https://pierre-godino.com/simulateur/creation-site-internet"
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
            <img
              src="/icons/calculator.png"
              alt="calculatrice"
              loading="lazy"
            />
            <h2>Estimer mon site vitrine</h2>
          </div>

          <section>
            <Title
              content={
                // eslint-disable-next-line react/jsx-wrap-multilines
                <>
                  <p>
                    Le budget représente la quantité d'attention au détail qui
                    devra être allouée au projet. Plus le budget est élevé, plus
                    il sera complexe. <br />
                    <b>Ce paramètre impactera tous vos autres choix.</b>
                  </p>
                  <ul>
                    <li>
                      <strong>{options.budgets[0].name}</strong> : Une solution
                      simple et efficace, idéale pour les projets avec un budget
                      limité.
                    </li>
                    <li>
                      <strong>{options.budgets[1].name}</strong> : Un juste
                      milieu entre performance et coût, offrant un excellent
                      rapport qualité-prix.
                    </li>
                    <li>
                      <strong>{options.budgets[2].name}</strong> : Une
                      expérience haut de gamme avec des fonctionnalités avancées
                      et une attention au détail.{' '}
                      <b>
                        <i>Codé à la main</i>
                      </b>{' '}
                      |{' '}
                      <b>
                        <i>Design sur-mesure inclus.</i>
                      </b>
                    </li>
                  </ul>
                </>
              }>
              <h3>
                Budget
                <HelpOutlineIcon />
              </h3>
            </Title>
            <div className="buttons-row">
              <button
                className={`budget-button ${
                  budgetIndex !== undefined && budgetIndex !== 0 && 'disabled'
                } ${budgetIndex === 0 && 'selected'}`}
                onClick={() => chooseBudget(0)}>
                <u>{options.budgets[0].name}</u>
              </button>
              <button
                className={`budget-button ${
                  budgetIndex !== undefined && budgetIndex !== 1 && 'disabled'
                } ${budgetIndex === 1 && 'selected'}`}
                onClick={() => chooseBudget(1)}>
                <u>{options.budgets[1].name}</u>
              </button>
              <button
                className={`budget-button ${
                  budgetIndex !== undefined && budgetIndex !== 2 && 'disabled'
                } ${budgetIndex === 2 && 'selected'}`}
                onClick={() => chooseBudget(2)}>
                <u>{options.budgets[2].name}</u>
              </button>
            </div>
          </section>

          <section className={`${budgetIndex !== undefined ? '' : 'disabled'}`}>
            <h3>Graphisme</h3>
            <div className="buttons-row">
              <button
                disabled={budgetIndex === undefined || budgetIndex === 2}
                className={`budget-button ${
                  designType !== undefined && designType !== 0 && 'disabled'
                } ${designType === 0 && 'selected'} ${
                  budgetIndex === 0 && 'default'
                }`}
                onClick={() => chooseDesignType(0)}>
                Thème existant
              </button>
              <button
                disabled={budgetIndex === undefined || budgetIndex === 0}
                className={`budget-button ${
                  designType !== undefined && designType !== 1 && 'disabled'
                } ${designType === 1 && 'selected'} ${
                  budgetIndex === 2 && 'default'
                }`}
                onClick={() => chooseDesignType(1)}>
                Sur mesure
              </button>
            </div>
          </section>

          <section className={`${designType !== undefined ? '' : 'disabled'}`}>
            <Title
              content={
                // eslint-disable-next-line react/jsx-wrap-multilines
                <>
                  <ul>
                    <li>
                      <strong>Statique</strong> : Site internet au{' '}
                      <b>contenu fixe</b>, nécessitant une{' '}
                      <b>intervention technique</b> pour editer son contenu.
                    </li>
                    <li>
                      <strong>Modifiable</strong> : Site internet avec des
                      parties figées, mais dont <b>certaines</b> sont prévues
                      pour être <b>modifiées</b> à l'aide d'une <b>interface</b>
                      .
                    </li>
                  </ul>
                </>
              }>
              <h3>
                Site modifiable <HelpOutlineIcon />
              </h3>
            </Title>

            <div className="buttons-row">
              <button
                disabled={designType === undefined}
                className={`budget-button ${
                  editable !== undefined && editable !== false && 'disabled'
                } ${editable === false && 'selected'}`}
                onClick={() => chooseEditable(false)}>
                Statique
              </button>
              <button
                disabled={designType === undefined}
                className={`budget-button ${
                  editable !== undefined && editable !== true && 'disabled'
                } ${editable === true && 'selected'}`}
                onClick={() => chooseEditable(true)}>
                Modifiable
              </button>
            </div>
          </section>

          <section className={`${editable !== undefined ? '' : 'disabled'}`}>
            <h3>Nombre de pages</h3>
            <div className="buttons-row">
              <input
                disabled={editable === undefined}
                type="number"
                className="nbPages-input"
                value={nbPages}
                onChange={handleNbPagesChange}
              />
            </div>
          </section>

          <section className={`${nbPages && !showResult ? '' : 'disabled'}`}>
            <div className="buttons-row">
              <button
                className="budget-button"
                disabled={!nbPages || showResult}
                onClick={handleShowResult}>
                Calculer
              </button>
            </div>
          </section>

          <section id="result_section" style={{ opacity: showResult ? 1 : 0 }}>
            <h3>
              Estimation: <span>{price} €</span>
            </h3>

            <p>
              <i>
                <em>
                  L'estimation ne représente qu'un <b>aperçu</b> de la
                  prestation. <br />
                  Le prix variera en fonction de variables trop imprévisibles
                  pour une simulation précise. <br />
                  <small>
                    {
                      '(Délai de livraison, fonctionnalités supplémentaires... etc.)'
                    }
                  </small>
                </em>
              </i>
            </p>
          </section>
          <div className="cta-wrapper" style={{ opacity: showResult ? 1 : 0 }}>
            <a href="tel:+767249980">
              <button>
                <CallIcon />
                07 67 24 99 80
              </button>
            </a>
            <a href="mailto:contact@pierre-godino.com">
              <button>
                <EmailIcon />
                contact@pierre-godino.com
              </button>
            </a>
          </div>
        </main>

        <hr />

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
              <h3>Accompagnement</h3>
              <p>
                <strong>
                  Comptez sur moi pour vous accompagner du début à la fin
                </strong>
                , en vous impliquant si besoin dans les étapes clés du projet,
                telles que:
                <ul>
                  <li>
                    <strong>Choix du design</strong>
                  </li>
                  <li>
                    <strong>Relecture</strong>
                  </li>
                  <li>
                    <strong>Validation des images</strong>
                  </li>
                </ul>
              </p>
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
        <div className="cta-wrapper">
          <div className="title-wrapper">
            <img src="/icons/discuss.png" alt="discussion" loading="lazy" />
            <h2>Discutons de votre projet</h2>
          </div>
          <a href="tel:+767249980">
            <button>
              <CallIcon />
              07 67 24 99 80
            </button>
          </a>
          <a href="mailto:contact@pierre-godino.com">
            <button>
              <EmailIcon />
              contact@pierre-godino.com
            </button>
          </a>
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
        font-family: 'BebasNeue';
        letter-spacing: 1px;
        font-size: 3.5rem;

        @media (max-width: 450px) {
          font-size: 2.5rem;
        }
      }
    }

    #subtitle {
      font-size: 1%.1;
      margin-bottom: 100px;
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
        h3 {
          padding: 10px 15px;

          font-weight: normal;
          font-size: 1.9rem;
          margin: 0;
          width: fit-content;

          span {
            display: inline-block;
            font-weight: bold;
            background: #71b73c;
            padding: 5px 10px;
            border-radius: 5px;
            color: #214207;
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
          color: #73b0f7;

          @media (max-width: 450px) {
            font-size: 1.1rem;
          }
        }

        p {
          width: 100%;
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

  div.cta-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    z-index: 2;
    transition: 0.2s 0.2s;

    .title-wrapper {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 50px;

      img {
        width: 50px;
        filter: saturate(1.5);
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

    a {
      button {
        width: 100%;
        padding: 15px 20px;
        background: #55a1fa;
        color: #12355d;
        font-weight: bold;
        opacity: 0.8;
        border-radius: 5px;
        font-size: 2rem;

        svg {
          font-size: 2.5rem;
          margin-right: 5px;

          path {
            color: #12355d;
          }
        }

        &:hover {
          opacity: 1;
        }

        @media (max-width: 450px) {
          font-size: 1.2rem;

          svg {
            font-size: 1.2rem;
          }
        }
      }
    }
  }
`;

export default Vitrine;
