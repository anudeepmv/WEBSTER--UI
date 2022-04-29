import { render, screen } from '@testing-library/react';
import GeneralInfo from '../component/generalInfo/index';

test('renders learn react link', () => {
  render(<GeneralInfo/>);
  const linkElement = screen.getByText(/create activity/i);
  expect(linkElement).toBeInTheDocument();
});
