function greaterThan(arrayNumeros) {
  let indiceMaior = 0

  for (const index in arrayNumeros) {
    if (arrayNumeros[indiceMaior] < arrayNumeros[index]) {
      indiceMaior = index;
    }
  }
  return indiceMaior
}
console.log(greaterThan([2, 3, 6, 7, 10, 1]));
