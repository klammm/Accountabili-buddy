import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Button from './common/Button';

class DuckyDetail extends Component {
  // properties for individual players
  // const { title, artist, thumbnail_image, image } = album;
  // =

  // styling destructured
  const {
    thumnbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle
  } = styles;

  render() {
    return (
      <Card>
        <CardSection>
          {/* User Profile Image */}
          <View style={thumbnailContainerStyle}>
            <Image style={thumnbnailStyle} source={{ uri: thumbnail_image }} />
          </View>

          {/* Ducky Progress Bar */}
          <View style={headerContentStyle}>
            <Text style={headerTextStyle}>{title}</Text>
            <Text>{artist}</Text>
          </View>
        </CardSection>
      </Card>
    )
  }
};

export default DuckyDetail;

const styles = {
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  thumnbnailStyle: {
    height: 50,
    width: 50
  },
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};
