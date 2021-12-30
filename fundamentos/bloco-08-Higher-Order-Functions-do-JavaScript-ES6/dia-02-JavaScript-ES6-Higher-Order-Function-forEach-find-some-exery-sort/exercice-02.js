const { books } = require('./data');

// ========= 2 - Retorne o nome do livro de menor nome. ========= //
// ========= Dica: use a função forEach . ========= //
function smallerName() {
  let nameBook;

  books.forEach((book) => {
    if (!nameBook || book.name.length < nameBook.length) {
      nameBook = book.name;
    }
  });

  return nameBook;
}

console.log(smallerName());
