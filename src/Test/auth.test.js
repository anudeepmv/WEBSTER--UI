import { render, screen } from '@testing-library/react';
import Auth from '../pages/auth';

test('renders learn react link', () => {
  render(<Auth />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
