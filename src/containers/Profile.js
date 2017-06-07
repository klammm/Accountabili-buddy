import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Avatar, Grid, Row, Tile, Col } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RenderIf from 'react-renderif';

import { showUserProfile } from '../actions';
import { Button, CardSection, Card, Input, Spinner } from '../components/common';
import ImageDetail from './ImageDetail';

const mapStateToProps = (state) => {
  return {
    ...state
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ showUserProfile }, dispatch);
};

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false
    }
  }

  componentWillMount() {
    this.props.showUserProfile(1)
      .then((data) => {
        this.setState({
          mounted: true
        })
      });
  }

  renderImages() {
    if(this.state.mounted) {
      return this.props.userProfile.ownedImages.map(image =>
        <ImageDetail key={image.id} image={image} />);
    }
  }

  render() {
    return (
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
          {this.renderImages()}
        </CardSection>
      </View>
    );
  }
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
