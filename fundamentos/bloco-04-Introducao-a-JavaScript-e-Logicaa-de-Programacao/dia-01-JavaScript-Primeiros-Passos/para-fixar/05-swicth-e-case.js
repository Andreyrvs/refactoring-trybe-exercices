let estado = 'aprovada';
let nota = 81

switch (estado) {
  case 'aprovada':
    nota >= 80
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
