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

import Timeline from '@material-ui/lab/Timeline';
import Clock from 'react-clock';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { More } from '@material-ui/icons';

const clockOptions = {
  className: 'clock',
};

const TITLE = "5 ans dans l'informatique.";

const Experiences: NextPage = () => {
  const [scroll, setScroll] = useState(0);
  const [screenSize, setScreenSize] = useState(0);
  const [expandedXp, setExpandedXp] = useState('');
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // eslint-disable-next-line no-restricted-globals
    setScreenSize(window.innerWidth);
    // eslint-disable-next-line no-restricted-globals
    addEventListener('resize', () => setScreenSize(window.innerWidth));

    const interval = setInterval(() => setTime(new Date()), 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line no-restricted-globals
    removeEventListener('resize', () => setScreenSize(window.innerWidth));
  }, []);
  useEffect(() => {
    //console.log(scroll);
  }, [scroll]);

  const setExpanded = (title) => {
    console.log(expandedXp + ' / ' + title);
    setExpandedXp((prevState) => (prevState === title ? '' : title));
  };

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
              setExpanded={setExpanded}
              expandedXp={expandedXp}
              phone={screenSize <= 768}
            />
          </React.Fragment>
        );
      });
  }, [screenSize, expandedXp]);

  return (
    <Layout>
      <BackgroundContainer
        style={{
          position: 'absolute',
          height: '100%',
          width: '100vw',
          overflow: 'hidden',
        }}>
        <img
          src="/res/experiences-background.jpg"
          alt=""
          className={'background'}
        />
      </BackgroundContainer>

      <MainContainer>
        <Overlay />

        <section id={'clock-section'}>
          <Clock
            value={time}
            {...clockOptions}
            size={screenSize <= 768 ? 150 : 300}
          />
          <div className="typewriter">
            <h4
              style={{
                fontSize: screenSize <= 768 ? '1.5rem' : '3rem',
                margin: screenSize <= 768 ? '30px 0px 75px 0px' : 0,
              }}>
              {TITLE}
            </h4>
          </div>
        </section>

        <div
          className={screenSize <= 768 && 'timeline-phone'}
          style={{
            position: 'relative',
            width: '100%',
            marginLeft: 0,
            padding: 0,
          }}>
          <Timeline
            align={screenSize >= 768 ? 'alternate' : 'left'}
            style={{
              marginTop: -50,
              width: '100vw',
              padding: '5vw',
              overflow: 'hidden',
              position: 'relative',
            }}>
            {displayExperiences()}
          </Timeline>
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: screenSize <= 768 ? 'flex-start' : 'center',
              marginLeft: screenSize <= 768 ? '2.8vw' : 12,
              marginTop: screenSize <= 768 ? -20 : -50,
              color: '#cacaca',
            }}>
            <MoreHorizIcon style={{ fontSize: '4rem' }} />
          </div>
        </div>
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

  #clock-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5%;

    h4 {
      color: #cacaca;
    }
  }

  .timeline-phone {
    margin-left: 0;
  }
  .experience-wrapper {
    min-height: 150px;
    h2 {
      font-family: BebasNeue;
    }
    p {
      font-family: Montserrat;
    }

    .mini-card {
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      padding: 10px;
      width: 80px;
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fafafa;
      border-radius: 5px;
      transition: 0.2s;
    }
    .mini-card:hover {
      transform: translate3d(0, -7%, 0);
      box-shadow: 0 6px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    }

    .collaborators-container {
      img {
        width: 40px;
        height: auto;
      }
    }

    .technologies-container {
      img {
        border-radius: 3px;
        text-align: center;
        height: 50px;
        width: auto;
        object-fit: contain;
      }
    }

    .environnements-container {
      img {
        border-radius: 3px;
        text-align: center;
        height: 50px;
        width: auto;
        object-fit: contain;
      }
    }

    .date-container {
      font-size: 20px;
      font-family: BebasNeue;
    }
  }
`;
const BackgroundContainer = styled.div`
  .background {
    width: 100%;
    height: 120%;
    object-fit: cover;
    opacity: 0.8;
    position: absolute;
    object-position: top;
    filter: contrast(1.5);
    z-index: -2;
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

export default Experiences;
