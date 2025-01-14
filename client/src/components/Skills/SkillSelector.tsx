import {
  FC,
  MouseEvent,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import skillsData from './data';
import styled from 'styled-components';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type IProps = {
  displayedSkillId: number;
  setDisplayedSkillId: React.Dispatch<SetStateAction<number>>;
};

const SkillSelector: FC<IProps> = ({
  displayedSkillId,
  setDisplayedSkillId,
}) => {
  const selectorRef = useRef(null);
  const [isListDisplayed, setIsListDisplayed] = useState<boolean>(false);

  const handleClick = useCallback((e) => {
    if (!(e.target as any).contains(selectorRef.current))
      setIsListDisplayed(false);
  }, []);

  useEffect(() => {
    if (!isListDisplayed) return;

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [handleClick, isListDisplayed]);

  return (
    <MainContainer>
      <div className="wrapper" ref={selectorRef}>
        <div
          className={`selected-skill-container ${
            isListDisplayed ? 'list-visible' : ''
          }`}
          onClick={() => setIsListDisplayed((prev) => !prev)}>
          <h4 className="selected-skill">
            {skillsData[displayedSkillId].name}
          </h4>
          <ExpandMoreIcon
            style={{
              transform: isListDisplayed ? 'rotate3d(0, 0, 1, -180deg)' : '',
            }}
          />
        </div>
        <ul
          className="skills-list"
          style={{ height: isListDisplayed ? 'fit-content' : 0 }}>
          {skillsData.map((skillItem, key: number) => (
            <li
              className={`skill-item ${
                displayedSkillId === key ? 'selected' : ''
              }`}
              onClick={() => setDisplayedSkillId(key)}>
              <img src={skillItem.icon} alt={skillItem.name} />
              <h5>{skillItem.name}</h5>
            </li>
          ))}
        </ul>
      </div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;

  .wrapper {
    position: relative;
    width: 250px;
    min-width: fit-content;
    max-width: 80vw;
    height: 80px;
    z-index: 5;

    @media (max-width: 800px) {
      width: 210px;
      height: 70px;
    }

    div.selected-skill-container {
      position: relative;
      display: flex;
      gap: 25px;
      height: 100%;
      width: 100%;
      cursor: pointer;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.3);
      box-shadow: 0 0px 7px rgba(255, 255, 255, 0.2),
        inset 0 0px 7px rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(1px);
      border-radius: 5px;
      padding: 15px 30px;

      &:hover,
      &.list-visible {
        background: rgba(255, 255, 255, 0.1);
      }

      h4.selected-skill {
        height: 100%;
        width: 100%;
        color: rgba(255, 255, 255, 0.8);
        font-family: 'Montserrat';
        font-weight: bold;
        letter-spacing: 3px;
        font-size: 2.3rem;
        display: flex;
        justify-content: center;
        align-items: center;

        @media (max-width: 800px) {
          font-size: 1.5rem;
        }
      }

      svg {
        position: absolute;
        right: calc((-100% - 64px) / 4);
        top: calc((100% - 64px) / 2);
        font-size: 4rem;

        @media (max-width: 800px) {
          display: none;
        }
      }
    }

    ul.skills-list {
      position: absolute;
      width: fit-content;
      height: 0px;
      top: 100%;
      right: calc((-160px));
      overflow: auto;
      transition: 0.5s;
      border-radius: 5px;
      max-height: 300px;

      @media (max-width: 800px) {
        position: unset;
      }
      li.skill-item {
        background: rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
        gap: 10px;
        color: rgba(255, 255, 255, 0.8);
        padding: 15px;
        backdrop-filter: blur(2px);
        font-weight: bold;
        cursor: pointer;

        &:hover,
        &.selected {
          background: rgba(255, 255, 255, 0.2);
        }

        img {
          height: 20px;
          width: 20px;
          object-fit: cover;
        }
      }
    }
  }
`;

export default SkillSelector;
