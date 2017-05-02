import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#58FE58',
  },
});

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>User Profile</Text>
    </View>
  );
};

export default Profile;
