import { NavigationActions } from 'react-navigation';
import { Tabs } from '../config/router';
import { LOGIN_REDIRECT } from '../actions/types';

const initialState = Tabs.router.getStateForAction(
  Tabs.router.getActionForPathAndParams('Login')
);

const nav = (state = initialState, action) => {
  let nextState;
  switch (action.type) {
    case LOGIN_REDIRECT:
      nextState = Tabs.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Employee' }),
        state
      );
      break;
    default:
      nextState = Tabs.router.getStateForAction(action, state);
      break;
  }
  return nextState || state;
};

export default nav;
