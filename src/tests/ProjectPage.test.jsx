import React from 'react';
import {
  render, screen, test, expect,
} from '@testing-library/react';
import Projects from '../pages/projects/Projects';

test('Should render Project Page', () => {
  render(<Projects />);
  const pageElement = screen.getByTestId('main-page');

  expect(pageElement).toBeInTheDocument();
});
