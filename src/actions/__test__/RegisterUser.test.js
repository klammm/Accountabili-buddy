import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

import { registerUser } from '../index';
import newUserModel from './fixtures/newUser';

const middlewares = [thunk, promiseMiddleware()];
const mockStore = configureMockStore(middlewares);

describe('tests registerUser async actions', () => {
  it(' submit an event with the reps, caption and the caption for the picture that has been taken', () => {
    console.log(newUserModel);
    fetch.mockResponseOnce(JSON.stringify(newUserModel));
    const expectedActions = [
      { type: 'CREATE_EVENT_PENDING' },
      { type: 'SHOW_USER_PROFILE_PENDING'},
      { type: 'SHOW_USER_SCORE_PENDING'},
      { type: 'SHOW_ALL_TEAMS_PLAYERS_PENDING'},
      {type: 'SHOW_ALL_TEAM_PLAYERS_SCORES_PENDING'},
      { type: 'CREATE_EVENT_FULFILLED', payload: newUserModel }
    ];
    fetch.mockResponseOnce(JSON.stringify({})); // getUserById
    fetch.mockResponseOnce(JSON.stringify(100)); // getUserScore
    fetch.mockResponseOnce(JSON.stringify([])); // grabAllPlayers
    fetch.mockResponseOnce(JSON.stringify([])); // grabAllScores

    const store = mockStore({
      reps: 100,
      friends: '',
      caption: '',
      imageUrl: '',
      pictureComplete: null,
      loading: null,
      error: ''
    });

    return store.dispatch(registerUser('klamklam@gahbo.com', 'youareawizard', 'Kevin', 'Klam', 'klamklam'))
    .then((event) => {
      console.log(event, '<<<<<');
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
