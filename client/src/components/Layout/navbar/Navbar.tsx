import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CustomLink from '../routing/CustomLink';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import ForumIcon from '@mui/icons-material/Forum';
import WorkIcon from '@mui/icons-material/Work';
import AssignmentIcon from '@mui/icons-material/Assignment';
import NewspaperIcon from '@mui/icons-material/Newspaper';

export type displayType = 'full' | 'displayed' | 'navbar';

export type Props = {
  loaded: boolean;
  noLayoutMode: boolean;
};

const Navbar: React.FC<Props> = ({ loaded, noLayoutMode }) => {
  const navRef = useRef();
  const [displayed, setDisplayed] = useState<displayType>('full');
  const [dropdownDisplay, setDropdownDisplay] = useState(false);

  useEffect(() => {
    if (!loaded) setDisplayed('full');
    else setDisplayed('displayed');
  }, [loaded]);

  useEffect(() => {
    if (displayed !== 'navbar') return;
    const navElement = navRef.current;

    const handleNavClick = (e: any) => {
      if (!navElement) return;
      if (
        e.target !== navElement &&
        !(navElement as HTMLElement).contains(e.target as any)
      )
        setDisplayed('displayed');
    };

    window.addEventListener('click', handleNavClick);
    return () => window.removeEventListener('click', handleNavClick);
  }, [displayed]);

  const toggleNavbar = useCallback(() => {
    if (displayed === 'full') return;
    else if (displayed === 'displayed') setDisplayed('navbar');
    else setDisplayed('displayed');
  }, [displayed]);

  const isNotchAvailable = useMemo(() => {
    if (loaded && window.innerWidth < 550) return true;
    else return false;
  }, [loaded]);

  const translationPicker = useCallback((): displayType => {
    switch (displayed) {
      case 'full':
        return 'full';
      case 'displayed':
        return 'displayed';
      case 'navbar':
        return 'navbar';
      default:
        return 'displayed';
    }
  }, [displayed]);

  return (
    <MainContainer
      className={translationPicker()}
      style={{ display: noLayoutMode ? 'none' : 'block' }}
      ref={navRef}>
      <nav className={`${displayed === 'full' ? 'd-full' : ''}`}>
        <ul id="alt_links_list">
          <li className="" style={{ opacity: displayed === 'full' ? 0 : 1 }}>
            <CustomLink href={'/realisations/'}>
              {' '}
              <WorkIcon /> Réalisations
            </CustomLink>
          </li>
          <li
            className="effect-underl"
            style={{ opacity: displayed === 'full' ? 0 : 1 }}>
            <CustomLink href={'/prestations/'}>
              {' '}
              <AssignmentIcon /> Prestations
            </CustomLink>
          </li>{' '}
          <li className="" style={{ opacity: displayed === 'full' ? 0 : 1 }}>
            <CustomLink href={'/contact/'}>
              {' '}
              <ForumIcon /> Contact
            </CustomLink>
          </li>{' '}
          <li className="" style={{ opacity: displayed === 'full' ? 0 : 1 }}>
            <CustomLink href={'/a-propos/'}>
              {' '}
              <PersonSearchIcon /> A propos
            </CustomLink>
          </li>
          <li className="" style={{ opacity: displayed === 'full' ? 0 : 1 }}>
            <CustomLink href={'/blog/'}>
              {' '}
              <NewspaperIcon /> Blog
            </CustomLink>
          </li>
          <li className="" style={{ opacity: displayed === 'full' ? 0 : 1 }}>
            <CustomLink href={'/'}>
              {' '}
              <HomeIcon /> Accueil
            </CustomLink>
          </li>
        </ul>
        <div className="flex column justify-center">
          <div className="flex items-end justify-between">
            <div className="middle-square" />
            <div
              className={`notch ${isNotchAvailable && 'activated'}`}
              onClick={isNotchAvailable ? toggleNavbar : null}>
              {displayed !== 'full' && <MenuIcon />}
            </div>
          </div>
        </div>
        <ul id="links_list">
          <li
            className="effect-underline classic-link"
            style={{ opacity: displayed === 'full' ? 0 : 1 }}>
            <CustomLink href={'/realisations/'}>
              <WorkIcon />
              Réalisations
            </CustomLink>
          </li>
          <li
            className="effect-underline small-hidden classic-link"
            style={{ opacity: displayed === 'full' ? 0 : 1 }}>
            <CustomLink href={'/prestations/'}>
              {' '}
              <AssignmentIcon />
              Prestations
            </CustomLink>
          </li>
          <li>
            {isNotchAvailable ? (
              <img
                src="/res/LOGO.png"
                className="HomeLogo"
                alt="Logo"
                style={{
                  transform:
                    displayed === 'full'
                      ? 'translateY(20px)'
                      : 'translateY(-5px)',
                }}
                onClick={toggleNavbar}
              />
            ) : (
              <CustomLink href={'/'}>
                <img
                  src="/res/LOGO.png"
                  className="HomeLogo"
                  alt="Logo"
                  style={{
                    transform:
                      displayed === 'full'
                        ? 'translateY(20px)'
                        : 'translateY(-10px)',
                  }}
                />
              </CustomLink>
            )}
          </li>
          <li
            className="effect-underline classic-link"
            style={{ opacity: displayed === 'full' ? 0 : 1 }}>
            <CustomLink href={'/contact/'}>
              <ForumIcon />
              Contact
            </CustomLink>
          </li>
          <li
            className="small-hidden"
            style={{ opacity: displayed === 'full' ? 0 : 1 }}>
            <div>
              <div
                id="custom_nav_dropdown"
                onMouseEnter={() => setDropdownDisplay(true)}
                onMouseLeave={() => setDropdownDisplay(false)}>
                <CustomLink href="/a-propos/">
                  <PersonSearchIcon />A propos
                </CustomLink>
                <KeyboardArrowDownIcon
                  style={{
                    transform: dropdownDisplay
                      ? 'rotate(180deg)'
                      : 'rotate(0deg)',
                    transition: '0.2s',
                  }}
                />
                <ul
                  style={{
                    maxHeight: dropdownDisplay ? 1000 : 0,
                    boxShadow: dropdownDisplay
                      ? '0 1px 5px 1px rgba(0, 0, 0, 0.3)'
                      : 'none',
                  }}>
                  <li style={{ display: dropdownDisplay ? 'block' : 'none' }}>
                    <CustomLink href={'/blog/'}>Blog</CustomLink>
                  </li>
                  <li style={{ display: dropdownDisplay ? 'block' : 'none' }}>
                    <CustomLink href={'/a-propos/technologies/'}>
                      Technologies
                    </CustomLink>
                  </li>
                  <li style={{ display: dropdownDisplay ? 'block' : 'none' }}>
                    <CustomLink href={'/a-propos/experiences/'}>
                      Expériences
                    </CustomLink>
                  </li>
                  <li style={{ display: dropdownDisplay ? 'block' : 'none' }}>
                    <CustomLink href={'/a-propos/curiculum/'}>CV</CustomLink>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: calc(50%);
  z-index: 10;
  transition: 0.5s ease;
  transform: translate3d(0, -80%, 0);

  &.displayed {
    transform: translate3d(0, calc(-100% + 65px), 0);
  }

  &.navbar {
    transform: translate3d(0, calc(-100% + 220px), 0);

    @media (max-width: 315px) {
      transform: translate3d(0, calc(-100% + 250px), 0);
    }

    nav {
      backdrop-filter: blur(5px);

      .notch {
        backdrop-filter: blur(5px);
      }
      ul#alt_links_list {
        opacity: 1;
      }
    }
  }

  &.full {
    transform: translate3d(0, 0%, 0);
  }

  nav {
    position: absolute;
    display: flex;
    justify-content: space-around;
    width: 100vw;
    height: 50vh;
    background: #2d343655;
    z-index: 3;
    backdrop-filter: blur(1.8px);
    transition: 0.5s ease;

    #custom_nav_dropdown {
      position: relative;
      & > svg {
        cursor: pointer;
        @media (max-width: 1000px) {
          display: none;
        }
      }
    }

    #custom_nav_dropdown ul {
      position: absolute;
      right: 0;
      max-height: 0;
      min-width: 150px;
      width: 180px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      padding: 0 !important;
      border-radius: 5px;
      background: #2d343655;
      color: white;
      transition: 0.2s;

      @media (max-width: 1000px) {
        display: none;
      }

      li {
        margin-right: 0 !important;
        margin-left: 0 !important;
        animation: 0.2s links_slide_down ease-out 1;
        transition: 0.1s;
        width: 100% !important;
        max-width: 100% !important;
        position: relative !important;

        a {
          border-radius: 0 !important;
          color: rgba(255, 255, 255, 0.5) !important;
          transition: 0.2s;
          font-family: 'Montserrat';
          letter-spacing: 1px;
          width: 100% !important;
          display: block;
        }
      }

      a:hover {
        color: rgba(255, 255, 255, 0.8) !important;
        cursor: pointer;
        background: rgba(255, 255, 255, 0.02);
        /* text-shadow: 0 0 7px rgba(255, 255, 255, 0.3); */
      }

      a::after {
        content: none !important;
      }
    }
  }
  ul#alt_links_list {
    position: absolute;
    bottom: 65px;
    left: 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    z-index: 5;
    opacity: 0;
    gap: 5px;

    li {
      user-select: none;
      display: flex;
      justify-content: center;
      font-size: 0.9rem;

      @media (max-width: 480px) {
        margin: 2px;
        font-size: 0.75rem;

        svg {
          font-size: 0.9rem;
        }
      }

      a {
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 5px;
        width: 150px;
        background: rgba(255, 255, 255, 0.05);
        font-weight: 600;
        color: rgba(255, 255, 255, 0.5);
        padding: 5px 12px;
        border-radius: 5px;
        transition: 0.2s;
        font-family: 'Montserrat';
        letter-spacing: 1px;
        text-align: center;

        img {
          width: 20px;
          height: 20px;
        }
      }
    }
  }

  ul#links_list {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 65px;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    z-index: 5;

    & > li {
      user-select: none;
      position: relative;
      min-width: 10%;
      width: 20%;
      display: flex;
      justify-content: center;
      transition-delay: 4s;
      transition: 0.2s;
      font-size: 1.1rem;

      &.classic-link a:hover {
        background: rgba(255, 255, 255, 0.02);
        cursor: pointer;
        color: rgba(255, 255, 255, 0.8);
      }

      & #custom_nav_dropdown:hover a {
        color: rgba(255, 255, 255, 0.8);
      }

      &:not(:has(img)) {
        margin-bottom: 10px;

        @media (max-width: 550px) {
          visibility: hidden;
        }
      }

      &:hover {
        position: relative;
        max-width: 20%;
        width: 20%;
        min-width: 10%;
        display: flex;
        justify-content: center;
        transition-delay: 4s;
        transition: 0.2s;
        font-size: 1.1rem;
      }
      @media (max-width: 1000px) {
        display: flex;
        align-items: center;
        height: 50px;
      }
      @media (max-width: 550px) {
        word-break: break-all !important;
      }

      a,
      #custom_nav_dropdown {
        font-weight: 600;
        color: rgba(255, 255, 255, 0.5);
        padding: 5px 12px;
        border-radius: 5px;
        transition: 0.2s;
        font-family: 'Montserrat';
        letter-spacing: 1px;
        text-align: center;

        & > svg {
          margin-right: 5px;
          margin-top: -5px;
        }

        @media (max-width: 1000px) {
          font-size: 0.7rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      }

      img {
        filter: grayscale(0.3);
        width: 85px;
        cursor: pointer;
        transition: 0.1s;
        margin-bottom: -12px;

        @media (max-width: 1000px) {
          width: 70px !important;
          margin: 0;
        }
      }
      img:hover {
        filter: grayscale(0.1) drop-shadow(0 0 7px #7d1b1333);
        /* transform: scale3d(1.1, 1.1, 1) translateY(0.8vw); */
      }
    }
  }

  .middle-square {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background: transparent;
    width: 210px;
    height: 50vh;
    /* z-index: 2; */
  }

  .notch {
    transition: 0.5s ease;
    position: absolute;
    bottom: -20px;
    width: 213px;
    border-radius: 0 0 20px 20px;
    border-top: 20px solid #2d343655;
    backdrop-filter: blur(1.8px);
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;

    &.activated {
      &:hover {
        transition: 0.1s;
        border-top: 20px solid #2d343699;
        cursor: pointer;
      }
    }

    & > svg {
      visibility: hidden;
      width: 30px;
      position: absolute;
      color: rgba(255, 255, 255, 0.5);
      top: -23px;
      left: calc((100% - 30px) / 2);

      @media (max-width: 550px) {
        visibility: visible;
      }
    }
  }

  nav.d-full {
    background: #121a25;
    .notch {
      border-top: 20px solid #121a25;
    }
  }
  @media (max-width: 800px) {
    nav #links_list li img {
      /* transform: translateY(2.4vw) !important; */
      width: 80px !important;
    }

    nav #links_list li {
      max-width: 50% !important;
      width: 30% !important;
    }

    .small-hidden {
      display: none;
    }
  }

  @keyframes links_slide_down {
    0% {
      opacity: 0;
      margin-top: -20px;
      margin-left: 5px;
      margin-right: 5px;
    }
    100% {
      opacity: 1;
      margin-top: 0;
      margin-left: 0px;
      margin-right: 0px;
    }
  }
`;

export default Navbar;
