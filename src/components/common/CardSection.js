import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardSection = ({ children, style }) => {
  return (
    <View style={[styles.containerStyle, style]}>
      { children }
    </View>
  );
};

const $white = '#fff';
const $grey = '#ddd';

const styles = StyleSheet.create({
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: $white,
    borderColor: $grey,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
});

export { CardSection };
