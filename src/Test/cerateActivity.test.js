import { render, screen } from '@testing-library/react';
import CreateActivity from '../pages/createActivity/index';

test('renders learn react link', () => {
  render(<CreateActivity/>);
  const linkElement = screen.getByText(/create activity/i);
  expect(linkElement).toBeInTheDocument();
});
