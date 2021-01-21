import React from 'react';
import styled from 'styled-components';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export type Props = {
  period: 'University' | 'DC' | 'Freelance';
  title: string;
  description: JSX.Element | string;
  collaboratorsAmount: number;
  date: string;
};

const displayCollaborators = (collaboratorsAmount?: number) => {
  return (
    <React.Fragment>
      <img src="/icons/man.png" alt="" />
      <img src="/icons/man.png" alt="" />
      <img src="/icons/man.png" alt="" />
    </React.Fragment>
  );
};

const Experience: React.FC<Props> = ({
  period,
  title,
  description,
  collaboratorsAmount,
  date,
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
          <hr className={'my-5 w-3/4 mx-auto'} />
          <div className="grid grid-cols-7">
            <div>issou</div>
            <div>issou</div>
            <div>issou</div>
            <div>issou</div>
            <div>issou</div>
            <div>issou</div>
            <div>issou</div>
          </div>
          <div className="flex justify-between items-end mt-7">
            <p className={'date-container'}>{date}</p>
            <div className={'flex collaborators-container'}>
              {displayCollaborators()}
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

  .collaborators-container {
    img {
      width: 40px;
      height: auto;
    }
  }

  .date-container {
    font-size: 20px;
    font-family: BebasNeue;
  }
`;

export default Experience;
