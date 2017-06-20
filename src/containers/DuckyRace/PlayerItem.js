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
    duckyContainerStyle,
    wavesStyle,
    duckyStyle,
    scoresTextStyle,
    playerSections
  } = styles;

  let arr = [];
  scores = Number(scores);
  let wavesCreater = scores;
  if (wavesCreater > 110) {
    wavesCreater = 110
  }
  for (let i = 0; i < wavesCreater; i += 10) {
      arr.push('w');
  }
  let resultarr = arr.map((w, index) => <Image key={index} style={wavesStyle} source={wave} />);

  let displayNum;
  if (isNaN(scores)) {
    //display nothing:
    displayNum = 0;
  } else{
    displayNum = scores;
  }

  return (
    <Card>
      <CardSection style={playerSections}>
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


const lightBlueBorder = 'rgba(105, 62, 247, 0.19)';
const lightPinkOpacity = 'rgba(252, 74, 213, 0.14)';
const white = 'rgb(255, 255, 255)';
const watermelon = 'rgb(198, 27, 114)';
const atomPurple = 'rgb(160, 40, 255)';

const styles = {
  playerSections: {
    backgroundColor: lightPinkOpacity,
    borderRadius: 5,
    borderWidth: 1.8,
    borderColor: lightBlueBorder,
    marginLeft: 4,
    margin: 4
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 45,
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
    marginTop: 3,
    fontSize: 12,
    fontWeight: 'bold',
    color: watermelon
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
    color: atomPurple,
    fontWeight: 'bold',
    marginTop: 5
  }
};

export default PlayerItem;
