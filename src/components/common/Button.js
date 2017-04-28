import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({ whenPressed, children, style }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={whenPressed}
      underlayColor='white'
      style={[buttonStyle, style]}>
      <Text style={textStyle}>
        { children }
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#0091EA',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#0091EA',
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
});

export { Button };
