import { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PhoneIcon from '@mui/icons-material/Phone';
import CustomLink from '../../Layout/routing/CustomLink';

const HomeNotes: FC = () => {
  return (
    <MainContainer id="ratings_section">
      <ul id="google_malt_wrapper">
        <li id="google">
          <img src="/icons/google.png" alt="google" loading="lazy" />
          <em>
            <b>Google</b> : 5/5
          </em>
          <div className="stars-container">
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <img
                  key={index}
                  src="/icons/star.png"
                  alt="Etoile"
                  loading="lazy"
                />
              ))}
          </div>
        </li>
        <li id="malt">
          <img src="/icons/malt.png" alt="malt" loading="lazy" />
          <em>
            <b>Malt</b> : 5/5
          </em>
          <div className="stars-container">
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <img
                  key={index}
                  src="/icons/star.png"
                  alt="Etoile"
                  loading="lazy"
                />
              ))}
          </div>
        </li>
      </ul>

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
        <CustomLink href="/contact/">
          <button className="form-btn">
            <FormatListBulletedIcon />
            <p>Formulaire de contact</p>
          </button>
        </CustomLink>
      </div>
    </MainContainer>
  );
};

const MainContainer = styled.section`
  width: 1200px;
  padding: 0 50px;
  max-width: 100%;
  margin: auto;
  font-family: 'Montserrat';

  * {
    font-family: 'Montserrat';
  }

  ul#google_malt_wrapper {
    display: flex;
    justify-content: space-around;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;

      & > img {
        width: 150px;
      }

      em {
        font-size: 1.2rem;
        color: #fafafaaa;
        margin-top: 15px;
        margin-bottom: 5px;
      }

      .stars-container {
        display: flex;
        gap: 10px;
        justify-content: center;

        img {
          width: 30px;
          filter: contrast(0.8);
        }
      }

      @media (max-width: 500px) {
        & > img {
          width: 75px;
        }

        .stars-container {
          width: 15px;
        }
      }
    }
  }

  div#ratings_wrapper {
    width: 100%;
    margin: 25px auto;
    overflow: hidden;
    display: flex;
    justify-content: center;
    background: #ffffff08;
    backdrop-filter: blur(5px);

    ul.slider {
      display: flex;
      transition: 1.5s;

      li.rating-item {
        width: 100%;
        flex-shrink: 0;
        display: flex;
        justify-content: center;

        .item-wrapper {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          color: #fafafa;
          max-width: 80%;
          padding: 15px;
          margin: auto;

          p {
            max-width: 70vw;
            font-size: 1.5rem;

            svg {
              font-size: 3rem;

              &:nth-child(2) {
                transform: rotate(180deg);
              }
            }
          }

          .infos-wrapper {
            .source-customer-stars-wrapper {
              display: flex;
              gap: 15px;
              height: 50px;

              img.source-img {
                height: 50px;
                border-radius: 5px;
                object-fit: cover;
              }

              & > div {
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                em {
                  font-weight: bold;
                }

                .stars-wrapper {
                  display: flex;
                  gap: 5px;

                  img {
                    width: 20px;
                    filter: contrast(0.8);
                  }
                }
              }
            }
          }

          @media (max-width: 500px) {
            p {
              font-size: 1rem;
              text-align: center;

              svg {
                font-size: 1.5rem;
              }
            }
          }
        }
      }
    }
  }

  div.contact-links {
    display: flex;
    gap: 15px;
    margin-top: 50px;

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
          color: rgba(41, 128, 185, 1);
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
          color: rgb(46, 204, 113);
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
`;

export default HomeNotes;
