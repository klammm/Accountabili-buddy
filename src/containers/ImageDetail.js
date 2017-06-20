import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CardSection, Card } from '../components/common';
import Dimensions from 'Dimensions';
import Image from 'react-native-scalable-image';


const ImageDetail = ({ image, uri, username }) => {
  const { imageUrl, caption } = image;
  const { imgContainer, imagesStyle, imageContainerStyle, postImage,
          postTextStyle, canvas, imageAvatar, cardStyle, cardSectionStyle, usernameStyle } = styles;

  return (
    <Card style={cardStyle}>
    <CardSection style={cardSectionStyle}>
      <Image
        width = {30}
        style = {imageAvatar}
        source= {{ uri: uri }}/>
      <Text style={usernameStyle}>{ username }</Text>
    </CardSection>
    <CardSection style={cardSectionStyle}>
        <View style={styles.imgContainer}>
          <Image
            width={Dimensions.get('window').width}
            source={{ uri: imageUrl }}
          />
        </View>
    </CardSection>
    <CardSection style={cardSectionStyle}>
        <Text style={postTextStyle}>{caption}</Text>
    </CardSection>
    </Card>
  );
};

const win = Dimensions.get('window');
const widthspec = win.width;
const hightspec = win.height - 30;
const white = 'rgba(255, 255, 255, 0.96)';
const purpleOpacity = 'rgba(127, 13, 205, 0.38)';
const darkPurpleOpacity = 'rgba(84, 0, 168, 0.78)';
const greyOpacity = 'rgba(138, 138, 138, 0.38)';
const darkgrey = 'rgb(52, 50, 56)';

const styles = StyleSheet.create({
  cardSectionStyle: {
    marginLeft: 0,
    padding: 0,
    paddingTop: 10,
    paddingBottom: 3,
    flex: 1,
    flexDirection: 'row'
  },
  imgCanvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    position: 'relative'
  },
  cardStyle: {
    backgroundColor: white,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    paddingTop: 15,
    paddingBottom: 25
  },
  imageAvatar: {
    flexDirection: 'row',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 1,
    height: 30,
    width: 30,
    marginLeft: 25,
    backgroundColor: 'white'
  },
  usernameStyle: {
    marginLeft: 9,
    paddingTop: 9,
    color: darkgrey,
    fontWeight: '600'
  },
  postTextStyle : {
    marginLeft: 25,
    color: darkgrey
  }
});

export default ImageDetail;
