import React, { useCallback, useEffect, useRef, useState } from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import Link from 'next/link';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Index: NextPage = () => {
  return (
    <MainContainer>
      <section className="flex flex-col buttons-container">
        <div style={{ maxWidth: '100vw' }}>
          <Link href={'/about/skills'}>
            <button style={{ animationDelay: '1s' }}>
              <video loop autoPlay muted>
                <source src={'/video/skills-preview.mp4'} type={'video/mp4'} />
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
      </section>
    </MainContainer>
  );
};
const MainContainer = styled.div`
  background: rgb(38, 41, 74);
  background: linear-gradient(
    165deg,
    rgba(38, 41, 74, 1) 0%,
    rgba(38, 41, 74, 1) 28%,
    rgba(151, 80, 86, 1) 100%
  );
  width: 100vw;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5vh;
  align-items: center;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: 0.5s;
    transform: scale(1.02);
  }

  button {
    overflow: hidden;
    position: relative;
    border-radius: 15px;
    margin: 10px;
    padding: 60px;
    background: rgba(0, 0, 0, 0.2);
    font-size: 2.5rem;
    color: rgba(255, 255, 255, 0.7);
    animation: 6s appearing;
    animation-fill-mode: forwards;
    opacity: 0;
    transition: 0.2s;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 5px 5px 15px 1px rgba(0, 0, 0, 0.4);
  }
  button h3 {
    z-index: 2;
  }
  button:hover {
    transform: translate3d(0, -15px, 0);
    box-shadow: 5px 20px 15px 1px rgba(0, 0, 0, 0.4);
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

  h3 {
    font-family: BebasNeue;
  }

  h2,
  p {
    color: #fafafa;
    font-size: 2rem;
    opacity: 0;
    animation: 6s appearingText 0.5s;
    animation-fill-mode: forwards;
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
  }

  h2 {
    font-weight: bold;
  }

  .buttons-container {
    min-height: 100%;
    justify-content: center;
  }

  @keyframes appearing {
    0% {
      opacity: 0;
    }
    75% {
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
    75% {
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
