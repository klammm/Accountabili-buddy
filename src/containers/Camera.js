import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  Image,
  Text,
  AsyncStorage
} from 'react-native';
import { Input, Button, Card, CardSection } from '../components/common';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { repsChanged, captionChanged, tagFriendsChanged } from '../actions';
import Camera from 'react-native-camera';

const mapStateToProps = ({ photoEdit }) => {
  const { reps, friends, caption } = photoEdit;

  return { reps, friends, caption };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ repsChanged, captionChanged, tagFriendsChanged }, dispatch);
}

class CameraRoute extends Component {
  constructor(props) {
    super(props);

    AsyncStorage.getItem('User').then((value) => {
      this.setState({ 'User': JSON.parse(value) })
    }).done()

    this.state = {
      path: null,
      User: null
    };
  }

  takePicture() {
    this.camera.capture()
      .then((data) => {
        console.log(data);
        this.setState({ path: data.path })
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

  renderImage() {
    return (
      <View style={{ position: 'absolute', alignItems: 'center', flexDirection: 'column'}}>
        <Image
          source={{ uri: this.state.path }}
          style={styles.preview}
        />
        <Card style={{ position: 'absolute', alignItems: 'center', flexDirection: 'column', width: 300, height: 200, backgroundColor: 'transparent', top: 50 }}>
          <CardSection style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}>
            <Button>
              Submit
            </Button>
          </CardSection>

          <CardSection style={{ backgroundColor: 'transparent' }}>
            <Input
              placeholder="Over 9000"
              autoCapitalize={'none'}
              onChangeText={this.onRepsChange.bind(this)}
              keyboardType={'numeric'}
              label='Reps' />
          </CardSection>

          <CardSection style={{ backgroundColor: 'transparent' }}>
            <Input
              placeholder="Add your message to the world!"
              autoCapitalize={'none'}
              onChangeText={this.onCaptionChange.bind(this)}
              multiline
              numberOfLines={3}
              maxLength={60}
              label='Caption' />
          </CardSection>

          <CardSection style={{ backgroundColor: 'transparent' }}>

            <Input
              label="Tag your friends!"
              onChangeText={this.onTagFriendsChange.bind(this)}
              autoCapitalize={'none'}
              placeholder="@ThrillClinton" />
          </CardSection>
        </Card>
        <Text
          style={styles.cancel}
          onPress={() => this.setState({ path: null })}
        >Cancel
        </Text>
      </View>
    );
  }

  render() {
    console.log('Camera state: ', this.state);
    return (
      <View style={styles.container}>
        {this.state.path ? this.renderImage() : this.renderCamera()}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  cancel: {
    position: 'absolute',
    right: 20,
    top: 20,
    backgroundColor: 'transparent',
    color: '#FFF',
    fontWeight: '600',
    fontSize: 17,
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CameraRoute);
