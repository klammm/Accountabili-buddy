import { registerEmailChanged } from '../index';

describe('tests registerEmailChanged action', () => {
  it('shows the email changed', () => {
    const text = 'luna@yahoo.com';
    const expectedActions = {
      type: 'REGISTER_EMAIL_CHANGE',
      payload: text
    };
    expect(registerEmailChanged(text)).toEqual(expectedActions);
  });
});
