import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { register } from '../actions';
import { NavigationActions } from 'react-navigation';

const mapStateToProps = state => ({
  login: state.login
});

const mapDispatchToProps = dispatch => {
  return {
    register: () => dispatch(NavigationActions.navigate({ routeName: 'Register' }))
  }
  // return bindActionCreators({ register }, dispatch)
}

class Login extends Component {
  render() {
    console.log('Hey we"re starting off with these props: ', this.props)
    console.log("Register action: ", this.props.register())
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Accountabili-Buddy</Text>
        <TouchableOpacity
          onPress={() => { console.log('Login!!!!') }}
          underlayColor='white'
          activeOpacity={0.7}>
          <View style={styles.login}>
            <Text style={styles.loginText}>Login</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.register(this.props)}
          underlayColor='white'
          activeOpacity={0.7}>
          <View style={styles.register}>
            <Text style={styles.registerText}>Register</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

Login.propTypes = {
  navigation: PropTypes.object.isRequired,
  login: PropTypes.bool.isRequired,
  register: PropTypes.func.isRequired,
};

Login.navigationOptions = {
  title: "Login"
};

const styles = StyleSheet.create({
  login: {
    backgroundColor: '#0091EA',
    borderWidth: 5,
    borderRadius: 20,
    borderColor: '#0091EA',
    padding: 5
  },
  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  register: {
    backgroundColor: '#4CB906',
    borderWidth: 5,
    borderRadius: 20,
    borderColor: '#4CB906',
    padding: 5
  },
  registerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
