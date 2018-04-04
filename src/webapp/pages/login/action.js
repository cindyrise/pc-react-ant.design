import { loginType } from './actionType';
import { message } from 'antd';
import ajax from '../../api/login';
export const loginAction = {
  getLoginData() {
    return dispatch => {
      ajax.getLoginData().then(res => {
        const { data, result, result_code, result_message } = res;
        if (result) {
          dispatch({
            type: loginType.GET_LOGIN_DATA,
            payload: data
          });
        } else {
          message.error(result_message);
        }
      })
    }
  }
}
