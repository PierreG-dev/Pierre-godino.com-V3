import React from 'react';
import styled from 'styled-components';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CellTowerIcon from '@mui/icons-material/CellTower';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SkipNextIcon from '@mui/icons-material/SkipNext';

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
      <Accordion style={{ background: 'rgba(255,255,255,1)' }}>
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
                <li>Ville: {connexionData.location.city}</li>
                <li>Région: {connexionData.location.region}</li>
                <li>Code postal: {connexionData.location.zip}</li>
              </ul>

              <ul>
                <li>Appareil: {connexionData.device}</li>
                <li>Durée session: {connexionData.timeSpent / 60} Minutes</li>
                <li>Heure de connexion: {connexionData.time}</li>
              </ul>
            </div>
            <hr />
            <footer>
              {connexionData.journey.map((page, key) => (
                <span key={key}>
                  {page}{' '}
                  {key !== connexionData.journey.length - 1 ? (
                    <SkipNextIcon />
                  ) : null}
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

  div {
    display: flex;
    gap: 30vw;
  }

  footer {
    display: flex;
    flex-wrap: wrap;
  }
`;

export default Connection;
