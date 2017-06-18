import React, { Component } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { Button, CardSection, Card, Input, Spinner } from '../components/common';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import LinearGradient from 'react-native-linear-gradient';
import loginImg from '../../assets/images/loginImg.png';


const mapStateToProps = ({ login }) => {
  const { email, password, error, loading, isLoggedIn } = login;

  return { email, password, error, loading, isLoggedIn };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ emailChanged, loginUser, passwordChanged }, dispatch);
};

class Login extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onLoginAttempt() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password }, this.props.navigation.navigate);
  }

  renderSpinner() {
    if (this.props.loading) {
      return (
        <CardSection style={styles.spinner}>
          <Spinner size='large' />
        </CardSection>
      )
    }
    const { navigate } = this.props.navigation;
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Image source={loginImg} style={styles.imgContainer}>
        <Card style={styles.fullBackground}>
          <Text style={styles.welcome}>Actbl</Text>

          <Card style={styles.onBoard}>
            <Card style={styles.onBoard}>
              <CardSection>
              <Input
                placeholder="example@gmail.com"
                label='Email'
                autoCapitalize={'none'}
                value={this.props.email}
                onChangeText={this.onEmailChange.bind(this)}
              />
            </CardSection>

            <CardSection >
              <Input
                placeholder='password'
                label="Password"
                autoCapitalize={'none'}
                secureTextEntry
                value={this.props.password}
                onChangeText={this.onPasswordChange.bind(this)}
              />
            </CardSection>
          </Card>

          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>

          <Card style={styles.spinnerButtons}>
            <CardSection style={styles.loginButtons}>
              <Button whenPressed={() => navigate('Register')} style={{ backgroundColor: darkPurple, borderColor: darkerPurple }}>
                SIGN UP
              </Button>
            </CardSection>

            <CardSection style={styles.loginButtons}>
              <Button whenPressed={() => this.onLoginAttempt()}>
                LOG IN
              </Button>
            </CardSection>
          </Card>
          {this.renderSpinner()}
          </Card>
        </Card>
      </Image>

    )
  }
}

Login.navigationOptions = {
  title: 'Log in',
  header: null
}

const darkerPurple = 'rgba(127, 13, 205, 0.98)'
const darkPurple = 'rgba(127, 13, 205, 0.58)';
const lightPurple = '#D961FF';
const lightPurpleOpacity = 'rgba(190, 7, 247, 0.58)';
const transparentWhite = 'rgba(255, 255, 255, 0.75)';
const transparentPurple = 'rgba(165, 84, 204, 0.85)'

const styles = StyleSheet.create({
  imgContainer: {
    flex: 1,
    width: null,
    height: null
  },
  linearGradient: {
    flex: 1,
    width: null,
    height: null,
  },
  fullBackground: {
    backgroundColor: 'transparent',
  },
  welcome: {
    fontSize: 44,
    textAlign: 'center',
    margin: 10,
    marginTop: 100,
    marginBottom: 30,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent'
  },
  errorTextStyle: {
    marginTop: 20,
    fontSize: 15,
    alignSelf: 'center',
    color: darkPurple
  },
  onBoard: {
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40
  },
  spinnerButtons: {
    marginTop: 15
  },
  loginButtons: {
    marginTop: 4
  },
  spinner: {
    marginTop: 40
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
