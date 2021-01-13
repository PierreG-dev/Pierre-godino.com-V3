import React from 'react';

import styled from 'styled-components';
import { NextPage } from 'next';
import Experience from '../../src/components/Curiculum/Experience';

const Curiculum: NextPage = () => {
  return (
    <MainContainer>
      <img src="/res/curiculum-background.jpg" alt="" />
      <div className={'grid grid-cols-1 md:grid-cols-2 gap-4 w-100 p-6'}>
        <div>
          <section>
            <h2>Compétences</h2>

            <div>
              <h3>Informatique</h3>
              <ul>
                <li>JavaScript</li>
                <li>ReactJs | NextJs</li>
                <li>HTML5 | CSS3</li>
                <li>Cordova</li>
                <li>React Native</li>
              </ul>
            </div>

            <div>
              <h3>Langues</h3>
              <ul>
                <li>Français natif</li>
                <li>Anglais professionnel (77/100 EF SET)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2>Expericences</h2>

            <Experience
              date={'Dec. 2020'}
              title={'Front-end React | Next'}
              subtitle={'Hackathon 60-Dozer'}
              note={'(1ère place)'}
              noteColor={'gold'}
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

          <section>
            <h2>Diplômes</h2>

            <div>
              <h3>2016</h3>
              <div>
                <h4>Baccalauréat Scientifique</h4>
                <p>Lycée Jean de Prades, Castelsarrasin</p>
              </div>
            </div>

            <div>
              <h3>2019</h3>
              <div>
                <h4>Licence d'informatique</h4>
                <p>Université Paul Sabatier, Toulouse</p>
              </div>
            </div>

            <div>
              <h3>2020</h3>
              <div>
                <h4>Titre Développeur WEB/Mobile</h4>
                <p>Digital Campus, Labège</p>
              </div>
            </div>
          </section>

          <section>
            <h2>Profil</h2>

            <p>
              Passionné d'informatique depuis toujours, le développement ne
              dérogeant pas à la règle, je suis très impliqué dans les projets
              auxquels je prends part, spécialement quand il s'agît de
              travailler avec mes technologies favorites: <br />
              React.js & Node.js (MERN).
            </p>
          </section>
        </div>
      </div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 0;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
`;

export default Curiculum;
