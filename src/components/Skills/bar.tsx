import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export type Props = {
  variant: 'experience' | 'mastery' | 'affinity';
  level: 1 | 2 | 3 | 4;
};

const Bar: React.FC<Props> = ({ variant, level }) => {
  const [width, setWidth] = useState('1%');

  useEffect(() => {
    if (width === '1%') widthPicker(level);
    else
      setTimeout(() => {
        widthPicker(level);
      }, 1500);
  }, [level]);

  const colorPicker = (
    variant: 'experience' | 'mastery' | 'affinity'
  ): string => {
    switch (variant) {
      case 'experience':
        return 'lightgreen';
      case 'mastery':
        return 'dodgerblue';
      case 'affinity':
        return 'orangered';
      default:
        console.error('bar color error');
    }
  };

  const widthPicker = (level: 1 | 2 | 3 | 4): void => {
    switch (level) {
      case 1:
        setWidth('26%');
        break;
      case 2:
        setWidth('51%');
        break;
      case 3:
        setWidth('76%');
        break;
      case 4:
        setWidth('101%');
        break;
      default:
        console.error('bar level error');
    }
  };

  return (
    <MainContainer>
      <Filler style={{ background: colorPicker(variant), width: width }} />
      <div className="graduation" style={{ left: '25%' }}></div>
      <div className="graduation" style={{ left: '50%' }}></div>
      <div className="graduation" style={{ left: '75%' }}></div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 90%;
  height: 17px;
  position: relative;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  overflow-x: hidden;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  margin-left: 20px;
  .graduation {
    position: absolute;
    top: 0;
    width: 1px;
    height: 100%;
    z-index: 4;
    background: rgba(0, 0, 0, 0.3);
  }
`;

const Filler = styled.div`
  width: 0;
  position: absolute;
  height: 15px;
  border-radius: 0 30px 30px 0;
  top: 0;
  left: 0;
  transition: 1s ease;
`;
export default Bar;
