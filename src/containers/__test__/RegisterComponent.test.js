import 'react-native';
import React from 'react';
import { shallow } from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { Register } from '../Register';

import renderer from 'react-test-renderer';

describe('tests the register component', () => {

  it('renders Register component', () => {
    const component = renderer.create(
      <Register
        firstNameChanged={jest.fn}
        lastNameChanged={jest.fn}
        usernameChanged={jest.fn}
        registerEmailChanged={jest.fn}
        registerPasswordChanged={jest.fn}
        registerUser={jest.fn}
        confirmPasswordChanged={jest.fn}
        passwordMatch={jest.fn}
        loginUser={jest.fn}
        firstName={'firstName'}
        lastName={'lastName'}
        username={'username'}
        registerEmail={'registerEmail'}
        registerPassword={'registerPassword'}
        confirmedPassword={'confirmedPassword'}
        matchedPassword={'true'}
        navigation= {'Login'}
      />
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
