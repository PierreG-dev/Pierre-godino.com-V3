import React from 'react';
import styled from 'styled-components';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Environment, Technology } from './data';
import { element } from 'prop-types';

export type Props = {
  period: 'University' | 'DC' | 'Freelance';
  title: string;
  description: JSX.Element | string;
  collaboratorsAmount: number;
  date: string;
  environnements: Environment[];
  technologies: Technology[];
  link: string;
};

const displayCollaborators = (collaboratorsAmount: number) => {
  if (!collaboratorsAmount) return null;

  const finalElement: JSX.Element[] = [];

  for (let i = 0; i < collaboratorsAmount; ++i) {
    finalElement.push(
      <img
        key={i}
        src="/icons/man.png"
        alt="bonhomme"
        title={'collaborateur'}
      />
    );
  }

  return finalElement;
};

const displayEnvironnements = (environnements: Environment[]) => {
  if (!environnements) return null;

  return environnements.map((elem, key) => (
    <div className={'mini-card'} title={elem} key={key}>
      <img key={key} src={'/icons/' + elem + '.png'} alt={elem} />
    </div>
  ));
};

const displayTechnology = (technology: Technology[]) => {
  if (!technology) return null;

  return technology.map((elem, key) => (
    <div className={'mini-card'} title={elem} key={key}>
      <img key={key} src={'/icons/' + elem + '.png'} alt={elem} />
    </div>
  ));
};

const Experience: React.FC<Props> = ({
  period,
  title,
  description,
  collaboratorsAmount,
  date,
  environnements,
  technologies,
  link,
}) => {
  return (
    <MainContainer>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <img src="/icons/js.png" alt="" className={'w-5 h-5 my-auto mx-3'} />
          <h2>{title}</h2>
        </AccordionSummary>
        <AccordionDetails className={'flex flex-col'}>
          <p>{description}</p>
          <hr className={'my-5 w-3/4 mx-auto'} />
          {technologies.length !== 0 ? (
            <React.Fragment>
              <h3 style={{ fontFamily: 'BebasNeue', fontSize: 20 }}>
                Technologies
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-8 gap-4 mb-8">
                {displayTechnology(technologies)}
              </div>
              <h3 style={{ fontFamily: 'BebasNeue', fontSize: 20 }}>
                Environnement
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-8 gap-4">
                {displayEnvironnements(environnements)}
              </div>
              <hr className={'my-5 w-3/4 mx-auto'} />
            </React.Fragment>
          ) : null}
          <div className="flex justify-between items-end">
            <p className={'date-container'}>{date}</p>
            <div className={'flex collaborators-container'}>
              {displayCollaborators(collaboratorsAmount)}
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  position: relative;
  margin: 0 50px;
  width: auto;
  margin-bottom: 200px;

  h2 {
    font-family: BebasNeue;
    font-size: 1rem;
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
`;

export default Experience;
