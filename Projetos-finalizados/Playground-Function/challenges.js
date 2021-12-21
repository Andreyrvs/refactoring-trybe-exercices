// Desafio 1
function compareTrue(paramA, paramB) {
  return paramA && paramB === true;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(arrayNomes) {
  return `${arrayNomes[arrayNomes.length - 1]}, ${arrayNomes[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  const pontosVitorias = wins * 3;
  return pontosVitorias + ties;
}

// Desafio 6
function highestCount(array) {
  let maiorNumero = array[0];
  let numRepeticoes = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maiorNumero) {
      maiorNumero = array[index];
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (maiorNumero === array[index]) {
      numRepeticoes += 1;
    }
  }
  return numRepeticoes;
}

// Desafio 7

function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let cat1Diff = cat1 - mouse;
  let cat2Diff = cat2 - mouse;
  let closerCat;

  if (cat1Diff < 0) cat1Diff *= -1;
  if (cat2Diff < 0) cat2Diff *= -1;

  if (cat1Diff < cat2Diff) closerCat = 'cat1';
  else if (cat2Diff < cat1Diff) closerCat = 'cat2';
  else if (cat1Diff === cat2Diff) closerCat = 'os gatos trombam e o rato foge';

  return closerCat;
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let novoArray = [];
  for (const numero of array) {
    if (numero % 3 === 0 && numero % 5 === 0) {
      novoArray.push('fizzBuzz');
    } else if (numero % 3 === 0) {
      novoArray.push('fizz');
    } else if (numero % 5 === 0) {
      novoArray.push('buzz');
    } else {
      novoArray.push('bug!');
    }
  }
  return novoArray;
}

// Desafio 9
function encode(string) {
  // seu código aqui
  string = string.replace(/a/g, 1);
  string = string.replace(/e/g, 2);
  string = string.replace(/i/g, 3);
  string = string.replace(/o/g, 4);
  string = string.replace(/u/g, 5);
  return string;
}
function decode(string) {
  // seu código aqui
  string = string.replace(/1/g, 'a');
  string = string.replace(/2/g, 'e');
  string = string.replace(/3/g, 'i');
  string = string.replace(/4/g, 'o');
  string = string.replace(/5/g, 'u');
  return string;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
