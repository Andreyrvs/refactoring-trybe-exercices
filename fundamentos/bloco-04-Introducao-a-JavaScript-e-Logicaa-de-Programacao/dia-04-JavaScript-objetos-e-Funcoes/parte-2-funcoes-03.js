function menorValor(arrayNumbers) {
  let menorIndice = 0;

  for (const index in arrayNumbers) {
    if (arrayNumbers[menorIndice] > arrayNumbers[index]) {
      menorIndice = index;
    }
  }
  return menorIndice;
}
console.log(menorValor([2, 4, 6, 7, 10, 0, -3]));
