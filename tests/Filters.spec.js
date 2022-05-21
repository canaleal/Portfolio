import { getToolsList } from '../src/helpers/Filters';

// Jest test for getToolsList
test('getToolsList', () => {
  const objectList = [{
    tools: [
      'react',
      'redux',
      'redux-saga',
      'typescript',
      'webpack',
      'eslint',
    ],
  }, {
    tools: [
      'react',
      'redux',
      'redux-saga',
      'typescript',
      'webpack',
    ],
  }];
  const property = 'tools';
  const list = getToolsList(objectList, property);
  expect(list).toEqual(['react', 'redux', 'redux-saga', 'typescript', 'webpack', 'eslint']);
});

// Jest test failing for getToolsList
test.failing('getToolsList', () => {
  const objectList = [{
    tools: [
      'react',
      'redux',
      'redux-saga',
      'typescript',
      'webpack',
    ],
  }, {
    tools: [
      'react',
      'redux',
      'redux-saga',
      'typescript',
      'webpack',
    ],
  }];
  const property = 'tools';
  const list = getToolsList(objectList, property);
  expect(list).toEqual(['react', 'redux', 'redux-saga', 'typescript', 'webpack', 'eslint']);
});
