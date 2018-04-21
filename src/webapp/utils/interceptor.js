import { message } from 'antd'
export const reqHeader = {
  'Accept': '*/*',
  mode: 'cors',
  'Content-Type': 'application/json',
};

export function authBeforeRes(response) {
    switch (response.status) {
        case 200:
            return response;
        case 302:
            message.info('登录超时, 请重新登录！')
        default:
            if (process.env.NODE_ENV !== 'production') {
                console.error('Request error: ', response.code, response.message)
            }
            return response
    }
}

export function authAfterRes(response) {
    switch (response.result_code) {
        case 500:
             console.log(response);
             break;
        case 304: 
            return Promise.reject(response);
        default:
            return response
    }
}
