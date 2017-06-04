import initialState from './initialState/LoginState';

const loginReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'EMAIL_CHANGE':
      return {...state, email: action.payload };
    case 'PASSWORD_CHANGE':
      return { ...state, password: action.payload };
    case 'LOGIN_USER_PENDING':
      return { ...state, loading: true, error: '', user: null };
    case 'LOGIN_USER_FULFILLED':
      console.log('login fulfilled');
      return { ...state, loading: false, isLoggedIn: true, error: '', user: action.payload };
    case 'LOGIN_USER_REJECTED':
      console.log('login rejected');
      return { ...state, loading: false, isLoggedIn: false, error: 'Unable to login', user: null };
    case 'USER_SUCCESS':
      console.log('user successfully logged in!');
      return { ...state, ...initialState, isLoggedIn: true, user: action.payload };
    case 'USER_FAIL':
      console.log('user failed to log in!');
      return { ...state, ...initialState, error: 'Unable to login'}
    case 'USER_LOGOUT':
      console.log('user is logging out!');
      return { ...state, ...initialState, isLoggedIn: false }
    default:
      return state;
  }
};

export default loginReducer;
