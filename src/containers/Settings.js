import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Card, CardSection, Spinner } from '../components/common';
import { logoutUser } from '../actions';

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ logoutUser }, dispatch);
}

class Settings extends Component {
  onLogoutAttempt() {
    this.props.logoutUser(this.props.navigation.navigate)
  }

  renderSpinner() {
    if (this.props.login.loading) {
      return (
        <CardSection>
          <Spinner size='large' />
        </CardSection>
      )
    }

    return (
      <CardSection>
        <Button whenPressed={() => this.onLogoutAttempt()}>
          Log out
        </Button>
      </CardSection>
    );
  }

  render() {
    return (
      <Card>
        { this.renderSpinner() }
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#66A6FD',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
