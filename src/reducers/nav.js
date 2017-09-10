import { NavigationActions } from 'react-navigation';
import { Tabs } from '../config/router';
import { LOGIN_REDIRECT, ADD_EMPLOYEE } from '../actions/types';

const initialState = Tabs.router.getStateForAction(
  Tabs.router.getActionForPathAndParams('Employee')
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
    case ADD_EMPLOYEE:
      nextState = Tabs.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'EmployeeCreate' })
      );
      console.log(nextState);
      break;
    default:
      nextState = Tabs.router.getStateForAction(action, state);
      break;
  }
  return nextState || state;
};

export default nav;
