import { render, screen } from '@testing-library/react';
import Product from '../pages/production/index';

test('renders learn react link', () => {
  render(<Product />);
  const linkElement = screen.getByText(/Product/i);
  expect(linkElement).toBeInTheDocument();
});

describe("Users", () => {
  let wrapper;
  let users;
  
  beforeEach(() => {
    const mockResponseData = [{id: 1}, {id: 2}, {id: 3}];
    users = mockResponseData.map(e => ({...e}));
    jest.clearAllMocks();
    global.fetch = jest.fn(async () => ({
      json: async () => mockResponseData
    }));
    wrapper = mount(<Product />);
  });
  
  it("renders a count of users", () => {
    const p = wrapper.find("p");
    expect(p.exists()).toBe(true);
    expect(p.text()).toEqual("there are 3 Product");
  });
});