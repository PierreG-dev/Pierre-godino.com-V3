import styled from 'styled-components';
import { FC } from 'react';
import Image from 'next/image';
import PHONE from '@/assets/icons/contact_icon.png';

const ContactCase: FC = () => {
  return (
    <MainContainer>
      <Image src={PHONE} alt="téléphone" />

      <a href="tel:+33767249980">
        <u>07 67 24 99 80</u>
      </a>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  font-size: 1.4rem;
  font-weight: 600;

  img {
    filter: drop-shadow(#68a852 0 0 1 px);
  }

  a {
    color: #68a85266;
    z-index: 8;
    text-shadow: #68a852 0 0 1px;

    &:hover {
      color: #68a852ff;
    }
  }
`;

export default ContactCase;
