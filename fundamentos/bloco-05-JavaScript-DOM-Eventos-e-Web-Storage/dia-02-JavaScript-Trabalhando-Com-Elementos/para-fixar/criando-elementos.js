// import { pai, estouAqui } from './buscando-elementos';

const irmao = document.createElement('section');
irmao.id = 'irmaoCriado';
pai.appendChild(irmao);

const filhaCriado = document.createElement('section');
filhaCriado.id = 'filhaCriada';
estouAqui.appendChild(filhaCriado);

const filhoDoFilho = document.createElement('section');
filhoDoFilho.id = 'filhoDoFilho';
estouAqui.firstElementChild.appendChild(filhoDoFilho);

// console.log(estouAqui.firstElementChild);

// console.log(filhoDoFilho.parentElement.parentElement.nextElementSibling);