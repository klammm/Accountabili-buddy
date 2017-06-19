import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = ({ children, style }) => {
  return (
    <View style={[styles.containerStyle, style]}>
      { children }
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
});

export { Card };
