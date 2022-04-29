///formatted documentation for creating the activity and also proving general information
///render is used to retrieve the data back end
///except is implored to given values
import { render, screen } from '@testing-library/react';
import GeneralInfo from '../component/generalInfo/index';

test('renders learn react link', () => {
  render(<GeneralInfo/>);
  const linkElement = screen.getByText(/create activity/i);
  expect(linkElement).toBeInTheDocument();
});
