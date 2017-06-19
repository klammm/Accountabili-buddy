import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

import { showUserProfile } from '../../../actions/index';
import userProfileModel from './fixtures/userProfile';

const middlewares = [thunk, promiseMiddleware()];
const mockStore = configureMockStore(middlewares);

describe('tests showUserProfile async actions', () => {
  it('fetches and returns the user profile after async action is done', () => {
    fetch.mockResponse(JSON.stringify(userProfileModel));
    const expectedActions = [
      { type: 'SHOW_USER_PROFILE_PENDING' },
      { type: 'SHOW_USER_PROFILE_FULFILLED', payload: userProfileModel }
    ];
    const store = mockStore({ userProfile: {} });

    return store.dispatch(showUserProfile())
    .then((user) => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
