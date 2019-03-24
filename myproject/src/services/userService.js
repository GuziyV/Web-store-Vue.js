import axios from 'axios';
import authHeader from './../helpers/authHeader';

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
  axios.defaults.headers.common = authHeader();
}

function handleResponse(response) {
  if (response.status === 401) {
    // auto logout if 401 response returned from api
    this.$router.push({ path: 'login' });
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
        return Promise.resolve(user);
      }
      return Promise.reject('Something went wrong while login');
    });
}

function register(user) {
  return axios.post('/user/register', user)
    .then(handleResponse);
}

function getById(id) {
  return axios.get('/user', id).then(handleResponse);
}

// eslint-disable-next-line import/prefer-default-export
export default {
  login,
  logout,
  register,
  getById,
};
