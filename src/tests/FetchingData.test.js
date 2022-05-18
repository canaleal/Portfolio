import {
  test, expect,
} from '@testing-library/react';
import { getDataUsingFetch } from '../services/FetchingData';

// Create jest test for fetching data successfully
test(
  'Fetching data successfully',
  async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const data = await getDataUsingFetch(url);
    expect(data).toBeTruthy();
  },
  10000,
);

// Create jest test for fetching data failure
test(
  'fetching data failure',
  async () => {
    const data = await getDataUsingFetch('https://jsonplaceholder.typicode.com/posts/1');
    expect(data).toBeFalsy();
  },
  10000,
);
