const userProfileModel = {
  id: 3,
  user_name: 'mez',
  first_name: 'Mary',
  last_name: 'Lai',
  profile_image_url: 'https://pbs.twimg.com/profile_images/854522454177226752/_PExneEw_400x400.jpg',
  email: 'mez@lychee.com',
  created_at: '2017-04-24T10:23:16.000Z',
  updated_at: '2017-04-24T10:23:16.000Z',
  teams: [
    {
      id: 1,
      name: 'g42',
      team_image_url: 'https://media.glassdoor.com/sqll/825775/galvanize-squarelogo-1429039425588.png',
      created_at: '2016-06-26T14:26:16.000Z',
      updated_at: '2016-06-26T14:26:16.000Z',
      _pivot_id: 3,
      _pivot_user_id: 3,
      _pivot_team_id: 1
    }
  ],
  ownedImages: [
    {
      id: 1,
      caption: 'Woooo pushup hour at the gSchool',
      imageUrl: 'https://www.rd.com/wp-content/uploads/sites/2/2016/04/01-cat-wants-to-tell-you-laptop.jpg',
      created_at: '2017-04-24T10:23:16.000Z',
      updated_at: '2017-04-24T10:23:16.000Z',
      _pivot_id: 3,
      _pivot_user_id: 3,
      _pivot_image_id: 1
    }
  ],
  taggedImages: [
    {
      id: 1,
      caption: 'Woooo pushup hour at the gSchool',
      imageUrl: 'https://www.rd.com/wp-content/uploads/sites/2/2016/04/01-cat-wants-to-tell-you-laptop.jpg',
      created_at: '2017-04-24T10:23:16.000Z',
      updated_at: '2017-04-24T10:23:16.000Z',
      _pivot_user_id: 3,
      _pivot_image_id: 1
    }
  ]
};

export default userProfileModel;
