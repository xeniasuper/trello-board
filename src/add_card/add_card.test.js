import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AddCard from './AddCard';

Enzyme.configure({ adapter: new Adapter() });

it('render correctly board component', () => {
  const mockCallBack = jest.fn();
  const component = renderer.create(<AddCard createCard={mockCallBack} />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

it('must call the mock method with p click', () => {
  const mockCallBack = jest.fn();

  const wrapper = Enzyme.mount(<AddCard createCard={mockCallBack} />);
  const btn = wrapper.find('#add-one-more-card');
  btn.simulate('click');

  expect(mockCallBack).toHaveBeenCalled();
});
