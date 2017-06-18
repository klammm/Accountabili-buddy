import photoEditReducer from '../PhotoEditReducer';

let state = {
  reps: 0,
  friends: '',
  caption: '',
  imageUrl: '',
  pictureComplete: null,
  loading: null,
  error: ''
};

describe('Photo edit reducer tests', () => {
  it('should return the initial state, when it is not passed a state', () => {
    expect(photoEditReducer(undefined, {})).toEqual(state);
  });

  it('should update the reps when an user types it', () => {
    expect(photoEditReducer(state, { type: 'REPS_CHANGED', payload: 50 })).toEqual({ ...state, reps: 50 });
  });

  it('should update the caption when an user types it', () => {
    expect(photoEditReducer(state, { type: 'CAPTION_CHANGED', payload: 'With my champ team' })).toEqual({ ...state, caption: 'With my champ team' });
  });

  it('should update the picture url when an user takes it', () => {
    expect(photoEditReducer(state, { type: 'PICTURE_TAKEN', payload: 'https://www.image.com/img1hello.png'})).toEqual({ ...state, imageUrl: 'https://www.image.com/img1hello.png' });
  });


  it('should update loading to be true when the event is sending', () => {
    expect(photoEditReducer(state, { type: 'CREATE_EVENT_PENDING' })).toEqual({ ...state, loading: true, error: '', pictureComplete: false });
  });

  it('should update loading to be false when the event is sent', () => {
    expect(photoEditReducer(state, { type: 'CREATE_EVENT_FULFILLED' })).toEqual({ ...state, loading: false, error: '', pictureComplete: true });
  });

  it('should send an error when the event is rejected', () => {
    expect(photoEditReducer(state, { type: 'CREATE_EVENT_REJECTED' })).toEqual({ ...state, loading: false, error: 'Unable to save. Please try again.', pictureComplete: false });
  });
});
