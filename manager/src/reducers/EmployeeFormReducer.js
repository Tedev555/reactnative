import {
  EMPLOYEE_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      // action.payload === { prop: 'name', value: 'jane'}
      // These square braces are called "key interpolation"
      // action.payload.prop becomes a key
      // const newState = {}
      // newState[action.payload.prop] = action.payload.value
      // then add the other values of state.
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
