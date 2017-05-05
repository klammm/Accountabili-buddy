import React, { Component } from 'react';

import Profile from '../containers/Profile';
import Camera from '../containers/Camera';
import Ducky from '../containers/DuckyRace/PlayerList';
import Settings from '../containers/Settings'

import Menu from '../components/Menu';


// Swiping action achieved through two 'menus' one for vertical and one for horizontal swiping
const SubMenu = () => (
  <Menu
    routes={
      [
        { component: Settings },
        { component: Camera }
      ]
    }
    initialIndex={1}
    horizontal={false}
   />
);

export default class Slider extends Component {
  render() {
    return (
      <Menu
        routes={[
          { component: Profile },
          { component: SubMenu },
          { component: Ducky },
        ]}
        initialIndex={1}
      />
    );
  }
}

Slider.navigationOptions = {
  header: null
}
