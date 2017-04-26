import { AppNavigator } from '../../App';

const firstAction = AppNavigator.router.getActionForPathAndParams('Login');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('Register');
const initialNavState = AppNavigator.router.getStateForAction(secondAction, tempNavState);

export default {
  isLoggedIn: false,
  navigation: initialNavState,
}
