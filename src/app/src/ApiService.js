export const call = (url, method, request) => {
  let options = {
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
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
      window.location.href = '/';
    }
  });
};
