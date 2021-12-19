/* ========= Exercice 01 ========= */
const player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3,
  },
};
// console.log(player); 

/* ========= Exercice 02 ========= */ 
const fullName = `A jogadora ${player.name} ${player.lastName} tem ${player.age} de idade`;
console.log(fullName);

/* ========= Exercice 03 ========= */
player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
console.log(player);

/* ========= Exercice 04 ========= */
// Quebra de linha devido ao Eslint permitir 100 caracteres por linha
const bestYear = `A jogadora ${player.name} ${player.lastName} 
foi eleita a melhor do mundo por ${player.bestInTheWorld.length} vezes`;
console.log(bestYear);

/* ========= Exercice 05 ========= */
// Quebra de linha devido ao Eslint permitir 100 caracteres por linha
const playerMedals = `A jogadora possui ${player.medals.golden} medalhas de ouro 
e ${player.medals.silver} medalhas de prata`;
console.log(playerMedals);
