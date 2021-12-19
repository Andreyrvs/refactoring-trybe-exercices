// function maisRepete(arrayInteiros) {
//   let contaRepetido = 0;
//   let contaNumero = 0;
//   let indexNumeroRepetido = 0;
//   for (const index in arrayInteiros) {
//     const verificaNumero = arrayInteiros[index];
//     for (const index2 in arrayInteiros) {
//       if (verificaNumero === arrayInteiros[index2]) {
//         contaNumero += 1;
//       }
//     }
//     if (contaNumero > contaRepetido) {
//       contaRepetido = contaNumero;
//       indexNumeroRepetido = index;
//     }
//     contaNumero = 0;
//   }
//   return arrayInteiros[indexNumeroRepetido];
// }
// console.log(maisRepete([2, 3, 2, 5, 8, 2, 3]));
