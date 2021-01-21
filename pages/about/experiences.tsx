import React from 'react';
import styled from 'styled-components';
import Experience from '../../src/components/Experiences/Experience';
import data from '../../src/components/Experiences/data';

const Experiences: React.FC = () => {
  const displayExperiences = (smallScreen?: boolean) => {
    return data.reverse().map((elem, key) => {
      switch (smallScreen) {
        case true:
          return (
            <React.Fragment>
              <Experience
                title={elem.title}
                collaboratorsAmount={0}
                date={elem.date || '19/12/1997'}
                description={elem.description}
                period={elem.period}
              />
              {key === data.length || (
                <React.Fragment>
                  <MiddleStick className="h-full m-auto">
                    <div className={'pin'}></div>
                  </MiddleStick>
                </React.Fragment>
              )}
              {console.log(key + ' || ' + data.length)}
            </React.Fragment>
          );
          break;

        case false:
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
          break;

        default:
          console.error('Erreur interne, veuillez recharger la page.');
      }
    });
  };

  return (
    <MainContainer>
      <img src="/res/background-3.jpg" alt="" className={'background'} />
      <Overlay />
      <ExperiencesWrapper
        className="w-full m-auto hidden md:grid"
        style={{
          width: '100%',
          height: '100vh',
          overflow: 'scroll',
        }}>
        {displayExperiences(false)}
      </ExperiencesWrapper>
      <ExperiencesWrapper
        className="w-full m-auto grid md:hidden"
        style={{
          width: '100%',
          height: '100vh',
          overflow: 'scroll',
        }}>
        {displayExperiences(true)}
      </ExperiencesWrapper>
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

  .background {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
    position: absolute;
    z-index: -2;
  }
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
  z-index: -1;
`;

const ExperiencesWrapper = styled.div`
  grid-template-columns: 47% 6% 47%;
  @media (max-width: 767px) {
    & {
      grid-template-columns: 90% 10%;
    }
  }
`;

export default Experiences;
