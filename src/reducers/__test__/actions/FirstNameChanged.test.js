import { firstNameChanged } from '../../../actions/index';

describe('tests firstNameChanged action', () => {
  it('shows the first name changed', () => {
    const text = 'Luna';
    const expectedActions = {
      type: 'FIRST_NAME_CHANGE',
      payload: text
    };
    expect(firstNameChanged(text)).toEqual(expectedActions);
  });
});
