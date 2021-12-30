const assert = require('assert');
const { books } = require('./data');

// ======== 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados. ======== //
const expectedResult = 43;

function averageAge() {
  const numbooks = books.length;
  const sumOfAges = books.reduce((sum, book) => (
    sum + (book.releaseYear - book.author.birthYear)
  ), 0)
  return sumOfAges / numbooks;
}

console.log(averageAge());
assert.deepStrictEqual(averageAge(), expectedResult);
