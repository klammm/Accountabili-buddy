import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Avatar, Grid, Row, Tile, Col } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { showUserProfile } from '../actions';
import { Button, CardSection, Card, Input, Spinner } from '../components/common';
import ImageDetail from './ImageDetail';
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

const mapStateToProps = (state) => {
  return {
    ...state
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ showUserProfile }, dispatch);
};

export class Profile extends Component {
  componentWillMount() {
    this.props.showUserProfile(1);
  }
  render() {
    console.log('this.props: ', this.props);
    return (
      // this is profile image and user name section
      <View>
        <CardSection>
          <Card>
            <Image
              style={styles.avatarProfile}
              source={{ uri: this.props.userProfile.profile_image_url }}
            />
          </Card>
          <Card>
          <View style={styles.container}>
              <Text style={styles.titleText}>{this.props.userProfile.user_name}</Text>
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
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
