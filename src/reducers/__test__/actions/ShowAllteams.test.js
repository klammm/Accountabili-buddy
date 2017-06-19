import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

import { showAllTeams } from '../../../actions/index';
import allTeamsModel from './fixtures/allTeams';

const middlewares = [thunk, promiseMiddleware()];
const mockStore = configureMockStore(middlewares);

describe('tests showAllTeams async actions', () => {
  it('fetches and returns all teams after async action is done', () => {
    fetch.mockResponse(JSON.stringify(allTeamsModel));
    const expectedActions = [
      { type: 'SHOW_ALL_TEAMS_PENDING' },
      { type: 'SHOW_ALL_TEAMS_FULFILLED', payload: allTeamsModel }
    ];
    const store = mockStore({ teamsList: [] });

    return store.dispatch(showAllTeams())
    .then((teams) => {
      console.log('list: ', teams);
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
