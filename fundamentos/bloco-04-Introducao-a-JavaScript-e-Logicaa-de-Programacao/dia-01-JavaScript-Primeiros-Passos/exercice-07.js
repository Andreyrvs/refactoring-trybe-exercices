const nota = 96;
const porcentagem = (nota / 100) * nota;
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