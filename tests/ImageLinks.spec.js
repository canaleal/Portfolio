import { addRawToImagePath } from '../src/helpers/ImageLinks';

// Jest test addRawToImagePath
test('addRawToImagePath', () => {
  const imagePath = 'https://images.unsplash.com/photo-1522205408450-add114ad53fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80';
  const link = addRawToImagePath(imagePath);
  expect(link).toBe('https://images.unsplash.com/raw/photo-1522205408450-add114ad53fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
});
