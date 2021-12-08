import React, { useEffect, useState } from 'react';
import Layout from '../../src/components/Layout';
import { NextPage } from 'next';
import styled from 'styled-components';
import Select from '@material-ui/core/Select';
import data from '../../src/components/Skills/data';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { MenuItem } from '@material-ui/core';
import Bar from '../../src/components/Skills/bar';

import TimelapseIcon from '@material-ui/icons/Timelapse';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const Skills: NextPage = () => {
  const [displayedSkillId, setDisplayedSkillId] = useState(0);

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
              color: displayedSkillId === skill.id && 'rgba(0,0,0,0.5)',
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

  return (
    <Layout variant={'about'}>
      <MainContainer>
        {/*<img className={'background'} src="/res/skills-background.jpg" alt="" />*/}
        <div
          style={{
            background: 'url("/res/overlay.png")',
            height: '100%',
            width: '100%',
            position: 'absolute',
            opacity: 0.3,
            zIndex: 0,
            filter: 'contrast(1.5)',
          }}
        />

        <FilterContainer>
          <Select
            id={'filter-selector'}
            variant={'outlined'}
            value={data[displayedSkillId].name}
            onChange={(event: any): void => {
              setDisplayedSkillId(event.target.value);
            }}
            label="Age">
            <MenuItem value={data[displayedSkillId].name}>
              <p style={{ color: '#575757' }}>{data[displayedSkillId].name}</p>
            </MenuItem>
            {data.map((skill, key) => {
              return (
                <MenuItem value={skill.id} key={key}>
                  {skill.name}
                </MenuItem>
              );
            })}
          </Select>
        </FilterContainer>

        <button
          onClick={previousSkill}
          style={{
            position: 'absolute',
            top: '25%',
            left: '5%',
            zIndex: 2,
          }}>
          <ChevronLeftIcon
            fontSize={'large'}
            style={{ transform: 'scale3d(4,4,1' }}
          />
        </button>
        <button
          onClick={nextSkill}
          style={{
            position: 'absolute',
            top: '25%',
            right: '5%',
            zIndex: 2,
          }}>
          <ChevronRightIcon
            fontSize={'large'}
            style={{ transform: 'scale3d(4,4,1' }}
          />
        </button>

        <SkillsContainer
          style={{
            transform: `translate3d(${-(displayedSkillId * 100)}vw, 0,0)`,
          }}>
          {displaySkills()}
        </SkillsContainer>

        <InfosContainer>
          <div
            className={
              'w-full text-center flex justify-around items-center p-3 h-2 -mt-16 mb-12'
            }
            style={{ maxWidth: 1000 }}>
            {displayDots()}
          </div>
          <div id={'infos'}>
            <div className="flex items-center" title={'Expérience'}>
              <TimelapseIcon
                style={{
                  color: 'green',
                  filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.3))',
                }}
              />
              <Bar variant={'experience'} level={data[displayedSkillId].xp} />
            </div>
            <div className="flex items-center" title={'Maîtrise'}>
              <FitnessCenterIcon
                style={{
                  color: 'royalblue',
                  filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.3))',
                }}
              />
              <Bar variant={'mastery'} level={data[displayedSkillId].mastery} />
            </div>
            <div className="flex items-center" title={'Affinité'}>
              <FavoriteIcon
                style={{
                  color: 'orangered',
                  filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.3))',
                }}
              />
              <Bar
                variant={'affinity'}
                level={data[displayedSkillId].affinity}
              />
            </div>
          </div>
        </InfosContainer>
      </MainContainer>
    </Layout>
  );
};
const IconContainer = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

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
  height: 40vh;
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

  #filter-selector {
    background: #fafafa;
    padding: 12px 32px;
  }
`;
const InfosContainer = styled.section`
  position: relative;
  height: 60vh;
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
    color: rgba(0, 0, 0, 0.4);
    /*transform: scale3d(2.8, 2.8, 1);*/
    width: 8px !important;
    height: 8px !important;
  }

  #infos {
    width: 80%;
    max-width: 1000px;
    height: 60%;
    background: rgba(255, 255, 255, 0.6);
    z-index: 3;
    padding: 3vh 3vw;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  svg {
    transition: 0.5s;
    transform: scale3d(1.4, 1.4, 1);
  }
  svg:hover {
    transform: scale3d(1.7, 1.7, 1);
    cursor: help;
  }
`;
const MainContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  background: url('/res/skills-background.jpg');
  background-size: cover;

  svg {
    color: rgba(0, 0, 0, 0.3);
    transition: 0.3s;
  }
  svg:hover {
    color: rgba(0, 0, 0, 0.6);
  }
  button {
    outline: none !important;
    box-shadow: none;
  }
  button:active:focus {
    outline: none !important;
    box-shadow: none;
  }
  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -2;
  }
`;

export default Skills;
