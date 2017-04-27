import { combineReducers } from 'redux';
import loginReducer from './login';

const rootReducer = combineReducers({
  login: loginReducer
});

export default rootReducer;
