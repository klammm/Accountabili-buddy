import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Card, CardSection } from '../../components/common';
import wave from '../../../assets/images/wave.png';
import ducky from '../../../assets/images/ducky.png';

const PlayerItem = ({ player, scores }) => {
  const { user_name, first_name, last_name, profile_image_url, id } = player;
  const {
    thumbnailContainerStyle,
    thumnbnailStyle,
    headerContentStyle,
    headerTextStyle,
    imageStyle,
    duckyContainerStyle,
    wavesStyle,
    duckyStyle
  } = styles;

  let arr = [];
  scores = Number(scores);
  for (let i = 0; i < scores; i += 1) {
      arr.push('w');
  }
  let resultarr = arr.map(w => <Image style={wavesStyle} source={wave} />);

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image style={thumnbnailStyle} source={{ uri: profile_image_url }} />
        </View>

        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{user_name}</Text>
          <Text>{first_name} {last_name}</Text>
          <View style={duckyContainerStyle}>
            <Text>{scores}</Text>
            { resultarr }
            <Image style={duckyStyle} source={ducky} />
          </View>
        </View>
        </CardSection>
    </Card>
  );
};

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
  },
  duckyContainerStyle: {
    padding: 5,
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: 'transparent',
    position: 'relative'
  },
  wavesStyle: {
    height: 7,
    width: 5
  },
  duckyStyle: {
    height: 30,
    width: 34,
    marginBottom: 5,
    paddingBottom: 5,
    position: 'relative'
  }
};

export default PlayerItem;
