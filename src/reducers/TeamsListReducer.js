import initialState from './initialState/TeamsListState';

const teamsListReducer = (state = initialState.teamsList, action) => {
  switch (action.type) {
    case 'SHOW_ALL_TEAMS_FULFILLED':
      return action.payload;
    default:
      return state;
  }
};

export default teamsListReducer;
