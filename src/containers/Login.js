import React, { Component } from 'react';
import { Text, Dimensions, StyleSheet, View, Image, KeyboardAvoidingView, Platform } from 'react-native';
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


const offset = (Platform.OS === 'android') ? -500 : 0;

export class Login extends Component {
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
      <KeyboardAvoidingView keyboardVerticalOffset={offset}
        style={styles.imgContainer}
        behavior="padding">
      <Image source={loginImg} style={styles.imgContainer}>
        <View style={styles.fullBackground}>
          <Text style={styles.welcome}>Actbl</Text>

            <View style={styles.onBoard}>
              <Card style={styles.onBoardInput}>

                <CardSection>
                <Input
                  colorOveride={{ color: 'blue'}}
                  placeholder="email"
                  label='Email'
                  autoCapitalize={'none'}
                  value={this.props.email}
                  onChangeText={this.onEmailChange.bind(this)}
                  underlineColorAndroid={'transparent'}
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
                  underlineColorAndroid={'transparent'}
                />
              </CardSection>
            </Card>

            <Text style={styles.errorTextStyle}>
              {this.props.error}
            </Text>

            <Card style={styles.spinner}>
              {this.renderSpinner()}

            </Card>

            <Card style={styles.button}>
              <CardSection style={styles.loginButtons}>
                <Button
                  whenPressed={() => navigate('Register')}
                  textStyleOverRide={{ color: 'white'}}
                  style={{ backgroundColor: darkPurple, borderColor: darkerPurple, }}>
                  SIGN UP
                </Button>
              </CardSection>

              <CardSection style={styles.loginButtons}>
                <Button whenPressed={() => this.onLoginAttempt()}>
                  LOG IN
                </Button>
              </CardSection>

            </Card>
            </View>
        </View>
      </Image>
    </KeyboardAvoidingView>

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
  inputText: {
    color: darkPurple
  },
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
    position: 'absolute',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'transparent',
    flex: 1,
    width: null,
    height: null,
  },
  welcome: {
    fontSize: 44,
    margin: 10,
    marginTop: 100,
    marginBottom: 30,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorTextStyle: {
    marginTop: 20,
    fontSize: 15,
    alignSelf: 'center',
    color: darkPurple
  },
  onBoard: {
    position: 'relative',
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40,
    width: 300,
  },
  onBoardInput: {
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40
  },
  button: {
    marginTop: 15,
    marginLeft: 15
  },
  loginButtons: {
    marginTop: 4,
  },
  spinner: {
    height: 40
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
