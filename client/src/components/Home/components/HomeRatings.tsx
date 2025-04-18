import { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

import CHECKYOURSMILE from '@/assets/icons/checkyoursmile.png';
import OCLOCK from '@/assets/icons/oclock.png';
import SPEEDY_NANIE from '@/assets/icons/speedynanie_alpha.png';
import GARAGE_BRINCAT from '@/assets/icons/sarlgaragebrincat.png';
import GOOGLE_LOGO from '@/assets/global/google.png';
import MALT_LOGO from '@/assets/global/MALT_LOGO.png';
import MISINO_LOGO from '@/assets/icons/misino_icon_alt.png';
import STAR from '@/assets/icons/star.png';
import Image from 'next/image';

type Rating = {
  stars?: 1 | 2 | 3 | 4 | 5;
  text: string;
  customerName?: string;
  img?: any;
  source: 'Google' | 'Malt';
  link: string;
};

const ratings: Rating[] = [
  {
    stars: 5,
    text: 'Réactif, efficace et professionnel. Suivi au top',
    customerName: 'SARL Garage Brincat',
    source: 'Malt',
    img: GARAGE_BRINCAT,
    link: 'https://www.malt.fr/profile/pierregodino',
  },
  {
    stars: 5,
    text: 'Le site internet est soigné et bien pensé, je ne pensais pas avoir autant de visiteurs aussi vite.',
    customerName: 'Dr. Jérôme Misino',
    source: 'Google',
    img: MISINO_LOGO,
    link: 'https://www.malt.fr/profile/pierregodino',
  },
  {
    stars: 5,
    text: "Très professionnel et a l'écoute.",
    source: 'Google',
    link: 'https://www.google.com/search?sca_esv=636238c710bc0fc7&tbm=lcl&q=Cr%C3%A9ation%20sites%20internet%20sur%20Agen%20%7C%20Pierre%20G.%20Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDczMzMwsTQzNzA2M7GwtDQ1MtrAyPiK0ci56PDKxJLM_DyF4syS1GKFzLyS1KK81BKF4tIiBcf01DyFGoWAzNSiolQFdz0Fx7LM4kWsZGgCADkovSuFAAAA&rldimm=17666049670364899522&hl=fr-FR&authuser=2&sa=X&ved=0CAcQ5foLahcKEwio7sWK0J-KAxUAAAAAHQAAAAAQHA&biw=1920&bih=946&dpr=1#lkt=LocalPoiReviews&arid=ChdDSUhNMG9nS0VJQ0FnSUNCOEt1N2xRRRAB',
  },
  // {
  //   stars: 5,
  //   text: 'Pierre a su mettre en avant ses connaissances et prendre des initiatives afin d’améliorer notre service.',
  //   customerName: 'Speedy Nanie',
  //   img: SPEEDY_NANIE,
  //   source: 'Malt',
  //   link: 'https://www.malt.fr/profile/pierregodino',
  // },
  // {
  //   stars: 5,
  //   customerName: 'CheckYourSmile',
  //   img: CHECKYOURSMILE,
  //   text: 'Pierre a su rendre dans les temps un code correspondant tout à fait aux attentes et fonctionnel. Je recommande.',
  //   source: 'Malt',
  //   link: 'https://www.malt.fr/profile/pierregodino',
  // },
  {
    stars: 5,
    text: 'Bon rapport qualité / prix, ça change des agences qui proposent des prix délirants !',
    source: 'Google',
    link: 'https://www.google.com/search?sca_esv=636238c710bc0fc7&tbm=lcl&q=Cr%C3%A9ation%20sites%20internet%20sur%20Agen%20%7C%20Pierre%20G.%20Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDczMzMwsTQzNzA2M7GwtDQ1MtrAyPiK0ci56PDKxJLM_DyF4syS1GKFzLyS1KK81BKF4tIiBcf01DyFGoWAzNSiolQFdz0Fx7LM4kWsZGgCADkovSuFAAAA&rldimm=17666049670364899522&hl=fr-FR&authuser=2&sa=X&ved=0CAcQ5foLahcKEwio7sWK0J-KAxUAAAAAHQAAAAAQHA&biw=1920&bih=946&dpr=1#lkt=LocalPoiReviews&arid=ChdDSUhNMG9nS0VJQ0FnSUNCOEt1N2xRRRAB',
  },
  {
    stars: 5,
    customerName: "Écoles O'Clock",
    img: OCLOCK,
    text: 'Pierre est un formateur compétent, impliqué et sérieux. Notre collaboration est plaisante et efficace.',
    source: 'Malt',
    link: 'https://www.malt.fr/profile/pierregodino',
  },
  {
    stars: 5,
    text: 'Très professionnel, je conseille !',
    source: 'Google',
    link: 'https://www.google.com/search?sca_esv=636238c710bc0fc7&tbm=lcl&q=Cr%C3%A9ation%20sites%20internet%20sur%20Agen%20%7C%20Pierre%20G.%20Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDczMzMwsTQzNzA2M7GwtDQ1MtrAyPiK0ci56PDKxJLM_DyF4syS1GKFzLyS1KK81BKF4tIiBcf01DyFGoWAzNSiolQFdz0Fx7LM4kWsZGgCADkovSuFAAAA&rldimm=17666049670364899522&hl=fr-FR&authuser=2&sa=X&ved=0CAcQ5foLahcKEwio7sWK0J-KAxUAAAAAHQAAAAAQHA&biw=1920&bih=946&dpr=1#lkt=LocalPoiReviews&arid=ChdDSUhNMG9nS0VJQ0FnSUNCOEt1N2xRRRAB',
  },
];

const HomeRatings: FC = () => {
  const sliderRef = useRef(null);
  const [displayedRatingIndex, setDisplayedRatingIndex] = useState<number>(0);

  useEffect(() => {
    if (!sliderRef || !sliderRef.current) return;
    let timeout;
    const sliderElement: HTMLElement = sliderRef.current;
    const interval = setInterval(() => {
      setDisplayedRatingIndex((prev) => {
        if (prev === ratings.length - 1) {
          timeout = setTimeout(() => {
            sliderElement.style.transition = 'none';
            setDisplayedRatingIndex(0);
            setTimeout(() => {
              sliderElement.style.transition = '1.5s';
            }, 500);
          }, 2000);
          return prev + 1;
        } else return prev + 1;
      });
    }, 6000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <MainContainer id="ratings_section">
      <div id="ratings_wrapper">
        <ul
          ref={sliderRef}
          className="slider"
          style={{
            width: ratings.length * 100 + '%',
            transform: `translateX(-${100 * displayedRatingIndex}%)`,
          }}>
          {[...ratings, ratings[0]].map((rating: Rating, key: number) => (
            <li key={rating.customerName + '' + key} className="rating-item">
              <div className="item-wrapper">
                <div className="infos-wrapper">
                  <p>
                    <FormatQuoteIcon />
                    {rating.text}
                    <FormatQuoteIcon />
                  </p>
                  <div className="source-customer-stars-wrapper">
                    {rating.img ? (
                      <Image
                        width={50}
                        height={50}
                        className="source-img"
                        src={rating.img}
                        alt={rating.customerName}
                      />
                    ) : (
                      <Image
                        width={50}
                        height={50}
                        className="source-img"
                        src={
                          rating.source === 'Google' ? GOOGLE_LOGO : MALT_LOGO
                        }
                        alt={rating.source}
                      />
                    )}
                    <div>
                      <em>{rating.customerName || 'Google'}</em>
                      {rating.stars && (
                        <div className="stars-wrapper">
                          {Array(rating.stars)
                            .fill(null)
                            .map((_, index) => (
                              <Image
                                width={20}
                                height={20}
                                key={index}
                                src={STAR}
                                alt="Etoile"
                              />
                            ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
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
    margin-top: 50px;
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
                width: auto;
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

export default HomeRatings;
