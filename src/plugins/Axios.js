import axios from 'axios';
import vue from 'vue';

// Axios 初始設定

const Request = axios.create({
  baseURL: process.env.VUE_APP_API,
});

const httpCode = {
  401: () => {
    console.log(401);
  },
  404: () => {
    console.log(404);
  },
  422: () => {
    console.log(422);
  },
  500: () => {
    console.log(500);
    vue.notify({
      group: 'foo',
      type: 'error',
      title: '提示',
      text: '伺服器出錯!',
    });
  },
  503: () => {
    console.log(503);
  },
};

// http 攔截器
Request.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error && error.response) {
      httpCode[error.response.status]();
    }
    return Promise.reject(error);
  },
);

// 封裝 axios methods
function axiosMethod(method, url, data = {}) {
  return new Promise((resolve, reject) => {
    Request[method](url, data)
      .then((response) => {
        if (response.status <= 200 || response.status <= 226) {
          resolve(response.data);
        } else {
          reject(response);
        }
      }).catch((error) => {
        reject(error.response.status);
      });
  });
}

export function post(url, data = {}) {
  return axiosMethod('post', url, data);
}

export async function get(url, data = {}) {
  return axiosMethod('get', url, data);
}

export function patch(url, data = {}) {
  return axiosMethod('patch', url, data);
}

export function del(url) {
  return axiosMethod('delete', url);
}
