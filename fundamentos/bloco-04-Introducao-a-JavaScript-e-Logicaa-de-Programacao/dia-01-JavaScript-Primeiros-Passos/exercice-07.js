/*
Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
porcentagem >= 80 -> B
porcentagem >= 70 -> C
porcentagem >= 60 -> D
porcentagem >= 50 -> E
porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
*/

let nota = 96;
let porcentagem = nota / 100 * nota;
console.log(porcentagem);

if (nota < 0 || nota > 100) {
  console.log('Erro, nota incorreta!');
} else if (porcentagem >= 90) {
  console.log('A');
} else if (porcentagem >= 80) {
  console.log('B');
} else if (porcentagem >= 70) {
  console.log('C');
} else if (porcentagem >= 60) {
  console.log('D');
} else if (porcentagem >= 50) {
  console.log('E');
} else if (porcentagem < 50) {
  console.log('F');
}