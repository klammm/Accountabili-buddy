import { passwordMatch } from '../index';

describe('tests passwordMatch action', () => {
  it('shows true if the password matches', () => {
    const boolean = true;
    const expectedActions = {
      type: 'PASSWORD_CHECK',
      payload: boolean
    };
    expect(passwordMatch(boolean)).toEqual(expectedActions);
  });
});
