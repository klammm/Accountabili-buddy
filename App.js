


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import Login from './src/containers/Login';
import Register from './src/containers/Register';

const AppNavigator = StackNavigator({
  Login: { screen: Login },
  Register: { screen: Register }
});

export const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return (newState ? newState : state)
};

const mapStateToProps = (state) => ({
  nav: state.nav
});

class Navigation extends Component {
  render() {
    return (
      <AppNavigator navigation={addNavigationHelpers({ dispatch: this.props.dispatch, state: this.props.nav })} />
    )
  }
}

export default connect(mapStateToProps)(Navigation);
