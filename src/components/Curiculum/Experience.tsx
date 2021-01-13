import React from 'react';
import styled from 'styled-components';

export type Props = {
  date: string;
  title: string;
  subtitle: string;
  note?: string;
  noteColor?: string;
};

const Experience: React.FC<Props> = ({
  date,
  title,
  subtitle,
  note = '',
  noteColor = '',
}) => {
  return (
    <MainContainer>
      <div className={'d-flex'}>
        <h3 className={'font-bold'}>{date}</h3>
        <div>
          <h4>{title}</h4>
          <p>
            {subtitle + ' '}
            <span style={{ color: noteColor }}>{note}</span>
          </p>
        </div>
      </div>
    </MainContainer>
  );
};

const MainContainer = styled.div``;

export default Experience;
