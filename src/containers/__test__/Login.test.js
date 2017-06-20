import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Login } from '../Login';

import renderer from 'react-test-renderer';

describe('tests the Login component', () => {
  it('renders Login component', () => {
    const component = renderer.create(
      <Login
        login={{
          email: 'email',
          password: 'password',
          error: 'error',
          loading: false,
          isLoggedIn: true
        }}
        emailChanged={jest.fn}
        passwordChanged={jest.fn}
        loginUser={jest.fn}
        onPasswordChange={jest.fn}
        onLoginAttempt={jest.fn}
          navigation={{
            navigate: jest.fn()
          }}
      />
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});


// describe('tests the Login component', () => {
//   it('renders Login component', () => {
//     const component = shallow(
//       <Login
//         login={{
//           email: 'email',
//           password: 'password',
//           error: 'error',
//           loading: false,
//           isLoggedIn: true
//         }}
//         emailChanged={jest.fn}
//         passwordChanged={jest.fn}
//         loginUser={jest.fn}
//         onPasswordChange={jest.fn}
//         onLoginAttempt={jest.fn}
//           navigation={{
//             navigate: jest.fn()
//           }}
//       />
//     );
//     expect(toJson(component)).toMatchSnapshot();
//   });
// });
