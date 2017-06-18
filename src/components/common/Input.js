import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, autoCapitalize, multiline, numberOfLines, maxLength, keyboardType }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>

      <TextInput
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        multiline={multiline}
        numberOfLines={numberOfLines}
        maxLength={maxLength}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const darkPurple = 'rgba(127, 13, 205, 0.38)';
const lightPurple = '#D961FF';

const styles = StyleSheet.create({
  inputStyle: {
    color: 'white',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 15,
    lineHeight: 23,
    flex: 2
  },
  containerStyle: {
    marginTop: 10,
    height: 30,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: lightPurple
  }
});

export { Input };
