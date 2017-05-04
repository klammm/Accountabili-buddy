import React from 'react';
<<<<<<< HEAD
import { View, ActivityIndicator } from 'react-native';
=======
import { View, ActivityIndicator, StyleSheet } from 'react-native';
>>>>>>> 91b0c35ab9694cd1083f1eea6126e63e163b642b

const Spinner = ({ size }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
};

<<<<<<< HEAD
const styles = {
=======
const styles = StyleSheet.create({
>>>>>>> 91b0c35ab9694cd1083f1eea6126e63e163b642b
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
<<<<<<< HEAD
};
=======
})
>>>>>>> 91b0c35ab9694cd1083f1eea6126e63e163b642b

export { Spinner };
