import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={[viewStyle, props.style]}>
      <Text style={[textStyle, props.headerTextStyle]}>{props.headerText}</Text>
    </View>
  );
};

const whiteOpacity = 'rgba(255, 255, 255, 0.24)';
const grey = 'rgba(164, 164, 164, 0.91)';

const styles = {
  viewStyle: {
    backgroundColor: whiteOpacity,
    borderBottomWidth: 1,
    borderColor: grey,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    paddingBottom: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

export { Header };
