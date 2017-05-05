import initialState from './initialState';

const userProfileReducer = (state = initialState.userProfile, action) => {
  switch (action.type) {
    case 'SHOW_USER_PROFILE_FULFILLED':
      return action.payload;
    default:
      return state;
  }
};

export default userProfileReducer;
