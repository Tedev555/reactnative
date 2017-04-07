import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_START } from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  loading: false,
  user: null,
  error: null };

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case EMAIL_CHANGED:
      // This keeps non-email values, and overwrites the email if it exists
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER_START:
      return { ...state, loading: true, error: null };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_FAIL:
    return { ...state,
      user: null,
      loading: false,
      error: 'Authentication Failed',
      password: ''
    };
    default:
      return state;
  }
};
