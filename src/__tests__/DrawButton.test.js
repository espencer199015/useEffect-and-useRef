import React from 'react';
import { render } from '@testing-library/react';
import DrawButton from '../components/DrawButton';

test('renders draw button component', () => {
  const { getByText } = render(<DrawButton />);
  const drawButtonText = getByText(/Draw Card/);
  expect(drawButtonText).toBeInTheDocument();
});