import { usernameChanged } from '../index';

describe('tests usernameChanged action', () => {
  it('shows the username changed', () => {
    const text = 'klamklam';
    const expectedActions = {
      type: 'USERNAME_CHANGE',
      payload: text
    };
    expect(usernameChanged(text)).toEqual(expectedActions);
  });
});
