///formatted documentation for creating the activity
import { render, screen } from '@testing-library/react';
import CreateActivity from '../pages/createActivity/index';

test('renders learn react link', () => {
  render(<CreateActivity/>);
  const linkElement = screen.getByText(/create activity/i);
  expect(linkElement).toBeInTheDocument();
});

it('should call onChange prop', () => {
  const onSearchMock = jest.fn();
  const event = {
    preventDefault() {},
    target: { value: 'the-value' }
  };
  const component = enzyme.shallow(<CreateActivity onSearch={onSearchMock} />);
  component.find('input').simulate('change', event);
  expect(onSearchMock).toBeCalledWith('the-value');
});