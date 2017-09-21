import firebase from 'firebase';

import { EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_LIST_REDIRECT,
  EMPLOYEES_FETCH_SUCCESS
} from './types';

export const employeeUpdate = ({ prop, value }) => ({
  type: EMPLOYEE_UPDATE,
  payload: { prop, value }
});

export const employeesFetch = () => dispatch => {
  const { currentUser } = firebase.auth();
  if (currentUser) {
    console.log('current user dispatch')
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .on('value', snapshot => {
      console.log('snapshot', snapshot.val())
      dispatch({
        type: EMPLOYEES_FETCH_SUCCESS,
        payload: snapshot.val()
      });
    });
  } else {
    dispatch({
      type: EMPLOYEE_CREATE
    })
  }
};

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
  dispatch({
    type: EMPLOYEE_LIST_REDIRECT
  });
};

