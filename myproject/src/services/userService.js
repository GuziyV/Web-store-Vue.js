import axios from 'axios';
import authHeader from './../helpers/authHeader';

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
  axios.defaults.headers.common = authHeader();
}

function handleResponse(response) {
  console.log(response);
  if (response.status === 401) {
    // auto logout if 401 response returned from api
    logout();
    location.reload(true);
  }
  return Promise.resolve(response);
}

function login(username, password) {
  return axios.post('/user/authenticate', {
    login: username,
    password,
  })
    .then(handleResponse)
    .then((responce) => {
      // login successful if there's a jwt token in the response
      if (responce.data.tokenString && responce.data.user) {
        const user = responce.data.user;
        user.token = responce.data.tokenString;
        localStorage.setItem('user', JSON.stringify(user));
        axios.defaults.headers.common = authHeader();
      }

      return responce.user;
    });
}

function register(user) {
  return axios.post('/user/register', user).then(handleResponse).catch(resp => console.log(resp));
}

function getById(id) {
  return axios.get('/user', id).then(handleResponse);
}

function getCurrentUser() {
  const user = JSON.parse(window.localStorage.getItem('user'));
  return user;
}

// eslint-disable-next-line import/prefer-default-export
export const userService = {
  login,
  logout,
  register,
  getById,
  getCurrentUser,
};
