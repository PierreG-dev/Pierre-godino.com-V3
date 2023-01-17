import { useCallback, Fragment } from 'react';
import Router from 'next/router';
import { handleStart } from '../../../../pages/_app';
export type Props = {
  href: string;
  children: any;
  notALink?: boolean;
  button?: boolean;
  style?: any;
};

const CustomLink: React.FC<Props> = ({
  href,
  children,
  notALink = false,
  button = false,
  style,
}) => {
  const handlePageChange = useCallback(() => {
    handleStart();
    setTimeout(() => {
      Router.push(href);
    }, 500);
  }, [href]);
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
      ) : (
        <a style={style} onClick={handlePageChange}>
          {children}
        </a>
      )}
    </Fragment>
  );
};

export default CustomLink;
