import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Avatar, Grid, Row, Tile, Col } from 'react-native-elements';

import { Button, CardSection, Card, Input, Spinner } from '../components/common';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // height: 800,
    // width: 800,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#58FE58'
  },
  avatarProfile: {
    flex: 0,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 82,
    width: 82,
    backgroundColor: 'red'
  },
  imgContainer: {
    flex: 1
  },
  imageInProf: {
    width: 122,
    height: 122
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold'
  }
});

const Profile = () => {
  return (
    <View>
      <CardSection>
        <Card>
          <Image
            style={styles.avatarProfile}
            source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
          />
        </Card>
        <Card>
        <View style={styles.container}>
            <Text style={styles.titleText}>Mary Lai</Text>
            <Text >Push Ups: 40</Text>
        </View>
      </Card>
      </CardSection>
      <CardSection>
        <Card style={styles.imgContainer}>
          <Image
            style={styles.imageInProf}
            source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg" }}
          />
        </Card>
        <Card style={styles.imgContainer}>
          <Image
            style={styles.imageInProf}
            source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg" }}
          />
        </Card>
        <Card style={styles.imgContainer}>
          <Image
            style={styles.imageInProf}
            source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg" }}
          />
        </Card>
      </CardSection>
      <CardSection>
        <Card style={styles.imgContainer}>
          <Image
            style={styles.imageInProf}
            source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg" }}
          />
        </Card>
        <Card style={styles.imgContainer}>
          <Image
            style={styles.imageInProf}
            source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg" }}
          />
        </Card>
        <Card style={styles.imgContainer}>
          <Image
            style={styles.imageInProf}
            source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg" }}
          />
        </Card>
      </CardSection>
    </View>
  )
};

export default Profile;
