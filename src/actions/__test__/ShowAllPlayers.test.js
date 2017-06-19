import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

import { showAllPlayers } from '../index';
import allPlayersModel from './fixtures/allPlayers';

const middlewares = [thunk, promiseMiddleware()];
const mockStore = configureMockStore(middlewares);

describe('tests showAllPlayers async actions', () => {

  it('fetches and returns the list of players of a team after async action is done', () => {
    fetch.mockResponse(JSON.stringify(allPlayersModel));
    const expectedActions = [
      { type: 'SHOW_ALL_TEAM_PLAYERS_PENDING' },
      { type: 'SHOW_ALL_TEAM_PLAYERS_FULFILLED', payload: allPlayersModel.users }
    ];
    const store = mockStore({ players: [] });

    return store.dispatch(showAllPlayers())
    .then((players) => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
