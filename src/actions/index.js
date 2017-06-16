import { AsyncStorage } from 'react-native';
import moment from 'moment';


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
  }).then(async (responseJSON) => {
    // redirect and set cookie/token in headers
    await AsyncStorage.setItem('User', JSON.stringify(responseJSON))
    return responseJSON
  }).catch((err) => {
    console.log('Login error: ', err)
  })
};

const logout = () => {
  return AsyncStorage.removeItem('User')
}

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
      firstName,
      lastName,
      userName: username,
      profileUrl: 'http://2.bp.blogspot.com/-SDqMr0T36Ng/UDILDXFdhhI/AAAAAAAACno/ZCjiciy3pxI/s1600/BATMAN+FB+PROFILE.jpg'
    })
  }).then((res) => {
    return res.json();
  }).then(responseJSON => {
    return responseJSON
  }).catch((err) => {
    console.log('Register user error: ', err)
  })
};

const grabAllTeams = () => {
  const url = 'https://bilibuddy-api.herokuapp.com/teams';
  return fetch(url)
    .then(res => res.json())
    .then((responseJSON) => {
      return responseJSON;
    }).catch((err) => {
      console.log('Teams error: ', err)
    })
};

const grabAllPlayers = () => {
  const url = 'https://bilibuddy-api.herokuapp.com/teams/1'
  return fetch(url)
    .then(res => res.json())
    .then(responseJSON => {
      return responseJSON.users;
    })
    .catch( (err) =>{
      console.log('PlayersList error: ', err)
    })
};

const grabAllScores = () => {
  let beginDate = moment().startOf('week').add(1, 'days').format('YYYY MM DD').replace(/ /g, '-');
  let endDate = moment().startOf('week').add(7, 'days').format('YYYY MM DD').replace(/ /g, '-');
  const url = `https://bilibuddy-api.herokuapp.com/teams/1/score?start=${beginDate}&end=${endDate}`
  return fetch(url)
    .then(res => res.json())
    .then(responseJSON => {
      let scoresObj = {};
      responseJSON.forEach((score) => {
        scoresObj[score.user_id] = score.sum;
      })
      return scoresObj;
    })
    .catch((err) => {
      console.log('Player Scores and Id error: ', err);
    })
};

const getUserById = (userId) => {
  const url = `https://bilibuddy-api.herokuapp.com/users/${userId}`;
  return fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((responseJSON) => {
    return responseJSON;
  }).catch((err) => {
    console.log('userProfile error: ', err);
  })
};

const getUserScore = (userId) => {
  const url = `https://bilibuddy-api.herokuapp.com/users/${userId}/score`;
  return fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((responseJSON) => {
    return responseJSON.sum;
  }).catch((err) => {
    console.log('userScore error: ', err);
  });
}

const createEvent = (reps, caption, userId, imageUrl) => {
  const url = 'https://bilibuddy-api.herokuapp.com/events';
  return fetch(url, {
    mode: 'no-cors',
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user_id: userId,
      imageUrl,
      caption,
      reps,
      team_id: 1
    })
  }).then((res) => {
    return res.json();
  }).then((responseJSON) => {
    return responseJSON
  }).catch((err) => {
    console.log('Take Picture error: ', err)
  })
}

/********************************** ACTION CREATORS ********************************/

export const showAllTeams = () => {
  return {
    type: 'SHOW_ALL_TEAMS',
    payload: grabAllTeams()
  };
};

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

export const loginUser = ({ email, password }, callback) => {
  return (dispatch, getState) => {
    dispatch({ type: 'LOGIN_USER', payload: login(email, password).then((data) => {
      callback('Slider')
      dispatch({ type: 'SHOW_USER_PROFILE', payload: getUserById(data.id) })
      dispatch({ type: 'SHOW_USER_SCORE', payload: getUserScore(data.id) });
    }) })
  }
};

export const logoutUser = (callback) => {
  return (dispatch, getState) => {
    dispatch({ type: 'USER_LOGOUT', payload: logout() });
    callback('Login')
  }
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

export const registerUser = ({ registerEmail, registerPassword, firstName, lastName, username }) => {
  return (dispatch, getState) => {
    dispatch({ type: 'CREATE_USER', payload: createUser(registerEmail, registerPassword, firstName, lastName, username) })
  }
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

export const repsChanged = (reps) => {
  return {
    type: 'REPS_CHANGED',
    payload: reps
  };
};

export const captionChanged = (text) => {
  return {
    type: 'CAPTION_CHANGED',
    payload: text
  };
};

export const tagFriendsChanged = (text) => {
  return {
    type: 'TAG_FRIENDS_CHANGED',
    payload: text
  };
};

export const pictureTaken = (imageUrl) => {
  return {
    type: 'PICTURE_TAKEN',
    payload: imageUrl
  };
};

export const showUserScore = (userId) => {
  return {
    type: 'SHOW_USER_SCORE',
    payload: getUserScore(userId)
  };
};

export const showAllPlayers = () => {
  return {
    type: 'SHOW_ALL_TEAM_PLAYERS',
    payload: grabAllPlayers()
  };
};

export const showAllScores = () => {
  return {
    type: 'SHOW_ALL_TEAM_PLAYERS_SCORES',
    payload: grabAllScores()
  };
};

export const submitEvent = ({ reps, caption, imageUrl, userId }) => {
  return (dispatch, getState) => {
    dispatch({ type: 'CREATE_EVENT', payload: createEvent(reps, caption, userId, imageUrl).then(() => {
      dispatch({ type: 'SHOW_USER_PROFILE', payload: getUserById(userId) });
      dispatch({ type: 'SHOW_USER_SCORE', payload: getUserScore(userId) });
      dispatch({ type: 'SHOW_ALL_TEAMS_PLAYERS', payload: grabAllPlayers() });
      dispatch({ type: 'SHOW_ALL_TEAM_PLAYERS_SCORES', payload: grabAllScores() });
    }) });
  }
};
