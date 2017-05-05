import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import Login from '../containers/Login';
import Register from '../containers/Register';
import Profile from '../containers/Profile';
import TeamList from '../containers/TeamList';
import Slider from './Slider';

export const LoginNavigator = StackNavigator({
  Login: { screen: Login },
  Register: { screen: Register },
  Teams: { screen: TeamList },
  Slider: { screen: Slider },
  Profile: { screen: Profile },
});

export default class Navigation extends Component {
  render() {
    return <LoginNavigator />
  }
}
