import styled from 'styled-components';
import { FC } from 'react';
import CustomLink from '../../routing/CustomLink';
import Image from 'next/image';
import COOKIE from '@/assets/icons/cookie_icon.png';

const CookiesCase: FC = () => {
  return (
    <MainContainer>
      <Image src={COOKIE} alt="Cookie" />
      <p>
        En utilisant ce site vous consentez à l'utilisation de{' '}
        <u>
          <CustomLink href={'/legal/cgu'}>cookies</CustomLink>
        </u>
      </p>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  width: 400px;
  gap: 20px;
  font-weight: 600;
  color: #fafafa99;

  img {
    filter: drop-shadow(#feb200 0 0 1px);
  }
  a {
    color: #feb20099;
    position: relative;
    z-index: 8;
    text-shadow: #feb20099 0 0 1px;
    cursor: pointer;

    &:hover {
      color: #feb200ff;

      text-shadow: #feb200 0 0 1px;
    }
  }
`;

export default CookiesCase;
