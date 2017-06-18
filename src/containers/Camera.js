import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  Image,
  Text,
  AsyncStorage,
  KeyboardAvoidingView
} from 'react-native';
import { Input, Button, Card, CardSection } from '../components/common';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { repsChanged, captionChanged, tagFriendsChanged, pictureTaken, submitEvent } from '../actions';
import Camera from 'react-native-camera';
import { RNS3 } from 'react-native-aws3';
import { AWSAccessKeyId, AWSSecretKey } from 'react-native-dotenv';
import uuid from 'react-native-uuid';

const mapStateToProps = ({ photoEdit, login }) => {
  const { reps, friends, caption, imageUrl } = photoEdit;
  const { user } = login;

  return { reps, friends, caption, imageUrl, user };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ repsChanged, captionChanged, tagFriendsChanged, pictureTaken, submitEvent }, dispatch);
}

class CameraRoute extends Component {
  constructor(props) {
    super(props);

    this.state = {
      path: null,
      User: null
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('User').then((value) => {
      this.setState({ 'User': JSON.parse(value) })
    }).done()
  }

  takePicture() {
    this.camera.capture()
      .then((data) => {
        console.log(data);
        this.setState({ path: data.path })
        const file = {
          uri: data.path,
          name: `${uuid.v1()}.jpg`,
          type: 'image/jpeg',
        };

        const options = {
          keyPrefix: 'photos/',
          bucket: 'accountabilibuddy-1',
          region: 'us-west-1',
          accessKey: AWSAccessKeyId,
          secretKey: AWSSecretKey,
          successActionStatus: 201
        };

        RNS3.put(file, options).then(response => {
          if (response.status !== 201) {
            throw new Error('Failed to upload image to S3', response);
          }
          console.log('*** BODY ***', response.body);
          this.props.pictureTaken(response.body.postResponse.location)
        })
      })
      .catch(err => console.error(err));
  }

  renderCamera() {
    return (
      <Camera
        ref={(cam) => {
          this.camera = cam;
        }}
        style={styles.preview}
        aspect={Camera.constants.Aspect.fill}
        captureTarget={Camera.constants.CaptureTarget.disk}
      >
        <TouchableHighlight
          style={styles.capture}
          onPress={this.takePicture.bind(this)}
          underlayColor="rgba(255, 255, 255, 0.5)"
        >
          <View />
        </TouchableHighlight>
      </Camera>
    );
  }

  onRepsChange(reps) {
    this.props.repsChanged(reps)
  }

  onCaptionChange(text) {
    this.props.captionChanged(text)
  }

  onTagFriendsChange(text) {
    this.props.tagFriendsChanged(text)
  }

  onPictureSubmit() {
    const { reps, caption, imageUrl } = this.props;
    let userId;
    if (this.state.User || this.props.user) {
      userId = this.state.User.id || this.props.user
    }

    this.props.submitEvent({ reps, caption, userId, imageUrl });
    this.setState({ path: null })
  }

  renderImage() {
    return (
      <KeyboardAvoidingView
        style={styles.renderImage}
        behavior="padding">
        <Image
          source={{ uri: this.state.path }}
          style={styles.preview}
        />


        <View style={styles.inputs}>

          <CardSection style={{ backgroundColor: 'transparent' }}>
            <Input
              placeholder="rep count"
              autoCapitalize={'none'}
              onChangeText={this.onRepsChange.bind(this)}
              keyboardType={'numeric'}
              label='Reps' />
          </CardSection>

          <CardSection style={{ backgroundColor: 'transparent' }}>
            <Input
              placeholder='caption'
              autoCapitalize={'none'}
              onChangeText={this.onCaptionChange.bind(this)}
              multiline
              numberOfLines={3}
              maxLength={60}
              label='Caption' />
          </CardSection>

          <CardSection style={{ backgroundColor: 'transparent' }}>

            <Input
              label="tag friends"
              onChangeText={this.onTagFriendsChange.bind(this)}
              autoCapitalize={'none'}
              placeholder="tag friends @..." />
          </CardSection>
        </View>

        <View style={styles.cancelContainer}>
          <Button
            textStyleOverRide={styles.textStyleOverRide}
            style={styles.cancelButton}
            whenPressed={() => this.setState({ path: null })}>
            x
          </Button>
        </View>
        <View style={styles.btnContainer}>
            <Button
              whenPressed={() => this.onPictureSubmit()}
              textStyleOverRide={styles.textStyleOverRide}
              style={styles.button}>
              ↑
            </Button>
        </View>

      </KeyboardAvoidingView>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.path ? this.renderImage() : this.renderCamera()}
      </View>
    );
  }
};

const lightPurple = '#D961FF';
const transparentWhite = 'rgba(255, 255, 255, 0.5)';
const darkPurple = 'rgba(127, 13, 205, 0.58)';
const darkerPurple = 'rgba(127, 13, 205, 0.98)'
const brightWhite = 'rgba(255, 255, 255, 0.99)';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#000',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 5,
    borderColor: '#FFF',
    marginBottom: 15,
  },
  renderImage: {
    position: 'absolute',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  inputs: {
    position: 'absolute',
    alignItems: 'center',
    flexDirection: 'column',
    width: 300,
    height: 200,
    backgroundColor: 'transparent',
    bottom: 50
  },
  btnContainer: {
    position: 'absolute',
    right: 5,
    bottom: 20,
    backgroundColor: 'transparent',
  },
  cancelContainer: {
    position: 'absolute',
    right: -5,
    top: 10,
    backgroundColor: 'transparent',
  },
  textStyleOverRide: {
    color: brightWhite,
    paddingTop: 6,
    paddingBottom: 0,
    fontSize: 24,
    fontWeight: '600',
  },
  button: {
    backgroundColor: lightPurple,
    borderColor: lightPurple,
    height: 45,
    width: 45,
    flex: null
  },
  cancelButton: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    height: 45,
    width: 45,
    flex: null
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CameraRoute);
