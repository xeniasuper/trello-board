import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ColumnHeader from './ColumnHeader';
import Column from '../column/Column';

Enzyme.configure({ adapter: new Adapter() });

it('render correctly board component', () => {
  // const mockHandleAddColumn = jest.fn();
  // const mockHandleAddColumnClick = jest.fn();
  // const mockHandleRemoveColumn = jest.fn();
  // const component = renderer.create(<ColumnHeader
  //                                                 handleAddColumn={mockHandleAddColumn}
  //                                                 handleAddColumnClick={mockHandleAddColumnClick}
  //                                                 handleRemoveColumn={mockHandleRemoveColumn}
  //                                   />);
  // const tree = component.toJSON();
  //
  // expect(tree).toMatchSnapshot();
});

// it('must set state.isNameAdded to true, ' +
//   'column.state.isNameAdded = true, ' +
//   'column.state.cards = Cards id={id}', () => {
//
//   const mockHandleAddColumnClick = jest.fn();
//   const mockHandleRemoveColumn = jest.fn();
//   const columnHeader = shallow(<ColumnHeader
//                                     handleAddColumnClick={mockHandleAddColumnClick}
//                                     handleRemoveColumn={mockHandleRemoveColumn}
//                                 />)
//   }
// })

// it('must call the mock method with p click', () => {
//   const mockCallBack = jest.fn();
//
//   const wrapper = Enzyme.mount(<AddCard createCard={mockCallBack} />);
//   const btn = wrapper.find('#add-one-more-card');
//   btn.simulate('click');
//
//   expect(mockCallBack).toHaveBeenCalled();
// });
