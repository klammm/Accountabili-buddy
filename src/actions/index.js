
// const login = (email, password) => {
//   const loginURL = 'https://bilibuddy-api.herokuapp.com/token'
//   return fetch(loginURL)
//     .then((response) => response.json())
//     .then((responseJSON) => {
//       console.log(responseJSON)
//     })
//     .catch((err) => {
//       console.error(err)
//     })
// }


const login = (email, password) => {
  const url = 'https://bilibuddy-api.herokuapp.com/token'
  return fetch(url, {
    mode: 'no-cors',
    method: 'POST',
    headers: {
      // 'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  }).then((res) => {
    console.log("The res: ", res)
    return res.json();
  }).then((responseJSON) => {
    console.log("The responseJSON: ", responseJSON)
  }).catch((err) => {
    console.log(err)
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
  });
};

export const logoutUser = (dispatch) => {
  dispatch({ type: 'USER_LOGOUT' });
};

export const showAllTeams = () => {
  return {
    type: 'SHOW_ALL_TEAMS',
    payload: grabAllTeams()
  }
}
