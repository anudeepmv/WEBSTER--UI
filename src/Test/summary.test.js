///Formatted documentation for summary page
///Render is used for processing any written code and showing the result
///Used expect function to test a value
import { render, screen } from '@testing-library/react';
import Summary from '../component/summary';

test('renders learn react link', () => {
  render(< Summary/>);
  const linkElement = screen.getByText(/summary/i);
  expect(linkElement).toBeInTheDocument();
});
