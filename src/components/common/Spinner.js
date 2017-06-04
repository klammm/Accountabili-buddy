import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

// be consistent where you place your styles versus your components.
// are you styles above or below your component declarations? 

const Spinner = ({ size }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
};

const styles = StyleSheet.create({
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export { Spinner };
