import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardSection = ({ children, style }) => {
  return (
    <View style={[styles.containerStyle, style]}>
      { children }
    </View>
  );
};

const $main = 'transparent';
const $border = 'transparent';

const styles = StyleSheet.create({
  containerStyle: {
    padding: 5,
    backgroundColor: $main,
    borderColor: $border,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
});

export { CardSection };
