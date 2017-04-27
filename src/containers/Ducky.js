import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Ducky extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Ducky Works!!!!</Text>
      </View>
    )
  }
}
