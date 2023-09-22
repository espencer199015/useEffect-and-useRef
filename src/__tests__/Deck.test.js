import React from 'react';
import { render } from '@testing-library/react';
import Deck from '../components/Deck';

test('renders deck component', () => {
  const { getByText } = render(<Deck />);
  const deckText = getByText(/Deck ID/);
  expect(deckText).toBeInTheDocument();
});