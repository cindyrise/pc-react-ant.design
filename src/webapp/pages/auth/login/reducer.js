import { combineReducers } from 'redux';
import assign from 'object-assign';
import handleType from './actionType';
import { deflate } from 'zlib';
const initialState = {
  loginData: []
};
const loginReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
      case handleType.GET_LOGIN_DATA:
      return Object.assign({}, state, {
        loginData: payload,
      });
    default:
      return state;
  }
};
 
export default  loginReducer
