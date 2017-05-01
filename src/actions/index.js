
const login = (email, password) => {
  const loginURL = 'https://bilibuddy-api.herokuapp.com/users'
  return fetch(loginURL)
    .then((response) => response.json())
    .then((responseJSON) => {
      console.log(responseJSON)
    })
    .catch((err) => {
      console.error(err)
    })
}

const createUser = (email, password) => {
  const url = 'https://bilibuddy-api.herokuapp.com/users'
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
  }).catch((err) => {
    console.log(err)
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

export const loginUserFail = (dispatch) => {
  dispatch({ type: 'USER_FAIL' });
};

export const loginUserSucess = (dispatch, user) => {
  dispatch({
    type: 'USER_SUCCESS',
    payload: user
  })
}
