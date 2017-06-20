import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Settings } from '../Settings';

describe('tests the Settings component', () => {
  it('renders Settings component', () => {
  const component = shallow(
    <Settings
      login={{
        email: '',
        password: '',
        error: '',
        loading: false,
        isLoggedIn: false
      }}
      logoutUser={jest.fn}
      onLogoutAttempt={jest.fn}
    />
  );
    expect(toJson(component)).toMatchSnapshot();
  });
});
