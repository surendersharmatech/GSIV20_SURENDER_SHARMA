import React from 'react';
import { shallow } from 'enzyme';
import MovieList from './movieList';

describe('<MovieList />', () => {
  test('renders', () => {
    const wrapper = shallow(<MovieList />);
    expect(wrapper).toMatchSnapshot();
  });
});
