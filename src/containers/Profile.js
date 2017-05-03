import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar, Grid, Row } from 'react-native-elements';

import { Button, CardSection, Card, Input, Spinner } from '../components/common';

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    // height: 200,
    // width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#58FE58'
  },
  avatarProfile: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    width: 150,
    backgroundColor: 'red'
  }
});

const Profile = () => {
  return (
    // <Card>
    //   <CardSection>
    //         <Avatar style={styles.container}
    //           xlarge
    //           rounded
    //           source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
    //           // onPress={() => console.log("Works!")}
    //           activeOpacity={0.7}
    //         />
    //   </CardSection>
    // </Card>
    <Grid>
      <Row style={styles.container}>
        <Avatar
          style={styles.avatarProfile}
          xlarge
          rounded
          source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
          activeOpacity={0.7}
        />
      </Row>
    </Grid>
  )
};

export default Profile;
