import Image from 'next/image';
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
  img?: any;
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
      <div className={'right-exp-side'}>
        <h4
          style={{
            color: titleColor ? titleColor : actual ? '#68a852' : 'inherit',
          }}>
          {title}
        </h4>
        <p style={{ color: '#545454' }}>
          {img && (
            <Image
              width={20}
              height={20}
              src={img}
              alt={subtitle}
              loading="lazy"
            />
          )}
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

  & > h4 {
    line-height: 15px;
    font-weight: bold;
    width: 25%;
    text-align: center;
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

  .right-exp-side {
    width: 75%;

    h4 {
      font-weight: 600;
      font-size: 1rem;
    }

    p {
      font-weight: 600;
      font-size: 0.75rem;
    }
  }
`;

export default Experience;
