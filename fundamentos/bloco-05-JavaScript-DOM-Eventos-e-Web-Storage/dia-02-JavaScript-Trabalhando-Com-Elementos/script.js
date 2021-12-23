// ===== Exercice 01 ===== //
const body = document.querySelector('body');
const h1 = document.createElement('h1');
h1.innerHTML = 'sou h1'
body.appendChild(h1)
console.log(body);

// ===== Exercice 02 ===== //
const main = document.createElement('main');
main.className = 'main-content';
body.appendChild(main);