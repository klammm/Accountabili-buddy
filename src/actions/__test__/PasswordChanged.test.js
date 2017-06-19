import { passwordChanged } from '../index';

describe('tests passwordChanged action', () => {
  it('shows the email changed', () => {
    const text = 'helloyou2';
    const expectedActions = {
      type: 'PASSWORD_CHANGE',
      payload: text
    };
    expect(passwordChanged(text)).toEqual(expectedActions);
  });
});
