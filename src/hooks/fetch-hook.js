/* eslint-disable import/prefer-default-export */
import { useEffect, useState } from 'react';
import { getDataUsingFetch } from 'services/fetch-data';

export const useFetch = (url) => {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  async function getData() {
    try {
      const dataJson = await getDataUsingFetch(url);

      if (dataJson && dataJson.length > 0) {
        setData(dataJson);
      } else {
        throw new Error('Art list is empty');
      }
    } catch {
      setError(true);
    } finally {
      setIsLoaded(true);
    }
  }

  useEffect(() => {
    getData();
  }, [url]);

  return { data, error, isLoaded };
};

export const useFetchWithFilter = (url, id) => {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  async function getData() {
    try {
      const dataJson = await getDataUsingFetch(url);

      if (dataJson && dataJson.length > 0) {
        setData(dataJson.find((item) => item.id === parseInt(id, 10)));
      } else {
        throw new Error('Art list is empty');
      }
    } catch {
      setError(true);
    } finally {
      setIsLoaded(true);
    }
  }

  useEffect(() => {
    getData();
  }, [url]);

  return { data, error, isLoaded };
};
