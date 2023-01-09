import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import createGlobe from 'cobe';
import { NextPage } from 'next';
import Sentence from '../src/components/Home/Sentence';

const Home: NextPage = () => {
  const [sentence, setSentence] = useState('lorem ipsum dolor sit amet');
  const canvasRef = useRef();
  const starsArray: any = useRef();

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
            top: Math.floor(Math.random() * 100) + 'vh',
            left: Math.floor(Math.random() * 100) + 'vw',
            animationDelay: Math.floor(Math.random() * 500) + 's',
          }}></div>
      );
    }
    return myStars;
  }, []);

  //Génère la Terre et les étoiles
  useEffect(() => {
    starsArray.current = starsGenerator();
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 1.4,
      width: 2200,
      height: 2200,
      phi: 1,
      theta: 0.01,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [0.102, 0.357, 0.7395],
      markers: [
        // longitude latitude
        { location: [43.6, 1.433333], size: 0.05 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.001;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  useEffect(() => {
    const sentencesArray = [
      'lorem ipsum dolor sit amet',
      'i link people together',
      'je relie les gens entre eux',
    ];
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Enter')
        setSentence(
          sentencesArray[Math.floor(Math.random() * sentencesArray.length)]
        );
    });

    return () => {
      window.removeEventListener('keydown', (e) => {
        if (e.key === 'Enter')
          setSentence(
            sentencesArray[Math.floor(Math.random() * sentencesArray.length)]
          );
      });
    };
  }, []);

  useEffect(() => {
    console.log(Sentence);
  }, [sentence]);

  return (
    <MainContainer>
      <section id="landing">
        {starsArray.current}
        <canvas ref={canvasRef} id="globe" />
        <div id="content">
          <h1>
            <Sentence sentence={sentence} isGlitching={true} />
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur commodi vero doloremque placeat corporis magnam et natus
            beatae.
          </p>
        </div>
      </section>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  background: #040e1d;
  width: 100vw;
  height: 93vh;
  display: flex;
  flex-direction: column;
  margin-top: 7vh;

  section#landing {
    display: flex;
    position: relative;
    height: 100vh;
    width: 100vw;
    overflow: hidden;

    #content {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 45vw;
      justify-content: center;

      h1 {
        color: white;
        font-family: 'Righteous', cursive;
        font-size: 2.5rem;
      }
    }

    #globe {
      width: 1500px;
      height: 1500px;
      position: absolute;
      top: 5vh;
      left: 40vw;
      z-index: 2;
      border-radius: 50%;
      @media (max-width: 1250px) {
        & {
          left: 20vw;
        }
      }
      @media (max-width: 600px) {
        & {
          left: -20vw;
        }
      }
    }

    .star {
      background: #fafafa;
      z-index: 1;
      position: absolute;
      box-shadow: 0px 0px 5px 0px rgba(255, 255, 255, 0.9);
      animation: 6s star_glow infinite linear;
    }
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
`;

export default Home;
