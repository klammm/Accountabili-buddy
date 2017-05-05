import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Avatar, Grid, Row, Tile, Col } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RenderIf from 'react-renderif';

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
    backgroundColor: 'transparent'
  },
  avatarProfile: {
    flex: 0,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 82,
    width: 82,
    backgroundColor: 'transparent'
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
  console.log('log this state: ', state);
  return {
    ...state
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ showUserProfile }, dispatch);
};

export class Profile extends Component {
  // something in redux or react state called mounted = false;
  constructor(props) {
    super(props);
    this.state = {
      mounted: false
    }
  }

  componentWillMount() {
    this.props.showUserProfile(1)
      .then((data) => {
        // set mounted = true;
        this.setState({
          mounted: true
        })
      });
  }

  renderImages() {
    console.log('array: ', this.props);
    if(this.state.mounted) {
      return this.props.userProfile.ownedImages.map(image =>
        <ImageDetail key={image.id} image={image} />);
    }
  }

  render() {
    console.log('this.props hahahahha: ', this.props.userProfile);
    console.log('mounted: ', this.state.mounted);
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
            {/* renderif goes here with if mounted */}
            {this.renderImages()}
        </CardSection>
        {/* <CardSection>
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
        </CardSection> */}
      </View>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
