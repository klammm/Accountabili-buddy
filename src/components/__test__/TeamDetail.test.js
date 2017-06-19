import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TeamDetail from '../TeamDetail';


describe('tests the TeamDetail component', () => {
  it('renders TeamDetail component', () => {
  const component = shallow(
    <TeamDetail
      team={{}}
    />
  );
    expect(toJson(component)).toMatchSnapshot();
  });
});
