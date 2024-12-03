import React, {
  useCallback,
  useContext,
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
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import ShareIcon from '@mui/icons-material/Share';
import { BackgroundContext } from '../src/contexts/Contexts';

const networks = [
  {
    name: 'GitHub',
    imgUrl: '/res/GITHUB_LOGO.png',
    className: 'github',
    link: 'https://www.github.com/pierreG-dev',
  },
  {
    name: 'Malt',
    imgUrl: '/res/MALT_LOGO.png',
    className: 'malt',
    link: 'https://www.malt.fr/profile/pierregodino',
  },
  {
    name: 'LinkedIn',
    imgUrl: '/res/LINKEDIN_LOGO.png',
    className: 'linkedin',
    link: 'https://www.linkedin.com/in/pierre-godino-50b503186',
  },
  {
    name: 'Synthèse',
    imgUrl: '/res/CV_LOGO.png',
    className: 'cv',
    link: 'https://www.pierre-godino.com/about/curiculum',
  },
];

const Contact: NextPage = () => {
  // --- Background
  const { background } = useContext(BackgroundContext);

  const [buttonAnimationActive, setButtonAnimationActive] = useState('idle');
  const [nameInput, setNameInput] = useState('');
  const [messageInput, setMessageInput] = useState('');

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
        console.info('Request successfully sent');
      })
      .catch((err) => console.error(err));

    setTimeout(() => {
      clearInputs();
      setButtonAnimationActive('finished');
    }, 1200);
  }, [messageInput, nameInput]);

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
  }, []);

  return (
    <MainContainer>
      {metaContentGenerator}
      {background}
      <div id="satelite_container">
        <img src="/res/satelite.png" alt="Satellite" className="satelite" />
      </div>
      <div id="content-container">
        <div id="left">
          <section id="contact">
            <div id="text">
              <h2>
                <ContactPhoneIcon />
                Coordonnées
              </h2>
              <ul>
                <li id="name">
                  <PersonIcon />
                  Pierre GODINO
                </li>
                <li id="phone_link">
                  <CallIcon />
                  <a href="tel:+33767249980">+33 7 67 24 99 80</a>
                </li>
                <li id="mail_link">
                  <EmailIcon />
                  <a href="mailto:contact@pierre-godino.com">
                    contact@pierre-godino.com
                  </a>
                </li>
              </ul>
              <hr />
              <div className="flex" id="location">
                <LocationOnIcon />
                <ul>
                  <li>Toulouse, Agen </li>
                  <li>France</li>
                </ul>
              </div>
            </div>
            <div id="map">
              <img src="/res/france-map.png" alt="france vue depuis l'espace" />
              <div className="pin bounce"></div>
              <div className="pulse"></div>
            </div>
          </section>

          <section id="message">
            <h2>
              <SpeakerNotesIcon />
              Me contacter
            </h2>
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
            <h2>
              <ShareIcon />
              Réseaux
            </h2>
            <ul id="networks_list">
              {networks.map((elem, key) => {
                return (
                  <li className={`network-card ${elem.className}`}>
                    <a
                      key={key}
                      href={elem.link}
                      target="_blank"
                      rel="noreferrer">
                      <div>
                        <h3>{elem.name}</h3>
                        <img
                          src={`${elem.imgUrl}`}
                          alt={`Logo de la plateforme ${elem.name}`}
                        />
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
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

  #content-container {
    display: flex;
    height: fit-content;
    flex-wrap: wrap;
    width: 100%;
    gap: 25px;
    padding: 50px;

    #left {
      width: 60%;
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
      gap: 25px;
      box-sizing: border-box;
      display: flex;

      @media (max-width: 1552px) {
        width: 100%;
      }
    }
  }

  section {
    z-index: 1;
    padding: 20px 50px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    box-shadow: 0 0px 7px rgba(255, 255, 255, 0.3),
      inset 0 0px 7px rgba(255, 255, 255, 0.3);
    // backdrop-filter: blur(1px);
    // -webkit-backdrop-filter: blur(1px);
    border: 1px solid rgba(255, 255, 255, 0.5);
    transition: 0.3s;
    color: rgba(255, 255, 255, 0.9);

    &:hover {
      background: rgba(255, 255, 255, 0.25);
    }

    @media (max-width: 450px) {
      padding: 10px 25px;
    }

    h2,
    h3 {
      text-transform: uppercase;
      letter-spacing: 3px;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      gap: 10px;
      text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
      transform: translateY(-5px);

      svg {
        color: rgb(46, 204, 113);
      }
    }

    &#contact {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: space-between;

      ul {
        display: flex;
        flex-direction: column;
        gap: 5px;

        li {
          display: flex;
          gap: 10px;

          &#name {
            svg {
              color: rgb(231, 76, 60);
            }
          }

          &#phone_link {
            a {
              color: #fafafa;
              background: rgba(255, 255, 255, 0.1);
              padding: 2px 5px;
              border-radius: 3px;
              letter-spacing: 1px;
              transition: 0.1s;

              &:hover {
                background: rgba(46, 204, 113, 0.4);
              }
            }

            svg {
              color: rgb(46, 204, 113);
            }
          }

          &#mail_link {
            a {
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

            svg {
              color: rgb(52, 152, 219);
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
        }
      }

      #location {
        svg {
          color: rgb(231, 76, 60) !important;
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
      flex-direction: column;

      @media (min-width: 1552px) {
        justify-content: center;
        padding-bottom: 30px;

        h2 {
          position: absolute;
          top: 20px;
        }
      }

      h2 {
        width: 100%;
      }

      ul#networks_list {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 15px;

        li.network-card {
          div {
            border-radius: 15px;
            padding: 30px;
            width: 200px;
            height: 200px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 15px;
            transition: 0.3s;
            background: rgba(255, 255, 255, 0.15);
            border: 1px solid rgba(255, 255, 255, 0.5);
            box-shadow: 0px 0px 7px 1px rgba(255, 255, 255, 0.1);

            h3 {
              font-family: 'Space Mono', monospace;
              font-size: 1.5rem;
            }

            img {
              flex-shrink: 0;
              width: 100px !important;
              height: 100px !important;
              object-fit: cover;
              filter: grayscale(0.3);
              transition: 0.3s;
            }

            img {
              /* filter: grayscale(0); */
            }
          }

          &.github div {
            &:hover {
              background: rgba(155, 89, 182, 0.3);
              border: 1px solid rgb(155, 89, 182);
              box-shadow: 0px 0px 7px 1px rgb(155, 89, 182);
            }
          }

          &.malt div {
            &:hover {
              background: rgba(213, 85, 105, 0.3);
              border: 1px solid rgb(213, 85, 105);
              box-shadow: 0px 0px 7px 1px rgb(213, 85, 105);
            }
          }

          &.linkedin div {
            &:hover {
              background: rgba(29, 113, 156, 0.3);
              border: 1px solid rgb(29, 113, 156);
              box-shadow: 0px 0px 7px 1px rgb(29, 113, 156);
            }
          }

          &.cv div {
            &:hover {
              background: rgba(135, 36, 30, 0.3);
              border: 1px solid rgb(135, 36, 30);
              box-shadow: 0px 0px 7px 1px rgb(135, 36, 30);
            }
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

    hr {
      border-color: rgba(255, 255, 255, 0.4);
      margin: 15px 0px;
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
    border: none;
    border-radius: 0.3125rem;
    font-family: 'Space Mono', monospace;
    letter-spacing: 2px;
    font-size: 1.1rem;
    color: white;
    border: 2px solid rgba(41, 128, 185, 0.6);
    background-color: rgba(41, 128, 185, 0.4);
    box-shadow: 0px 0px 5px 7px rgba(41, 128, 185, 0.1);
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
    border: 2px solid rgba(41, 128, 185, 0.6);
    background-color: rgba(41, 128, 185, 0.4);
    box-shadow: 0px 0px 5px 7px rgba(41, 128, 185, 0.1);

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
    border: 2px solid rgba(39, 174, 96, 0.6);
    background-color: rgba(39, 174, 96, 0.4);
    box-shadow: 0px 0px 5px 7px rgba(39, 174, 96, 0.1);

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
    0% {
      transform: rotate3d(0, 0, 1, 0deg);
    }
    100% {
      transform: rotate3d(0, 0, 1, -180deg);
    }
  }

  @keyframes scale {
    0% {
      transform: scale3d(10, 10, 1);
    }
    50% {
      transform: scale3d(0.2, 0.2, 1);
    }
    70% {
      transform: scale3d(1.2, 1.2, 1);
    }
    90% {
      transform: scale3d(0.7, 0.7, 1);
    }
    100% {
      transform: scale3d(1, 1, 1);
    }
  }
`;

export default Contact;
