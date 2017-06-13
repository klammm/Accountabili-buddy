import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { CardSection } from '../components/common';

const ImageDetail = ({ image }) => {
  const { imageUrl } = image;
  const {
    imgContainer,
    imagesStyle
  } = styles;
  console.log(image);
  return (
    <CardSection>
      <Image
        style={imagesStyle}
        source={{ uri: imageUrl }}
      />
    </CardSection>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  imagesStyle: {
    flex:1,
    // backgroundColor: '#CCC',
    // margin: 10,
    height: 300
    // width: 300
  }
});

export default ImageDetail;
