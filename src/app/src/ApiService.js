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
      }
    })
    .catch((error) => {
      console.log('http error');
      console.log(error);
    });
};
