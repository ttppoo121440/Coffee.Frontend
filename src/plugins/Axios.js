import axios from 'axios';

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
  return new Promise((resolve) => {
    resolve(axiosMethod('post', url, data));
  });
}

export function get(url, data = {}) {
  return new Promise((resolve) => {
    resolve(axiosMethod('get', url, data));
  });
}

export function patch(url, data = {}) {
  return new Promise((resolve) => {
    resolve(axiosMethod('patch', url, data));
  });
}

export function del(url) {
  return new Promise((resolve) => {
    resolve(axiosMethod('delete', url));
  });
}
