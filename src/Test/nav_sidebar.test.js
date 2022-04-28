import { render, screen } from '@testing-library/react';
import Header from '../header/index'
import Sidebar from '../sidebar'

test('renders learn react link', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Logout/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders learn react link', () => {
    render(<Sidebar />);
    const linkElement = screen.getByText(/Add Activity/i);
    expect(linkElement).toBeInTheDocument();
  });
  

  it("should close drawer", async () => {
    const { getByTestId, queryByTestId } = render(<Header />);
  
    fireEvent.click(getByTestId("menuButton"));
    expect(getByTestId("drawer")).toBeVisible();
  
    fireEvent.click(getByTestId("closeButton"));
    await waitForElementToBeRemoved(getByTestId("drawer"));
  
    expect(queryByTestId("drawer")).toBeNull();
  
  });