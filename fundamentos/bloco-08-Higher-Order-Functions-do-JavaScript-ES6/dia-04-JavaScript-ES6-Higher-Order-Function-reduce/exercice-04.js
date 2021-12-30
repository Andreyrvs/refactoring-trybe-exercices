const assert = require('assert');
const { books } = require('./data');

// ======== 4 - Encontre o livro com o maior nome. ======== //
const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

function longestNamedBook() {
  return books.reduce((acc, current) => (
    acc.name.length > current.name.length ? acc : current));
}

console.log(longestNamedBook());
assert.deepStrictEqual(longestNamedBook(), expectedResult);
