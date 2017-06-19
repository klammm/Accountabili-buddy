import { tagFriendsChanged } from '../index';

describe('tests tagFriendsChanged action', () => {
  it('returns the tag friends when a user logs the results', () => {
    const text = 'Mary';
    const expectedActions = {
      type: 'TAG_FRIENDS_CHANGED',
      payload: text
    };
    expect(tagFriendsChanged(text)).toEqual(expectedActions);
  });
});
