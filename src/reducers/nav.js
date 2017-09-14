import { NavigationActions } from 'react-navigation';
import { Tabs } from '../config/router';
import { EMPLOYEE_LIST_REDIRECT, ADD_EMPLOYEE } from '../actions/types';

const initialState = Tabs.router.getStateForAction(
  Tabs.router.getActionForPathAndParams('Employee')
);

const nav = (state = initialState, action) => {
  let nextState;
  switch (action.type) {
    case EMPLOYEE_LIST_REDIRECT:
      nextState = Tabs.router.getStateForAction(Tabs.router.getActionForPathAndParams('Employee'));
      break;
    case ADD_EMPLOYEE:
      nextState = Tabs.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'EmployeeCreate' })
      );
      break;
    default:
      nextState = Tabs.router.getStateForAction(action, state);
      break;
  }
  return nextState || state;
};

export default nav;
