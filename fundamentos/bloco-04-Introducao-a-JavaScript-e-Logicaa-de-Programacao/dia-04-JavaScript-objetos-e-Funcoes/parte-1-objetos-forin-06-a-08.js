const leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

// ========= Exercice 06 ========= //
const favoriteBook = `O livro favorito de ${leitor.nome} ${leitor.sobrenome} 
se chama ${leitor.livrosFavoritos[0].titulo} `;

// console.log(favoriteBook);

// ========= Exercice 07 ========= //

leitor.livrosFavoritos[1] = {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editor: 'Rocco',
} 

console.log(leitor);

// ========= Exercice 08 ========= //
