import { render, screen, } from '@testing-library/react';
import AdminDashboard from '../pages/adminDashbord/index';

test('renders learn react link', () => {
  render(<AdminDashboard/>);
  const linkElement = screen.getByText(/Welcome to Gala/i);
  expect(linkElement).toBeInTheDocument();
});


it("should close drawer", () => {
  const { getByTestId } = render(<AdminDashboard />);
  fireEvent.click(getByTestId("menuButton"));
  fireEvent.click(getByTestId("close"));
  expect(getByTestId("drawer")).not.toBeVisible(); // This doesn't work...
});
