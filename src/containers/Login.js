import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

export default class Login extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Accountabili-Buddy</Text>
        <TextInput style={styles.input} placeholder="Username" />
        <TextInput style={styles.input} placeholder="Password" />
        <TouchableOpacity
          onPress={() => navigate("Tab")}
          underlayColor='white'
          activeOpacity={0.7}>
          <View style={styles.login}>
            <Text style={styles.loginText}>Login</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            console.log('Hey Im being pressed');
            return navigate("Register")
          }}
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
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    height: 35,
    margin: 5,
    textAlign: 'center'
  }
})
