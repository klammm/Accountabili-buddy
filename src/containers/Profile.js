
import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, AsyncStorage } from 'react-native';
import { Avatar, Grid, Row, Tile, Col } from 'react-native-elements';
import { Header } from '../components/common';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RenderIf from 'react-renderif';
import { showUserProfile, showUserScore } from '../actions';
import { Button, CardSection, Card, Input, Spinner } from '../components/common';
import ImageDetail from './ImageDetail';
import redGrd from '../../assets/images/redGrd.png';

const mapStateToProps = (state) => {
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


    this.state = {
      User: null
    }
  }
  
  componentDidMount() {
    if (this.props.login.user) {
      this.props.showUserProfile(this.props.login.user.id);
      this.props.showUserScore(this.props.login.user.id);
    }
  }

  renderImages() {
    if(this.props.userProfile.ownedImages) {
      return this.props.userProfile.ownedImages.map(image =>{
        return <ImageDetail key={image.id} image={image} uri={this.props.userProfile.profile_image_url} username={this.props.userProfile.user_name}/>;
      })
    }
  }

  render() {
    const { imgContainer, avatarProfile, container, titleText, profileInfoContainer, pushupText, avatarContainer, textContainer, pushupTextEm } = styles;
    return (
        <View>
          <Header
            style={styles.headerStyle}
            headerTextStyle={styles.headerTextStyle}
            headerText={'ABB'}
          />
          <ScrollView>
            <Image source={redGrd} style={imgContainer}>
              <Card style={container}>
                  <View style={avatarContainer}>
                     <Image
                       style={avatarProfile}
                       source={{ uri: this.props.userProfile.profile_image_url }}/>
                  </View>
                  <View style={textContainer}>
                      <Text style={titleText}>{this.props.userProfile.user_name}</Text>
                      <Text style={pushupTextEm}> {this.props.userScore}</Text>
                      <Text style={pushupText}> All Time Count</Text>
                 </View>
               </Card>
            </Image>

            {this.renderImages()}
          </ScrollView>
          </View>
    );
  }
}


const white = 'rgba(255, 255, 255, 0.96)';
const greyOpacity = 'rgba(138, 138, 138, 0.38)';
const purpleOpacity = 'rgba(127, 13, 205, 0.38)';
const darkPurple = '#9552CE';
const pinkyPurple = 'rgb(247, 102, 255)';

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: white,
    borderColor: greyOpacity
  },
  headerTextStyle: {
    color: purpleOpacity,
    fontWeight: '600'
  },
  imgContainer: {
    flex: 1,
    width: null,
    height: null
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    paddingTop: 5
  },
  profileInfoContainer: {
    paddingTop: 7
  },
  avatarContainer: {
    margin: 17
  },
  avatarProfile: {
    flex: 0,
    borderRadius: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 1,
    height: 120,
    width: 120,
    backgroundColor: 'transparent',
    paddingTop: 5
  },
  textContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    paddingBottom: 30
  },
  titleText: {
    fontSize: 15,
    textAlign: 'center',
    color: darkPurple,
    backgroundColor: 'transparent'
  },
  pushupTextEm: {
    textAlign: 'center',
    fontSize: 60,
    fontWeight: '600',
    color: purpleOpacity,
    marginRight: 5
  },
  pushupText: {
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '400',
    color: darkPurple,
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
