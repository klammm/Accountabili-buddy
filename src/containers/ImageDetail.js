import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { CardSection, Card } from '../components/common';
import Dimensions from 'Dimensions';

export const ImageDetail = ({ image }) => {
  const { imageUrl, caption } = image;
  const { imgContainer, imagesStyle, imageContainerStyle, postImage, postTestStyle, canvas } = styles;

  return (
    <Card>
      <CardSection>
        <View style={styles.imgContainer}>
          <Image
            style={styles.canvas}
            resizeMode= {"contain"} source={{ uri: imageUrl }}
          />
        </View>
      </CardSection>
      <CardSection>
        <Text style={postTestStyle}>{caption}</Text>
      </CardSection>
    </Card>
  );
};

const win = Dimensions.get('window');
const widthspec = win.width - 30;
const hightspec = win.height - 30;

const styles = StyleSheet.create({
  canvas: {
      flex: 1,
      alignSelf: 'stretch',
      width: widthspec,
      height: hightspec,
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
});

export default ImageDetail;
