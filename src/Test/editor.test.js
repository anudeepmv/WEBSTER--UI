///Documentation for welcomin page
///expect is used to search for a match
import { render, screen } from '@testing-library/react';
import MyEditor from '../component/ckEditors';

test('renders learn react link', () => {
  render(<MyEditor />);
  const linkElement = screen.getByText(/Welcome to Gala/i);
  expect(linkElement).toBeInTheDocument();
});
