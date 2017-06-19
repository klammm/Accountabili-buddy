import { emailChanged } from '../index';

describe('tests emailChanged action', () => {
  it('shows the email changed', () => {
    const text = 'klamklam@gahbo.com';
    const expectedActions = {
      type: 'EMAIL_CHANGE',
      payload: text
    };
    expect(emailChanged(text)).toEqual(expectedActions);
  });
});
