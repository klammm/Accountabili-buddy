import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Card, CardSection } from '../../components/common';

const DuckyItem = ({ player }) => {
  const { user_name, first_name, last_name, profile_image_url } = player;
  const {
    thumbnailContainerStyle,
    thumnbnailStyle,
    headerContentStyle,
    headerTextStyle,
    imageStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image style={thumnbnailStyle} source={{ uri: profile_image_url }} />
        </View>

        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{user_name}</Text>
          <Text>{first_name} {last_name}</Text>
        </View>
        </CardSection>
    </Card>
  );
};

export default DuckyItem;

const styles = {
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  thumnbnailStyle: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};
