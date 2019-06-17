import React from 'react';
import Enzyme from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import AddCard from './AddCard';

Enzyme.configure({ adapter: new Adapter() });

describe('AddCard', () => {
  it('displays AddCard correctly', () => {
    const wrapper = Enzyme.shallow(<AddCard createCard={() => {}} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
