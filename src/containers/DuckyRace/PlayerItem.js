import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Card, CardSection } from '../../components/common';
import wave from '../../../assets/images/wave.png';
import ducky from '../../../assets/images/ducky.png';

const PlayerItem = ({ player, scores }) => {
  const { user_name, profile_image_url, id } = player;
  const {
    thumbnailContainerStyle,
    thumnbnailStyle,
    headerContentStyle,
    headerTextStyle,
    imageStyle,
    duckyContainerStyle,
    wavesStyle,
    duckyStyle,
    scoresTextStyle
  } = styles;

  let arr = [];
  scores = Number(scores);
  for (let i = 0; i < scores; i += 10) {
      arr.push('w');
  }
  let resultarr = arr.map(w => <Image style={wavesStyle} source={wave} />);

  let displayNum;
  if (isNaN(scores)) {
    //display nothing:
    displayNum = 0;
  } else{
    displayNum = scores;
  }

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image style={thumnbnailStyle} source={{ uri: profile_image_url }} />
          <Text style={headerTextStyle}>{user_name}</Text>
        </View>

        <View style={headerContentStyle}>
          <View style={duckyContainerStyle}>
            { resultarr }
            <Image style={duckyStyle} source={ducky} />
            <Text style={scoresTextStyle}>{displayNum}</Text>
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
    marginTop: 1,
    fontSize: 12,
    fontWeight: 'bold',
    color: 'rgb(33, 16, 92)'
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  },
  duckyContainerStyle: {
    marginTop: 11,
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: 'transparent',
    position: 'relative'
  },
  wavesStyle: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: 14,
    width: 15,
    marginTop: 40
  },
  duckyStyle: {
    height: 54,
    width: 59,
    marginBottom: 5,
    paddingBottom: 15,
    position: 'relative'
  },
  scoresTextStyle: {
    marginLeft: 10,
    fontSize: 18,
    color: 'rgb(160, 40, 255)',
    fontWeight: 'bold',
    marginTop: 5
  }
};

export default PlayerItem;
