import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Card, CardSection, Input } from '../components/common';
import {
  firstNameChanged,
  lastNameChanged,
  usernameChanged,
  registerEmailChanged,
  registerPasswordChanged,
  registerUser,
  confirmPasswordChanged,
  passwordMatch
} from '../actions';

const mapStateToProps = ({ register }) => {
  const {
    registerEmail,
    registerPassword,
    firstName,
    lastName,
    username,
    confirmedPassword,
    matchedPassword
  } = register;

  return {
    registerEmail,
    registerPassword,
    firstName,
    lastName,
    username,
    confirmedPassword,
    matchedPassword
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    firstNameChanged,
    lastNameChanged,
    usernameChanged,
    registerEmailChanged,
    registerPasswordChanged,
    registerUser,
    confirmPasswordChanged,
    passwordMatch
  }, dispatch);
}

class Register extends Component {
  onRegisterEmailChange(text) {
    this.props.registerEmailChanged(text);
  }

  onRegisterPasswordChange(text) {
    this.props.registerPasswordChanged(text);
  }

  onFirstNameChange(text) {
    this.props.firstNameChanged(text);
  }

  onLastNameChange(text) {
    this.props.lastNameChanged(text);
  }

  onUsernameChange(text) {
    this.props.usernameChanged(text);
  }

  onConfirmedPasswordChange(text) {
    this.props.confirmPasswordChanged(text);
  }

  checkPasswordWithConfirmPassword() {
    const { registerPassword, confirmedPassword } = this.props;

    this.props.passwordMatch(registerPassword === confirmedPassword)
  }

  onRegisterAttempt() {
    const { registerEmail, registerPassword, firstName, lastName, username } = this.props;

    this.props.registerUser({ registerEmail, registerPassword, firstName, lastName, username });
  }

  realTimeConfirmedPassword() {
    const match = <Text style={styles.successTextStyle}>Ready!</Text>
    const notMatched = <Text style={styles.errorTextStyle}>Not Ready!</Text>

    return this.props.matchedPassword ? match : notMatched
  }

  renderSpinner() {
    if (this.props.loading) {
      return (
        <CardSection>
          <Spinner size='large' />
        </CardSection>
      )
    }

    const { navigate } = this.props.navigation;

    return (
      <CardSection>
        <Button whenPressed={() => this.onRegisterAttempt()}>
          Submit
        </Button>
      </CardSection>
    )
  }

  render() {
    return (
      <Card>
        <Text style={styles.welcome}>Create a new user</Text>
        <CardSection>
          <Input
            value={this.props.firstName}
            onChangeText={this.onFirstNameChange.bind(this)}
            placeholder="Thrill"
            label='First Name' />
        </CardSection>

        <CardSection>
          <Input
            value={this.props.lastName}
            onChangeText={this.onLastNameChange.bind(this)}
            placeholder="Clinton"
            label='Last Name' />
        </CardSection>

        <CardSection>
          <Input
            value={this.props.username}
            autoCapitalize={'none'}
            onChangeText={this.onUsernameChange.bind(this)}
            placeholder="SuperCoder415"
            label='Username' />
        </CardSection>

        <CardSection>
          <Input
            value={this.props.registerEmail}
            autoCapitalize={'none'}
            onChangeText={this.onRegisterEmailChange.bind(this)}
            placeholder="example@email.com"
            label='Email' />
        </CardSection>

        <CardSection>
          <Input
            value={this.props.registerPassword}
            onChangeText={this.onRegisterPasswordChange.bind(this)}
            autoCapitalize={'none'}
            secureTextEntry
            placeholder="Password"
            label='Password' />
        </CardSection>

        <CardSection>
          <Input
            value={this.props.confirmedPassword}
            onChangeText={this.onConfirmedPasswordChange.bind(this)}
            secureTextEntry
            autoCapitalize={'none'}
            placeholder="Confirm Password"
            label='Confirm Password' />
        </CardSection>

        <CardSection>
          <Button whenPressed={() => this.checkPasswordWithConfirmPassword()} style={{ backgroundColor: 'red', borderColor: 'red' }}>
            Checkaroo!!!
          </Button>
        </CardSection>

        <CardSection>
          <Button whenPressed={() => {
            if (this.props.matchedPassword) {
              this.props.navigation.navigate('Teams')
              return this.onRegisterAttempt()
            }
          }}>
            Submit
          </Button>
        </CardSection>

        <CardSection>
          { this.realTimeConfirmedPassword() }
        </CardSection>
      </Card>
    )
  }
}

Register.navigationOptions = {
  title: 'Register',
  headerLeft: null
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  successTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'green'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
