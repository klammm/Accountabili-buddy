import initialState from './initialState';

const login = (state = initialState, action) => {
  switch(action.type) {
    case 'EMAIL_CHANGE':
      console.log('email');
      return { ...state, email: action.payload };
    case 'PASSWORD_CHANGE':
      console.log('password changed');
      return { ...state, password: action.payload };
    case 'LOGIN_USER_PENDING':
      console.log('login pending');
      return { ...state, loading: true, error: '', user: null };
    case 'LOGIN_USER_FULFILLED':
      console.log('login fulfilled');
      return { ...state, loading: false, error: '', user: action.payload };
    case 'LOGIN_USER_REJECTED':
      console.log('login rejected');
      return { ...state, loading: false, error: 'Unable to login. Please provide a valid email or password', user: null };
    default:
      return state;
  }
};

export default login
