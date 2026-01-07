import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio owner name', () => {
  render(<App />);
  const nameElement = screen.getByText(/Aryan Khanal/i);
  expect(nameElement).toBeInTheDocument();
});
