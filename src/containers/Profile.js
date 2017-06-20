
import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, AsyncStorage } from 'react-native';
import { Avatar, Grid, Row, Tile, Col } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RenderIf from 'react-renderif';

import { showUserProfile, showUserScore } from '../actions';
import { Button, CardSection, Card, Input, Spinner } from '../components/common';
import ImageDetail from './ImageDetail';
import defaultPic from '../../assets/images/BATMAN_FB_PROFILE.jpg'

const mapStateToProps = (state) => {
  return {
    ...state
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ showUserProfile, showUserScore }, dispatch);
};

export class Profile extends Component {
  componentDidMount() {
    if (this.props.login.user) {
      this.props.showUserProfile(this.props.login.user.id);
      this.props.showUserScore(this.props.login.user.id);
    }
  }

  renderImages() {
    if(this.props.userProfile.ownedImages) {
      return this.props.userProfile.ownedImages.map(image =>{
        return <ImageDetail key={image.id} image={image} />;
      })
    }
  }

  render() {
    const { avatarProfile, container, titleText } = styles;
    return (
      <Card style={{ marginTop: 20 }}>
        <CardSection style={{ backgroundColor: '#007aff' }}>
          <View>
            <Image
              style={avatarProfile}
              source={{ uri: this.props.userProfile.profile_image_url}}
            />
          </View>
          <View style={container}>
              <Text>{this.props.userProfile.user_name}</Text>
              <Text >Push Ups: {this.props.userScore ? this.props.userScore : "0" }</Text>
          </View>
        </CardSection>
        <CardSection >
          <ScrollView >
              {this.renderImages()}
          </ScrollView>
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  avatarProfile: {
    flex: 0,
    borderRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 82,
    width: 82,
    backgroundColor: 'transparent'
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
