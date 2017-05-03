import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import Router from './Router';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk, promiseMiddleware)
));


// Swiping action achieved through two 'menus' one for vertical and one for horizontal swiping
import Profile from './containers/Profile.js';
import Camera from './containers/Camera';
import DuckyRace from './containers/DuckyRace';
import Settings from './containers/Settings'

import Menu from './components/Menu';

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


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Menu
          routes={[
            { component: Profile },
            { component: SubMenu },
            { component: DuckyRace },
          ]}
          initialIndex={1}
        />
      </Provider>
    )
  }
}
