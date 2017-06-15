import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { CardSection } from '../components/common';

const ImageDetail = ({ image }) => {
  const { imageUrl, caption } = image;
  const { imgContainer, imagesStyle } = styles;
  return (
    <View style={{ borderWidth: 0.8, borderColor: '#a0a2a5' }}>
      <CardSection>
        <Image
          style={imagesStyle}
          source={{ uri: imageUrl }}
        />
        {/* <View></View> */}
      </CardSection>
      <CardSection>
        <Text>{caption}</Text>
      </CardSection>
    </View>
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
    height: 250
  }
});

export default ImageDetail;
