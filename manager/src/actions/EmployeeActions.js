import firebase from 'firebase';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATED,
  EMPLOYEE_DELETED,
  EMPLOYEE_SAVED,
  EMPLOYEES_FETCH_SUCCESS
} from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift, navigator }) => {
  const { currentUser } = firebase.auth();

  // Returning a function so redux-thunk executes it.
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATED });
        navigator.pop();
      });
  };
};

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();
  // Note: watching the .on('value') item here is constant; the action
  // will be dispatched every time there is a change, without having called
  // this action creator again. (It must be called once to start the watch).
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const employeeSave = ({ name, phone, shift, uid, navigator }) => {
  const { currentUser } = firebase.auth();

  // Returning a function so redux-thunk executes it.
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        console.log('saved');
        dispatch({ type: EMPLOYEE_SAVED });
        navigator.pop();
      });
  };
};

export const employeeDelete = ({ uid, navigator }) => {
  const { currentUser } = firebase.auth();

  // Returning a function so redux-thunk executes it.
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        dispatch({ type: EMPLOYEE_DELETED });
        navigator.pop();
      });
  };
};
