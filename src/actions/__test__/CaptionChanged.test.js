import { captionChanged } from '../index';

describe('testscaptionChanged action', () => {
  it('submit the caption for the picture', () => {
    const text = 'pushups hour';
    const expectedActions = {
      type: 'CAPTION_CHANGED',
      payload: text
    };
    expect(captionChanged(text)).toEqual(expectedActions);
  });
});
