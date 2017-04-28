import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Button, CardSection, Card, Input } from '../components/common';

export default class Login extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Card>
        <Text style={styles.welcome}>Accountabili-Buddy</Text>

        <CardSection>
          <Input
            placeholder="example@gmail.com"
            label='Email'
          />
        </CardSection>

        <CardSection>
          <Input
            placeholder='Password'
            label="Password"
          />
        </CardSection>

        <CardSection>
          <Button whenPressed={() => navigate("Tab")}>
            Log in
          </Button>
          <Button whenPressed={() => navigate('Register')} style={{ backgroundColor: '#4CB906', borderColor: '#4CB906' }}>
            Sign Up
          </Button>
        </CardSection>
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
