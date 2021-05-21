import React, { useState } from 'react';
import Layout from '../../src/components/Layout';
import { NextPage } from 'next';
import styled from 'styled-components';

const Skills: NextPage = () => {
  const [displayedSkill, setDisplayedSkill] = useState('1');

  const displaySkills = () => {
    return <p>SKILLS</p>;
  };

  return (
    <Layout>
      <MainContainer>
        <img className={'background'} src="/res/skills-background.jpg" alt="" />
        <div
          style={{
            background: "url('/res/overlay.png')",
            height: '100%',
            width: '100%',
            position: 'absolute',
            opacity: 0.3,
            zIndex: -1,
            filter: 'contrast(1.5)',
          }}
        />
        <FilterContainer>FILTRE</FilterContainer>
        <SkillsContainer>{displaySkills()}</SkillsContainer>
        <section></section>
      </MainContainer>
    </Layout>
  );
};
const SkillsContainer = styled.div`
  position: relative;
`;
const FilterContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 15px;
`;
const MainContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -2;
  }
`;

export default Skills;
