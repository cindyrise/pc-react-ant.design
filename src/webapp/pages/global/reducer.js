import { combineReducers } from 'redux';
import assign from 'object-assign';
import handleType from './actionType';
const initialState = {
  userData: {name:''},
  navData: [],
};
 const globalReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
      case handleType.GET_USER_DATA:
      return Object.assign({}, state, {
        userData: payload,
      });
      case handleType.GET_NAV_DATA:
      return Object.assign({}, state, {
        navData: payload,
      });
    default:
      return state;
  }
};
export default globalReducer;
