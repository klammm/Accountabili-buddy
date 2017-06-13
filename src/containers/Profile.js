import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Avatar, Grid, Row, Tile, Col } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RenderIf from 'react-renderif';

import { showUserProfile, showUserScore } from '../actions';
import { Button, CardSection, Card, Input, Spinner } from '../components/common';
import ImageDetail from './ImageDetail';

const mapStateToProps = (state) => {
  console.log('log this state: ', state);
  return {
    ...state
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ showUserProfile, showUserScore }, dispatch);
};

export class Profile extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   mounted: false
    // }
  }

  componentDidMount() {
    this.props.showUserProfile(1);
    this.props.showUserScore(1);
  }

  renderImages() {
    if(this.props.userProfile.ownedImages) {
      return this.props.userProfile.ownedImages.map(image =>
        <ImageDetail key={image.id} image={image} />);
    }
  }

  render() {
    const { avatarProfile, container, titleText } = styles;
    console.log('this.props hahahahha: ', this.props.userProfile);
    // console.log('mounted: ', this.state.mounted);
    return (
      // this is profile image and user name section
      <Card style={{marginTop: 20}}>
        <CardSection >
          <View>
            <Image
              style={avatarProfile}
              source={{ uri: this.props.userProfile.profile_image_url }}
            />
          </View>
          {/* <Card> */}
          <View style={container}>
              <Text style={titleText}>{this.props.userProfile.user_name}</Text>
              <Text >Push Ups: {this.props.userScore}</Text>
          </View>
        </CardSection>
        <CardSection>
          <ScrollView>
            {/* <CardSection> */}
              {this.renderImages()}
            {/* </CardSection> */}
          </ScrollView>
        </CardSection>
      </Card>
    );
  }
};

const styles = {
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
