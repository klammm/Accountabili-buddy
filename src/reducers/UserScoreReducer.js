// import initialState from './initialState';

const userScoreReducer = (state = null, action) => {
  switch (action.type) {
    case 'SHOW_USER_SCORE_FULFILLED':
      return action.payload;
    default:
      return state;
  }
};

export default userScoreReducer;
