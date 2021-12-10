import React, { useCallback, useEffect, useRef, useState } from 'react';
import { NextPage } from 'next';
import Layout from '../../src/components/Layout/';
import styled from 'styled-components';
import Link from 'next/link';

const Index: NextPage = () => {
  const ref = useRef();

  let step = 0;
  const colors = [
    [62, 35, 255],
    [60, 255, 60],
    [255, 35, 98],
    [45, 175, 230],
    [255, 0, 255],
    [255, 128, 0],
  ];
  const colorIndices = [0, 1, 2, 3];
  const gradientSpeed = 0.002;

  const updateGradient = useCallback(() => {
    const col1 = colors[colorIndices[0]];
    const col2 = colors[colorIndices[1]];
    const e = colors[colorIndices[2]];
    const t = colors[colorIndices[3]];
    const c = 1 - step;

    const fromColor =
      'rgb(' +
      Math.round(c * col1[0] + step * col2[0]) +
      ',' +
      Math.round(c * col1[1] + step * col2[1]) +
      ',' +
      Math.round(c * col1[2] + step * col2[2]) +
      ')';
    const toColor =
      'rgb(' +
      Math.round(c * e[0] + step * t[0]) +
      ',' +
      Math.round(c * e[1] + step * t[1]) +
      ',' +
      Math.round(c * e[2] + step * t[2]) +
      ')';

    if ((step += gradientSpeed) >= 1 && (step %= 1)) {
      colorIndices[0] = colorIndices[1];
      colorIndices[2] = colorIndices[3];
      colorIndices[1] =
        Math.floor(1 + Math.random() * (colors.length - 1)) % colors.length;
      colorIndices[3] =
        Math.floor(1 + Math.random() * (colors.length - 1)) % colors.length;
    }

    console.log(step);

    if (ref.current)
      // @ts-ignore
      ref.current.style.background = `linear-gradient(90deg, ${fromColor} 0%, ${toColor} 100%)`;
  }, [step, colors, colorIndices]);

  useEffect(() => {
    const interval = setInterval(() => {
      updateGradient();
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Layout variant={'classic'}>
      <MainContainer>
        <div>
          <h2 className="text-center">Bienvenue !</h2>
          <p className="text-center">Envie d'en savoir plus sur moi ?</p>
        </div>

        <div
          ref={ref}
          className={'bcg-bubble'}
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
            opacity: 0.7,
            zIndex: -1,
          }}>
          <div id="bubbles1"></div>
          <div id="bubbles2"></div>
          <div id="bubbles3"></div>
        </div>
        <div className="flex flex-col">
          <div style={{ maxWidth: '100vw' }}>
            <Link href={'/about/skills'}>
              <button style={{ animationDelay: '1s' }}>
                <video loop autoPlay muted>
                  <source
                    src={'/video/skills-preview.mp4'}
                    type={'video/mp4'}
                  />
                </video>
                <h3>Mes technologies</h3>
              </button>
            </Link>
            <Link href={'/about/experiences'}>
              <button style={{ animationDelay: '1.5s' }}>
                <video loop autoPlay muted>
                  <source src={'/video/exp-preview.mp4'} type={'video/mp4'} />
                </video>
                <h3>Mon parcours</h3>
              </button>
            </Link>
          </div>
          <Link href={'/about/curiculum'}>
            <button style={{ animationDelay: '2s' }}>
              <video loop autoPlay muted>
                <source src={'/video/cv-preview.mp4'} type={'video/mp4'} />
              </video>
              <h3>Mon CV</h3>
            </button>
          </Link>
        </div>
      </MainContainer>
    </Layout>
  );
};
const MainContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: 0.5s;
    //transform: scale(1.02);
  }

  button {
    overflow: hidden;
    position: relative;
    border-radius: 15px;
    margin: 10px;
    padding: 60px;
    background: rgba(255, 255, 255, 0.3);
    font-size: 2.5rem;
    color: rgba(0, 0, 0, 0.5);
    animation: 1s appearing;
    animation-fill-mode: forwards;
    opacity: 0;
    transition: 0.2s;
    border: 2px solid rgba(255, 255, 255, 0.4);
  }
  button h3 {
    z-index: 2;
  }
  button:hover {
    transform: translate3d(0, -2%, 0);
  }
  button:hover video {
    opacity: 1;
    cursor: pointer;
  }

  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -2;
  }

  h2,
  p {
    color: #fafafa;
    font-size: 2rem;
    opacity: 0;
    animation: 1s appearingText 0.5s;
    animation-fill-mode: forwards;
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
  }

  h2 {
    font-weight: bold;
  }

  @keyframes appearing {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes appearingText {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.9;
    }
  }

  @media (max-width: 500px) {
    h2,
    p {
      font-size: 1.4rem;
    }
  }
`;

export default Index;
