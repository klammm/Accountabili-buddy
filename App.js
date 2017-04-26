import React, { Component } from 'react';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import Login from './src/containers/Login';
import Register from './src/containers/Register';

export const AppNavigator = StackNavigator({
  Login: { screen: Login },
  Register: { screen: Register },
});

export default class Navigation extends Component {
  render() {
    return (
      <AppNavigator />
    )
  }
}
