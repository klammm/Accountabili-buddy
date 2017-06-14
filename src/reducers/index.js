import { combineReducers } from 'redux';
import loginReducer from './LoginReducer';
import teamsListReducer from './TeamsListReducer';
import registerReducer from './RegisterReducer';
import playersListReducer from './PlayersListReducer';
import playersScoresReducer from './PlayersScoresReducer';
import userProfileReducer from './UserProfileReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  teamsList: teamsListReducer,
  register: registerReducer,
  playersList: playersListReducer,
  playersScores: playersScoresReducer,
  userProfile: userProfileReducer
});

export default rootReducer;
