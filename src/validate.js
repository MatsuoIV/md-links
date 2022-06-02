import fetch from 'node-fetch';

export const fetchData = (object) => {
  return fetch(object.href)
    .then(response => {
      return {
        status: response.status,
        ok: response.status === 200 ? 'ok' : 'fail'
      };
    })
    .then(data => {
      return Promise.resolve(Object.assign(object, data));
    })
    .catch(error => console.log(error));
};

export const validateLinks = (linksArray) => {
  return Promise.all(
    linksArray.map(fetchData)
  );
};
