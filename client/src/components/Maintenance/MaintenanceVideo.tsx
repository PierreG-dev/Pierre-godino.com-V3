import React, { useRef, useLayoutEffect } from 'react';

export type Props = {
  url: string;
  handleLoadingScreen: () => void;
};

const Video: React.FC<Props> = ({ url, handleLoadingScreen }) => {
  const videoRef = useRef(null);

  useLayoutEffect(() => {
    // @ts-ignore
    videoRef.current.play();
    console.info("i'm loading the video");
    handleLoadingScreen();
  }, [handleLoadingScreen]);

  return (
    <video
      ref={videoRef}
      loop
      muted
      style={{
        zIndex: 0,
        position: 'absolute',
        filter: 'blur(10px)',
        objectFit: 'cover',
        width: '100%',
        height: '100%',
      }}>
      <source src={url} type="video/webm" />
    </video>
  );
};

export default Video;
