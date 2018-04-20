import { combineReducers } from 'redux';
import assign from 'object-assign';
import { loginType } from './actionType';
const initialState = {
  loginData: []
};
export const loginReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
      case loginType.GET_LOGIN_DATA:
      return Object.assign({}, state, {
        loginData: payload,
      });
    default:
      return state;
  }
};
