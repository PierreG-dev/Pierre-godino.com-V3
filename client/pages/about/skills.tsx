/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
  useContext,
} from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import data from '../../src/components/Skills/data';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Bar from '../../src/components/Skills/bar';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useRouter } from 'next/router';
import Head from 'next/head';
import SkillSelector from '../../src/components/Skills/SkillSelector';
import { BackgroundContext } from '../../src/contexts/Contexts';

const Skills: NextPage = () => {
  // --- Background
  const { background } = useContext(BackgroundContext);

  const router = useRouter();
  const { skillId } = router.query;
  const [displayedSkillId, setDisplayedSkillId] = useState(0);
  const starsArray: any = useRef();

  // --- Mise à jour du state en fonction de l'url (post mount)
  useEffect(() => {
    if (skillId && skillId.length !== 0)
      setDisplayedSkillId(parseInt(skillId as string));
  }, [skillId]);

  const displaySkills = () => {
    return data.map((skill, key) => (
      <IconContainer key={key} title={skill.name}>
        <img src={skill.icon} alt={skill.name} className={'skill-icon'} />
      </IconContainer>
    ));
  };

  const displayDots = () => {
    return data.map((skill, key) => {
      return (
        <div title={skill.name}>
          <FiberManualRecordIcon
            key={key}
            style={{
              width: displayedSkillId === skill.id ? 10 : 5,
              height: displayedSkillId === skill.id ? 10 : 5,
              color: displayedSkillId === skill.id && 'rgba(255,255,255,0.5)',
            }}
            onClick={() => setDisplayedSkillId(skill.id)}
            className={'skill-dot'}
          />
        </div>
      );
    });
  };

  const nextSkill = (): void => {
    setDisplayedSkillId((prevState) => {
      if (prevState !== data.length - 1) return prevState + 1;
      return 0;
    });
  };

  const previousSkill = (): void => {
    setDisplayedSkillId((prevState) => {
      if (prevState !== 0) return prevState - 1;
      return data.length - 1;
    });
  };

  const metaContentGenerator = useMemo(() => {
    const metaData = {
      title: 'Technologies',
      description:
        'Créateur de sites Internet, développeur WEB freelance et formateur | Mes technologies',
      ogUrl: 'https://pierre-godino.com/skills',
    };

    return (
      <Head>
        <title>{'Pierre | ' + metaData.title}</title>
        <meta name="description" content={metaData.description} />
        <meta
          property="og:title"
          content={'Pierre GODINO | ' + metaData.title}
        />
        <meta property="og:url" content={metaData.ogUrl} />
        <meta property="og:description" content={metaData.description} />
      </Head>
    );
  }, [router.pathname]);

  return (
    <MainContainer>
      {metaContentGenerator}
      {background}
      <AnimationContainer>
        <img
          id="space_station"
          src="/res/space-station.png"
          alt="station spatiale"
        />
        <img id="astronaut" src="/res/astronaut.png" alt="astronaute" />
        <div id="welding_object"></div>
      </AnimationContainer>

      <button
        onClick={previousSkill}
        style={{
          position: 'absolute',
          top: '28vh',
          left: '5%',
          zIndex: 2,
        }}>
        <ChevronLeftIcon
          fontSize={'large'}
          style={{ transform: 'scale3d(4,4,1)' }}
        />
      </button>
      <button
        onClick={nextSkill}
        style={{
          position: 'absolute',
          top: '28vh',
          right: '5%',
          zIndex: 2,
        }}>
        <ChevronRightIcon
          fontSize={'large'}
          style={{ transform: 'scale3d(4,4,1)' }}
        />
      </button>

      <SkillsContainer
        style={{
          transform: `translate3d(${-(displayedSkillId * 100)}vw, 0,0)`,
        }}>
        {displaySkills()}
      </SkillsContainer>
      <SkillSelector
        displayedSkillId={displayedSkillId}
        setDisplayedSkillId={setDisplayedSkillId}
      />
      <InfosContainer>
        <div
          className={
            'w-full text-center flex justify-around items-center p-3 h-2 -mt-16 mb-12'
          }
          style={{ maxWidth: 1000 }}>
          {displayDots()}
        </div>
        <div id={'infos'}>
          <div className="flex items-center gap-3" title={'Expérience'}>
            <TimelapseIcon
              style={{
                color: 'green',
                filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.3))',
              }}
            />
            <h4>Expérience</h4>
            <Bar variant={'experience'} level={data[displayedSkillId].xp} />
          </div>
          <div className="flex items-center gap-3" title={'Maîtrise'}>
            <FitnessCenterIcon
              style={{
                color: 'royalblue',
                filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.3))',
              }}
            />
            <h4>Maîtrise</h4>
            <Bar variant={'mastery'} level={data[displayedSkillId].mastery} />
          </div>
          <div className="flex items-center gap-3" title={'Affinité'}>
            <FavoriteIcon
              style={{
                color: 'orangered',
                filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.3))',
              }}
            />{' '}
            <h4>Affinité</h4>
            <Bar variant={'affinity'} level={data[displayedSkillId].affinity} />
          </div>
        </div>
      </InfosContainer>
    </MainContainer>
  );
};
const MainContainer = styled.div`
  position: relative;
  background: #040e1d;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding-top: 10vh;

  #filter-selector {
    background: rgba(37, 37, 37, 0.4) !important;
    transition: 0.1s;
    z-index: 5;
    position: absolute;
    top: 50px;
    right: 0;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    p {
      color: rgba(255, 255, 255, 0.8) !important;
    }
  }

  #filter-selector {
    &:hover {
      background: rgba(37, 37, 37, 0.9) !important;
    }
  }

  .Mui-focused {
    border: none !important;
  }

  svg {
    color: rgba(255, 255, 255, 0.3);
    transition: 0.3s;
  }
  svg:hover {
    color: rgba(255, 255, 255, 0.6);
  }
  button {
    outline: none !important;
    box-shadow: none;
  }
  button:active:focus {
    outline: none !important;
    box-shadow: none;
  }
`;

const IconContainer = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  img {
    width: 40%;
    max-width: 200px;
    height: auto;
    animation: float ease 4s infinite;
    object-fit: cover;
  }

  @keyframes float {
    0% {
      filter: drop-shadow(0 5px 7px rgba(0, 0, 0, 0.6));
      transform: translatey(0px);
    }
    50% {
      filter: drop-shadow(0 25px 7px rgba(0, 0, 0, 0.2));
      transform: translatey(-20px);
    }
    100% {
      filter: drop-shadow(0 5px 7px rgba(0, 0, 0, 0.6));
      transform: translatey(0px);
    }
  }
`;

const SkillsContainer = styled.section`
  position: relative;
  padding-top: 10vh;
  height: 30vh;
  min-width: 100%;
  display: -webkit-box;
  align-items: center;
  transition: 1.5s ease;
`;
const FilterContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 15px;
  outline: none !important;

  #filter-selector {
    background: #373737;
    padding: 12px 32px;
    outline: none !important;
  }
`;
const InfosContainer = styled.section`
  position: relative;
  height: 60vh;
  max-height: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 1.5s;

  .skill-dot {
    transition: 0.5s !important;
  }

  .skill-dot:hover {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.4);
    /*transform: scale3d(2.8, 2.8, 1);*/
    width: 8px !important;
    height: 8px !important;
  }

  #infos {
    width: 80%;
    max-width: 1000px;
    height: 60%;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    box-shadow: 0 0px 7px rgba(255, 255, 255, 0.2),
      inset 0 0px 7px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(1.8px);
    -webkit-backdrop-filter: blur(1.8px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    z-index: 3;
    padding: 3vh 3vw;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    svg {
      width: 20px;
      height: 20px;
      font-size: 1.5rem;
      transition: 0.5s;
      transform: scale3d(1.4, 1.4, 1);
    }

    h4 {
      color: #fafafa;
      opacity: 0.7;
      font-weight: bold;
      letter-spacing: 1px;
      width: 80px;
    }
    svg:hover {
      transform: scale3d(1.7, 1.7, 1);
      cursor: help;
    }
  }
`;

const AnimationContainer = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  top: 20%;
  left: 30%;
  animation: 360s station_moves 1 ease-out forwards,
    10s station_floating ease infinite 360s;

  #space_station {
    width: 60%;
    position: absolute;
    z-index: 1;
  }

  #astronaut {
    width: 10%;
    position: absolute;
    top: 16%;
    left: 22%;
    transform: rotate(80deg);
    z-index: 3;
  }

  #welding_object {
    position: absolute;
    top: 18.7%;
    border-radius: 50%;
    left: 32%;
    width: 1px;
    height: 1px;
    box-shadow: 0px 0px 10px 5px gold;
    transition: 0.3s;
    background: transparent;
    z-index: 2;
    animation: 5s welding_animation linear infinite;
  }

  @keyframes welding_animation {
    0% {
      box-shadow: 0px 0px 3px 0px gold;
    }
    1% {
      box-shadow: 0px 0px 20px 15px gold;
    }
    2% {
      box-shadow: 0px 0px 3px 0px gold;
    }

    8% {
      box-shadow: 0px 0px 3px 0px gold;
    }
    9% {
      box-shadow: 0px 0px 20px 15px gold;
    }
    10% {
      box-shadow: 0px 0px 20px 0px gold;
    }
    11% {
      box-shadow: 0px 0px 20px 15px gold;
    }
    12% {
      box-shadow: 0px 0px 20px 0px gold;
    }

    18% {
      box-shadow: 0px 0px 20px 0px gold;
    }
    19% {
      box-shadow: 0px 0px 20px 15px gold;
    }
    20% {
      box-shadow: 0px 0px 20px 0px gold;
    }

    30% {
      box-shadow: 0px 0px 20px 0px gold;
    }
    31% {
      box-shadow: 0px 0px 20px 15px gold;
    }
    32% {
      box-shadow: 0px 0px 20px 0px gold;
    }
    33% {
      box-shadow: 0px 0px 20px 15px gold;
    }
    34% {
      box-shadow: 0px 0px 20px 0px gold;
    }
    100% {
      box-shadow: 0px 0px 20px 0px gold;
    }
  }

  @keyframes station_floating {
    0% {
      transform: translate3d(0, 0, 0) rotate(100deg) scale3d(0.1, 0.1, 1);
    }
    50% {
      transform: translate3d(0, -10px, 0) rotate(100deg) scale3d(0.1, 0.1, 1);
    }
    100% {
      transform: translate3d(0, 0, 0) rotate(100deg) scale3d(0.1, 0.1, 1);
    }
  }

  @keyframes station_moves {
    0% {
      transform: scale3d(1, 1, 1) rotate(0deg);
      left: 0%;
      top: 90%;
    }
    100% {
      transform: scale3d(0.1, 0.1, 1) rotate(100deg);
      left: 80%;
      top: 0%;
    }
  }
`;

export default Skills;
