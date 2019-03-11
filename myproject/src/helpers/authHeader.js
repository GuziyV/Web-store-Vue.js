export default function authHeader() {
  // return authorization header with jwt token
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.token) {
    return {
      Authorization: `Bearer ${user.token}`,
      'Content-Type': 'application/json; charset=utf8',
      'Access-Control-Allow-Origin': '*',
    };
  }
  return {
    'Content-Type': 'application/json; charset=utf8',
    'Access-Control-Allow-Origin': '*',
  };
}
