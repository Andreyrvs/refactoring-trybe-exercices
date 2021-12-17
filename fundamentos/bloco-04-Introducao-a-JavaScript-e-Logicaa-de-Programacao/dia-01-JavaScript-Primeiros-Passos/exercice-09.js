/* 
Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
Bonus: use somente um if . */

const numberOne = 92;
const numberTwo = 52;
const numberThree = 72;

let isOdd = false

if (numberOne % 2 !== 0 || numberTwo % 2 !== 0 || numberThree % 2 !== 0) {
  isOdd = true
} 
console.log(isOdd);