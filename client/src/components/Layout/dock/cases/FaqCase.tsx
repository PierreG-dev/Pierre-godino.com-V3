import styled from 'styled-components';
import { FC } from 'react';
import CustomLink from '../../routing/CustomLink';
import Image from 'next/image';
import FAQ from '@/assets/icons/question.png';

const FaqCase: FC = () => {
  return (
    <MainContainer>
      <Image src={FAQ} alt="FAQ" width={50} height={50}/>
      <p>
        Une question ? Visitez la{' '}
        <u>
          <CustomLink href={'/faq-creation-site-internet'}>FAQ</CustomLink>
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

export default FaqCase;
