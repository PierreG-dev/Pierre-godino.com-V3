import { FC } from 'react';
import styled from 'styled-components';
import CustomLink from '../../Layout/routing/CustomLink';

const HomeServices: FC = () => {
  return (
    <MainContainer>
      <h2>
        Création de site internet sur mesure : Ce que je peux faire pour vous
      </h2>
      <ul id="services_list">
        <li className="service-item">
          <CustomLink href="/simulateur/creation-site-internet/">
            {' '}
            <div>
              {' '}
              <img
                src="/icons/programming.png"
                alt="programmation"
                loading="lazy"
              />
              <h3>Création de sites internet</h3>
            </div>
          </CustomLink>
        </li>
        <li className="service-item">
          <CustomLink href="/prestations/">
            <div>
              {' '}
              <img
                src="/icons/work-tools.png"
                alt="maintenance"
                loading="lazy"
              />
              <h3>Maintenance et modifications</h3>
            </div>
          </CustomLink>
        </li>
        <li className="service-item">
          <CustomLink href="/a-propos/">
            <div>
              {' '}
              <img
                src="/icons/layer.png"
                alt="Développement WEB"
                loading="lazy"
              />
              <h3>Développement WEB</h3>
            </div>
          </CustomLink>
        </li>
        <li className="service-item">
          <CustomLink href="/prestations/">
            {' '}
            <div>
              {' '}
              <img src="/icons/google.png" alt="SEO" loading="lazy" />
              <h3>Optimisation de référencement</h3>
            </div>
          </CustomLink>
        </li>
        <li className="service-item">
          <CustomLink href="/prestations/">
            <div>
              <img
                src="/icons/android.png"
                alt="Android & IOS"
                loading="lazy"
              />
              <h3>Applications</h3>
            </div>
          </CustomLink>
        </li>
        <li className="service-item">
          <CustomLink href="https://www.learn.pierre-godino.com">
            <div>
              {' '}
              <img src="/icons/teacher.png" alt="Formation" loading="lazy" />
              <h3>Formation</h3>
            </div>
          </CustomLink>
        </li>
      </ul>
    </MainContainer>
  );
};

const MainContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 50px;

  h2 {
    color: #040e1d;
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 75px;
    font-family: 'Montserrat';
    letter-spacing: 3px;
    background: #fafafaee;
    padding: 10px 25px;
    border-radius: 15px;
    text-align: center;

    @media (max-width: 500px) {
      font-size: 1rem;
      padding: 10px 10px;
      margin-bottom: 25px;
    }
  }

  ul#services_list {
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    justify-content: center;

    @media (max-width: 500px) {
      gap: 0px;
    }

    li.service-item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      max-width: 450px;

      div {
        gap: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 300px;
        height: 300px;
        border-radius: 5px;
        transition: 0.1s;

        &:hover {
          background: #ffffff03;
          cursor: pointer;
        }

        h3 {
          font-size: 1.3rem;
          font-weight: bold;
          color: #fafafa;
          filter: drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.05));
          text-align: center;
          font-family: 'Montserrat';
        }

        img {
          width: 100px;
          filter: drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.05));
        }

        @media (max-width: 500px) {
          width: 200px;
          height: 200px;

          img {
            width: 65px;
          }

          h3 {
            font-size: 1.1rem;
          }
        }
      }
    }
  }
`;

export default HomeServices;
