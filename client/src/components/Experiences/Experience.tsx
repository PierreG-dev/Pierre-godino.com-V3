import React, { useState, useCallback } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LinkIcon from '@mui/icons-material/Link';
import LinkOffIcon from '@mui/icons-material/LinkOff';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineDot from '@mui/lab/TimelineDot';
import CodeIcon from '@mui/icons-material/Code';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineItem from '@mui/lab/TimelineItem';
import styled from 'styled-components';
import confetti from 'canvas-confetti';
import { Skill } from '../Skills/data';
import CustomLink from '../Layout/routing/CustomLink';

export type Props = {
  period: 'University' | 'DC' | 'Freelance';
  title: string;
  description: JSX.Element | string;
  collaboratorsAmount: number;
  date: string;
  environnements: Skill[];
  technologies: Skill[];
  link: string;
  icon: string;
  setExpanded: (name: string) => void;
  expandedXp: string;
  phone: boolean;
  actual: boolean;
  success: boolean;
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

const displayEnvironnements = (environnements: Skill[]) => {
  if (!environnements) return null;

  return environnements.map((elem, key) => (
    <CustomLink href={`/about/skills/${elem.id}`}>
      <div
        className={'mini-card cursor-pointer'}
        title={elem.name}
        key={elem.id}>
        <img key={elem.id} src={elem.icon} alt={elem.name} />
      </div>
    </CustomLink>
  ));
};

const displayTechnology = (technology: Skill[]) => {
  if (!technology) return null;

  return technology.map((elem, key) => (
    <CustomLink href={`/about/skills/${elem.id}`}>
      <div
        className={'mini-card cursor-pointer'}
        title={elem.name}
        key={elem.id}>
        <img key={elem.id} src={elem.icon} alt={elem.name} />
      </div>
    </CustomLink>
  ));
};

const periodPicker = (period) => {
  switch (period) {
    case 'University':
      return (
        <div
          title={'Université des Sciences Toulouse III'}
          style={{ cursor: 'help' }}>
          <MenuBookIcon />
        </div>
      );

    case 'DC':
      return (
        <div title={'Digital-Campus'} style={{ cursor: 'help' }}>
          <MenuBookIcon />
        </div>
      );

    case 'Freelance':
      return (
        <div title={'Indépendant'} style={{ cursor: 'help' }}>
          <CodeIcon />
        </div>
      );

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
  }, [confettisDisplayed, success]);

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
          <TimelineDot
            className={'timeline-separator-exp'}
            color={period === 'Freelance' ? 'secondary' : 'primary'}>
            {periodPicker(period)}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent style={{ position: 'relative', width: '60%' }}>
          <Accordion
            className={
              'experience-accordion' +
              (actual ? ' actual' : '') +
              (expandedXp === title ? ' expanded' : '')
            }
            expanded={expandedXp === title}
            style={{
              width: '100%',
              background: actual
                ? 'rgba(155,253,113,0.5)'
                : 'rgba(255,255,255,0.5)',
              color: actual ? '#fafafa' : '#373737',
            }}>
            <AccordionSummary
              onClick={(e) => {
                setExpanded(title);
                displayConfettis();
              }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header">
              <img
                src={icon}
                alt=""
                className={'w-8 h-7 mx-3 object-contain rounded-md'}
              />
              <h2
                className="accordion-title"
                style={{ fontSize: phone ? '1rem' : '1.3rem' }}>
                {title}
              </h2>
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
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4 mb-8">
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
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4 mb-8">
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
