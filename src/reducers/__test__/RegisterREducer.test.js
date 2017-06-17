import registerReducer from '../RegisterReducer';

let state = {
  firstName: '',
  lastName: '',
  username: '',
  registerEmail: '',
  registerPassword: '',
  matchedPassword: null,
  confirmedPassword: ''
};

describe('login reducer tests', () => {

  it('returns the inital state, when it is not passed a state', () => {
    expect(registerReducer(undefined, {})).toEqual(state);
  });

  it('returns a new state with the first name created', () => {
    expect(registerReducer(state, { type: 'FIRST_NAME_CHANGE', payload: 'Luna' })).toEqual({ ...state, firstName: 'Luna' });
  });

  it('returns a new state with the last name created', () => {
    expect(registerReducer(state, { type: 'LAST_NAME_CHANGE', payload: 'Claros' })).toEqual({ ...state, lastName: 'Claros' });
  });

  it('returns a new state with the username created', () => {
    expect(registerReducer(state, { type: 'USERNAME_CHANGE', payload: 'lunalunera' })).toEqual({ ...state, username: 'lunalunera' });
  });

  it('returns a new state with the email created', () => {
    expect(registerReducer(state, { type: 'REGISTER_EMAIL_CHANGE', payload: 'luna@gmail.com' })).toEqual({ ...state, registerEmail: 'luna@gmail.com' });
  });

  it('returns a new state with the password created', () => {
    expect(registerReducer(state, { type: 'REGISTER_PASSWORD_CHANGE', payload: '1234abcd' })).toEqual({ ...state, registerPassword: '1234abcd' });
  });

  it('returns a new state with the confirmed password created', () => {
    expect(registerReducer(state, { type: 'CONFIRM_PASSWORD_CHANGE', payload: '1234abcd' })).toEqual({ ...state, confirmedPassword: '1234abcd' });
  });

  it('returns true if passwords matches', () => {
    expect(registerReducer(state, { type: 'PASSWORD_CHECK', payload: true })).toEqual({ ...state, matchedPassword: true });
  });

  it('should update loading to be true when the register in user is pending', () => {
    expect(registerReducer(state, { type: 'CREATE_USER_PENDING', loading: true, error: '' })).toEqual({ ...state, loading: true, error: '' });
  });

  it('should update loading to be false when the register in user is fulfilled', () => {
    expect(registerReducer(state, { type: 'CREATE_USER_FULFILLED', loading: false, isLoggedIn: true, error: '' })).toEqual({ ...state, loading: false, isLoggedIn: true, error: '' });
  });

    it('should update loading and logged in to be false when the register in user is rejected', () => {
      expect(registerReducer(state, { type: 'CREATE_USER_REJECTED', loading: false, isLoggedIn: false, error: 'Username is not available. Try again.' })).toEqual({ ...state, loading: false, isLoggedIn: false, error: 'Username is not available. Try again.' });
    });
});
