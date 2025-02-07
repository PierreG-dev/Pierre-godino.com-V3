import { useCallback, Fragment, FC } from 'react';
import Router from 'next/router';
import { handleStart } from '../../../../pages/_app';
export type Props = {
  href: string;
  children: any;
  notALink?: boolean;
  button?: boolean;
  style?: any;
  disabled?: boolean;
};

const CustomLink: FC<Props> = ({
  href,
  children,
  notALink = false,
  button = false,
  style,
  disabled,
}) => {
  const handlePageChange = useCallback(
    (e) => {
      e.preventDefault();
      handleStart();
      setTimeout(() => {
        Router.push(href);
      }, 500);
    },
    [href]
  );
  return (
    <Fragment>
      {notALink ? (
        button ? (
          <button style={style} onClick={handlePageChange}>
            {children}
          </button>
        ) : (
          <div style={style} onClick={handlePageChange}>
            {children}
          </div>
        )
      ) : disabled ? (
        <a
          title="Arrive bientôt"
          style={{
            ...style,
            color: 'rgba(100,100,100,0.8)',
            textShadow: 'none',
            cursor: 'help',
          }}
          href={href}
          onClick={(e) => e.preventDefault()}>
          {children}
        </a>
      ) : (
        <a style={style} href={href} onClick={handlePageChange}>
          {children}
        </a>
      )}
    </Fragment>
  );
};

export default CustomLink;
