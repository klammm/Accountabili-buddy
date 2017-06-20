import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ImageDetail } from '../ImageDetail';


describe('tests the ImageDetail component', () => {
  it('renders ImageDetail component', () => {
  const component = shallow(
    <ImageDetail
      image={{}}
    />
  );
    expect(toJson(component)).toMatchSnapshot();
  });
});
