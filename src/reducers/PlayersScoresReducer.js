import initialState from './initialState/PlayersScoresState';

const PlayersScoresReducer = (state = initialState.playerScores, action) => {
  switch(action.type) {
    case 'SHOW_ALL_TEAM_PLAYERS_SCORES_FULFILLED':
      return action.payload;
    default:
      return state;
  }
};

export default PlayersScoresReducer;
