import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, Platform } from 'react-native';
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
  passwordMatch,
  loginUser
} from '../actions';
import loginImg2 from '../../assets/images/loginImg2.png';


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
    matchedPassword: registerPassword !== '' &&
     registerPassword === confirmedPassword
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
    passwordMatch,
    loginUser
  }, dispatch);
}

const offset = (Platform.OS === 'android') ? -500 : 0;

export class Register extends Component {
  onFirstNameChange(text) {
    this.props.firstNameChanged(text);
  }

  onLastNameChange(text) {
    this.props.lastNameChanged(text);
  }

  onUsernameChange(text) {
    this.props.usernameChanged(text);
  }

  onRegisterEmailChange(text) {
    this.props.registerEmailChanged(text);
  }

  onRegisterPasswordChange(text) {
    this.props.registerPasswordChanged(text);
  }

  onConfirmedPasswordChange(text) {
    this.props.confirmPasswordChanged(text);
  }

  onRegisterAttempt() {
    const { registerEmail, registerPassword, firstName, lastName, username } = this.props;

    this.props.registerUser({ registerEmail, registerPassword, firstName, lastName, username });
  }

  realTimeConfirmedPassword() {
    const { registerPassword, confirmedPassword } = this.props;

    if (registerPassword !== '' || confirmedPassword !== '') {

      const match = <Text style={styles.successTextStyle}>Passwords match</Text>
      const notMatched = <Text style={styles.errorTextStyle}>Passwords do not match</Text>
      return this.props.matchedPassword ? match : notMatched
    }
  }

  renderSpinner() {
    if (this.props.loading) {
      return (
        <CardSection style={styles.spinner}>
          <Spinner size='large' />
        </CardSection>
      )
    }

  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <Image source={loginImg2} style={styles.imgContainer}>
        <KeyboardAvoidingView keyboardVerticalOffset={offset}
          style={styles.imgContainer}
          behavior="padding">
          <Text style={styles.welcome}>Sign Up</Text>
          <Card >

            <Card style={styles.onBoard}>
            <Card style={styles.onBoard}>
            <CardSection>
              <Input
                value={this.props.firstName}
                onChangeText={this.onFirstNameChange.bind(this)}
                placeholder="first name"
                label='First Name' />
            </CardSection>

            <CardSection>
              <Input
                value={this.props.lastName}
                onChangeText={this.onLastNameChange.bind(this)}
                placeholder="last name"
                label='Last Name' />
            </CardSection>

            <CardSection>
              <Input
                value={this.props.username}
                autoCapitalize={'none'}
                onChangeText={this.onUsernameChange.bind(this)}
                placeholder="username"
                label='Username' />
            </CardSection>

            <CardSection>
              <Input
                value={this.props.registerEmail}
                autoCapitalize={'none'}
                onChangeText={this.onRegisterEmailChange.bind(this)}
                placeholder="email"
                label='Email' />
            </CardSection>

            <CardSection>
              <Input
                value={this.props.registerPassword}
                onChangeText={this.onRegisterPasswordChange.bind(this)}
                autoCapitalize={'none'}
                secureTextEntry
                placeholder="password"
                label='Password' />
            </CardSection>

            <CardSection>
              <Input
                value={this.props.confirmedPassword}
                onChangeText={this.onConfirmedPasswordChange.bind(this)}
                secureTextEntry
                autoCapitalize={'none'}
                placeholder="confirm password"
                label='Confirm Password' />
            </CardSection>
          </Card>



            <CardSection style={styles.checkOuterContainer}>
              <View style={styles.readyCheckContainer}>
                { this.realTimeConfirmedPassword() }
              </View>
            </CardSection>

            <Card style={styles.onBoardButton}>
            <CardSection>
              <Button whenPressed={() => {
                if (this.props.matchedPassword) {
                  this.onRegisterAttempt();
                  return this.props.navigation.navigate('Login')
                }
              }}>
                SUBMIT
              </Button>
            </CardSection>

            <CardSection>
              <Button
                style={{ backgroundColor: darkPurple, borderColor: darkerPurple }}
                whenPressed={() => this.props.navigation.navigate("Login")}>
                GO BACK
              </Button>
            </CardSection>
          </Card>

            { this.renderSpinner() }

          </Card>
        </Card>
      </KeyboardAvoidingView>
      </Image>
    )
  }
}

Register.navigationOptions = {
  title: 'Register',
  header: null
}

const darkerPurple = 'rgba(127, 13, 205, 0.98)'
const darkPurple = 'rgba(127, 13, 205, 0.38)';
const lightPurpleOpacity = 'rgba(190, 7, 247, 0.58)';
const white = 'rgba(255, 255, 255, 0.96)';
const transparentWhite = 'rgba(255, 255, 255, 0.45)';
const successGreen = 'rgba(134, 255, 115, 0.65)';

const styles = StyleSheet.create({
  imgContainer: {
    flex: 1,
    width: null,
    height: null
  },
  onBoard: {
    marginTop: 5,
    marginLeft: 40,
    marginRight: 40
  },
  onBoardButton: {
    marginTop: 25,
    marginLeft: 20,
    marginRight: 20
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    marginTop: 50,
    color: white,
    fontWeight: 'bold',
    backgroundColor: 'transparent'
  },
  errorTextStyle: {
    fontSize: 16,
    alignSelf: 'center',
    color: transparentWhite,
  },
  successTextStyle: {
    fontSize: 16,
    alignSelf: 'center',
    color: successGreen
  },
  readyCheckContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: 30,
    marginTop: 14
  },
  spinner: {
    marginTop: 10
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
