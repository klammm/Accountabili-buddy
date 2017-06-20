import { confirmPasswordChanged } from '../index';

describe('tests confirmPasswordChanged action', () => {
  it('shows the password confirmed', () => {
    const text = 'youreawsome';
    const expectedActions = {
      type: 'CONFIRM_PASSWORD_CHANGE',
      payload: text
    };
    expect(confirmPasswordChanged(text)).toEqual(expectedActions);
  });
});
