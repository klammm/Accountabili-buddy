import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Button, CardSection, Card, Input } from '../components/common';
import { connect } from 'react-redux';
import { FBLogin, FBLoginManager } from 'react-native-facebook-login';
import { emailChanged, passwordChanged, loginUser } from '../actions';

const mapStateToProps = (state) => {
  return {
    email: state.email,
    password: state.password,
    loading: state.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginToApp: (email, pasword) => { dispatch(loginAction(email, password)) }
  };
};

export class Login extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onLoginAttempt() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Card>
        <Text style={styles.welcome}>Accountabili-Buddy</Text>

        <CardSection>
          <Input
            placeholder="example@gmail.com"
            label='Email'
            onChangeText={() => this.onEmailChange}
          />
        </CardSection>

        <CardSection>
          <Input
            placeholder='Password'
            label="Password"
            onChangeText={() => this.onPasswordChange}
          />
        </CardSection>

        <CardSection>
          <Button whenPressed={() => this.onLoginAttempt()}>
            Log in
          </Button>
          <Button whenPressed={() => navigate('Register')} style={{ backgroundColor: '#4CB906', borderColor: '#4CB906' }}>
            Sign Up
          </Button>
        </CardSection>
        {/* <FBLogin /> */}
      </Card>
    )
  }
}

Login.navigationOptions = {
  title: "Login"
};

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
})

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(Login);
