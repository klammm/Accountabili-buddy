import { combineReducers } from 'redux';
import loginReducer from './LoginReducer';

const rootReducer = combineReducers({
  login: loginReducer
});

export default rootReducer;
