import http from '../utils/http'
   import apiUrl from '../constants/apis'
export default {
  getLoginData(params) {
    return http.post(apiUrl.getUserData, params);
  }
};