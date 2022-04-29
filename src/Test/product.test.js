///DOcumentation of the renders provides a react renderer that can be used to render react.
import { render, screen } from '@testing-library/react';
import Product from '../pages/production/index';

test('renders learn react link', () => {
  render(<Product />);
  const linkElement = screen.getByText(/Product/i);
  expect(linkElement).toBeInTheDocument();
});
