import React from 'react';
import { shallow } from 'enzyme';
import Movie from './movie';

describe('<Movie />', () => {
  test('renders', () => {
    const wrapper = shallow(<Movie />);
    expect(wrapper).toMatchSnapshot();
  });
});
