import styled from 'styled-components';
import { FC } from 'react';

const ContactCase: FC = () => {
  return (
    <MainContainer>
      <img src="/icons/contact_icon.png" alt="" />

      <a href="tel:+33 7 67 24 99 80">07 67 24 99 80</a>
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
    filter: drop-shadow(#68a852 0 0 1px);
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
