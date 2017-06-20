import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { CardSection, Card } from '../components/common';
import Dimensions from 'Dimensions';

const ImageDetail = ({ image, uri }) => {
  const { imageUrl, caption } = image;
  const { imgContainer, imagesStyle, imageContainerStyle, postImage,
          postTestStyle, canvas, imageAvatar, cardStyle, cardSectionStyle } = styles;

  return (
    <Card style={cardStyle}>
    <CardSection style={cardSectionStyle}>
      <Image
        style = {imageAvatar}
        source= {{ uri: uri }}/>
    </CardSection>
    <CardSection style={cardSectionStyle}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.imgCanvas}
            resizeMode='cover'
            resizeMode= {"contain"}
            source={{ uri: imageUrl }}
          />
        </View>
    </CardSection>
    <CardSection style={cardSectionStyle}>
        <Text style={postTestStyle}>{caption}</Text>
    </CardSection>
    </Card>
  );
};

const win = Dimensions.get('window');
const widthspec = win.width;
const hightspec = win.height - 30;
const white = 'rgba(255, 255, 255, 0.96)';
const purpleOpacity = 'rgba(127, 13, 205, 0.38)';
const greyOpacity = 'rgba(138, 138, 138, 0.38)';

const styles = StyleSheet.create({
  imgCanvas: {
      flex:1,
      width: null,
      height: null
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  cardStyle: {
    backgroundColor: white,
    borderBottomWidth: 1,
    borderColor: greyOpacity,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
  },
  cardSectionStyle: {
    marginLeft: 10,
    padding: 5,
    marginTop: 10,
    marginBottom: 10
  },
  imageAvatar: {
    flexDirection: 'row',
    borderRadius: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 1,
    height: 30,
    width: 30,
    marginLeft: 10,
    backgroundColor: 'white'
  },
  postTestStyle :{
    marginLeft: 5
  }
});

export default ImageDetail;
