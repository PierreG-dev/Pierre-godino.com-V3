import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import Modal from '@mui/material/Modal';
import Connection from './Connection';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import CloseIcon from '@mui/icons-material/Close';

export type Props = {
  isOpened: boolean;
  handleClose: () => void;
};

const AdminModal: React.FC<Props> = ({ isOpened, handleClose }) => {
  const [isConnected, setIsConnected] = useState<boolean>();
  const [passwordInput, setPasswordInput] = useState('');
  const [metricsData, setMetricsData] = useState([]);
  const [selectedTab, setSelectedTab] = useState(2);

  //fonction qui lance la tentative de connexion
  const tryAuth = useCallback((password) => {
    fetch('http://localhost:8001/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password: password,
      }),
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIsConnected(data.connected);
        console.info(data.msg);
      })
      .catch((error) => console.error(error));
  }, []);

  //gère le submit de l'input et la connexion
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Enter') tryAuth(passwordInput);
    },
    [passwordInput]
  );

  const getDailyConnections = useCallback(() => {
    const filteredData = metricsData.filter(
      (elem) => elem.date === new Date().toLocaleDateString('fr')
    );

    return (
      <React.Fragment>
        <h2>Connexions aujourd'hui: {filteredData.length}</h2>
        <ul>
          {filteredData.map((elem, key) => (
            <Connection key={key} connexionData={elem} />
          ))}
        </ul>
      </React.Fragment>
    );
  }, [metricsData]);

  const getMonthlyConnections = useCallback(() => {
    const filteredData = metricsData.filter(
      (elem) =>
        elem.date.split('/')[1] ===
        new Date().toLocaleDateString('fr').split('/')[1]
    );

    return (
      <React.Fragment>
        <h2>Connexions ce mois-ci: {filteredData.length}</h2>
        <ul>
          {filteredData.map((elem, key) => (
            <Connection key={key} connexionData={elem} />
          ))}
        </ul>
      </React.Fragment>
    );
  }, [metricsData]);

  const getAllConnections = useCallback(() => {
    return (
      <React.Fragment>
        <h2>Connexions depuis le début: {metricsData.length}</h2>
        <ul>
          {metricsData.map((elem, key) => (
            <Connection key={key} connexionData={elem} />
          ))}
        </ul>
      </React.Fragment>
    );
  }, [metricsData]);

  const contentPicker = useCallback(() => {
    switch (selectedTab) {
      case 0:
        return getDailyConnections();
      case 1:
        return getMonthlyConnections();
      case 2:
        return getAllConnections();
      default:
        return getAllConnections();
    }
  }, [selectedTab, metricsData]);

  const handleTabChange = useCallback((newTab) => {
    setSelectedTab(newTab);
  }, []);

  //récupère les données
  useEffect(() => {
    if (!isConnected) return;
    fetch('http://localhost:8001/getMetrics', {
      method: 'GET',
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((data) => {
        setMetricsData(data);
      });
  }, [isConnected]);

  useEffect(() => {
    fetch('http://localhost:8001/isConnected', {
      method: 'GET',
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((data) =>
        data.connected ? setIsConnected(true) : setIsConnected(false)
      );
  }, []);

  return (
    <Modal open={isOpened}>
      <AdminModalContent>
        <CloseIcon onClick={handleClose} />
        {isConnected ? (
          <React.Fragment>
            <div>
              <Tabs value={selectedTab} aria-label="basic tabs example">
                <Tab label="Aujourd'hui" onClick={() => handleTabChange(0)} />
                <Tab
                  label="Durant le mois"
                  onClick={() => handleTabChange(1)}
                />
                <Tab
                  label="Depuis le début"
                  onClick={() => handleTabChange(2)}
                />
              </Tabs>
            </div>
            {contentPicker()}
          </React.Fragment>
        ) : (
          <React.Fragment>
            <input
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </React.Fragment>
        )}
      </AdminModalContent>
    </Modal>
  );
};

const AdminModalContent = styled.div`
  position: absolute;
  width: 75vw;
  height: 75vh;
  top: 12.5vh;
  left: 12.5vw;
  outline: none;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  padding: 60px;
  animation: appearing 1s ease 1;
  transition: 0.5s;
  color: #373737;
  display: flex;
  flex-direction: column;
  

  @keyframes appearing {
    0% {
      opacity: 0;
      transform: translateY(100px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  h2 {
    font-size: 1.7rem;
    padding-top: 10px;
  }


  &>ul {
    margin-top: 5px;
    overflow-y: scroll;
    scrollbar-color: #373737 transparent;
    scrollbar-width: thin;
    padding: 10px;
  }

  [data-testid='CloseIcon'] {
    position: absolute;
    top: 15px;
    right: 15px;
    opacity: 0.7;
    transition 0.1s;
  }

  [data-testid='CloseIcon']:hover {
    cursor: pointer;
    opacity: 0.9;
  }

  &>ul::-webkit-scrollbar {
    background: transparent;
    width: 7px;
  }

  &>ul::-webkit-scrollbar-track-piece  {
      width: 10px;
  }

  &>ul::-webkit-scrollbar-thumb:vertical {
     background: #373737;
     border-radius: 50px;
     
  }
`;

export default AdminModal;
