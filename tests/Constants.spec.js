import { Global } from '../src/constants/global';

// Jest test is Gloabl are defined
test('Gloabl are defined', () => {
  expect(Global).toBeDefined();
});

// Jest test find if Gloabl.PROJECTS_URL is defined
test('Gloabl.PROJECTS_URL is defined', () => {
  expect(Global.PROJECTS_URL).toBeDefined();
});

// Jest test find if Gloabl.GALLERY_URL is defined
test('Gloabl.GALLERY_URL is defined', () => {
  expect(Global.GALLERY_URL).toBeDefined();
});

// Jest test find if Gloabl.WORK_URL is defined
test('Gloabl.WORK_URL is defined', () => {
  expect(Global.WORK_URL).toBeDefined();
});

// Jest test find if Gloabl.EDUCATION_URL is defined
test('Gloabl.EDUCATION_URL is defined', () => {
  expect(Global.EDUCATION_URL).toBeDefined();
});

// Jest test find if Gloabl.LOGOS_URL is defined
test('Gloabl.LOGOS_URL is defined', () => {
  expect(Global.LOGOS_URL).toBeDefined();
});
