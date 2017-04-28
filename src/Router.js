import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Login from './containers/Login';
import Register from './containers/Register';
import Profile from './containers/Profile';
import Camera from './containers/Camera';
import Ducky from './containers/Ducky';

export const DashboardNavigator = TabNavigator({
  Profile: { screen: Profile },
  Camera: { screen: Camera },
  Ducky: { screen: Ducky }
});

export const LoginNavigator = StackNavigator({
  Login: { screen: Login },
  Register: { screen: Register },
  Tab: { screen: DashboardNavigator }
});

export default class Navigation extends Component {
  state = { isLoggedIn: false }
  render() {
    if (!this.state.isLoggedIn) {
      return <LoginNavigator />
    }

    return <DashboardNavigator />
  }
}
