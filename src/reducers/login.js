import initialState from './initialState';

const login = (state = initialState.isLoggedIn, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return { ...state, isLoggedIn: true };
    case 'USER_LOGOUT':
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
}

export default login
