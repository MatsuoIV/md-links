export const mdLinks = (path, options) => {
  const data = [
    {
      href: 'http://cafe.com',
      text: 'Leche Kirma',
      title: 'Leche Kirma'
    },
    {
      href: 'http://leche.com',
      text: 'Leche ENCI',
      title: 'Leche ENCI'
    }
  ];
  const response = Promise.resolve(data);
  return response;
}
