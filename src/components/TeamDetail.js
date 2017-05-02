import React from 'react';
import { StyleSheet } from 'react-native';
import { CardSection, Card } from './common';


// REMINDER:
// Button when pressed needs to join a team
const TeamDetail = ({ team }) => {
  const { name, team_image_url } = team;
  const { thumbnailContainerStyle, thumbnailStyle } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle} source={{ uri: team_image_url }} />
        </View>
      </CardSection>

      <CardSection>
        <Button>
          { name }
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  }
})

export default TeamDetail
