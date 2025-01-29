import { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import HomeSimulator from './HomeSimulator';

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
    </MainContainer>
  );
};

const MainContainer = styled.section`
  /* background: #fafafa11; */
  /* padding: 25px; */

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
`;

export default HomeNotes;
