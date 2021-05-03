import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Environment, Technology } from './data';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineItem from '@material-ui/lab/TimelineItem';

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
    <React.Fragment>
      <TimelineItem className={'experience-wrapper'}>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            9:30 am
          </Typography>
        </TimelineOppositeContent>

        <TimelineSeparator>
          <TimelineDot>
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header">
              <img
                src="/icons/js.png"
                alt=""
                className={'w-5 h-5 my-auto mx-3'}
              />
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
        </TimelineContent>
      </TimelineItem>
    </React.Fragment>
  );
};

export default Experience;
