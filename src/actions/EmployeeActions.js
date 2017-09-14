import firebase from 'firebase';

import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEE_LIST_REDIRECT } from './types';

export const employeeUpdate = ({ prop, value }) => ({
  type: EMPLOYEE_UPDATE,
  payload: { prop, value }
});

export const employeeCreate = ({ name, phone, shift }) => dispatch => {
  const { currentUser } = firebase.auth();
  firebase
    .database()
    .ref(`/users/${currentUser.uid}/employees`)
    .push({ name, phone, shift })
    .then(() => {
      employeeFormReset(dispatch);
      employeeCreateRedirect(dispatch);
    });
};

const employeeFormReset = dispatch => {
  dispatch({
    type: EMPLOYEE_CREATE
  });
};

const employeeCreateRedirect = dispatch => {
  console.log('dispatch', dispatch);
  dispatch({
    type: EMPLOYEE_LIST_REDIRECT
  });
};
