import initialState from './initialState';

const teamsListReducer = (state = initialState.teamsList, action) => {
  console.log('showing all teams!!');
  switch(action.type) {
    case 'SHOW_ALL_TEAMS':
      return { ...state, teamsList: action.payload };
    default:
      return state;
  }
}

export default teamsListReducer;
