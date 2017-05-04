import { combineReducers } from 'redux';
import loginReducer from './LoginReducer';
import teamsListReducer from './TeamsListReducer';
import SelectedTeamReducer from './SelectedTeamReducer';
import registerReducer from './RegisterReducer';
import PlayersReducer from './players';

const rootReducer = combineReducers({
  login: loginReducer,
  teamsList: teamsListReducer,
  selectedTeam: SelectedTeamReducer,
  register: registerReducer,
  players: PlayersReducer

});

export default rootReducer;
