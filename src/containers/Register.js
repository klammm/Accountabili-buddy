import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class Register extends Component {
  submit = (values) => {
    console.log('submitting form', values)
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="First Name"/>
        <TextInput style={styles.input} placeholder="Last Name"/>
        <TextInput style={styles.input} placeholder="Username"/>
        <TextInput style={styles.input} placeholder="Password"/>
        <TextInput style={styles.input} placeholder="Confirm Password"/>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

Register.navigationOptions = {
  title: "Register"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    backgroundColor: '#0091EA',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#0091EA',
    padding: 5
  },
  buttonText: {
    backgroundColor: '#0091EA',
    color: "white",
    height: 20,
    textAlign: 'center',
    width: 150
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    height: 35,
    margin: 5,
    textAlign: 'center'
  }
})
