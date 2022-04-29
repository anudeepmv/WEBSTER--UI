///Documentation of for updating the activity
///render can get the data from the backend database and displays on the screen
///expect is used to test the values
import { render, screen } from '@testing-library/react';
import UpdateActivity from '../pages/updateActivity/index'

test('renders learn react link', () => {
  render(<UpdateActivity />);
  const linkElement = screen.getByText(/Update Activity/i);
  expect(linkElement).toBeInTheDocument();
});
