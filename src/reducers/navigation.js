import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../../App';
import initialState from './initialState';

const nav = (state = initialState.initialNavState, action) => {
  console.log(action)
  let nextState;
  switch (action.type) {
    case 'USER_LOGIN':
      nextState = AppNavigator.router.getStateForAction(NavigationActions.back(), state);
      break;
    case 'USER_LOGOUT':
      nextState = AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'Login' }), state);
      break;
    case 'REGISTER':
      nextState = App.Navigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'Register' }), state);
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

export default nav
