import { combineReducers } from 'redux';
import LoginReducer from './login';
import SelectedTeamReducer from './SelectedTeamReducer';
import TeamMemberReducer from './TeamMembersReducer';

const rootReducer = combineReducers({
  login: LoginReducer,
  selectedTeam: SelectedTeamReducer,
  teamMembers: TeamMemberReducer
});

export default rootReducer;
