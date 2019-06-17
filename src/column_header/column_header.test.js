import React from 'react';
import Enzyme from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import ColumnHeader from './ColumnHeader';

Enzyme.configure({ adapter: new Adapter() });

describe('ColumnHeader', () => {
  it('displays ColumnHeader correctly', () => {
    const wrapper = Enzyme.shallow(<ColumnHeader
                                        handleAddColumnClick={() => {}}
                                        handleRemoveColumn={() => {}}
                                   />,
                                   { disableLifecycleMethods: true });

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
