const ladoA = 60;
const ladoB = -70;
const ladoC = 150;

const somaAngulos = ladoA + ladoB + ladoC;

const angulosPositivos = ladoA > 0 && ladoB > 0 && ladoC > 0;

if (angulosPositivos) {
  if (somaAngulos === 180) {
    console.log('true');
  } else {
  console.log('false');
  }
} else {
  console.log('Erro: angulo inválido');
}  