const salarioBruto = 3000;
let aliquotaINSS;
let aliquotaIR;

if (salarioBruto <= 1556.94) {
  aliquotaINSS = (salarioBruto / 100) * 8;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  aliquotaINSS = (salarioBruto / 100) * 9;
} else if (salarioBruto >= 2594.93 && salarioBruto < 5189.82) {
  aliquotaINSS = (salarioBruto / 100) * 11;
} else if (salarioBruto > 5189.82) {
  aliquotaINSS = 570.88;
}

console.log(aliquotaINSS);
const salarioBase = salarioBruto - aliquotaINSS;

if (salarioBase <= 1903.98) {
  aliquotaIR = 'isento de imposto de renda';
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.655) {
  aliquotaIR = ((salarioBase / 100) * 7.5) - 142.80;
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
  aliquotaIR = ((salarioBase / 100) * 15) - 354.80;
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
  aliquotaIR = ((salarioBase / 100) * 22.5) - 636.13;
} else if (salarioBase > 4664.68) {
  aliquotaIR = ((salarioBase / 100) * 27.5) - 869.36;
}  

console.log(aliquotaIR.toFixed(2));

const salarioLiquido = salarioBase - aliquotaIR;
console.log(`Salário líquido: ${salarioLiquido}`);
