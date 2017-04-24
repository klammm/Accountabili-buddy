import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { reduxForm } from 'redux-form';

class Register extends Component {
  submit = (values) => {
    console.log('submitting form', values)
  }


  render() {
    return (
      <View>
        <Text>First name</Text>
        <TextInput style={styles.input} />
        <Text>Last name</Text>
        <TextInput style={styles.input} />
        <Text>Email</Text>
        <TextInput style={styles.input} />
        <Text>Password</Text>
        <TextInput style={styles.input} />
        <TouchableOpacity onPress={this.props.handleSubmit(this.submit)}>
          <Text style={styles.button}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0091EA',
    color: "white",
    height: 30,
    lineHeight: 30,
    marginTop: 10,
    textAlign: 'center',
    width: 250
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    height: 37,
    width: 250
  }
})

export default reduxForm({ form: 'Form' })(Register);
