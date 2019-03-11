import axios from 'axios';

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

function login(username, password) {
  return axios.post('/user/authenticate', {
    login: username,
    password,
  })
    .then(handleResponse)
    .then((responce) => {
      // login successful if there's a jwt token in the response
      if (responce.data.token && responce.data.user) {
        const user = responce.data.user;
        user.token = responce.data.token;
        localStorage.setItem('user', user);
      }

      return responce.user;
    });
}

function register(user) {
  return axios.post('/user/register', user).then(handleResponse);
}

function getById(id) {
  return axios.get('/user', id).then(handleResponse);
}

// eslint-disable-next-line import/prefer-default-export
export const userService = {
  login,
  logout,
  register,
  getById,
};
