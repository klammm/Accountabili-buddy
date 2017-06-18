import PlayersListReducer from '../PlayersListReducer';

let state = {
  players: []
};

describe('PlayersListReducer  tests', () => {

  it('returns the inital state, when it is not passed a state', () => {
    expect(PlayersListReducer(undefined, {})).toEqual(
      state.players
    );
  });

  it('returns all the teams players', () => {
    expect(PlayersListReducer(state, { type: 'SHOW_ALL_TEAM_PLAYERS_FULFILLED', payload: state.players})).toEqual(state.players);
  });
});
