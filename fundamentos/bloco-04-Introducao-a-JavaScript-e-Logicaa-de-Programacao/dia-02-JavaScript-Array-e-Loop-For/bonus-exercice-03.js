const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
const novoArray = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (index + 1 < numbers.length) {
    novoArray.push(numbers[index] * numbers[index + 1]);
  } else {
    novoArray.push(numbers[index] * 2);
  }
}
console.log(novoArray);
