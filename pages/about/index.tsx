import React from 'react';
import { NextPage } from 'next';
import Layout from '../../src/components/Layout/';
import styled from 'styled-components';
import Video from '../../src/components/Home/Video';

const Index: NextPage = () => {
  return (
    <Layout>
      <MainContainer>
        <img className={'background'} src="/res/about-background.jpg" alt="" />
        <div
          style={{
            background: "url('/res/overlay.png')",
            height: '100%',
            width: '100%',
            position: 'absolute',
            opacity: 0.3,
            zIndex: -1,
          }}></div>
        <div className="flex flex-col">
          <div>
            <button>
              <Video
                url={'/video/neon-background.webm'}
                handleLoadingScreen={handleLoadingScreen}
              />
              <h3>Mes technologies</h3>
            </button>
            <button>
              <Video
                url={'/video/neon-background.webm'}
                handleLoadingScreen={handleLoadingScreen}
              />
              <h3>Mes expériences</h3>
            </button>
          </div>
          <button>
            <Video
              url={'/video/neon-background.webm'}
              handleLoadingScreen={handleLoadingScreen}
            />
            <h3>Mon CV</h3>
          </button>
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
  justify-content: center;
  align-items: center;

  button {
    border-radius: 15px;
    margin: 10px;
    padding: 30px;
    background: rgba(255, 255, 255, 0.3);
    font-size: 2.5rem;
    color: rgba(0, 0, 0, 0.5);
  }

  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -2;
  }
`;

export default Index;
