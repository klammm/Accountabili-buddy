import initialState from './initialState';

const playersListReducer = (state = initialState.players, action) => {
  switch(action.type) {
    case 'SHOW_ALL_TEAM_PLAYERS_FULFILLED':
      return action.payload;
    default:
      return state;
  }
};

export default playersListReducer;
