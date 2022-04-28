import { render, screen } from '@testing-library/react';
import Summary from '../component/summary';

test('renders learn react link', () => {
  render(< Summary/>);
  const linkElement = screen.getByText(/summary/i);
  expect(linkElement).toBeInTheDocument();
});
