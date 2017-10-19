import React from 'react'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme'
import App from './App'


configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.length).toBe(1)
  });
  it('Should have .container class', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.is('.container')).toBe(true)
  })
  it('shows Comments', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('Comments').length).toBe(1)
  })
  it('shows NewComments', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('NewComment').length).toBe(1)
  })
  /* it('outputs the <App />', ()=>{
    const wrapperShallow = shallow(<App/>)
    const wrapperMount = mount(<App/>)
    const wrapperRender = render(<App/>)

    console.log(wrapperShallow.debug())
    console.log(wrapperMount.debug())
    console.log(wrapperRender.html())
  }) */
  
})
