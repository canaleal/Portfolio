import axios from 'axios';

// Fetching data from the API
export const getDataUsingFetch = async (url) => axios.get(url)
  .then((res) => res.data.Data);

// Fetching data from the API and filtering the projects by the category
export const fetchDataUsingAxiosAndFilter = async (url) => axios.get(url)
  .then((res) => res.data.Data)
  .then((data) => data.filter((item) => item.isDisable === false));
