import { combineReducers } from 'redux';
import loginReducer from './LoginReducer';
import teamsListReducer from './TeamsListReducer';
import registerReducer from './RegisterReducer';
import userProfileReducer from './UserProfileReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  teamsList: teamsListReducer,
  register: registerReducer,
  userProfile: userProfileReducer
});

export default rootReducer;
