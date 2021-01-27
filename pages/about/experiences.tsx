import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';
import Experience from '../../src/components/Experiences/Experience';
import data from '../../src/components/Experiences/data';
import { NextPage } from 'next';
import Layout from '../../src/components/Layout';

const Experiences: NextPage = () => {
  const [scroll, setScroll] = useState(0);
  const [screenSize, setScreenSize] = useState(0);

  const experienceWrapperRef = useRef({ scrollTop: 0 });

  useEffect(() => {
    // eslint-disable-next-line no-restricted-globals
    setScreenSize(window.innerWidth);
    // eslint-disable-next-line no-restricted-globals
    addEventListener('resize', () => setScreenSize(window.innerWidth));

    return () =>
      // eslint-disable-next-line no-restricted-globals
      removeEventListener('resize', () => setScreenSize(window.innerWidth));
  }, []);
  useEffect(() => {
    //console.log(scroll);
  }, [scroll]);

  const displayExperiences = useCallback(() => {
    return data
      .slice(0)
      .reverse()
      .map((elem, key) => {
        return (
          <React.Fragment key={key}>
            <Experience
              title={elem.title}
              collaboratorsAmount={elem.collaboratorsAmount}
              date={elem.date}
              description={elem.description}
              period={elem.period}
              environnements={elem.environnements}
              technologies={elem.technologies}
              link={elem.link}
            />
            {screenSize >= 768 ? (
              key % 2 !== 0 || (
                <React.Fragment>
                  <MiddleStick className="h-full m-auto">
                    <div className={'pin'}></div>
                  </MiddleStick>
                  <div></div>
                  <div></div>
                  <MiddleStick
                    className={
                      'h-full m-auto ' +
                      (key !== data.length - 2 || 'middle-stick-transparent')
                    }>
                    <div className={'pin'}></div>
                  </MiddleStick>
                </React.Fragment>
              )
            ) : (
              <React.Fragment>
                <MiddleStick
                  className={
                    'h-full m-auto ' +
                    (key !== data.length - 1 || 'middle-stick-transparent')
                  }>
                  <div className={'pin'}></div>
                </MiddleStick>
              </React.Fragment>
            )}
          </React.Fragment>
        );
      });
  }, [screenSize]);

  return (
    <Layout>
      <MainContainer>
        <img src="/res/background-3.jpg" alt="" className={'background'} />
        <Overlay />
        <ExperiencesWrapper
          ref={experienceWrapperRef}
          onScroll={() => setScroll(experienceWrapperRef.current.scrollTop)}
          className="w-full m-auto grid"
          style={{
            width: '100%',
            height: '100vh',
            overflowY: 'scroll',
            padding: '5rem 0',
          }}>
          {displayExperiences()}
        </ExperiencesWrapper>
      </MainContainer>
    </Layout>
  );
};

const MainContainer = styled.div`
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

  .middle-stick-transparent {
    background: transparent !important;
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
