import { repsChanged } from '../index';

describe('tests repsChanged action', () => {
  it('submit the reps for the picture', () => {
    const reps = 30;
    const expectedActions = {
      type: 'REPS_CHANGED',
      payload: reps
    };
    expect(repsChanged(reps)).toEqual(expectedActions);
  });
});
