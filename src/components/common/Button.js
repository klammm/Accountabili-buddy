import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({ whenPressed, children, style, textStyleOverRide }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={whenPressed}
      underlayColor='white'
      style={[buttonStyle, style]}>
            <Text style={[textStyle, textStyleOverRide]}>
              { children }
            </Text>
    </TouchableOpacity>
  );
}

const darkPurple = '#9552CE';
const lightPurple = '#D961FF';
const transparentWhite = 'rgba(255, 255, 255, 0.95)';
const brightWhite = 'rgba(255, 255, 255, 0.99)';

const styles = StyleSheet.create({
  buttonStyle: {
    flex: 0.8,
    alignSelf: 'stretch',
    backgroundColor: transparentWhite,
    borderRadius: 25,
    borderWidth: 1.8,
    borderColor: brightWhite,
    marginLeft: 25,
    marginRight: 25,
    height: 40,
    width: 125,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 1,
  },
  textStyle: {
    alignSelf: 'center',
    color: lightPurple,
    fontSize: 15,
    fontWeight: '600',
    paddingTop: 9,
    paddingBottom: 8
  }
});

export { Button };
