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
      return { ...state, loading: false, isLoggedIn: true, user: action.payload };
    case 'LOGIN_USER_REJECTED':
      return { ...state, loading: false, isLoggedIn: false, error: 'Unable to login', user: null };
    case 'USER_LOGOUT_PENDING':
      return { ...initialState }
    case 'USER_LOGOUT_FULLFILLED':
      return { ...initialState }
    case 'USER_LOGOUT_REJECTED':
      return { ...state, loading: false, error: 'Unable to logout! Try again.'}
    case 'FAILED_LOGIN_USER':
      return { ...state, loading: false, isLoggedIn: false, error: 'Unable to login', user: null }
    default:
      return state;
  }
};

export default loginReducer;
