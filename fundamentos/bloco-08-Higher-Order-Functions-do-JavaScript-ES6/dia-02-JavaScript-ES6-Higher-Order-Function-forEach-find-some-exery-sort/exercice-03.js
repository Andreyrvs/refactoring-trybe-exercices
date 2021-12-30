const assert = require('assert');
const { books } = require('./data');
// ========== 3 - Encontre o primeiro livro cujo nome possui 26 caracteres. ========== //

const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

function getNamedBook() {
  return books.find((book) => book.name.length === 26);
}

console.log(getNamedBook());

assert.deepStrictEqual(getNamedBook(), expectedResult);
