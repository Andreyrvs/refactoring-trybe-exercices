// Desafio 10
function techList(array, nome) {
  // seu código aqui
  let newArray = [];
  array.sort();
  if (array.length === 0) return 'Vazio!';

  for (const tech in array) {
    if (array) {
      let newObject = {
        tech: array[tech],
        name: nome,
      };
      newArray.push(newObject);
    }
  }
  return newArray;
}

// Desafio 11
function numeroValido(array) {
  // ===== Verifica se o numero do array é menor que 0 e maior que 9, caso verdadeiro retorna 'false'; ===== //
  for (const number of array) {
    if (number < 0 || number > 9) {
      return false;
    }  
  }
  return true;
}

function numeroRepet(array) {
  let countRepet = 0;
  let resultado = false;

  // ===== Verifica se um numero se repete ===== //
  for (const n of array) {
    if (array) {
      for (const n2 of array) {
        if (n2 === n) {
          countRepet += 1;
        }
        if (countRepet >= 3) {
          resultado = true;
        }
      }
      countRepet = 0;
    }
  }
  return resultado;
}

function generatePhoneNumber(array) {
  // seu código aqui
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (!numeroValido(array)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  if (numeroRepet(array)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  let ddd = array.join('').substring(0, 2);
  let part1 = array.join('').substring(2, 7);
  let part2 = array.join('').substring(7, 11);

  let phoneNumber = `(${ddd}) ${part1}-${part2}`;
  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  // let bc = lineB + lineC
  // if (lineA > Math.abs(lineA - bc)) return true
  return ((lineA < (lineB + lineC)) && (lineB < (lineA + lineC)) && (lineC < (lineB + lineA)));
}
console.log(triangleCheck(10, 14, 8));

// Desafio 13
function hydrate(stringPut) {
  // seu código aqui
  let numbersInString = stringPut.match(/\d+/g);// regex expression got from https://www.geeksforgeeks.org/extract-a-number-from-a-string-using-javascript/
  let numberSum = 0;
  for (let number of numbersInString) {
    numberSum += parseInt(number, 10);// looked on documentation how to transform a string to a integer
  }
  if (numberSum === 1) {
    return `${numberSum} copo de água`;
  }
  if (numberSum > 1) {
    return `${numberSum} copos de água`;
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
