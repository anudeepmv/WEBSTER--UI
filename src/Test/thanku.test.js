import { render, screen } from '@testing-library/react';
import Thanku from '../component/thanku/index'

test('renders learn react link', () => {
  render(< Thanku/>);
  const linkElement = screen.getByText(/Thank you/i);
  expect(linkElement).toBeInTheDocument();
});
