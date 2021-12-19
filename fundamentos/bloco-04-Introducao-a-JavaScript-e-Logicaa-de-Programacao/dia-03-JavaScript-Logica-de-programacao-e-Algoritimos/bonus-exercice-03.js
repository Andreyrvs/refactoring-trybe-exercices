/* 3- Agora inverta o lado do triângulo. Por exemplo:
Copiar
n = 5

    *
   **
  ***
 ****
*****
Atenção! Note que esse exercício é bem mais complexo que o anterior! 
Não basta, aqui, imprimir somente asteriscos. 
Você precisará de uma lógica para imprimir espaços também. */
const n = 5;
const symbol = '*';
let inputLine = '';
let inputPosition = n;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine += ' ';
    } else {
      inputLine += symbol;
    }
  }
  
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
}
