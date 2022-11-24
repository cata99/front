import axios from 'axios';


// Create instance
/*
let axios = axios.create(defaultOptions);*/

// Set the AUTH token for any request
axios.interceptors.request.use(function (config) {
  const token = sessionStorage.getItem('token');
  config.headers.Authorization =  token ? `Bearer ${token}` : '';

  return config;
});

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.response.status === 401) {
    sessionStorage.removeItem('token');
    window.location = '/login'
    
  }  else {
    return Promise.reject(error);
  }
});

/*export default axios;*/