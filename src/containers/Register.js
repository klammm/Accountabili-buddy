import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Button, Card, CardSection, Input } from '../components/common';

export default class Register extends Component {
  submit = (values) => {
    console.log('submitting form', values)
  }

  render() {
    return (
      <Card>
        <Text style={styles.welcome}>Create a new user</Text>
        <CardSection>
          <Input placeholder="Oarack" label='First Name' />
        </CardSection>

        <CardSection>
          <Input placeholder="Bbama" label='Last Name' />
        </CardSection>

        <CardSection>
          <Input placeholder="SuperCoder415" label='Username' />
        </CardSection>

        <CardSection>
          <Input placeholder="example@email.com" label='Email' />
        </CardSection>

        <CardSection>
          <Input placeholder="Password" label='Password' />
        </CardSection>

        <CardSection>
          <Input placeholder="Confirm Password" label='Confirm Password' />
        </CardSection>

        <CardSection>
          <Button whenPressed={() => this.props.navigation.navigate('Teams')}>
            Submit
          </Button>
        </CardSection>
      </Card>
    )
  }
}

Register.navigationOptions = {
  title: "Register"
};

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
})
