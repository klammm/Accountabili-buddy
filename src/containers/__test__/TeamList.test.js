import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { TeamList } from '../TeamList';


describe('tests the TeamList component', () => {
  it('renders TeamList component', () => {
  const component = shallow(
    <TeamList
      showAllTeams={jest.fn}
      renderTeams={jest.fn}
      teamsList={[]}
    />
  );
    expect(toJson(component)).toMatchSnapshot();
  });
});
