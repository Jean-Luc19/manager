import firebase from 'firebase';

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_START,
  EMPLOYEE_LIST_REDIRECT,
  ADD_EMPLOYEE
} from './types';

export const emailChanged = text => ({
  type: EMAIL_CHANGED,
  payload: text
});

export const passwordChanged = text => ({
  type: PASSWORD_CHANGED,
  payload: text
});

export const addEmployee = () => ({
  type: ADD_EMPLOYEE
});

export const loginUser = ({ email, password }) => dispatch => {
  loginUserStart(dispatch);
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
    .then(() => loginSuccessRedirect(dispatch))
    .catch(error => {
      console.log(error);
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch(() => loginUserFail(dispatch));
    });
};

const loginUserStart = dispatch => {
  dispatch({
    type: LOGIN_USER_START
  });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
};

const loginSuccessRedirect = dispatch => {
  dispatch({ type: EMPLOYEE_LIST_REDIRECT });
};

const loginUserFail = dispatch => {
  dispatch({ type: LOGIN_USER_FAIL });
};

//firebase test user => test@test.com / password
/*
thunk gives us a 'backdoor' into redux. It returns something
(dispatch) because all actions must return immediately. But since
it returns dispatch we can wait for the async call to come back
before dispatching an actual action to the reducers
*/
