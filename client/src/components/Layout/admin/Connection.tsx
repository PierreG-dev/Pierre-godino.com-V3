import React from 'react';
import styled from 'styled-components';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CellTowerIcon from '@mui/icons-material/CellTower';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface Location {
  country: string;
  region: string;
  city: string;
  zip: string;
  latitude: string | number;
  longitude: string | number;
}

interface Dataset {
  ip: string;
  location: Location;
  timeSpent: number;
  journey: string[];
  date: string;
  time: string;
  device: string;
}

export type Props = {
  connexionData: Dataset;
};

const Connection: React.FC<Props> = ({ connexionData }) => {
  return (
    <li style={{ marginTop: 10 }}>
      <Accordion style={{ background: '#f7f1e3cc' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <AccordionHeader>
            <p>
              <CellTowerIcon /> {connexionData.ip}
            </p>
            <p>
              <CalendarMonthIcon />
              {connexionData.date}
            </p>
          </AccordionHeader>
        </AccordionSummary>
        <AccordionDetails>
          <AccordionContent>
            <div>
              <ul>
                <li>
                  <b>Ville:</b> <span>{connexionData.location.city}</span>
                </li>
                <li>
                  <b>Région:</b> <span>{connexionData.location.region}</span>
                </li>
                <li>
                  <b>Code postal:</b> <span>{connexionData.location.zip}</span>
                </li>
              </ul>

              <ul>
                <li>
                  <b>Appareil:</b> <span>{connexionData.device}</span>
                </li>
                <li>
                  <b>Durée session:</b>{' '}
                  <span>{connexionData.timeSpent / 60} Minutes</span>
                </li>
                <li>
                  <b>Heure de connexion:</b> <span>{connexionData.time}</span>
                </li>
              </ul>
            </div>
            <hr />
            <footer>
              {connexionData.journey.map((page, key) => (
                <span key={key}>
                  {page}{' '}
                  {key !== connexionData.journey.length - 1 ? (
                    <ArrowForwardIosIcon
                      style={{
                        opacity: 0.8,
                        fontSize: '1rem',
                        margin: '0 8px',
                      }}
                    />
                  ) : (
                    ''
                  )}
                </span>
              ))}
            </footer>
          </AccordionContent>
        </AccordionDetails>
      </Accordion>
    </li>
  );
};

const AccordionHeader = styled.div`
  display: flex;
  color: #373737;
  gap: 30vw;
  align-items: center;
  width: 100%;

  p {
    width: 20%;
  }
`;

const AccordionContent = styled.div`
  color: #373737;

  hr {
    margin: 10px;
    border-color: rgba(0, 0, 0, 0.2);
  }

  ul {
    li {
      span {
        letter-spacing: 1px;
        font-weight: 600;
        font-size: 0.9rem;
      }
    }
  }

  div {
    display: flex;
    gap: 30vw;
  }

  footer {
    display: flex;
    flex-wrap: wrap;

    span {
      font-weight: bold;
      font-size: 0.8rem;
    }
  }
`;

export default Connection;
