import { combineReducers } from 'redux';
import auth from './AuthReducer';
import employeeForm from './EmployeeReducer';
import nav from './nav';

export default combineReducers({
  auth,
  employeeForm,
  nav
});
