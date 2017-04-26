
const loginRequest = props => {
  // API call in here
  let magic = 'happen';
};

const logoutRequest = props => {
  // API call in here
  let magic = 'happen';
}

const registerRequest = props => {
  // API call in here
  let magic = 'happen';
};


/********************************** ACTION CREATORS ********************************/

export const login = props => {
  return {
    type: "USER_LOGIN",
    payload: loginRequest(props)
  };
};

export const logout = props => {
  return {
    type: "USER_LOGOUT",
    payload: logoutRequest(props)
  };
};

export const register = props => {
  return {
    type: "REGISTER"
  };
};
