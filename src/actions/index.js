
const login = (email, password) => {
  return (dispatch) => {
    const loginURL = 'https://bilibuddy-api.herokuapp.com/users/1'
    fetch(loginURL, {
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
    })
    .then((res) => {
      console.log(res)
      loginUserSucess(dispatch)
      return res.json();
    })
    .catch(() => {
      loginUserFail(dispatch)
    })
  }
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
