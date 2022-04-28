import { render, screen } from '@testing-library/react';
import Detail from '../pages/detail/index';

test('renders learn react link', () => {
  render(< Detail/>);
  const linkElement = screen.getByText(/Activity Detail/i);
  expect(linkElement).toBeInTheDocument();
});
