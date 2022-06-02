import { validateLinks } from '../src/validate';

const data = [
  {
    href: 'https://picsum.photos/id/1003/800/1200',
    text: 'Este es un venadito',
    file: '/home/pedro/repos/misc/kasu/LIM017-md-links/example/MD1.md'
  },
  {
    href: 'https://picsum.photos/id/1003/800/1200',
    text: 'Este es el mismo venadito',
    file: '/home/pedro/repos/misc/kasu/LIM017-md-links/example/MD1.md'
  },
  {
    href: 'https://picsum.photos/id/1003/800/1200',
    text: 'Este es el mismo venadito pero por tercera vez',
    file: '/home/pedro/repos/misc/kasu/LIM017-md-links/example/MD1.md'
  },
  {
    href: 'https://es.wikipedia.org/wiki/Asado',
    text: 'Asados',
    file: '/home/pedro/repos/misc/kasu/LIM017-md-links/example/ex1/MD4.md'
  },
  {
    href: 'https://es.wikipedia.org/wiki/Parrilla_venezolana',
    text: 'Parrilla Venezolana',
    file: '/home/pedro/repos/misc/kasu/LIM017-md-links/example/ex1/MD4.md'
  },
  {
    href: 'https://es.wikipedia.org/wiki/Parrilla_marciana',
    text: 'Parrillada Marciana',
    file: '/home/pedro/repos/misc/kasu/LIM017-md-links/example/ex1/MD4.md'
  }
];

const response = {
  file: "/home/pedro/repos/misc/kasu/LIM017-md-links/example/MD1.md",
  href: "https://picsum.photos/id/1003/800/1200",
  ok: "ok",
  status: 200,
  text: "Este es el mismo venadito",
};

describe('General use case', () => {
  it('Should return the object array correctly', () => {
    validateLinks(data).then(
      result => {
        expect(result[1]).toMatchObject(response);
      }
    );
  });
});
