import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

import { showUserScore } from '../index';
import userScoreModel from './fixtures/userScore';


const middlewares = [thunk, promiseMiddleware()];
const mockStore = configureMockStore(middlewares);

describe('tests showUserProfile async actions', () => {
  it('fetches and returns the user profile after async action is done', () => {
    fetch.mockResponse(JSON.stringify(userScoreModel));
    const expectedActions = [
      { type: 'SHOW_USER_SCORE_PENDING' },
      { type: 'SHOW_USER_SCORE_FULFILLED', payload: userScoreModel.sum}
    ];
    const store = mockStore({ sum: '' });

    return store.dispatch(showUserScore())
    .then((score) => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
