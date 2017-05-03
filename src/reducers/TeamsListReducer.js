import initialState from './initialState';

const teamsListReducer = (state = initialState.teamsList, action) => {
  console.log('team actions payload!!', action.payload);
  console.log('team state: ', state)
  switch(action.type) {
    case 'SHOW_ALL_TEAMS_FULFILLED':
      return action.payload;
    default:
      return state;
  }
}

export default teamsListReducer;
