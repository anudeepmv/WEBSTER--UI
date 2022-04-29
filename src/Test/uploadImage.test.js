///Formatted documentation for uploading image
///Expect is used to get the values
import { render, screen } from '@testing-library/react';
import UploadImage from '../component/uploadImg';

test('renders learn react link', () => {
  render(<UploadImage/>);
  const linkElement = screen.getByText(/upload Image/i);
  expect(linkElement).toBeInTheDocument();
});
