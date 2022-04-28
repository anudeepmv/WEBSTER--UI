import { render, screen } from '@testing-library/react';
import ActivityList from '../component/activity_page_list/index';

test('renders learn react link', () => {
  render(< ActivityList/>);
  const linkElement = screen.getByText(/Welcome to Gala/i);
  expect(linkElement).toBeInTheDocument();
});
