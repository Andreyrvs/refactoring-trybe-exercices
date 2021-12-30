const assert = require('assert');
const { books } = require('./data');

const expectedResult = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

// ========== 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia. ========== //
function fantasyOrScienceFictionAuthors() {
  const wantedGenres = ['Fantasia', 'Ficção Científica'];
  return books
  .filter((book) => wantedGenres.includes(book.genre))
  .map((bookA) => bookA.author.name).sort();
}

console.log(fantasyOrScienceFictionAuthors());
assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expectedResult);
