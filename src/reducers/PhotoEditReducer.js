import initialState from './initialState/PhotoEditState';

const photoEditReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'REPS_CHANGED':
      return { ...state, reps: action.payload };
    case 'CAPTION_CHANGED':
      return { ...state, caption: action.payload };
    case 'TAG_FRIENDS_CHANGED':
      return { ...state, friends: action.payload };
    case 'PICTURE_TAKEN':
      return { ...state, imageUrl: action.payload };
    case 'CREATE_EVENT_PENDING':
      return { ...state, loading: true, error: '', pictureComplete: false };
    case 'CREATE_EVENT_FULFILLED':
      return { ...state, pictureComplete: true, loading: false, error: '' };
    case 'CREATE_EVENT_REJECTED':
      return { ...state, pictureComplete: false, loading: false, error: 'Unable to save. Please try again.' }
    default:
      return state;
  }
};

export default photoEditReducer;
