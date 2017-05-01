import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import Router from './Router';

import Camera from './containers/Camera';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk, promiseMiddleware)
));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Camera />
      </Provider>
    )
  }
}
