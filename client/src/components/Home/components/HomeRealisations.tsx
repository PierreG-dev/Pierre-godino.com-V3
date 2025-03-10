import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

import LOGO from '@/assets/global/LOGO.png';
import THUMBNAIL from '@/assets/realisations/abnature_thumbnail.png';

import Misino_thumbnail from '@/assets/realisations/cabinet_misino_thumbnail.png';
import Checkyoursmile_thumbnail from '@/assets/realisations/checkyoursmile_thumbnail.png';
import Sarlgaragebrincat_thumbnail from '@/assets/realisations/sarl_garage_brincat_thumbnail.png';
import Abnature_thumbnail from '@/assets/realisations/abnature_thumbnail.png';
import Eoleedit_thumbnail from '@/assets/realisations/eoleedit_thumbnail.png';
import Learn_thumbnail from '@/assets/realisations/learn_thumbnail.png';
import Misino_icon from '@/assets/icons/misino_icon_alt.png';
import Checkyoursmile_icon from '@/assets/icons/checkyoursmile.png';
import Sarlgaragebrincat_icon from '@/assets/icons/sarlgaragebrincat.png';
import Abnature_icon from '@/assets/icons/abnature.svg';
import Eoleedit_icon from '@/assets/icons/videomenthe_alpha.png';
import Learn_icon from '@/assets/icons/learn_icon.svg';

const HomeRealisations = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <MainContainer className="">
      <header>
        <h2>Quelques réalisations</h2>
      </header>
      <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
          <div className="col-span-2 sm:col-span-1 md:col-span-2  h-auto md:h-full flex flex-col">
            <a
              rel="nofollow noopener noreferrer"
              target="_blank"
              href="https://www.sarlgaragebrincat.fr"
              className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
              <Image
                src={Sarlgaragebrincat_thumbnail}
                width={500}
                height={400}
                alt="site garage brincat"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0  from-gray-900/25 to-gray-900/5"></div>
              <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                SARL Garage Brincat
              </h3>
            </a>
          </div>
          <div className="col-span-2 sm:col-span-1 md:col-span-2 ">
            <a
              rel="nofollow noopener noreferrer"
              target="_blank"
              href="https://www.dr-misino-orthodontie-agen.fr"
              className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
              <Image
                width={500}
                height={400}
                src={Misino_thumbnail}
                alt="Site cabinet misino"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0  from-gray-900/25 to-gray-900/5"></div>
              <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                Cabinet Misino
              </h3>
            </a>
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
              <a
                rel="nofollow noopener noreferrer"
                target="_blank"
                href="https://www.learn.pierre-godino.com"
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                <Image
                  width={500}
                  height={400}
                  src={Eoleedit_thumbnail}
                  alt="Site eole edit"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  Eole edit
                </h3>
              </a>
              <a
                rel="nofollow noopener noreferrer"
                target="_blank"
                href="https://www.checkyoursmile.fr"
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                <Image
                  width={500}
                  height={400}
                  src={Checkyoursmile_thumbnail}
                  alt="Site check your smile"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  CYourSmile
                </h3>
              </a>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1 md:col-span-1  h-auto md:h-full flex flex-col">
            <a
              rel="nofollow noopener noreferrer"
              target="_blank"
              href="https://www.abnature.fr"
              className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
              <Image
                width={500}
                height={400}
                src={Abnature_thumbnail}
                alt="Site AB Nature"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0  from-gray-900/25 to-gray-900/5"></div>
              <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                AB Nature
              </h3>
            </a>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

const MainContainer = styled.section`
  background: #ffffff08;
  backdrop-filter: blur(5px);
  padding: 25px 0;

  header {
    padding: 0 10px;
    max-width: 1200px;
    margin: auto;

    h2 {
      color: #fafafa;
      display: flex;

      gap: 15px;
      font-size: 1.5rem;
    }
  }

  h3 {
    margin: 5px;
    padding: 0 15px;
    border-radius: 5px;
    background: #373737aa;
    backdrop-filter: blur(5px);
    letter-spacing: 1px;
  }

  img {
    object-position: top left;
  }
`;

export default HomeRealisations;
