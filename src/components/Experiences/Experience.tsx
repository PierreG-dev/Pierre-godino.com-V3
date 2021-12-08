import React, { useEffect, useState, useCallback } from 'react';
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
import confetti from 'canvas-confetti';
import { useInView } from 'react-intersection-observer';

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
  actual: boolean;
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
      return (
        <div title={'University'} style={{ cursor: 'help' }}>
          <MenuBookIcon />
        </div>
      );
      break;
    case 'DC':
      return (
        <div title={'Digital-Campus'} style={{ cursor: 'help' }}>
          <MenuBookIcon />
        </div>
      );
      break;
    case 'Freelance':
      return (
        <div title={'Freelance'} style={{ cursor: 'help' }}>
          <CodeIcon />
        </div>
      );
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
  actual,
  success,
}) => {
  const [confettisDisplayed, setConfettisDisplayed] = useState(false);

  const displayConfettis = useCallback(() => {
    if (success && !confettisDisplayed) {
      const end = Date.now() + 0.7 * 1000;

      const colors = ['#e74c3c', '#f1c40f', '#e67e22', '#8e44ad'];

      (function frame() {
        confetti({
          particleCount: 4,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors,
        });
        confetti({
          particleCount: 4,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
      setConfettisDisplayed(true);
    }
  }, [confettisDisplayed]);

  return (
    <React.Fragment>
      <TimelineItem className={'experience-wrapper'}>
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
            onClick={() => {
              setExpanded(title);
              displayConfettis();
            }}
            style={{
              width: '100%',
              background: actual
                ? 'rgba(155,253,113,0.63)'
                : 'rgba(250,250,250,0.79)',
              color: actual ? '#fafafa' : '#373737',
            }}>
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
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-8 gap-6 flex-wrap">
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
