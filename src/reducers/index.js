import { combineReducers } from 'redux';
import loginReducer from './LoginReducer';
import teamsListReducer from './TeamsListReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  teamsList: teamsListReducer
});

export default rootReducer;
