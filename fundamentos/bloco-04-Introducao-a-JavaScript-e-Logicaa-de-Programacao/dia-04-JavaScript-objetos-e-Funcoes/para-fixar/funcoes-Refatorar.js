// ========= Exercice 01 ========= //
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(5, 4));

// function subtract(a, b) {
//   return a - b;
// }
// console.log(subtract(5, 4));

// function multiply(a, b) {
//   return a * b;
// }
// console.log(multiply(5, 4));

// function divide(a, b) {
//   return a / b;
// }
// console.log(divide(5, 4));

// function module(a, b) {
//   return a % b;
// }
// console.log(module(5, 4));

// ========= Exercice 02 ========= //
function greaterThanTwo(a, b) {
  return (a > b) ? `${a} é maior que: ${b}` : `${b} é maior que: ${a}`;
}
console.log(greaterThanTwo(15, 16));

// ========= Exercice 03 ========= //
// Resolve a Complexidade Maior que (05) pois o eslint reclamou;
function biggestIsA(a, b, c) {
  if (a > b && a > c) return console.log(`${a} é maior que: ${b} e ${c}`);
}
function biggestIsB(a, b, c) {
  if (b > a && b > c) return console.log(`${b} é maior que: ${a} e ${c}`);
}
function biggestIsC(a, b, c) {
  if (c > a && c > b) return console.log(`${c} é maior que: ${a} e ${b}`);
}
function greaterThanThree(pa, pb, pc) {
  if (biggestIsA(pa, pb, pc)) return biggestIsA();
  if (biggestIsB(pa, pb, pc)) return biggestIsB();
  if (biggestIsC(pa, pb, pc)) return biggestIsC();
}
greaterThanThree(23, 35, 166);

// ========= Exercice 04 ========= //
function positiveNegativeOrZero(a) {
  if (a > 0) return 'positive';
  if (a < 0) return 'negative';
  return 'zero';
}
console.log(positiveNegativeOrZero(-10));

// ========= Exercice 05 ========= //
function innerTriangleAngle(sideA, sideB, sideC) {
  const sumAngle = sideA + sideB + sideC;
  const allAnglePositive = sideA > 0 && sideB > 0 && sideC > 0;

  if (allAnglePositive) {
    if (sumAngle === 180) return true;
    return false;
  } 
  return 'Erro: angulo inválido';
}

console.log(innerTriangleAngle(60, 50, 710));
