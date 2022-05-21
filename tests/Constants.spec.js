import { Constants } from '../src/constants/Constants';

// Jest test is constants are defined
test('Constants are defined', () => {
  expect(Constants).toBeDefined();
});

// Jest test find if Constants.PROJECTS_URL is defined
test('Constants.PROJECTS_URL is defined', () => {
  expect(Constants.PROJECTS_URL).toBeDefined();
});

// Jest test find if Constants.GALLERY_URL is defined
test('Constants.GALLERY_URL is defined', () => {
  expect(Constants.GALLERY_URL).toBeDefined();
});

// Jest test find if Constants.WORK_URL is defined
test('Constants.WORK_URL is defined', () => {
  expect(Constants.WORK_URL).toBeDefined();
});

// Jest test find if Constants.EDUCATION_URL is defined
test('Constants.EDUCATION_URL is defined', () => {
  expect(Constants.EDUCATION_URL).toBeDefined();
});

// Jest test find if Constants.LOGOS_URL is defined
test('Constants.LOGOS_URL is defined', () => {
  expect(Constants.LOGOS_URL).toBeDefined();
});
