import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';

type IProps = {
  content: React.ReactNode;
};

const Title: FC<IProps> = ({ content, children }) => {
  const targetedElementRef = useRef<HTMLDivElement>();
  const [isContentVisible, setIsContentVisible] = useState<boolean>(false);

  const handleShowContent = useCallback(() => {
    setIsContentVisible(true);
  }, []);
  const handleHideContent = useCallback(() => {
    setIsContentVisible(false);
  }, []);

  useEffect(() => {
    if (!targetedElementRef.current) return;
    const element = targetedElementRef.current;
    element.addEventListener('mouseenter', handleShowContent);
    element.addEventListener('mouseleave', handleHideContent);

    return () => {
      element.removeEventListener('mouseenter', handleShowContent);
      element.removeEventListener('mouseleave', handleHideContent);
    };
  }, [handleHideContent, handleShowContent]);

  const floatingContent = useMemo(
    () => (
      <div
        className="floating-content"
        style={{ visibility: isContentVisible ? 'visible' : 'hidden' }}>
        {content}
      </div>
    ),
    [content, isContentVisible]
  );

  return (
    <MainContainer>
      {floatingContent}
      <div ref={targetedElementRef}>{children}</div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  position: relative;
  cursor: help;

  .floating-content {
    border: 1px solid #fafafa66;
    background: #2d343655;
    backdrop-filter: blur(5px);
    z-index: 1;
    padding: 20px;
    border-radius: 15px;
    position: absolute;
    top: 100%;
    left: 100%;
    width: 600px;
    max-width: 100vw;
    text-decoration: none;

    p {
      font-size: 0.9rem;
      margin-bottom: 20px;
    }

    ul {
      font-size: 0.8rem;

      li {
        margin-bottom: 5px;
      }
    }
  }

  & > * {
    text-decoration: underline dotted #fafafa;
  }
`;

export default Title;
