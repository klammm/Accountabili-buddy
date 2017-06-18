import PlayersScoresReducer from '../PlayersScoresReducer';

let state = {
  playerScores: []
};

describe('Player Scores Reducer tests', () => {

  it('returns the inital state, when it is not passed a state', () => {
    expect(PlayersScoresReducer(undefined, {})).toEqual(state.playerScores);
  });

  it('returns all players', () => {
    expect(PlayersScoresReducer(state.playerScores, { type: 'SHOW_ALL_TEAM_PLAYERS_SCORES_FULFILLED', payload: [
      {
        sum: '20',
        user_id: 1
      },
      {
        sum: '30',
        user_id: 2
      },
      {
        sum: '32',
        user_id: 3
      },
      {
        sum: '40',
        user_id: 4
      }
    ]
    })).toEqual([...state,
      {
        sum: '20',
        user_id: 1
      },
      {
        sum: '30',
        user_id: 2
      },
      {
        sum: '32',
        user_id: 3
      },
      {
        sum: '40',
        user_id: 4
      }
    ]);
  });
});
