import initialState from './initialState/UserProfileState';

const userProfileReducer = (state = initialState.userProfile, action) => {
  switch (action.type) {
    case 'SHOW_USER_PROFILE_FULFILLED':
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default userProfileReducer;
