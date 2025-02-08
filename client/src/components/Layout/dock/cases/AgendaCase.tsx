import styled from 'styled-components';
import { FC } from 'react';
import CustomLink from '../../routing/CustomLink';
import Image from 'next/image';
import AGENDA from '@/assets/icons/agenda_icon.png';

const AgendaCase: FC = () => {
  return (
    <MainContainer>
      <Image src={AGENDA} alt="Calendrier" width={50} height={50}/>
      <p>
        Consultez mes disponibilités{' '}
        <u>
          <CustomLink href={'/calendar'}>ICI</CustomLink>
        </u>
      </p>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  font-size: 1rem;
  font-weight: 600;
  color: #fafafa99;

  a {
    color: #fafafa66;
    position: relative;
    z-index: 8;
    text-shadow: #2ab2ea 0 0 1px;
    cursor: pointer;

    &:hover {
      color: #fafafa99;
    }
  }

  img {
    filter: drop-shadow(#2ab2ea 0 0 1px);
  }
`;

export default AgendaCase;
