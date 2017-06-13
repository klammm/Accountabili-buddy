import { combineReducers } from 'redux';
import loginReducer from './LoginReducer';
import teamsListReducer from './TeamsListReducer';
import registerReducer from './RegisterReducer';
import playersListReducer from './PlayersListReducer';
import userProfileReducer from './UserProfileReducer';
import userScoreReducer from './UserScoreReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  teamsList: teamsListReducer,
  register: registerReducer,
  playersList: playersListReducer,
  userProfile: userProfileReducer,
  userScore: userScoreReducer
});

export default rootReducer;
