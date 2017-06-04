import initialState from './initialState/RegisterState';

const registerReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FIRST_NAME_CHANGE':
      return { ...state, firstName: action.payload };
    case 'LAST_NAME_CHANGE':
      return { ...state, lastName: action.payload };
    case 'USERNAME_CHANGE':
      return { ...state, username: action.payload };
    case 'REGISTER_EMAIL_CHANGE':
      return { ...state, registerEmail: action.payload };
    case 'REGISTER_PASSWORD_CHANGE':
      return { ...state, registerPassword: action.payload };
    case 'CONFIRM_PASSWORD_CHANGE':
      return { ...state, confirmedPassword: action.payload };
    case 'PASSWORD_CHECK':
      return { ...state, matchedPassword: action.payload };
    case 'CREATE_USER_PENDING':
      return { ...state, loading: true, error: '' };
    case 'CREATE_USER_FULFILLED':
      return { ...state, loading: false, isLoggedIn: true, error: '', user: action.payload };
    case 'CREATE_USER_REJECTED':
      return { ...state, loading: false, isLoggedIn: false, error: 'Username is not available. Try again.' };
    default:
      return state;
  }
}

export default registerReducer;
