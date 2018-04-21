import handleType from './actionType';
import { message } from 'antd';
import http from '../../utils/http'
import apiUrl from '../../constants/apis';

const userData = (data) => ({
  type: handleType.GET_USER_DATA,
  payload: data
})
export const getUserData = (params) => async (dispatch, getState) => {
  try {
      let response = await http.get(apiUrl.getUserData, params);
      console.log(response,'response');
      if (response.result) {
          await dispatch(userData(response.data));
      } else {
          //返回失败
      }
  } catch (error) {
      console.log('error: ', error)
  }
}

const navData = (data) => ({
  type: handleType.GET_NAV_DATA,
  payload: data
})
export const getNavData = (params) => async (dispatch, getState) => {
  try {
      let response = await http.get(apiUrl.getNavData, params);
      console.log(response,'response');
      if (response.result) {
          await dispatch(navData(response.data));
      } else {
          //返回失败
      }
  } catch (error) {
      console.log('error: ', error)
  }
}

