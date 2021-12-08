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
      <h4 className={'font-bold w-1/4 text-base'}>{date}</h4>
      <div className={'w-3/4'}>
        <h4 className={'font-semibold text-base'}>{title}</h4>
        <p className={'font-semibold text-xs'} style={{ color: '#545454' }}>
          {subtitle + ' '}
          <span style={{ color: noteColor }}>{note}</span>
        </p>
      </div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  margin: 10px 0;
`;

export default Experience;
