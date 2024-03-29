import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import CachedIcon from '@mui/icons-material/Cached';
import DoneIcon from '@mui/icons-material/Done';
import Head from 'next/head';
import { useRouter } from 'next/router';

const networks = [
  {
    name: 'GitHub',
    link: 'https://www.github.com/pierreG-dev',
  },
  {
    name: 'Malt',
    link: 'https://www.malt.fr/profile/pierregodino',
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/pierre-godino-50b503186',
  },
  {
    name: 'CV',
    link: 'https://www.pierre-godino.com/about/curiculum',
  },
];

const Contact: NextPage = () => {
  const [buttonAnimationActive, setButtonAnimationActive] = useState('idle');
  const [nameInput, setNameInput] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const starsArray = useRef<JSX.Element[]>();

  const handleNameInputChange = useCallback((e) => {
    setNameInput(e.target.value);
  }, []);
  const handleMessageInputChange = useCallback((e) => {
    setMessageInput(e.target.value);
  }, []);
  const clearInputs = useCallback(() => {
    setNameInput('');
    setMessageInput('');
  }, []);
  const handleButtonAnimation = useCallback(() => {
    setButtonAnimationActive('active');

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/newRequest`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: nameInput,
        message: messageInput,
      }),
    })
      .then(() => {
        console.log('Request successfully sent');
      })
      .catch((err) => console.error(err));

    setTimeout(() => {
      clearInputs();
      setButtonAnimationActive('finished');
    }, 1200);
  }, [messageInput, nameInput]);

  //Générateur d'étoiles
  const starsGenerator = useCallback(() => {
    const myStars: Array<JSX.Element> = [];
    for (let i = 0; i < 200; ++i) {
      const size = Math.ceil(Math.random() * 3) + 'px';

      myStars.push(
        <div
          className="star"
          key={i}
          style={{
            width: size,
            height: size,
            top: Math.floor(Math.random() * 100) + '%',
            left: Math.floor(Math.random() * 100) + '%',
            animationDelay: Math.floor(Math.random() * 500) + 's',
          }}></div>
      );
    }
    return myStars;
  }, []);

  useEffect(() => {
    starsArray.current = starsGenerator();
  }, [starsGenerator]);

  const router = useRouter();
  const metaContentGenerator = useMemo(() => {
    const metaData = {
      title: 'Contact',
      description:
        'Créateur de sites Internet, développeur WEB freelance et formateur | Mes coordonnées',
      ogUrl: 'https://pierre-godino.com/contact',
    };

    return (
      <Head>
        <title>{'Pierre | ' + metaData.title}</title>
        <meta name="description" content={metaData.description} />
        <meta
          property="og:title"
          content={'Pierre GODINO | ' + metaData.title}
        />
        <meta property="og:url" content={metaData.ogUrl} />
        <meta property="og:description" content={metaData.description} />
      </Head>
    );
  }, [router.pathname]);

  return (
    <MainContainer>
      {metaContentGenerator}
      <div id="stars-container">{starsArray.current}</div>
      <div id="satelite_container">
        <img src="/res/satelite.png" alt="Satellite" className="satelite" />
      </div>
      <div id="content-container">
        <div id="left">
          <section id="contact">
            <div id="text">
              <h2>Coordonnées</h2>
              <ul>
                <li>Pierre GODINO</li>
                <li>
                  <a id="phone_link" href="tel:+33767249980">
                    +33 7 67 24 99 80
                  </a>
                </li>
                <li>
                  <a id="mail_link" href="mailto:contact@pierre-godino.com">
                    contact@pierre-godino.com
                  </a>
                </li>
              </ul>
              <hr />
              <ul>
                <li>Toulouse, Agen, </li>
                <li>France</li>
              </ul>
            </div>
            <div id="map">
              <img src="/res/france-map.png" alt="france vue depuis l'espace" />
              <div className="pin bounce"></div>
              <div className="pulse"></div>
            </div>
          </section>

          <section id="message">
            <h2>Me contacter</h2>
            <input
              type="text"
              name=""
              id=""
              placeholder="Nom"
              value={nameInput}
              onChange={handleNameInputChange}
            />
            <textarea
              name=""
              id=""
              cols={30}
              rows={5}
              placeholder="Requête"
              value={messageInput}
              onChange={handleMessageInputChange}></textarea>
            <button
              onClick={handleButtonAnimation}
              className={
                buttonAnimationActive === 'active'
                  ? 'active'
                  : buttonAnimationActive === 'finished'
                  ? 'finished'
                  : buttonAnimationActive === 'idle' && ''
              }>
              <span className="submit">Soumettre</span>
              <span className="loading">
                <CachedIcon />
              </span>
              <span className="check">
                <DoneIcon />
              </span>
            </button>
          </section>
        </div>

        <div id="right">
          <section id="networks">
            <h2>Réseaux</h2>
            {networks.map((elem, key) => {
              return (
                <a key={key} href={elem.link} target="_blank" rel="noreferrer">
                  <div className="network-card">
                    <h3>{elem.name}</h3>
                    <img
                      src={`/res/${elem.name.toUpperCase()}_LOGO.png`}
                      alt={`Logo de la plateforme ${elem.name}`}
                    />
                  </div>
                </a>
              );
            })}
          </section>
        </div>
      </div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  padding-top: 10vh;
  background: #040e1d;
  min-height: 100vh;
  box-sizing: border-box;
  width: 100vw;
  scrollbar-color: #373737 transparent;
  scrollbar-width: thin;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  font-family: 'Montserrat';
  transition: 0.1s;
  position: relative;
  padding-bottom: 40px;

  h2 {
    font-family: 'Space Mono', monospace;
    font-size: 1.7rem;
  }

  #stars-container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  #content-container {
    display: flex;
    height: fit-content;
    flex-wrap: wrap;
    width: 100%;

    #left {
      width: 60%;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 25px;

      @media (max-width: 1552px) {
        width: 100%;
      }
    }

    #right {
      flex-grow: 1;
      flex-basis: 0;
      width: 40%;
      padding: 20px;
      gap: 25px;
      box-sizing: border-box;
      display: flex;

      @media (max-width: 1552px) {
        width: 100%;
      }
    }
  }

  section {
    padding: 20px 50px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 0px 7px rgba(255, 255, 255, 0.3),
      inset 0 0px 7px rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(1px);
    border: 1px solid rgba(255, 255, 255, 0.5);
    transition: 0.3s;
    color: rgba(255, 255, 255, 0.6);

    @media (max-width: 450px) {
      padding: 10px 25px;
    }

    h2,
    h3 {
      text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
    }

    &#contact {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: space-between;

      #phone_link {
        color: #fafafa;
        background: rgba(255, 255, 255, 0.1);
        padding: 2px 5px;
        border-radius: 3px;
        letter-spacing: 1px;
        transition: 0.1s;

        &:hover {
          background: rgba(104, 168, 82, 0.87);
        }
      }

      #mail_link {
        color: #fafafa;
        background: rgba(255, 255, 255, 0.1);
        padding: 2px 5px;
        border-radius: 3px;
        letter-spacing: 1px;
        transition: 0.1s;
        font-size: 0.9rem;

        &:hover {
          background: rgba(0, 125, 255, 0.8);
        }
      }

      #text {
        @media (max-width: 650px) {
          width: 100%;
        }

        ul {
          margin-left: 10px;
        }
      }

      #map {
        width: 216px;
        position: relative;

        img {
          opacity: 0.7;
          border-radius: 3px;
          height: 100%;
          object-fit: cover;
        }

        .pin {
          top: 73%;
          left: 49%;
          opacity: 0.7;
        }
        .pulse {
          top: 73%;
          left: 49%;
          opacity: 0.7;
        }

        @media (max-width: 650px) {
          display: none;
        }
      }
    }

    &#networks {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 15px;

      @media (max-width: 1552px) {
        padding-bottom: 30px;
      }

      h2 {
        width: 100%;
      }

      .network-card {
        border-radius: 15px;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        background: rgba(255, 255, 255, 0.2);
        padding: 30px;
        width: 200px;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 15px;
        transition: 0.3s;

        h3 {
          font-family: 'Space Mono', monospace;
          font-size: 1.5rem;
        }

        img {
          width: 100px;
          height: 100px;
          object-fit: cover;
          filter: grayscale(0.3);
          transition: 0.3s;
        }

        &:hover {
          transform: translate3d(0, -5px, 0);
          background: rgba(255, 255, 255, 0.25);
          box-shadow: 2px 7px 4px rgba(0, 0, 0, 0.3);

          img {
            filter: grayscale(0);
          }
        }
      }
    }

    &#message {
      width: 100%;
      height: fit-content;
      display: flex;
      flex-direction: column;
      gap: 5px;

      input,
      textarea {
        min-width: 200px;
        width: 60%;
        border-radius: 0.3125rem;
        background: rgba(255, 255, 255, 0.6);
        transition: 0.2s;
        color: rgba(0, 0, 0, 0.6);
        padding: 5px 20px;
        resize: none;
        margin-left: 10px;
      }

      input::placeholder,
      textarea::placeholder {
        color: rgba(0, 0, 0, 0.5);
        font-style: italic;
        font-weight: bold;
      }

      input:focus,
      textarea:focus {
        background: rgba(255, 255, 255, 0.8);
        color: rgba(0, 0, 0, 0.7);
      }

      button {
        margin-top: 5px;
        align-self: flex-start;
        margin-left: 10px;
      }
    }

    &:hover {
      transform: translate3d(0, -5px, 0);
      color: rgba(255, 255, 255, 0.9);
    }

    hr {
      border-color: rgba(255, 255, 255, 0.4);
      margin: 15px 0px;
    }
  }

  .star {
    background: #fafafa;
    z-index: 0;
    position: absolute;
    box-shadow: 0px 0px 5px 0px rgba(255, 255, 255, 0.9);
    animation: 6s star_glow infinite linear;
  }

  @keyframes star_glow {
    0% {
      transform: scale3d(1, 1, 1);
    }
    50% {
      transform: scale3d(2, 2, 1);
    }
    100% {
      transform: scale3d(1, 1, 1);
    }
  }

  #satelite_container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    overflow: hidden;
  }

  .satelite {
    position: absolute;
    width: 50px;
    animation: 40s satelite_animation linear infinite;
    filter: contrast(0.6);
  }

  @keyframes satelite_animation {
    0% {
      top: 150%;
      left: 150%;
      transform: rotate(50deg);
    }

    100% {
      top: -50%;
      left: 20%;
      transform: rotate(-180deg);
    }
  }

  /* BUTTON */

  // Breakpoints

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    outline: none;
  }

  body {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    // background-color:darken(#2c3e50, 4%);
  }

  .hide {
    display: none;
  }

  button {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 12.5rem;
    margin: 0;
    padding: 1.5rem 3.125rem;
    background-color: #3498db;
    border: none;
    border-radius: 0.3125rem;
    box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.2);
    font-family: 'Space Mono', monospace;
    letter-spacing: 2px;
    font-size: 1.1rem;
    color: white;
    font-weight: 300;
    text-transform: uppercase;
    overflow: hidden;

    &:before {
      position: absolute;
      content: '';
      bottom: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(230, 230, 230, 0.3);
    }

    span {
      position: absolute;
      line-height: 0;

      svg {
        transform-origin: center center;
        font-size: 2.6rem;
      }

      &:nth-of-type(1) {
        top: 50%;
        transform: translateY(-50%);
      }

      &:nth-of-type(2) {
        top: 100%;
        transform: translateY(0%);
        font-size: 24px;
      }

      &:nth-of-type(3) {
        display: none;
      }
    }
  }

  .active {
    background-color: #3498db;

    &:before {
      width: 100%;
      transition: width 1s cubic-bezier(1, -0.04, 0.87, 0.82);
    }

    span {
      &:nth-of-type(1) {
        top: -100%;
        transform: translateY(-50%);
      }

      &:nth-of-type(2) {
        top: 50%;
        transform: translateY(-50%);

        svg {
          animation: loading 500ms linear infinite;
        }
      }

      &:nth-of-type(3) {
        display: none;
      }
    }
  }

  .finished {
    background-color: #2ecc71;

    .submit {
      display: none;
    }

    .loading {
      display: none;
    }

    .check {
      display: block !important;
      font-size: 24px;
      animation: scale 0.5s linear;

      svg {
        transform-origin: center center;
        font-size: 2.6rem;
      }
    }
  }

  @keyframes loading {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes scale {
    0% {
      transform: scale(10);
    }
    50% {
      transform: scale(0.2);
    }
    70% {
      transform: scale(1.2);
    }
    90% {
      transform: scale(0.7);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export default Contact;
