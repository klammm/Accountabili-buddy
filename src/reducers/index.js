import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import navReducer from './navigation';
import loginReducer from './login';

const rootReducer = combineReducers({
  form: formReducer,
  nav: navReducer,
  login: loginReducer
});

export default rootReducer;
