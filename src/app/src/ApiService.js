export const call = (url, method, request) => {
  const headers = new Headers({ 'Content-Type': 'application/json' });
  const accessToken = localStorage.getItem('ACCESS_TOKEN');
  if (accessToken && accessToken !== null) {
    headers.append('Authorization', 'Bearer ' + accessToken);
  }
  const options = {
    headers,
    url,
    method,
  };
  if (request) {
    options.body = JSON.stringify(request);
  }
  return fetch(options.url, options)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else if (response.status === 403) {
        window.location.href = '/login';
      } else {
        Promise.reject(response);
        throw Error(response);
      }
    })
    .catch((error) => {
      console.log('http error');
      console.log(error);
    });
};

export const signin = (userDTO) => {
  return call('/auth/signin', 'POST', userDTO).then((response) => {
    if (response.token) {
      localStorage.setItem('ACCESS_TOKEN', response.token);
      window.location.href = '/';
    }
  });
};

export const signout = () => {
  localStorage.setItem('ACCESS_TOKEN', null);
  window.location.href = '/login';
};
