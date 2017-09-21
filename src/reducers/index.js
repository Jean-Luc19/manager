import { combineReducers } from 'redux';
import auth from './AuthReducer';
import nav from './nav';
import employeeForm from './EmployeeFormReducer';
import employees from './EmployeeReducer';

export default combineReducers({
  auth,
  nav,
  employeeForm,
  employees
});
