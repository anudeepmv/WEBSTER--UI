///Documentation for product activity 
///Used test for testing the values
import { render, screen } from '@testing-library/react';
import Product from '../pages/production/index';

test('renders learn react link', () => {
  render(<Product />);
  const linkElement = screen.getByText(/Product/i);
  expect(linkElement).toBeInTheDocument();
});
