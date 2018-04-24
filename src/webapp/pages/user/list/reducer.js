import assign from 'object-assign';
import handleType from './actionType';
const initialState = {
  userList: []
};
 const listReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case handleType.GET_DATA:
      return Object.assign({}, state, {
        userList: payload,
      });
    default:
      return state;
  }
};
export default listReducer
