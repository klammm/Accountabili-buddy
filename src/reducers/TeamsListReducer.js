import initialState from './initialState';

const teamsListReducer = (state = initialState.teamsList, action) => {
  switch(action.type) {
    case 'SHOW_ALL_TEAMS':
      console.log('showing all teams!!');
      return { ...state, teamsList: action.payload }
  }
}
