import userProfileReducer from '../UserProfileReducer';

let state = {
  userProfile: {}
}

describe('userProfile reducer tests', () => {

  it('should return the initial State when it is not passed any state', () => {
    expect(userProfileReducer(undefined, {})).toEqual(state.userProfile);
  });

  it('should return a new state with to show the user profile', () => {
    expect(userProfileReducer(state, {
      type: 'SHOW_USER_PROFILE_FULFILLED',
      payload: {
        id: 1,
        user_name: "klam",
        first_name: "Kevin",
        last_name: "Lam",
        profile_image_url: "https://pbs.twimg.com/profile_images/842876355800788992/bQ4YV83U_400x400.jpg",
        email: "klamklam@gahbo.com",
        created_at: "2017-04-24T10:21:16.000Z",
        updated_at: "2017-04-24T10:21:16.000Z",
        teams: [
          {
            id: 1,
            name: "g42",
            team_image_url: "https://media.glassdoor.com/sqll/825775/galvanize-squarelogo-1429039425588.png",
            created_at: "2016-06-26T14:26:16.000Z",
            updated_at: "2016-06-26T14:26:16.000Z",
            _pivot_id: 1,
            _pivot_user_id: 1,
            _pivot_team_id: 1
          }
        ],
        taggedImages: [],
        ownedImages: []
      }
    })).toEqual( {
      ...state.userProfile,
      id: 1,
      user_name: "klam",
      first_name: "Kevin",
      last_name: "Lam",
      profile_image_url: "https://pbs.twimg.com/profile_images/842876355800788992/bQ4YV83U_400x400.jpg",
      email: "klamklam@gahbo.com",
      created_at: "2017-04-24T10:21:16.000Z",
      updated_at: "2017-04-24T10:21:16.000Z",
      teams: [
        {
          id: 1,
          name: "g42",
          team_image_url: "https://media.glassdoor.com/sqll/825775/galvanize-squarelogo-1429039425588.png",
          created_at: "2016-06-26T14:26:16.000Z",
          updated_at: "2016-06-26T14:26:16.000Z",
          _pivot_id: 1,
          _pivot_user_id: 1,
          _pivot_team_id: 1
        }
      ],
      taggedImages: [],
      ownedImages: []
    });
  });

});
