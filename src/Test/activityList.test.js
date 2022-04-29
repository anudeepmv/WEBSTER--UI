/// Doucumentation for activity list to react to the link
import { render, screen } from '@testing-library/react';
import ActivityList from '../component/activity_page_list/index';

test('renders learn react link', () => {
  render(< ActivityList/>);
  const linkElement = screen.getByText(/Activity List/i);
  expect(linkElement).toBeInTheDocument();
});
