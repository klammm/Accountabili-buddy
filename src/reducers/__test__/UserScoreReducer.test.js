import userScoreReducer from '../UserScoreReducer';

let state = null;

describe('user scores reducer tests', () => {

  it('should return the intial state when not passed a state', () => {
    expect(userScoreReducer(undefined, {})).toEqual(state);
  });

  it('should return the user score for when the case is the user score fulfilled', () => {
    expect(userScoreReducer(state, { type: 'SHOW_USER_SCORE_FULFILLED', payload: 566 })).toEqual(566);
  });
})
