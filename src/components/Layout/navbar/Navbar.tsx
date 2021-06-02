import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import HomeIcon from '@material-ui/icons/Home';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [displayNav, setDisplayNav] = useState(false);

  return (
    <MainContainer>
      <nav
        className={
          'nav flex justify-center items-center ' +
          (displayNav ? 'displayed' : 'folded')
        }
        onClick={() => {
          if (displayNav === false) setDisplayNav(true);
        }}>
        <FontAwesomeIcon
          icon={faCompass}
          className={'' + (displayNav && 'opacity-0')}
          id="compass"
        />
        <ul
          className={
            'flex justify-center items-center ' +
            (displayNav ? 'visible-links' : 'invisible-links')
          }>
          {displayNav && (
            <React.Fragment>
              <li className="effect-underline">
                <div style={{ zIndex: 1 }}>
                  <Link href="/about">
                    <HomeIcon />
                  </Link>
                </div>
              </li>
              <li className="effect-underline">
                <div style={{ zIndex: 1 }}>
                  <Link href="/about/curiculum">CV</Link>
                </div>
              </li>
              <li className="effect-underline">
                <div style={{ zIndex: 1 }}>
                  <Link href="/about/experiences">Expériences</Link>
                </div>
              </li>
              <li className="effect-underline">
                <div style={{ zIndex: 1 }}>
                  <Link href="/about/skills">Technologies</Link>
                </div>
              </li>
              <li className="w-1">
                <FontAwesomeIcon
                  icon={faTimes}
                  onClick={() => setDisplayNav(false)}
                  id="times"
                />
              </li>
            </React.Fragment>
          )}
        </ul>
      </nav>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  position: fixed;
  padding: 1rem;
  transition: 0.2s;
  color: #373737;
  font-family: BebasNeue;
  z-index: 10;

  .displayed {
    width: 375px;
    height: 40px;
    transition: 0.7s 0.8s ease;
  }

  .folded {
    width: 40px;
    height: 40px;
    transition: 0.7s ease;
  }
  #times {
    font-size: 1rem;
    margin-right: -10px;
    transition: 0.1s;
  }
  #times:hover {
    width: 20px !important;
    height: 20px !important;
  }
  @media screen and (max-width: 600px) {
    .displayed {
      width: 330px;
      height: 40px;
      transition: 0.7s 0.8s ease;
    }

    #times {
      margin-right: 0;
    }
  }

  .nav {
    background: #fafafa;
    border-radius: 50px;
    box-shadow: 0 0px 1px rgba(0, 0, 0, 0.25);

    #compass {
      cursor: pointer;
      position: absolute;
      font-size: 2rem;
      transition: 0.7s 0.3s;
    }

    ul {
      list-style: none;
      font-size: 1.7rem;
    }
    .invisible-links {
      opacity: 0;
      transition: 0.8s;
    }
    .visible-links {
      opacity: 1;
      gap: 15px;
      transition: 0.8s 1.5s;
    }
    ul li {
      cursor: pointer;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &:hover #compass {
      transform: scale3d(1.1, 1.1, 1);
    }

    &:active {
      transform: scale3d(0.9, 0.9, 1);
    }

    /*effect-underline*/
    li.effect-underline:after {
      content: '';
      position: absolute;
      left: 0;
      display: inline-block;
      height: 1em;
      width: 100%;
      border-bottom: 1px solid;
      margin-top: 10px;
      opacity: 0;
      -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
      transition: opacity 0.35s, transform 0.35s;
      -webkit-transform: scale(0, 1);
      transform: scale(0, 1);
    }

    li.effect-underline:hover:after {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`;

export default Navbar;
