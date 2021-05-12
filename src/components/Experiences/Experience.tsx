import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LinkIcon from '@material-ui/icons/Link';
import LinkOffIcon from '@material-ui/icons/LinkOff';
import { Environment, Technology } from './data';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineDot from '@material-ui/lab/TimelineDot';
import CodeIcon from '@material-ui/icons/Code';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineItem from '@material-ui/lab/TimelineItem';
import { red } from '@material-ui/core/colors';
import { colors } from '@material-ui/core';
import styled from 'styled-components';

export type Props = {
  period: 'University' | 'DC' | 'Freelance';
  title: string;
  description: JSX.Element | string;
  collaboratorsAmount: number;
  date: string;
  environnements: Environment[];
  technologies: Technology[];
  link: string;
  icon: string;
  setExpanded: (name: string) => void;
  expandedXp: string;
  phone: boolean;
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

const periodPicker = (period) => {
  switch (period) {
    case 'University':
      return <MenuBookIcon />;
      break;
    case 'DC':
      return <MenuBookIcon />;
      break;
    case 'Freelance':
      return <CodeIcon />;
      break;
    default:
      return null;
  }
};

const Experience: React.FC<Props> = ({
  period,
  title,
  description,
  collaboratorsAmount,
  date,
  environnements,
  technologies,
  icon,
  link,
  expandedXp,
  setExpanded,
  phone,
}) => {
  console.log(expandedXp);
  return (
    <React.Fragment>
      <TimelineItem className={'experience-wrapper'} style={{}}>
        <TimelineOppositeContent
          style={{
            width: 150,
            display: phone ? 'none' : 'block',
          }}>
          <span style={{ color: '#acacac', fontFamily: 'Montserrat' }}>
            {date}
          </span>
        </TimelineOppositeContent>

        <TimelineSeparator>
          <TimelineDot color={period === 'Freelance' ? 'secondary' : 'primary'}>
            {periodPicker(period)}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent style={{ position: 'relative', width: '60%' }}>
          <Accordion
            expanded={expandedXp === title}
            onClick={() => setExpanded(title)}
            style={{ width: '100%' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header">
              <img
                src={icon}
                alt=""
                className={'w-8 h-7 mx-3 object-contain'}
              />
              <h2 style={{ fontSize: phone ? '1rem' : '1.3rem' }}>{title}</h2>
            </AccordionSummary>
            <AccordionDetails className={'flex flex-col'}>
              {description}
              <hr className={'my-5 w-3/4 mx-auto'} />
              {technologies.length !== 0 ? (
                <React.Fragment>
                  <h3
                    style={{
                      fontFamily: 'BebasNeue',
                      fontSize: 20,
                      alignSelf: 'flex-start',
                    }}>
                    Technologies
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-8 gap-4 mb-8">
                    {displayTechnology(technologies)}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'BebasNeue',
                      fontSize: 20,
                      alignSelf: 'flex-start',
                    }}>
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
                <Link href={link || '#'} target={link && '_blank'}>
                  {link ? <LinkIcon /> : <LinkOffIcon />}
                </Link>
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

const Link = styled.a``;

export default Experience;
