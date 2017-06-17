import teamsListReducer from '../TeamsListReducer';

let state = {
  teamsList: []
};

describe('team list reducer tests', () => {

  it('returns the initial state', () => {
    expect(teamsListReducer(undefined, {})).toEqual(state.teamsList);
  });

  it('returns the players list of the team', () => {
    expect(teamsListReducer(state, { type: 'SHOW_ALL_TEAMS_FULFILLED', payload: [
      {
        id: 1,
        user_name: 'klam',
        first_name: 'Kevin',
        last_name: 'Lam',
        profile_image_url: 'https://pbs.twimg.com/profile_images/842876355800788992/bQ4YV83U_400x400.jpg',
        email: 'klamklam@gahbo.com',
        created_at: '2017-04-24T10:21:16.000Z',
        updated_at: '2017-04-24T10:21:16.000Z',
        _pivot_id: 1,
        _pivot_team_id: 1,
        _pivot_user_id: 1
      },
      {
        id: 2,
        user_name: 'paolita',
        first_name: 'Paola',
        last_name: 'Claros',
        profile_image_url: 'https://pbs.twimg.com/profile_images/832357648884342784/ZDEXxcfN_400x400.jpg',
        email: 'paolita.claros+test@gmail.com',
        created_at: '2017-04-24T10:22:16.000Z',
        updated_at: '2017-04-24T10:22:16.000Z',
        _pivot_id: 2,
        _pivot_team_id: 1,
        _pivot_user_id: 2
      }
    ]})).toEqual([...state,
      {
        id: 1,
        user_name: 'klam',
        first_name: 'Kevin',
        last_name: 'Lam',
        profile_image_url: 'https://pbs.twimg.com/profile_images/842876355800788992/bQ4YV83U_400x400.jpg',
        email: 'klamklam@gahbo.com',
        created_at: '2017-04-24T10:21:16.000Z',
        updated_at: '2017-04-24T10:21:16.000Z',
        _pivot_id: 1,
        _pivot_team_id: 1,
        _pivot_user_id: 1
      },
      {
        id: 2,
        user_name: 'paolita',
        first_name: 'Paola',
        last_name: 'Claros',
        profile_image_url: 'https://pbs.twimg.com/profile_images/832357648884342784/ZDEXxcfN_400x400.jpg',
        email: 'paolita.claros+test@gmail.com',
        created_at: '2017-04-24T10:22:16.000Z',
        updated_at: '2017-04-24T10:22:16.000Z',
        _pivot_id: 2,
        _pivot_team_id: 1,
        _pivot_user_id: 2
      }]);
  });
});
