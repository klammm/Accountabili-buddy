const userScoreReducer = (state = null, action) => {
  switch (action.type) {
    case 'SHOW_USER_SCORE_FULFILLED':
      console.log('this is the user score:',  action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default userScoreReducer;
