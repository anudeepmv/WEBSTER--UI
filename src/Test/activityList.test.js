/// Doucumentation for activity list to react to the link
import { render, screen } from '@testing-library/react';
import ActivityList from '../component/activity_page_list/index';

test('renders learn react link', () => {
  render(< ActivityList/>);
  const linkElement = screen.getByText(/Activity List/i);
  expect(linkElement).toBeInTheDocument();
});

describe("Users", () => {
  let wrapper;
  let activity;
  
  beforeEach(() => {
    const mockResponseData = [{id: 1}, {id: 2}, {id: 3}];
    activity = mockResponseData.map(e => ({...e}));
    jest.clearAllMocks();
    global.fetch = jest.fn(async () => ({
      json: async () => mockResponseData
    }));
    wrapper = mount(<ActivityList />);
  });
  
  it("renders a count of users", async () => {
                             
    await act(() => new Promise(setImmediate)); 
    wrapper.update();                           
    const p = wrapper.find("p");
    expect(p.exists()).toBe(true);
    expect(p.text()).toEqual("there are 3 activity");
  });
});
