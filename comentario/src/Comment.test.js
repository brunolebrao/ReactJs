import React from 'react'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme'
import Comment from './Comment'


configure({ adapter: new Adapter() });
const comment = {
    comment: 'test'
}
describe('<Comment />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Comment comment={comment} />)
    expect(wrapper.length).toBe(1)
    expect(wrapper.is('.alert')).toBe(true)
  });
})
