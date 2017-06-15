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
      return { ...state, loading: false, isLoggedIn: true, error: '', user: action.payload };
    case 'LOGIN_USER_REJECTED':
      return { ...state, loading: false, isLoggedIn: false, error: 'Unable to login', user: null };
    case 'USER_SUCCESS':
      return { ...state, ...initialState, isLoggedIn: true, user: action.payload };
    case 'USER_FAIL':
      return { ...state, ...initialState, error: 'Unable to login'}
    case 'USER_LOGOUT':
      return { ...state, ...initialState, isLoggedIn: false, user: null }
    default:
      return state;
  }
};

export default loginReducer;
