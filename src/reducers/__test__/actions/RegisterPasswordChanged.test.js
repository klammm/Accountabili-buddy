import { registerPasswordChanged } from '../../../actions/index';

describe('tests registerPasswordChanged action', () => {
  it('shows true if the password matches', () => {
    const text = 'hello2you';
    const expectedActions = {
      type: 'REGISTER_PASSWORD_CHANGE',
      payload: text
    };
    expect(registerPasswordChanged(text)).toEqual(expectedActions);
  });
});
