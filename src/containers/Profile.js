import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Profile extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Profile Works!!!!</Text>
      </View>
    )
  }
}
