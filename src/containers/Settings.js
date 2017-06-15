import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Card, CardSection, Spinner } from '../components/common';
import { logoutUser } from '../actions';

const mapStateToProps = ({ login }) => {
  const { loading, error } = login;

  return { loading, error };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ logoutUser }, dispatch);
}

class Settings extends Component {
  renderSpinner() {
    if (this.props.loading) {
      return (
        <CardSection>
          <Spinner size='large' />
        </CardSection>
      )
    }
    // const { navigate } = this.props.navigation;

    return (
      <CardSection>
        <Button whenPressed={() => this.props.logoutUser()}>
          Log out
        </Button>
      </CardSection>
    );
  }

  render() {
    // if (this.props.isLoggedIn) {
    //   this.props.navigation.navigate('Login')
    //   return null;
    // }
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
