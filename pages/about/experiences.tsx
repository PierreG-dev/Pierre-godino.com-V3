import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Experience from '../../src/components/Experiences/Experience';
import data from '../../src/components/Experiences/data';
import { NextPage } from 'next';

import Timeline from '@mui/lab/Timeline';
import Clock from 'react-clock';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const clockOptions = {
  className: 'clock',
};

const TITLE = "8 ans dans l'informatique.";

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
              icon={elem.icon}
              link={elem.link}
              setExpanded={setExpanded}
              expandedXp={expandedXp}
              phone={screenSize <= 768}
              actual={elem.actual}
              success={elem.success}
            />
          </React.Fragment>
        );
      });
  }, [screenSize, expandedXp]);

  return (
    <MainContainer>
      <BackgroundContainer className={'bcg-star'}>
        <div className="bcg-star">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </div>
      </BackgroundContainer>

      <h1>Mes Experiences</h1>

      <section id={'clock-section'}>
        <Clock
          value={time}
          {...clockOptions}
          size={screenSize <= 768 ? 150 : 300}
        />
        <div className="typewriter mt-8">
          <h4
            style={{
              fontSize: screenSize <= 768 ? '1.2rem' : '3rem',
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
          position={screenSize >= 768 ? 'alternate' : 'left'}
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
            justifyContent: screenSize <= 768 ? 'flex-end' : 'center',
            marginLeft: screenSize <= 768 ? '-1.7vw' : '0.03vw',
            marginTop: screenSize <= 768 ? -20 : -40,
            color: '#cacaca',
          }}>
          <MoreHorizIcon
            style={{
              fontSize: '4rem',
              transform: 'rotate(90deg)',
              visibility: screenSize <= 768 ? 'hidden' : 'visible',
            }}
          />
        </div>
      </div>

      <aside>
        <div></div>
        Toujours en cours
      </aside>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding: 0;
  margin: 0;
  width: 100%;
  transition: 1s;
  padding-bottom: 5vh;

  aside {
    display: flex;
    gap: 10px;
    color: rgba(255, 255, 255, 0.8);
    font-family: 'Montserrat';
    letter-spacing: 1px;
    position: absolute;
    top: 82vh;
    right: 42.5vw;
    justify-content: center;
    width: 15vw;
    div {
      background: rgba(155, 253, 113, 0.63);
      width: 25px;
      height: 25px;
      border-radius: 5px;
    }
  }

  h1 {
    margin-top: 10vh;
    font-family: Montserrat;
    font-size: 3rem;
    color: #dadada;
    text-align: center;
    letter-spacing: 5px;
  }

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
      text-align: left;
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
  width: 100vw;
  height: 100%;
  position: absolute;
  z-index: -6;
`;

export default Experiences;
