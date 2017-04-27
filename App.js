import React, { Component } from 'react';
import { addNavigationHelpers, StackNavigator, TabNavigator } from 'react-navigation';

import Login from './src/containers/Login';
import Register from './src/containers/Register';
import Profile from './src/containers/Profile';
import Camera from './src/containers/Camera';
import Ducky from './src/containers/Ducky';

export const DashboardNavigator = TabNavigator({
  Profile: { screen: Profile },
  Camera: { screen: Camera },
  Ducky: { screen: Ducky }
})

export const AppNavigator = StackNavigator({
  Login: { screen: Login },
  Register: { screen: Register },
  Tab: { screen: DashboardNavigator }
});

export default class Navigation extends Component {
  state = { isLoggedIn: false }
  render() {
    if (!this.state.isLoggedIn) {
      // eventually with redux we will grab the isLoggedIn state from the store
      return <AppNavigator />
    } else {
      return <DashboardNavigator />
    }
  }
}
