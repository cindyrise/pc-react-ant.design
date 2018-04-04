import http from '../utils/http'
import apiUrl from '../features/constants/apis';
export default {
  getLoginData(params) {
    return http.post(apiUrl.getUserData, params);
  }
};