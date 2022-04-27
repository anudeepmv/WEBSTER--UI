import { render, screen } from '@testing-library/react';
import MyEditor from '../component/ckEditors';

test('renders learn react link', () => {
  render(<MyEditor />);
  const linkElement = screen.getByText(/Welcome to Gala/i);
  expect(linkElement).toBeInTheDocument();
});
