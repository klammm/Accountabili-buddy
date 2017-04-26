import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import loginReducer from './login';

const rootReducer = combineReducers({
  form: formReducer,
  login: loginReducer
});

export default rootReducer;
