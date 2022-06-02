import fetch from 'node-fetch';

export const validateLinks = async (linksArray) => {
  const validatedLinksArray = [];
  for (const object of linksArray) {
    const fetched = fetch(object.href)
      .then(response => {
        return {
          status: response.status,
          ok: response.status === 200 ? 'ok' : 'fail'
        };
      })
      .catch(error => console.log(error));
    validatedLinksArray.push({
      ...object,
      ... await fetched
    });
  };
  return validatedLinksArray;
}
