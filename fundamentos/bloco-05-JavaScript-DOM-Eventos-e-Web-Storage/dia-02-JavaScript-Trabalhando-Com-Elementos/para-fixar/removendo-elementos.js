// import { pai, estouAqui } from './buscando-elementos';

// console.log(pai);
const papai = document.getElementById('pai');

for (let index = papai.childNodes.length - 1; index > 0; index -= 1) {
  const filhoAtual = papai.childNodes[index];
  if (filhoAtual.id !== 'elementoOndeVoceEsta') {
    filhoAtual.remove();
  }
}

const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
segundoEUltimoFilhoDoFilho.remove();

const filhoCriado = document.getElementById('filhaCriada');
filhoCriado.remove();
