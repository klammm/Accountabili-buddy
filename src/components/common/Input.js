import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const Input = ({ children, textStyle,
  colorOveride, label, value, onChangeText, placeholder, secureTextEntry, autoCapitalize, multiline, numberOfLines, maxLength, keyboardType, underlineColorAndroid }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>

      <TextInput
        placeholder={placeholder}
        placeholderTextColor={[white]}
        autoCorrect={false}
        style={[inputStyle, textStyle]}
        value={value}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        multiline={multiline}
        numberOfLines={numberOfLines}
        maxLength={maxLength}
        keyboardType={keyboardType}
        underlineColorAndroid={underlineColorAndroid}
      >
        { children }
      </TextInput>
    </View>
  );
};

const darkPurple = 'rgba(127, 13, 205, 0.88)';
const lightPurple = '#D961FF';
const white = 'rgb(255, 255, 255)';

const styles = StyleSheet.create({
  inputStyle: {
    color: darkPurple,
    paddingRight: 5,
    paddingLeft: 5,
    paddingTop: 15 - (20 * 0.75),
    fontSize: 15,
    lineHeight: Math.ceil(20 * 0.75),
    flex: 2
  },
  containerStyle: {
    marginTop: 10,
    height: 30,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: lightPurple,
  }
});

export { Input };
