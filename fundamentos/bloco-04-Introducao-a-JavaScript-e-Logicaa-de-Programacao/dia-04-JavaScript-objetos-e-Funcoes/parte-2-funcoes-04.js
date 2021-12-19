function maiorCaracter(arrayNomes) {
  let maiorPalavra = arrayNomes[0];

  for (const index in arrayNomes) {
    if (maiorPalavra.length < arrayNomes[index].length) {
      maiorPalavra = arrayNomes[index];
    }
  }
  return maiorPalavra;
}
console.log(maiorCaracter(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
