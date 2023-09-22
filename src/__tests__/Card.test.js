import React from 'react';
import { render } from '@testing-library/react';
import Card from '../components/Card';

test('renders card component', () => {
  const card = { value: 'A', suit: 'hearts' };
  const { getByText } = render(<Card card={card} />);
  const cardValue = getByText(/A/);
  const cardSuit = getByText(/hearts/);
  expect(cardValue).toBeInTheDocument();
  expect(cardSuit).toBeInTheDocument();
});