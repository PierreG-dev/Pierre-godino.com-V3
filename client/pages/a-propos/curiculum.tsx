import React from 'react';
import { AiOutlineDownload } from 'react-icons/ai';
import styled from 'styled-components';
import { NextPage } from 'next';
import Experience from '../../src/components/Curiculum/Experience';
import Head from 'next/head';
import CustomLink from '../../src/components/Layout/routing/CustomLink';
import Image from 'next/image';
// Les imports d'images
import LOGO from '@/assets/global/LOGO.svg';
import JS_ICON from '@/assets/icons/js.png';
import REACT_ICON from '@/assets/icons/react.png';
import NODE_ICON from '@/assets/icons/nodejs.png';
import HTML_ICON from '@/assets/icons/html.png';
import GOOGLE_ICON from '@/assets/icons/google.png';
import FR_FLAG from '@/assets/icons/fr_flag.png';
import EN_FLAG from '@/assets/icons/en_flag.jpeg';
import JP_FLAG from '@/assets/icons/jp_flag.png';
import WAGON_ICON from '@/assets/icons/wagon.png';
import CENEF_ICON from '@/assets/icons/cenef.svg';
import OCLOCK_ICON from '@/assets/icons/oclock.png';
import DOZER_ICON from '@/assets/icons/dozer.png';
// import WEB_ICON from '@/assets/icons/web.webp';
import DC_ICON from '@/assets/icons/dc.png';
import UPS_ICON from '@/assets/icons/ups.jpg';
import GITHUB_LOGO from '@/assets/global/GITHUB_LOGO.png';
import MALT_LOGO from '@/assets/global/MALT_LOGO.png';
import LINKEDIN_LOGO from '@/assets/global/LINKEDIN_LOGO.png';

const Curiculum: NextPage = () => {
  return (
    <MainContainer>
      <Head>
        <title>CV en ligne | Pierre G.</title>
        <meta property="og:title" content="CV en ligne | Pierre G." />
        <meta
          name="description"
          content="Découvrez mon CV en ligne, avec une liste non exhaustive de mes compétences, diplômes, langues et expériences."
        />
        <meta
          property="og:description"
          content="Découvrez mon CV en ligne, avec une liste non exhaustive de mes compétences, diplômes, langues et expériences."
        />
        <meta
          name="twitter:description"
          content="Découvrez mon CV en ligne, avec une liste non exhaustive de mes compétences, diplômes, langues et expériences."
        />
        <meta
          property="og:url"
          content={'https://www.creation-sites-godino.fr/a-propos/curiculum'}
        />
        <link
          rel="canonical"
          href={'https://www.creation-sites-godino.fr/a-propos/curiculum'}
        />
      </Head>

      <div
        style={{
          background: "url('/res/overlay.png')",
          backfaceVisibility: 'hidden',
          willChange: 'transform, opacity',
          transform: 'translateZ(0)',
          height: '100%',
          width: '100%',
          position: 'absolute',
          opacity: 0.3,
          top: 0,
          left: 0,
          zIndex: -1,
        }}></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 max-w-6xl mx-auto my-auto">
        <InfosContainer>
          <div className="flex flex-col justify-between p-6 block md:hidden mb-7">
            <Image
              width={200}
              height={200}
              className={'mb-7'}
              src={LOGO}
              alt="pierre godino"
            />
            <h2 style={{ color: '#fafafa' }}>
              Pierre <br />
              Godino
            </h2>
          </div>

          <section>
            <h2>Compétences</h2>

            <div id="skill_lang_wrapper">
              <div id="skills">
                <h3 className={'text-center w-full'}>Informatique</h3>
                <ul className={'text-sm'}>
                  <li>
                    <Image
                      width={17}
                      height={17}
                      src={JS_ICON}
                      alt="Javascript"
                    />
                    JavaScript 🔥
                  </li>
                  <li>
                    <Image
                      width={17}
                      height={17}
                      src={REACT_ICON}
                      alt="ReactJS"
                    />
                    ReactJs | NextJs 🔥
                  </li>
                  <li>
                    <Image
                      width={17}
                      height={17}
                      src={NODE_ICON}
                      alt="Node | MongoDB"
                    />
                    Node | MongoDB
                  </li>
                  <li>
                    <Image
                      width={17}
                      height={17}
                      src={HTML_ICON}
                      alt="HTML | CSS | JS"
                    />
                    Vanilla (HTML / CSS / JS)
                  </li>
                  <li>
                    <Image width={17} height={17} src={GOOGLE_ICON} alt="SEO" />
                    SEO
                  </li>
                  <CustomLink href={'/a-propos/technologies'}>
                    <button className="more-infos">En savoir plus</button>
                  </CustomLink>
                </ul>
              </div>

              <div id="lang">
                <h3 className={'text-center w-full'}>Langues</h3>
                <ul>
                  <li>
                    <Image
                      width={17}
                      height={17}
                      src={FR_FLAG}
                      alt="Drapeau français"
                    />
                    <strong>Français</strong> - natif
                  </li>
                  <li>
                    <Image
                      width={17}
                      height={17}
                      src={EN_FLAG}
                      alt="Drapeau anglais"
                    />
                    <strong>Anglais</strong> - professionnel
                  </li>
                  {/* <li>
                    <Image
                      width={17}
                      height={17}
                      src={JP_FLAG}
                      alt="Drapeau japonais"
                    />
                    <strong>Japonais</strong> - moyen
                  </li> */}
                </ul>
              </div>
            </div>
          </section>

          <section title={'Mes expériences'}>
            <h2>Experiences</h2>

            <Experience
              date={'Oct. 2024'}
              title={'Formateur | Assistant'}
              subtitle={'Le Wagon'}
              actual
              img={WAGON_ICON}
            />

            <Experience
              date={'Sep. 2023'}
              title={'Mentor'}
              subtitle={'Centre Européen de Formation'}
              img={CENEF_ICON}
            />

            <Experience
              date={'Mai 2023'}
              title={'Formateur'}
              subtitle={"O'Clock"}
              img={OCLOCK_ICON}
              actual
            />

            <Experience
              date={'Déc. 2020'}
              title={'Front-end React | Next'}
              subtitle={'Hackathon 60-Dozer'}
              img={DOZER_ICON}
              note={'(1ère place)'}
              noteColor={'#ffbd59'}
            />

            <Experience
              date={'Août 2019'}
              title={'Développeur WEB'}
              subtitle={'Freelance'}
              img={LOGO}
              actual
            />

            <CustomLink href={'/a-propos/experiences'}>
              <button className="more-infos">En savoir plus</button>
            </CustomLink>
          </section>

          <section title={'Mes diplômes'}>
            <h2>Diplômes</h2>

            <Experience
              date={'2020'}
              title={'RNCP Niv.5 - Développeur WEB/Mobile'}
              subtitle={'Digital Campus'}
              titleColor={'#8e44ad'}
              img={DC_ICON}
            />

            <Experience
              date={'2019'}
              title={'Licence Informatique'}
              subtitle={'Université Paul Sabatier, Toulouse'}
              titleColor={'#c0392b'}
              img={UPS_ICON}
            />
          </section>

          <section title={'Mon profil'}>
            <h2>Profil</h2>

            <p className={'text-sm'}>
              Passionné par la <strong>programmation</strong> et la{' '}
              <strong>formation</strong>, j'interviens dans diverses écoles pour
              enseigner des modules de <strong>développement WEB</strong>, en{' '}
              <strong>présentiel</strong> et <strong>visioconférence</strong>.
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
            <Image width={200} height={200} src={LOGO} alt="pierre godino" />
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
                <a href="tel:+33767249980">+33 7 67 24 99 80</a> <br />
                <a
                  href={'mailto:pierregodino.contact@yahoo.com'}
                  className={'text-xs md:text-base'}>
                  contact@pierre-godino.com
                </a>
              </p>

              <hr className={'opacity-50 m-3'} />

              <p className={'text-sm md:text-base mb-2'}>
                Toulouse, Agen, <br />
                France
              </p>

              <a
                href={'https://www.creation-sites-godino.fr'}
                className={'text-sm md:text-base'}>
                www.creation-sites-godino.fr
              </a>
            </section>

            <section title={'Mes réseaux'}>
              <h2 className={'mb-4'}>Réseaux</h2>

              <div className={'w-full break-words mb-3'}>
                <header>
                  <Image
                    src={GITHUB_LOGO}
                    alt="github"
                    width={19}
                    height={19}
                    style={{
                      filter: 'grayscale(1) brightness(2) invert(100%)',
                    }}
                  />
                  <h3>Github</h3>
                </header>
                <a
                  href={'https://www.github.com/pierreG-dev'}
                  target={'_blank'}
                  rel="noreferrer">
                  www.github.com/pierreG-dev
                </a>
              </div>

              <div className={'w-full break-words mb-3'}>
                <header>
                  <Image src={MALT_LOGO} alt="malt" width={19} height={19} />
                  <h3>Malt</h3>
                </header>
                <a
                  href={'https://www.malt.fr/profile/pierregodino'}
                  target={'_blank'}
                  rel="noreferrer">
                  www.malt.fr/profile/pierregodino
                </a>
              </div>

              <div className={'w-full break-words mb-3'}>
                <header>
                  <Image
                    src={LINKEDIN_LOGO}
                    alt="linkedin"
                    width={19}
                    height={19}
                  />
                  <h3>LinkedIn</h3>
                </header>
                <a
                  href={'https://www.linkedin.com/in/pierre-godino-50b503186'}
                  target={'_blank'}
                  rel="noreferrer">
                  www.linkedin.com/in/pierre-godino-50b503186
                </a>
              </div>
            </section>
          </div>
        </ContactContainer>
      </div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  padding-top: calc(6vh + 25px);
  position: relative;
  width: 100%;
  min-height: 100vh;
  z-index: 0;
  overflow-x: hidden;
  background: url('/res/curiculum-background.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  // background-attachment: fixed;
  backface-visibility: hidden;

  button.more-infos {
    color: #fffff9;
    background: #545454;
    width: 100%;
    height: fit-content;
    padding: 5px 10px;
    margin-top: 10px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
    border: 1px solid #545454;
    font-size: 0.8rem;
    transition: 0.1s;

    &:hover {
      background: #fffff9;
      color: #545454;
    }
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -2;
  }

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
    display: flex;
    flex-direction: column;
    gap: 2px;
    list-style: none;
  }

  li {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  section > div:has(#skills, #lang) {
    /* flex-wrap: wrap; */
    display: flex;
    justify-content: space-between;
    gap: 30px;
    width: 100%;

    @media (max-width: 600px) {
      flex-direction: column;
    }

    @media (min-width: 667px) and (max-width: 1144px) {
      flex-direction: column;
    }

    #skills,
    #lang {
      width: 100%;
    }

    #skills img {
      width: 17px;
      height: 17px;
      border-radius: 5px;
      object-fit: contain;
      filter: none;
      backface-visibility: hidden;
    }
    #lang img {
      backface-visibility: hidden;
      width: 17px;
      height: 17px;
      border-radius: 50%;
      object-fit: cover;
      filter: none;
      box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.3);
    }
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
    cursor: auto;
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
    width: 200px !important;
    height: auto !important;
    margin: 70px auto 70px auto !important;
  }

  header {
    display: flex;
    justify-content: start;
    align-items: center;
    width: fit-content;
    height: fit-content;
    gap: 5px;

    h3 {
      transform: translateY(2px);
    }

    img {
      object-fit: cover;
      width: 19px !important;
      height: 19px !important;
      margin: 0 !important;
      filter: grayscale(1) brightness(2);
    }
  }

  a {
    font-size: 0.8rem;
    background: rgba(255, 255, 255, 0.05);
    padding: 2px 5px;
    border-radius: 5px;
    font-weight: 200;
    letter-spacing: 2px;
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
