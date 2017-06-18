import loginReducer from '../LoginReducer';

let state = {
  email: '',
  password: '',
  loading: false,
  error: '',
  user: null,
  isLoggedIn: false
};

let initialState = {
  email: '',
  password: '',
  loading: false,
  error: '',
  user: null,
  isLoggedIn: null
};

let user = {
  created_at: "2017-06-12T17:15:51.266Z",
  email: "marylycheeeeee@gmail.com",
  first_name: "Mary",
  id: 15,
  last_name: "Lailai",
  ownedImages: [],
  profile_image_url: "",
  taggedImages: [],
  teams : [],
  updated_at : "2017-06-12T17:15:51.266Z",
  user_name: "lycheegod415",
};

describe('login reducer tests', () => {

  it('returns the inital state, when it is not passed a state', () => {
    expect(loginReducer(undefined, {})).toEqual(initialState);
  });

  it('returns a new state with the email property updated', () => {
    expect(loginReducer(state, { type: 'EMAIL_CHANGE', payload: 'test@gmail.com' })).toEqual({ ...state, email: 'test@gmail.com' });
  });

  it('returns a new state with the password updated', () => {
    expect(loginReducer(state, { type: 'PASSWORD_CHANGE', payload: 'helloreact' })).toEqual({ ...state, password: 'helloreact' });
  });

  it('returns a new state when login is pending', () => {
    expect(loginReducer(state, { type: 'LOGIN_USER_PENDING' })).toEqual({ ...state, loading: true, error: '', user: null });
  });

  it('returns a new state when login is fulfilled', () => {
    expect(loginReducer(state, { type: 'LOGIN_USER_FULFILLED', payload: user })).toEqual({ ...state, loading: false, isLoggedIn: true, error: '', user: {
      created_at: "2017-06-12T17:15:51.266Z",
      email: "marylycheeeeee@gmail.com",
      first_name: "Mary",
      id: 15,
      last_name: "Lailai",
      ownedImages: [],
      profile_image_url: "",
      taggedImages: [],
      teams : [],
      updated_at : "2017-06-12T17:15:51.266Z",
      user_name: "lycheegod415",
    }});
  });


  it('returns for when the user', () => {
    expect(loginReducer(state, { type: 'LOGIN_USER_REJECTED' })).toEqual({ ...state, loading: false, isLoggedIn: false, error: 'Unable to login', user: null });
  });

  it('returns for when the user is successfully logged out', () => {
    expect(loginReducer(state, { type: 'USER_LOGOUT_FULLFILLED' })).toEqual({ ...initialState });
  });

  it('returns loading is true when the user is logging out', () => {
    expect(loginReducer(state, { type: 'USER_LOGOUT_PENDING' })).toEqual({ ...initialState});
  });

  it('returns loading is false and an error when logged out is rejected', () => {
    expect(loginReducer(state, { type: 'USER_LOGOUT_REJECTED' })).toEqual({ ...state, loading: false, error: 'Unable to logout! Try again.' });
  });
});
