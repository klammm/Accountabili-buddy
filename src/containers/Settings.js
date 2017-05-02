import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#66A6FD',
  },
});

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text>Me</Text>
    </View>
  );
};

export default Settings;
