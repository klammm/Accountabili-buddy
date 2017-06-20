import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

import { submitEvent } from '../index';
import createEventModel from './fixtures/createEvent';

const middlewares = [thunk, promiseMiddleware()];
const mockStore = configureMockStore(middlewares);

const mockUrl = 'https://pbs.twimg.com/profile_images/842876355800788992/bQ4YV83U_400x400.jpg';

describe('tests SubmitEvent async actions', () => {
  it(' submit an event with the reps, caption and the caption for the picture that has been taken', () => {
    fetch.mockResponseOnce(JSON.stringify(createEventModel));
    const expectedActions = [
      { type: 'CREATE_EVENT_PENDING' },
      { type: 'SHOW_USER_PROFILE_PENDING'},
      { type: 'SHOW_USER_SCORE_PENDING'},
      { type: 'SHOW_ALL_TEAMS_PLAYERS_PENDING'},
      {type: 'SHOW_ALL_TEAM_PLAYERS_SCORES_PENDING'},
      { type: 'CREATE_EVENT_FULFILLED', payload: createEventModel }
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

    return store.dispatch(submitEvent(20, 'more pushups!', mockUrl, 1))
    .then((event) => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
