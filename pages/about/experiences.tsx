import React from 'react';
import styled from 'styled-components';
import Experience from '../../src/components/Experiences/Experience';
import data from '../../src/components/Experiences/data';

const Experiences: React.FC = () => {
  const displayExperiences = () => {
    return data.reverse().map((elem, key) => {
      return (
        <React.Fragment>
          <Experience
            title={elem.title}
            collaboratorsAmount={0}
            date={elem.date || '19/12/1997'}
            description={elem.description}
            period={elem.period}
          />
          {key % 2 !== 0 || (
            <React.Fragment>
              <MiddleStick className="h-full m-auto">
                <div className={'pin'}></div>
              </MiddleStick>
              <div></div>
              <div></div>
              <MiddleStick className="h-full m-auto">
                <div className={'pin'}></div>
              </MiddleStick>
            </React.Fragment>
          )}
        </React.Fragment>
      );
    });
  };

  return (
    <MainContainer>
      <Overlay />
      <div
        className="w-full m-auto md:grid gap-1"
        style={{ gridTemplateColumns: '47% 6% 47%' }}>
        {displayExperiences()}
      </div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
  transition: 1s;
  background: url('/res/freelance-background.jpg') rgba(255, 255, 255, 0.2)
    fixed;
  background-blend-mode: color;
`;

const MiddleStick = styled.div`
  margin-top: 10px;
  background: #fafafa;
  width: 12px;
  z-index: 1;

  filter: drop-shadow(1px 2px 1px #545454);
  .pin {
    background: #fafafa;
    width: 35px;
    height: 35px;
    margin-left: -11.5px;
    margin-top: -25px;
    border-radius: 50px;
  }
`;

const Overlay = styled.div`
  background: url('/res/overlay.png');
  height: 100%;
  width: 100%;
  position: fixed;
  opacity: 0.3;
  z-index: 0;
`;

export default Experiences;
