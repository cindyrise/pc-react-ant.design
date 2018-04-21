import handleType from './actionType';
import { message } from 'antd';
import http from '../../../utils/http'
import apiUrl from '../../../constants/apis';

const registerData = (data) => ({
  type: handleType.GET_REGISTER_DATA,
  payload: data
})
export const submitRegisterData = (params) => async (dispatch, getState) => {
  try {
      let response = await http.get(apiUrl.getHomeData, params);
      if (response.result) {
          await dispatch(registerData(response.data));
      } else {
          //返回失败
      }
  } catch (error) {
      console.log('error: ', error)
  }
}

