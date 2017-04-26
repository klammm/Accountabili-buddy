import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import Login from './src/containers/Login';
import Register from './src/containers/Register';

export const AppNavigator = StackNavigator({
  Login: { screen: Login },
  Register: { screen: Register },
});

const mapStateToProps = state => ({
  nav: state.nav
});

class Navigation extends Component {
  render() {
    console.log("this is the nav: ", this.props.nav)
    return (
      <AppNavigator navigation={addNavigationHelpers({ dispatch: this.props.dispatch, state: this.props.nav })} />
    )
  }
}

Navigation.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(Navigation);
