/*
Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
Bonus: use somente um if .
*/

const numberOne = 92;
const numberTwo = 5;
const numberThree = 7;

let isEven = false

if (numberOne % 2 === 0 || numberTwo % 2 === 0 || numberThree % 2 === 0) {
  isEven = true
} 
console.log(isEven);