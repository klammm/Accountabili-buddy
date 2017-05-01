

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
