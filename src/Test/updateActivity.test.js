import { render, screen } from '@testing-library/react';
import UpdateActivity from '../pages/updateActivity/index'

test('renders learn react link', () => {
  render(<UpdateActivity />);
  const linkElement = screen.getByText(/Update Activity/i);
  expect(linkElement).toBeInTheDocument();
});
