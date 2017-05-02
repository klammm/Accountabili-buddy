import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(168, 8, 255)',
  },
});

const Ducky = () => {
  return (
    <View style={styles.container}>
      <Text>Ducky Race</Text>
    </View>
  );
};

export default Ducky;
