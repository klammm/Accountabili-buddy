import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

import { showAllScores } from '../index';
import { allScoresModel, helper } from './fixtures/allScores';

const middlewares = [thunk, promiseMiddleware()];
const mockStore = configureMockStore(middlewares);


describe('tests showAllScores async actions', () => {
  it('fetches and returns the score fo all players in the team after async action is done', () => {
    fetch.mockResponse(JSON.stringify(allScoresModel));
    const expectedActions = [
      { type: 'SHOW_ALL_TEAM_PLAYERS_SCORES_PENDING' },
      { type: 'SHOW_ALL_TEAM_PLAYERS_SCORES_FULFILLED', payload: helper(allScoresModel) }
    ];
    const store = mockStore({ teamsList: [] });

    return store.dispatch(showAllScores())
    .then((scores) => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
