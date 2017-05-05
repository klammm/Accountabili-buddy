
const login = (email, password) => {
  const url = 'https://bilibuddy-api.herokuapp.com/token'
  return fetch(url, {
    mode: 'no-cors',
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  }).then((res) => {
    return res.json();
  }).then((responseJSON) => {
    // redirect and set cookie/token in headers
    console.log('login response JSON',responseJSON)
    return responseJSON
  }).catch((err) => {
    console.log(error)
  })
};

const createUser = (registerEmail, registerPassword, firstName, lastName, username) => {
  const url = 'https://bilibuddy-api.herokuapp.com/users'
  return fetch(url, {
    mode: 'no-cors',
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: registerEmail,
      password: registerPassword,
      first_name: firstName,
      last_name: lastName,
      user_name: username
    })
  }).then((res) => {
    console.log('CreateUser res: ', res);
    return res.json();
  }).then((responseJSON) => {
    console.log('createUser response JSON: ', responseJSON);
    return responseJSON;
  }).catch((err) => {
    console.log(err)
  })
};

const grabAllTeams = () => {
  const url = 'https://bilibuddy-api.herokuapp.com/teams';
  return fetch(url)
    .then(res => res.json())
    .then((responseJSON) => {
      console.log(responseJSON);
      return responseJSON;
    }).catch((err) => {
      console.log('Teams error: ', err)
    })
};

const getUserById = (userId) => {
  const url = `https://bilibuddy-api.herokuapp.com/users/${userId}`;
  return fetch(url)
  .then((res) => {
    console.log('this is the res: ', res);
    console.log('res.json ');
    return res.json();
  })
  .then((responseJSON) => {
    console.log('this is userProfile: ', responseJSON);
    return responseJSON;
  }).catch((err) => {
    console.log('userProfile error: ', err);
  })
}
/********************************** ACTION CREATORS ********************************/

export const emailChanged = (text) => {
  return {
    type: 'EMAIL_CHANGE',
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: 'PASSWORD_CHANGE',
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return {
    type: 'LOGIN_USER',
    payload: login(email, password)
  };
};

export const loginUserFail = () => {
  return {
    type: 'USER_FAIL'
  }
};

export const loginUserSucess = (dispatch, user) => {
  dispatch({
    type: 'USER_SUCCESS',
    payload: user
  });
};

export const logoutUser = () => {
  dispatch({ type: 'USER_LOGOUT' });
};

export const showAllTeams = () => {
  return {
    type: 'SHOW_ALL_TEAMS',
    payload: grabAllTeams()
  };
};

export const registerEmailChanged = (text) => {
  return {
    type: 'REGISTER_EMAIL_CHANGE',
    payload: text
  };
};

export const passwordMatch = (boolean) => {
  return {
    type: 'PASSWORD_CHECK',
    payload: boolean
  };
};

export const registerPasswordChanged = (text) => {
  return {
    type: 'REGISTER_PASSWORD_CHANGE',
    payload: text
  };
};

export const registerUser = ({ email, password, firstName, lastName, username }) => {
  return {
    type: 'CREATE_USER',
    payload: createUser(email, password, firstName, lastName, username)
  };
};

export const firstNameChanged = (text) => {
  return {
    type: 'FIRST_NAME_CHANGE',
    payload: text
  };
};

export const lastNameChanged = (text) => {
  return {
    type: 'LAST_NAME_CHANGE',
    payload: text
  };
};

export const usernameChanged = (text) => {
  return {
    type: 'USERNAME_CHANGE',
    payload: text
  };
};

export const confirmPasswordChanged = (text) => {
  return {
    type: 'CONFIRM_PASSWORD_CHANGE',
    payload: text
  };
};

export const showUserProfile = (userId) => {
  return {
    type: 'SHOW_USER_PROFILE',
    payload: getUserById(userId)
  };
};
