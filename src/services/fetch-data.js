import axios from 'axios';

// Fetching data from the API
export const getDataUsingFetch = async (url) => axios.get(url, {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
  Pragma: 'no-cache',
  responseType: 'json',
})
  .then((res) => res.data.Data);

export const getDataWithAxios = async (sourceLink) => {
  const response = await axios.get(
    sourceLink,
  );
  return response.data;
};

// Fetching data from the API and filtering the projects by the category
export const fetchDataUsingAxiosAndFilter = async (url) => axios.get(url)
  .then((res) => res.data.Data)
  .then((data) => data.filter((item) => item.isDisable === false));
