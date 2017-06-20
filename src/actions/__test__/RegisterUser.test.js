import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

import { registerUser } from '../index';
import newUserModel from './fixtures/newUser';

const middlewares = [thunk, promiseMiddleware()];
const mockStore = configureMockStore(middlewares);

describe('tests registerUser async actions', () => {
  it(' submit an event with the reps, caption and the caption for the picture that has been taken', () => {
    fetch.mockResponseOnce(JSON.stringify(newUserModel));
    const expectedActions = [
      { type: 'CREATE_USER_PENDING' },
      { type: 'CREATE_USER_FULFILLED', payload: newUserModel }
    ];

    const store = mockStore({
      irstName: '',
      lastName: '',
      username: '',
      registerEmail: '',
      registerPassword: '',
      matchedPassword: null,
      confirmedPassword: ''
    });

    return store.dispatch(registerUser('klamklam@gahbo.com', 'youareawizard', 'Kevin', 'Klam', 'klamklam'))
    .then((event) => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
