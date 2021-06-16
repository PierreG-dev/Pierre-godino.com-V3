import React from 'react';
import { AiOutlineDownload } from 'react-icons/ai';
import Layout from '../../src/components/Layout';
import styled from 'styled-components';
import { NextPage } from 'next';
import Experience from '../../src/components/Curiculum/Experience';

const Curiculum: NextPage = () => {
  return (
    <Layout variant={'about'}>
      <MainContainer>
        <img
          className={'background'}
          src="/res/curiculum-background.jpg"
          alt=""
        />
        <div
          style={{
            background: "url('/res/overlay.png')",
            height: '100%',
            width: '100%',
            position: 'absolute',
            opacity: 0.3,
            zIndex: -1,
          }}></div>
        <div
          className={
            'grid grid-cols-1 md:grid-cols-2 gap-4 p-6 max-w-6xl mx-auto my-auto'
          }>
          <InfosContainer>
            <div className="flex flex-col justify-between p-6 block md:hidden mb-7">
              <img className={'mb-7'} src="/res/LOGO.svg" alt="pierre godino" />
              <h1 style={{ color: '#fafafa' }}>
                Pierre <br />
                Godino
              </h1>
            </div>

            <section>
              <h2>Compétences</h2>

              <div className="flex justify-between">
                <div>
                  <h3 className={'text-center w-full'}>Informatique</h3>
                  <ul className={'text-sm'}>
                    <li>JavaScript</li>
                    <li>ReactJs | NextJs</li>
                    <li>HTML5 | CSS3</li>
                    <li>Cordova</li>
                    <li>React Native</li>
                  </ul>
                </div>

                <div>
                  <h3 className={'text-center w-full'}>Langues</h3>
                  <ul>
                    <li>Français natif</li>
                    <li>
                      Anglais professionnel <br />
                      (77/100 EF SET)
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section title={'Mes expériences'}>
              <h2>Experiences</h2>

              <Experience
                date={'Dec. 2020'}
                title={'Front-end React | Next'}
                subtitle={'Hackathon 60-Dozer'}
                note={'(1ère place)'}
                noteColor={'#ffbd59'}
              />

              <Experience
                date={'Août 2020'}
                title={'Full-stack PHP | Symfony'}
                subtitle={'SARL Garage BRINCAT'}
              />

              <Experience
                date={'Mars 2020'}
                title={'Full-stack Node | React'}
                subtitle={'Startup SpeedyNanie'}
              />
            </section>

            <section title={'Mes diplômes'}>
              <h2>Diplômes</h2>

              <Experience
                date={'2016'}
                title={'Baccalauréat Scientifique'}
                subtitle={'Lycée Jean de Prades, Castelsarrasin'}
              />

              <Experience
                date={'2019'}
                title={'Licence Informatique'}
                subtitle={'Université Paul Sabatier, Toulouse'}
              />

              <Experience
                date={'2020'}
                title={'Titre Développeur WEB/Mobile'}
                subtitle={'Digital Campus, Labège'}
              />
            </section>

            <section title={'Mon profil'}>
              <h2>Profil</h2>

              <p className={'text-sm'}>
                Passionné d'informatique depuis toujours, le développement ne
                dérogeant pas à la règle, je suis très impliqué dans les projets
                auxquels je prends part, spécialement quand il s'agît de
                travailler avec mes technologies favorites: <br />
                React.js & Node.js (MERN).
              </p>
            </section>
          </InfosContainer>

          <ContactContainer>
            <form
              method={'get'}
              action="/res/CV_FR.pdf"
              target={'_blank'}
              className={'w-full flex justify-end absolute'}
              style={{ top: 0, right: 0 }}>
              <button type={'submit'}>
                <span>Télécharger au format PDF </span> <AiOutlineDownload />
              </button>
            </form>

            <div className="flex flex-col justify-between p-6 hidden md:block">
              <img src="/res/LOGO.svg" alt="pierre godino" />
              <h1>
                Pierre <br />
                Godino
              </h1>
            </div>

            <div className={'w-full'}>
              <section title={'Mes coordonnées'}>
                <h2 className={'mb-3'}>Coordonnées</h2>

                <p className={'text-sm md:text-base'}>
                  Pierre GODINO <br />
                  <a href="tel:+33651710497">+33 6 51 71 04 97</a> <br />
                  <a
                    href={'mailto:pierregodino.contact@yahoo.com'}
                    className={'text-xs md:text-base'}>
                    pierregodino.contact@yahoo.com
                  </a>
                </p>

                <hr className={'opacity-50 m-3'} />

                <p className={'text-sm md:text-base mb-2'}>
                  Toulouse, Agen, <br />
                  France
                </p>

                <a
                  href={'www.pierre-godino.com'}
                  className={'text-sm md:text-base'}>
                  www.pierre-godino.com
                </a>
              </section>

              <section title={'Mes réseaux'}>
                <h2 className={'mb-4'}>Réseaux</h2>

                <div className={'w-full break-words mb-3'}>
                  <h3>Github</h3>
                  <a
                    href={'https://www.github.com/pierreG-dev'}
                    target={'_blank'}>
                    www.github.com/pierreG-dev
                  </a>
                </div>

                <div className={'w-full break-words mb-3'}>
                  <h3>Malt</h3>
                  <a
                    href={'https://www.malt.fr/profile/pierregodino'}
                    target={'_blank'}>
                    www.malt.fr/profile/pierregodino
                  </a>
                </div>

                <div className={'w-full break-words mb-3'}>
                  <h3>LinkedIn</h3>
                  <a
                    href={'https://www.linkedin.com/in/pierre-godino-50b503186'}
                    target={'_blank'}>
                    www.linkedin.com/in/pierre-godino-50b503186
                  </a>
                </div>
              </section>
            </div>
          </ContactContainer>
        </div>
      </MainContainer>
    </Layout>
  );
};

const MainContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100%;
  z-index: 0;
  overflow-x: hidden;

  h1 {
    font-family: BebasNeue;
    font-size: 4.5rem;
    letter-spacing: 0.8rem;
    text-align: justify;
    color: #272727;
    line-height: 4rem;
    text-align: center;
    margin-left: 8px;
    text-shadow: 0px 0 5px rgba(0, 0, 0, 0.3);
  }
  h2 {
    font-family: BebasNeue;
    font-size: 1.8rem;
    letter-spacing: 0.5rem;
  }
  h3 {
    font-family: BebasNeue;
    font-size: 1.3rem;
  }

  ul {
    list-style: '- ';
  }

  h4,
  p,
  li,
  a {
    font-family: Montserrat;
    font-weight: 600;
  }

  h3,
  h4,
  p {
    letter-spacing: 1.5px;
  }
  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -2;
  }

  section {
    margin-bottom: 1.5rem;
    padding: 2.7rem;
    background: #fffff9;
    color: #373737;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
    transition: 0.15s;
  }
  section:hover {
    transform: scale3d(1.02, 1.02, 1);
    cursor: help;
  }

  img {
    filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.3));
  }
`;

const ContactContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  /* box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3); */

  section {
    width: 100%;
    background: #545454;
    color: #fff;
  }

  button {
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10vw;
    color: #fafafa;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 5px;
    text-align: center;
    font-size: 3rem;
    transition: 0.5s;
    white-space: nowrap;

    svg {
      position: absolute;
      transition: 0.2s;
      opacity: 0.7;
    }

    span {
      font-size: 1rem;
      opacity: 0;
    }
  }
  button:hover {
    width: 50%;
    background: rgba(255, 255, 255, 0.3);
    span {
      opacity: 0.8;
      transition: 0.3s 0.4s;
    }
    svg {
      opacity: 0;
    }
  }
  button:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    button {
      display: none;
    }
  }

  img {
    width: 200px;
    height: auto;
    margin: 70px auto 70px auto;
  }
`;

const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /*padding: 2.7rem;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  background: #fffff9;*/
  color: #373737;
  border-radius: 5px;
`;

export default Curiculum;
