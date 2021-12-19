function somatorio(number) {
  let total = 0;
  for (let index = 1; index <= number; index += 1) {
    total += index;
  }
  return total;
}
console.log(somatorio(5));
