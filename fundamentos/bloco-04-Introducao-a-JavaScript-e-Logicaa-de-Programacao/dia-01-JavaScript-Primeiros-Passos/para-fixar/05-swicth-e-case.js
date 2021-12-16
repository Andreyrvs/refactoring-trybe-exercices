let estado = '';
let nota = 60

switch (nota) {
  case nota >= 80:
    estado = 'aprovada'
    break;
  case nota < 80 && nota >= 60:
    estado = 'lista'
    break;
  case nota < 60:
    estado = 'reprovada'
    break;
  default:
    estado = 'não se aplica';
}
console.log(estado);
