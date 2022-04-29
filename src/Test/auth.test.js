import { render, screen } from '@testing-library/react';
import Auth from '../pages/auth';

test('renders learn react link', () => {
  render(<Auth />);
  const linkElement = screen.getByText(/Welcome to Gala/i);
  expect(linkElement).toBeInTheDocument();
});

it('should render the home component if login', () => {
  const loginComponent = ReactTestUtils.renderIntoDocument(
      <Login />
  );

  const checkForNotification = () => {
      const login = shallow(<Login />);
      expect(login.find(Notification).length).toBe(1);
  };

  loginComponent.setState({
      error: true
  }, checkForNotification());
});