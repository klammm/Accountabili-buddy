const userScoreReducer = (state = null, action) => {
  switch (action.type) {
    case 'SHOW_USER_SCORE_FULFILLED':
      return action.payload;
    case "CLEAR_USER_SCORE":
      return null
    default:
      return state;
  }
};

export default userScoreReducer;
