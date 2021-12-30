const assert = require('assert');
const { books } = require('./data');

// ========== 5 - Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário. ========== //

const expectedResult = false;

function everyoneWasBornOnSecXX() {
  return books.every((pessoa) => (
    pessoa.author.birthYear > 1901 && pessoa.author.birthYear < 2000
  ));
}

assert.deepStrictEqual(everyoneWasBornOnSecXX(), expectedResult);
