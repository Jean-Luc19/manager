import { combineReducers } from 'redux';
import auth from './AuthReducer';
import nav from './nav';

export default combineReducers({
  auth,
  nav
});
