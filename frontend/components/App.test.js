// Write your tests here
test('sanity', () => {
  expect(true).toBe(true)
})

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppFunctional from './AppFunctional';

test('renders visible texts in headings, buttons, and links', () => {
  render(<AppFunctional />);

  // Check for headings
  expect(screen.getByText(/Coordinates/i)).toBeInTheDocument();
  expect(screen.getByText(/You moved/i)).toBeInTheDocument();

  // Check for buttons
  expect(screen.getByText(/left/i)).toBeInTheDocument();
  expect(screen.getByText(/up/i)).toBeInTheDocument();
  expect(screen.getByText(/right/i)).toBeInTheDocument();
  expect(screen.getByText(/down/i)).toBeInTheDocument();
  expect(screen.getByText(/reset/i)).toBeInTheDocument();

  // Check for input placeholders
  expect(screen.getByPlaceholderText(/type email/i)).toBeInTheDocument();
});

test('typing on the input changes its value', () => {
  render(<AppFunctional />);

  const emailInput = screen.getByPlaceholderText(/type email/i);
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

  expect(emailInput.value).toBe('test@example.com');
});

test('coordinates display correct initial position', () => {
  render(<AppFunctional />);
  expect(screen.getByText(/coordinates/i).textContent).toMatch(/\(2, 2\)$/);
});

test('step counter displays correct initial value', () => {
  render(<AppFunctional />);
  expect(screen.getByText(/You moved/i).textContent).toBe('You moved 0 times');
});

test('moving up updates coordinates and step counter', () => {
  render(<AppFunctional />);

  const upButton = screen.getByText(/up/i);

  // Move up once
  fireEvent.click(upButton);

  // Check coordinates
  expect(screen.getByText(/coordinates/i).textContent).toMatch(/\(2, 1\)$/);

  // Check step counter
  expect(screen.getByText(/You moved/i).textContent).toBe('You moved 1 time');

  // Move up again to ensure coordinates do not change beyond limit
  fireEvent.click(upButton);
  expect(screen.getByText(/coordinates/i).textContent).toMatch(/\(2, 1\)$/);
  expect(screen.getByText(/You moved/i).textContent).toBe('You moved 1 time');
});

