import axios from 'axios';

var instance = axios.create({
  baseURL: 'http://ticket.happiness-spinner.com/api/', // Config.API_URL
  timeout: 120000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8'
  }
});

// // Request interceptor
// instance.interceptors.request.use(
//   config => {
//     config.headers.Authorization = "getToken()";
//     config.onUploadProgress = ProgressEvent => {
//       store.dispatch(actionCreators.setProgress(ProgressEvent));
//     };
//     return config;
//   },
//   request => request,
//   error => new Error(error)
// );

// // Response interceptor
// instance.interceptors.response.use(
//   response => response,
//   error => new Error(error)
// );

export default instance;
