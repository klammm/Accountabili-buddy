/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


 import React, { Component } from 'react';
 import { AppRegistry } from 'react-native';
 import { Provider } from 'react-redux';
 import { createStore, applyMiddleware, compose } from 'redux';
 import promiseMiddleware from 'redux-promise-middleware';
 import thunk from 'redux-thunk';
 import rootReducer from './src/reducers';
 import AppWithNavigationState from './App';

 const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk, promiseMiddleware));

class Accountabilibuddy extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Accountabilibuddy', () => Accountabilibuddy);
