import { mdLinks } from '../src/index';

const responseMock = [
  {
    href: 'http://leche.com',
    text: 'Leche ENCI',
    title: 'Leche ENCI'
  },
  {
    href: 'http://cafe.com',
    text: 'Leche Kirma',
    title: 'Leche Kirma'
  }
];

describe('General use case', () => {
  it('Should return the object array correctly', () => {
    mdLinks('a', 'b')
      .then(response => {
        expect(response).arrayContaining(responseMock)
      })
      .catch();
  });
});
