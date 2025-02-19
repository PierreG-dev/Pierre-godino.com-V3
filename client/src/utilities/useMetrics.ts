import { useCallback, useRef } from 'react';

const useMetrics = ({ updateFirstLoad }) => {
  const visitUpdateInterval = useRef(null);

  const devicePicker = useCallback(() => {
    const width = window.innerWidth;
    if (!width) return;

    if (width <= 480) return 'Mobile';
    else if (width <= 768) return 'Tablette';
    else if (width <= 1024) return 'Ordinateur portable | SM';
    else return 'Ordinateur de bureau | LG';
  }, []);

  const initiateMetrics = useCallback(() => {
    if (!process.env.NEXT_PUBLIC_API_URL) return;
    //visit init
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/newVisit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        device: devicePicker(),
      }),
    }).catch((error) => console.error(error));

    //visit update
    visitUpdateInterval.current = setInterval(() => {
      if (!process.env.NEXT_PUBLIC_API_URL) return;
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/updateVisitTime`, {
        method: 'PUT',
      }).catch((error) => console.error(error));
    }, 30000);
  }, [devicePicker]);

  const updateJourney = useCallback((pageName) => {
    if (!process.env.NEXT_PUBLIC_API_URL) return;
    //visit journey update
    try {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/updateVisitJourney`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          newPage: pageName,
        }),
      }).catch((error) => console.error(error));
    } catch (err) {
      console.error(err);
    }
  }, []);

  const firstLoadFinished = useCallback(() => {
    setTimeout(() => {
      const title = document.title;
      updateJourney(title.split('|')[0]?.trim());
      updateFirstLoad();
    }, 700);
  }, [updateFirstLoad, updateJourney]);

  return {
    firstLoadFinished,
    initiateMetrics,
    updateJourney,
  };
};

export default useMetrics;
