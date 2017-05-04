import initialState from './initialState';

const players = (state = initialState.players, action) => {
  switch(action.type) {
    case 'SELECTED TEAM':
      console.log('selected a new team, and reset team players');
      return { ...state, players: action.payload};
    default:
      return state;
  }
};

export default players;
