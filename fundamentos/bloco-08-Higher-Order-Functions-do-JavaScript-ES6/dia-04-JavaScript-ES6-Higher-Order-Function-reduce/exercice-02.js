const assert = require('assert');
const { books } = require('./data');

// ========== 2 - Crie uma string com os nomes de todas as pessoas autoras. ========== //

const expectedResult = 'George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.';

function reduceNames() {
  const names = books.reduce((acc, book, index, array) => {
    if (index === array.length - 1) return `${acc} ${book.author.name}.`;
    return `${acc} ${book.author.name},`;
  }, '');
  return names.trim();
}

console.log(reduceNames());
assert.deepStrictEqual(reduceNames(), expectedResult);
