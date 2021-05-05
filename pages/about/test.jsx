import React, { useState } from 'react';
import Clock from 'react-clock';
import styled from 'styled-components';

export default function Sample() {
  const [value, onChange] = useState(new Date());

  return (
    <MainContainer>
      <div className="Sample">
        <header>
          <h1>react-clock sample page</h1>
        </header>
        <div className="Sample__container">
          <main className="Sample__container__content">
            <Clock size={200} value={new Date()} />
          </main>
        </div>
      </div>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  html,
  body {
    height: 100%;
  }

  body {
    margin: 0;
    font-family: Segoe UI, Tahoma, sans-serif;
  }

  .Sample {
    input,
    button {
      font: inherit;
    }

    header {
      background-color: rgb(50, 54, 57);
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
      padding: 20px;
      color: white;

      h1 {
        font-size: inherit;
        margin: 0;
      }
    }

    &__container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: flex-start;
      margin: 10px 0;
      padding: 10px;

      & > * {
        & > * {
          margin: 10px;
        }
      }

      &__content {
        display: flex;
        max-width: 100%;
        flex-basis: 420px;
        flex-direction: column;
        flex-grow: 100;
        align-items: stretch;
        padding-top: 1em;

        .react-clock {
          margin: 0 auto;
        }
      }
    }
  }
`;
