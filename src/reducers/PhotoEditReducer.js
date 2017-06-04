import initialState from './initialState/PhotoEditState';

const photoEditReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'REPS_CHANGED':
      return { ...state, reps: action.payload };
    case 'CAPTION_CHANGED':
      return { ...state, caption: action.payload };
    case 'TAG_FRIENDS_CHANGED':
      return { ...state, friends: action.payload }
    default:
      return state;
  }
};

export default photoEditReducer;
