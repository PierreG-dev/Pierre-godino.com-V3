import { NextPage } from 'next';
import {
  useRef,
  useCallback,
  useEffect,
  useState,
  useMemo,
  FormEvent,
} from 'react';
import styled from 'styled-components';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import frLocale from '@fullcalendar/core/locales/fr';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';
import seedrandom from 'seedrandom';
const Calendar: NextPage = () => {
  const [events, setEvents] = useState([]);
  const [initialSet, setInitialSet] = useState(true);
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<{ status: boolean; msg: string }>({
    status: false,
    msg: '',
  });
  const [isFetching, setIsfetching] = useState<boolean>(false);
  const [isFetched, setIsFetched] = useState<boolean>(false);

  const submitToken = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      setIsfetching(true);
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/getCalendar`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ password: password }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (!data.code) {
            setEvents(data);

            setIsFetched(true);
          } else {
            setPassword('');
            setIsfetching(false);
            setError({
              status: true,
              msg: data.msg,
            });
          }
        })
        .catch((err) => {
          console.log(err);
          setIsfetching(false);
          setPassword('');
        });
    },
    [password]
  );

  const dayStatusMap = useMemo(() => {
    const map = {};
    events.forEach((event) => {
      const startDate = new Date(event.start).toLocaleDateString('fr');
      if (event.allDay || (event.end && new Date(event.end).getHours() > 17)) {
        map[startDate] = 'unavailable';
      } else {
        map[startDate] = 'partly-available';
      }
    });
    return map;
  }, [events]);

  //Générateur d'étoiles
  const starsGenerator = useCallback(() => {
    console.log('etoiles générées');
    const myStars: Array<JSX.Element> = [];
    const rng = seedrandom("Vers l'infini et au dela!");
    for (let i = 0; i < 200; ++i) {
      const size = Math.ceil(rng() * 3) + 'px';

      myStars.push(
        <div
          className="star"
          key={i}
          style={{
            width: size,
            height: size,
            top: Math.floor(rng() * 100) + '%',
            left: Math.floor(rng() * 100) + '%',
            animationDelay: Math.floor(rng() * 500) + 's',
          }}></div>
      );
    }
    return myStars;
  }, []);

  const starsArray = useMemo<JSX.Element[]>(() => {
    return starsGenerator();
  }, []);

  return (
    <MainContainer>
      <div className="stars-container">{starsArray}</div>
      <ConnexionModal open className={!isFetched ? 'visible' : ''}>
        <form onSubmit={submitToken}>
          <div>
            <label htmlFor="password_input">Mot de passe</label>
            <input
              placeholder="Entrez un mot de passe"
              className={error.status ? 'error' : ''}
              type="password"
              name="password_input"
              id="password_input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error.status && <em>{error.msg}</em>}
          </div>
          <button>
            {!isFetching ? 'Consulter' : <FontAwesomeIcon icon={faRotate} />}
          </button>
        </form>
      </ConnexionModal>
      {isFetched && (
        <FullCalendar
          locale={frLocale}
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          height="auto"
          events={events}
          datesSet={() => {
            // --- Lignes
            const rows = [...document.querySelectorAll('tbody tr[role="row"]')];
            rows.shift(); // on enlève la première ligne qui est la ligne avec les en-têtes

            // --- Cases
            const cells = [];
            rows.forEach((row: HTMLTableRowElement) =>
              cells.push(...row.cells)
            );
            cells.forEach((cell: HTMLTableCellElement, key: number) => {
              cell.style.animationDelay = initialSet
                ? parseFloat((Math.random() * 2 + (key % 4)).toFixed(3)) * 0.2 +
                  1.5 +
                  's'
                : parseFloat((Math.random() * 2 + (key % 4)).toFixed(3)) * 0.2 +
                  's';
            });

            initialSet && setInitialSet(false);
          }}
          dayCellClassNames={(info) => {
            if (info.dow === 0 || info.dow === 6) {
              return 'week-end';
            }
            return (
              dayStatusMap[info.date.toLocaleDateString('fr')] || 'available'
            );
          }}
          dayCellDidMount={(info) => {
            const title = document.createElement('h3');
            title.textContent = 'Disponible';
            title.className = 'day-status';
            info.el.append(title);
          }}
          eventDidMount={({ event, el }) => {
            // Cache l'événement
            el.style.display = 'none';

            // Si l'événement dure toute la journée ou se termine après 17h
            if (event.allDay || (event.end && event.end.getHours() > 17)) {
              el.parentElement.parentElement.parentElement.parentElement.children[1].textContent =
                'Indisponible';
            }
            // Si l'événement se termine avant ou à 17h
            else if (event.end && event.end.getHours() <= 17) {
              el.parentElement.parentElement.parentElement.parentElement.children[1].textContent =
                'Disponible à partir de 17h';
            }
          }}
        />
      )}
    </MainContainer>
  );
};

const MainContainer = styled.div`
  padding-top: 7vh;
  min-height: 100vh;
  padding-bottom: 10vh;
  color: #fafafa;
  background: #040e1d;
  position: relative;
  transition: 1s;

  // --- Calendar overrides

  h3.day-status {
    color: #fafafa;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat';
    text-align: center;
    font-size: 1.5rem;
    text-overflow: clip;

    @media (max-width: 1500px) {
      font-size: 1rem;
    }

    @media (max-width: 920px) {
      writing-mode: vertical-lr;
    }
  }
  th {
    background: transparent !important;
  }

  .fc-media-screen {
    transition: 0.2s;
    opacity: 0;
    animation: 1s calendarAppear ease 1 both;
    animation-delay: 1s;

    @keyframes calendarAppear {
      0% {
        opacity: 0;
        height: 0;
      }
      100% {
        opacity: 1;
        height: fit-content;
      }
    }
  }
  .fc-header-toolbar {
    font-family: 'BebasNeue';
    padding: 5px 20px;
    text-shadow: #ffffff22 0px 0px 7px;

    button {
      box-shadow: #ffffff22 0px 0px 7px;
    }
  }
  .fc-daygrid table {
    background: transparent;
    border-collapse: separate;
    border-spacing: 10px;
    border: none;
    margin: auto;

    * {
      border: none;
    }

    .fc-col-header-cell {
      border: none;
      font-size: 1.5rem;
      font-family: 'Montserrat';
    }

    .fc-daygrid-day {
      height: 300px;
      border: none;
      background: rgba(255, 255, 255, 0.2);
      border: 2px solid rgba(255, 255, 255, 0.3);
      box-shadow: rgba(255, 255, 255, 0.4) 0px 0px 7px;
      border-radius: 5px;
      -webkit-backdrop-filter: blur(1px);
      backdrop-filter: blur(1px);
      -webkit-backdrop-filter: blur(1px);
      transition: transform 0.2s, opacity 0.2s;
      transform: translate3d(0, 0, 0);
      z-index: 5;
      position: relative;
      animation: 0.8s cellAppear ease 1 backwards;

      .fc-daygrid-day-number {
        transform: translateX(-5px);
      }

      @keyframes cellAppear {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }

      &:hover {
        transform: translate3d(0, -5px, 0);
      }

      &.available {
        background-color: #ffffff33;
        box-shadow: #ffffff33 0px 0px 7px, inset #ffffff22 0px 0px 7px 2px;
        border-color: #ffffff33;

        &:hover {
          background-color: #ffffff66;
          border-color: #ffffff33;
        }
      }

      &.unavailable {
        background-color: #ff450066;
        box-shadow: #ff4500 0px 0px 7px, inset #ff450033 0px 0px 7px 2px;
        border-color: #ff450066;

        &:hover {
          background-color: #ff4500aa;
          border-color: #ff4500aa;
        }
      }

      &.partly-available {
        background-color: #f39c1266;
        box-shadow: #f39c12 0px 0px 7px, inset #f39c1233 0px 0px 7px 2px;
        border-color: #f39c1266;

        &:hover {
          background-color: #f39c12aa;
          border-color: #f39c12aa;
        }
      }

      &.week-end {
        background-color: #ffffff11 !important;
        box-shadow: #ffffff11 0px 0px 7px !important;
        border-color: #ffffff11 !important;

        &:hover {
          transform: translate3d(0, 0px, 0);
        }

        h3 {
          display: none;
        }

        a {
          opacity: 0.5;
        }
      }
    }
  }
  // --- Stars
  .stars-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    .star {
      background: #fafafa;
      z-index: 0;
      position: absolute;
      box-shadow: 0px 0px 5px 0px rgba(255, 255, 255, 0.9);
      animation: 6s star_glow infinite linear;
      transition: 1s;
    }
  }

  @keyframes star_glow {
    0% {
      transform: scale3d(1, 1, 1);
    }
    50% {
      transform: scale3d(2, 2, 1);
    }
    100% {
      transform: scale3d(1, 1, 1);
    }
  }
`;

const ConnexionModal = styled.dialog`
  position: fixed;
  top: 35%;
  padding: 20px 30px;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  box-shadow: rgba(255, 255, 255, 0.4) 0px 0px 7px,
    inset rgba(255, 255, 255, 0.3) 0px 0px 7px;
  border-radius: 5px;
  -webkit-backdrop-filter: blur(1px);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  opacity: 0;
  transition: 0.3s;

  &.visible {
    opacity: 1;
  }

  & > form {
    display: flex;
    gap: 30px;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    font-family: 'Montserrat';

    & > div {
      display: flex;
      flex-direction: column;
      gap: 5px;
      position: relative;

      em {
        position: absolute;
        bottom: -20px;
        font-size: 0.8rem;
        color: #ff3333aa;
      }

      label {
        font-size: 1.2rem;
        text-shadow: rgba(255, 255, 255, 0.2) 0px 0px 7px;
        color: #fafafaaa;
      }

      input[type='password'] {
        background: rgba(255, 255, 255, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.3);
        box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 7px;
        border-radius: 3px;
        outline: none;
        padding: 2px 10px;
        color: #fafafa77;
        transition: 0.1s;

        &:focus {
          color: #fafafacc;
          background: rgba(255, 255, 255, 0.4);
        }

        &.error {
          outline: 1px solid #ff333366;
          box-shadow: #ff333366 0px 0px 7px;
          border: 1px solid #ff333366;
        }
      }
    }
  }

  button {
    padding: 5px 15px;
    width: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s;
    background: rgba(155, 253, 113, 0.35);
    border: 2px solid rgba(255, 255, 255, 0.3);
    box-shadow: rgba(155, 253, 113, 0.2) 0px 0px 7px;
    border-radius: 5px;
    -webkit-backdrop-filter: blur(1px);
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(1px);
    color: #fafafa;

    &:hover {
      background: rgba(155, 253, 113, 0.5);
    }

    svg {
      animation: 0.8s rotateIcon linear infinite;
      @keyframes rotateIcon {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }
  }
`;
export default Calendar;
