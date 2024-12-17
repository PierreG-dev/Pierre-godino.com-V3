import React from 'react';
import styled from 'styled-components';

export type Props = {
  date: string;
  title: string;
  subtitle: string;
  note?: string;
  noteColor?: string;
  titleColor?: string;
  actual?: boolean;
  img?: string;
};

const Experience: React.FC<Props> = ({
  date,
  title,
  subtitle,
  note = '',
  noteColor = '',
  titleColor = '',
  actual = false,
  img = '',
}) => {
  return (
    <MainContainer>
      <h4
        className={'font-bold w-1/4 text-base leading-3 text-center'}
        style={{
          transform: actual ? 'translateY(3px)' : 'none',
          color: actual ? '#68a852' : 'inherit',
        }}>
        {date}
        {actual ? (
          <div>
            <small style={{ fontSize: '0.6rem' }}>(actuel)</small>
          </div>
        ) : (
          <div></div>
        )}
      </h4>
      <div className={'w-3/4'}>
        <h4
          className={'font-semibold text-base'}
          style={{
            color: titleColor ? titleColor : actual ? '#68a852' : 'inherit',
          }}>
          {title}
        </h4>
        <p className={'font-semibold text-xs'} style={{ color: '#545454' }}>
          {img && <img src={img} alt={subtitle} loading="lazy" />}
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

  h4 {
    line-height: 15px;
  }

  p {
    display: flex;
    gap: 5px;
    align-items: center;

    img {
      width: 20px;
      height: 20px;
      border-radius: 5px;
      filter: none;
      object-fit: contain;
    }
  }
`;

export default Experience;
