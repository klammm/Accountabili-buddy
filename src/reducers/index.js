import { combineReducers } from 'redux';
import LoginReducer from './login';
import SelectedTeamReducer from './SelectedTeamReducer';
import PlayersReducer from './players';

const rootReducer = combineReducers({
  login: LoginReducer,
  selectedTeam: SelectedTeamReducer,
  players: PlayersReducer
});

export default rootReducer;
