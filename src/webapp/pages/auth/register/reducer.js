import { combineReducers } from 'redux';
import assign from 'object-assign';
import handleType from './actionType';
const initialState = {
  regiserData: []
};
const registerReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
      case handleType.GET_REGISTER_DATA:
      return Object.assign({}, state, {
        regiserData: payload,
      });
    default:
      return state;
  }
};
export default registerReducer
