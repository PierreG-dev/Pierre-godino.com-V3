import React, { useCallback, useEffect, useRef, useState } from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import Link from 'next/link';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Index: NextPage = () => {
  // const ref = useRef();

  // let step = 0;
  // const colors = [
  //   [62, 35, 255],
  //   [60, 255, 60],
  //   [255, 35, 98],
  //   [45, 175, 230],
  //   [255, 0, 255],
  //   [255, 128, 0],
  // ];
  // const colorIndices = [0, 1, 2, 3];
  // const gradientSpeed = 0.002;

  // const updateGradient = useCallback(() => {
  //   const col1 = colors[colorIndices[0]];
  //   const col2 = colors[colorIndices[1]];
  //   const e = colors[colorIndices[2]];
  //   const t = colors[colorIndices[3]];
  //   const c = 1 - step;

  //   const fromColor =
  //     'rgb(' +
  //     Math.round(c * col1[0] + step * col2[0]) +
  //     ',' +
  //     Math.round(c * col1[1] + step * col2[1]) +
  //     ',' +
  //     Math.round(c * col1[2] + step * col2[2]) +
  //     ')';
  //   const toColor =
  //     'rgb(' +
  //     Math.round(c * e[0] + step * t[0]) +
  //     ',' +
  //     Math.round(c * e[1] + step * t[1]) +
  //     ',' +
  //     Math.round(c * e[2] + step * t[2]) +
  //     ')';

  //   if ((step += gradientSpeed) >= 1 && (step %= 1)) {
  //     colorIndices[0] = colorIndices[1];
  //     colorIndices[2] = colorIndices[3];
  //     colorIndices[1] =
  //       Math.floor(1 + Math.random() * (colors.length - 1)) % colors.length;
  //     colorIndices[3] =
  //       Math.floor(1 + Math.random() * (colors.length - 1)) % colors.length;
  //   }

  //   console.log(step);

  //   if (ref.current)
  //     // @ts-ignore
  //     ref.current.style.background = `linear-gradient(90deg, ${fromColor} 0%, ${toColor} 100%)`;
  // }, [step, colors, colorIndices]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     updateGradient();
  //   }, 10);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  return (
    <MainContainer>
      {/* <div
        ref={ref}
        className={'bcg-bubble'}
        style={{
          height: '130%',
          width: '100%',
          position: 'absolute',
          opacity: 0.85,
          zIndex: -1,
          animationDelay: '0.5s',
        }}>
        <div id="bubbles1"></div>
        <div id="bubbles2"></div>
        <div id="bubbles3"></div>
      </div> */}
      <section className="flex flex-col buttons-container">
        <div style={{ maxWidth: '100vw' }}>
          <Link href={'/about/skills'}>
            <button style={{ animationDelay: '1s' }}>
              <video loop autoPlay muted>
                <source src={'/video/skills-preview.mp4'} type={'video/mp4'} />
              </video>
              <h3>Mes technologies</h3>
            </button>
          </Link>
          <Link href={'/about/experiences'}>
            <button style={{ animationDelay: '1.5s' }}>
              <video loop autoPlay muted>
                <source src={'/video/exp-preview.mp4'} type={'video/mp4'} />
              </video>
              <h3>Mon parcours</h3>
            </button>
          </Link>
        </div>
        <Link href={'/about/curiculum'}>
          <button style={{ animationDelay: '2s' }}>
            <video loop autoPlay muted>
              <source src={'/video/cv-preview.mp4'} type={'video/mp4'} />
            </video>
            <h3>Mon CV</h3>
          </button>
        </Link>
        {/* <div className="flex flex-col">
          <KeyboardArrowDownIcon />
        </div> */}
      </section>

      {/* <section style={{ background: '#2c2f33' }} className={'relative'}>
        <div
          className="nectar-shape-divider-wrap "
          style={{ height: 350, top: -350 }}
          data-front=""
          data-style="mountains"
          data-position="bottom">
          <svg
            className="nectar-shape-divider"
            fill="#2c2f33"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 300"
            preserveAspectRatio="none">
            <path d="M 1014 264 v 122 h -808 l -172 -86 s 310.42 -22.84 402 -79 c 106 -65 154 -61 268 -12 c 107 46 195.11 5.94 275 137 z"></path>
            <path d="M -302 55 s 235.27 208.25 352 159 c 128 -54 233 -98 303 -73 c 92.68 33.1 181.28 115.19 235 108 c 104.9 -14 176.52 -173.06 267 -118 c 85.61 52.09 145 123 145 123 v 74 l -1306 10 z"></path>
            <path d="M -286 255 s 214 -103 338 -129 s 203 29 384 101 c 145.57 57.91 178.7 50.79 272 0 c 79 -43 301 -224 385 -63 c 53 101.63 -62 129 -62 129 l -107 84 l -1212 12 z"></path>
            <path d="M -24 69 s 299.68 301.66 413 245 c 8 -4 233 2 284 42 c 17.47 13.7 172 -132 217 -174 c 54.8 -51.15 128 -90 188 -39 c 76.12 64.7 118 99 118 99 l -12 132 l -1212 12 z"></path>
            <path d="M -12 201 s 70 83 194 57 s 160.29 -36.77 274 6 c 109 41 184.82 24.36 265 -15 c 55 -27 116.5 -57.69 214 4 c 49 31 95 26 95 26 l -6 151 l -1036 10 z"></path>
          </svg>
        </div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
        explicabo fuga fugiat hic illo inventore ipsam labore laborum quae
        voluptates. Alias atque autem consequatur, dolores impedit iusto
        laboriosam laudantium magnam molestiae nesciunt nostrum perferendis
        repellat voluptatibus! A aliquid, aspernatur aut, commodi cupiditate
        dignissimos doloremque eius error esse et illo incidunt laborum
        molestiae mollitia natus nemo nostrum odio saepe soluta sunt tempore, ut
        veniam voluptates. Beatae blanditiis consectetur consequatur culpa
        distinctio dolor dolore eum ex id mollitia placeat quidem saepe,
        sapiente ut voluptatem! Corporis ipsum maxime reiciendis sed vero.
        Deserunt ducimus impedit quasi! At debitis dignissimos fuga quibusdam
        voluptatibus? A dolorem doloribus dolorum ea earum ex expedita illo
        inventore laboriosam minus nemo neque nostrum, nulla numquam
        perspiciatis placeat quae, quia quisquam sit vel? Aliquam consectetur
        cum deserunt eaque excepturi, exercitationem in labore laudantium
        maiores mollitia nam, perferendis quia quis quo, repudiandae temporibus
        voluptas. Consequatur cupiditate doloremque laborum maxime sit suscipit
        unde! Autem, delectus deleniti dolorum impedit inventore magni maxime
        necessitatibus numquam odio provident quibusdam quo repellat vitae. Ab
        accusamus ad amet aperiam atque cum deserunt, dicta dolores earum est
        expedita fugit impedit in ipsa iure iusto libero magni minima modi
        molestiae nisi nostrum numquam officia perspiciatis placeat possimus
        praesentium quam quasi quia quidem, quis quisquam sit sunt suscipit
        totam velit veritatis. Accusamus adipisci architecto aspernatur culpa,
        cupiditate debitis earum exercitationem explicabo facilis fuga fugit hic
        impedit in iusto neque nostrum odit omnis optio pariatur porro provident
        quasi, quibusdam quod rem, repellat reprehenderit repudiandae rerum sed
        sit soluta tenetur unde voluptatibus voluptatum! Blanditiis deserunt
        eveniet excepturi quam qui, repellendus ut voluptatem voluptates. A,
        adipisci aliquam asperiores aspernatur cumque dolorem doloremque
        doloribus ea esse expedita fugiat id impedit incidunt iure labore
        laboriosam laborum mollitia nihil, optio placeat porro praesentium quos
        reprehenderit sed sequi ullam vitae! At aut debitis dolor dolorum eius
        excepturi explicabo id ipsum iste labore nam natus non officia quas
        quibusdam repellat reprehenderit saepe tempora, ullam, velit. Amet
        aperiam aspernatur at commodi corporis dignissimos dolor dolore ducimus
        eius error nam, non numquam porro quam quas, rerum velit vitae? Fuga
        libero placeat provident quia recusandae reprehenderit sunt temporibus
        vitae! Aperiam architecto asperiores atque aut consectetur debitis
        dignissimos dolores, ea facilis fugit hic id laboriosam laudantium
        magnam magni maxime molestias natus nemo nobis non nostrum numquam
        obcaecati officia officiis possimus quaerat quisquam ratione reiciendis
        saepe sed sunt tempora ullam velit? Animi beatae distinctio, nemo
        obcaecati porro quo soluta! Consequuntur, dolores doloribus eligendi
        labore modi molestias nihil nobis quos ratione voluptatibus? Architecto
        asperiores dolor doloremque doloribus eligendi eum fugiat illum in
        inventore, ipsa maxime repellendus, sunt? Alias aliquid, aperiam eius
        facere libero pariatur quae voluptas voluptatibus? Dolores dolorum ea
        earum eligendi et expedita id, ipsum laborum numquam omnis pariatur quas
        quisquam quo reprehenderit sapiente sunt tempore unde. Accusamus aliquam
        beatae consequuntur corporis cumque distinctio doloremque doloribus
        earum, esse eveniet exercitationem laudantium libero magnam maxime
        necessitatibus nemo officiis placeat provident, quae, quod repellendus
        vel velit veniam voluptates voluptatum! Consequatur cupiditate fugit
        minus necessitatibus nihil nostrum quidem temporibus voluptates. Aliquam
        asperiores aspernatur atque dicta, dolores doloribus eos error esse est
        ex exercitationem expedita facere illo iusto possimus quidem quis quod,
        reiciendis reprehenderit similique sunt ut vel velit. Autem consequuntur
        cum delectus ea eveniet maiores minima molestiae perspiciatis
        praesentium quas quasi quia reiciendis repudiandae, tenetur, veniam
        voluptatem voluptates. Atque cumque doloribus eaque eos in inventore
        laboriosam laudantium maiores nobis, optio placeat provident quae quam
        quia quo reiciendis sit! Ex impedit inventore qui quia quod suscipit
        veniam! Aliquam amet beatae debitis dicta doloremque doloribus eos ipsa
        iste iure, natus perspiciatis provident quo repellendus sequi sint?
        Accusantium cupiditate dolore exercitationem incidunt itaque libero
        officia optio rem totam voluptatem. Amet beatae consequatur corporis
        culpa dolor dolores ducimus, earum et illum incidunt minima modi nulla
        officia praesentium, ratione reprehenderit repudiandae rerum sapiente
        veniam veritatis. Cum debitis deserunt dolorum ea esse et eveniet
        exercitationem expedita facere illum ipsum laborum modi natus
        necessitatibus nesciunt odio omnis optio, perspiciatis provident quia
        quidem recusandae saepe sequi sint sit suscipit tempore unde voluptate
        voluptatem voluptatibus! Adipisci amet aperiam, at consequuntur corporis
        debitis distinctio dolore dolorem doloremque dolores ducimus eaque enim
        esse harum id illum incidunt inventore iure labore libero mollitia
        nesciunt nihil perferendis quaerat quas quasi quis ratione reprehenderit
        rerum soluta tenetur, vel voluptate voluptatum? Consequatur deserunt
        eligendi enim expedita fugiat in nostrum possimus, similique totam. Ad
        alias doloribus id nam numquam quisquam similique sit ullam. A,
        accusantium, aperiam, blanditiis corporis dicta doloremque ex facilis
        fuga fugit inventore libero nisi nobis officia omnis perferendis porro
        praesentium quidem rerum similique voluptates. Ad asperiores atque dicta
        explicabo quia vel voluptates voluptatibus voluptatum. Adipisci aliquid,
        asperiores aut culpa dicta dolore dolorem doloremque doloribus dolorum,
        ea excepturi fuga fugiat illum impedit ipsa ipsam ipsum itaque, iusto
        nisi odit officiis praesentium quasi quia rerum sint unde veritatis
        voluptas voluptate voluptates voluptatum. Dolores iusto magni omnis quos
        saepe. Ab aperiam architecto delectus dolor, ea esse et ex in inventore
        itaque magni maxime minus nemo nobis odit quasi qui quod quos ratione
        rem repellat repellendus repudiandae soluta veritatis voluptates! A,
        aspernatur autem debitis distinctio dolor error et facilis iste natus
        nobis officiis praesentium quam quos sapiente sequi tempore vitae.
        Aliquam architecto, aut autem dignissimos dolor dolorum eaque eius et
        explicabo ipsum iste libero minus modi nostrum odio perferendis
        perspiciatis quas qui quidem repudiandae, soluta sunt temporibus unde ut
        veniam vero voluptatem. Accusamus asperiores, assumenda, cum distinctio
        enim excepturi expedita illum iure maiores, minima qui repudiandae
        sapiente! Consectetur et iusto, modi molestiae officiis quaerat quod.
        At, commodi ducimus ea fuga ipsam itaque maxime nam natus odio odit
        porro quam sunt ut, veritatis voluptas. Consectetur dolores esse eum
        excepturi exercitationem, facere laborum maiores non omnis quo quod
        tenetur unde voluptatibus. Aliquam aliquid aperiam atque commodi
        dolorum, earum error illo illum incidunt ipsam itaque minima natus
        necessitatibus quas quod ratione rerum similique unde ut voluptatibus?
        Aliquam architecto aspernatur autem dolor, doloremque expedita mollitia
        neque perferendis quidem similique sit, voluptatum. Blanditiis debitis
        ipsam molestias, repudiandae soluta suscipit vel! Aliquam consequuntur
        cupiditate debitis dolore doloremque fugiat, ipsam magnam natus nostrum
        quasi quia quo recusandae repellendus soluta tempora veritatis!
      </section> */}
    </MainContainer>
  );
};
const MainContainer = styled.div`
  background: #ecf0f1;
  width: 100vw;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5vh;
  align-items: center;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: 0.5s;
    transform: scale(1.02);
  }

  button {
    overflow: hidden;
    position: relative;
    border-radius: 15px;
    margin: 10px;
    padding: 60px;
    background: rgba(0, 0, 0, 0.6);
    font-size: 2.5rem;
    color: rgba(255, 255, 255, 0.7);
    animation: 6s appearing;
    animation-fill-mode: forwards;
    opacity: 0;
    transition: 0.2s;
    border: 2px solid rgba(255, 255, 255, 0.8);
    box-shadow: 5px 5px 15px 1px rgba(0, 0, 0, 0.4);
  }
  button h3 {
    z-index: 2;
  }
  button:hover {
    transform: translate3d(0, -15px, 0);
    box-shadow: 5px 20px 15px 1px rgba(0, 0, 0, 0.4);
  }
  button:hover video {
    opacity: 1;
    cursor: pointer;
  }

  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -2;
  }

  h3 {
    font-family: BebasNeue;
  }

  h2,
  p {
    color: #fafafa;
    font-size: 2rem;
    opacity: 0;
    animation: 6s appearingText 0.5s;
    animation-fill-mode: forwards;
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
  }

  h2 {
    font-weight: bold;
  }

  .buttons-container {
    min-height: 100%;
    justify-content: center;
  }

  @keyframes appearing {
    0% {
      opacity: 0;
    }
    75% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes appearingText {
    0% {
      opacity: 0;
    }
    75% {
      opacity: 0;
    }
    100% {
      opacity: 0.9;
    }
  }

  @media (max-width: 500px) {
    h2,
    p {
      font-size: 1.4rem;
    }
  }
`;

export default Index;
