import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Camera extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Camera Works!!!!</Text>
      </View>
    )
  }
}
