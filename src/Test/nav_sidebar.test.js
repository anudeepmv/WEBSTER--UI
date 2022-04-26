import { render, screen } from '@testing-library/react';
import Header from '../header/index'
import Sidebar from '../sidebar'

test('renders learn react link', () => {
  render(<Header />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders learn react link', () => {
    render(<Sidebar />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
  
