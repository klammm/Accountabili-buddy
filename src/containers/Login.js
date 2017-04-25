import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View>
        <Text>Login here!</Text>
        <Button title="Login" color="#0091EA" accessibilityLabel='Login' />
        <Button title="Register" color="#4CB906" accessibilityLabel="Register" />
      </View>
    )
  }
}
