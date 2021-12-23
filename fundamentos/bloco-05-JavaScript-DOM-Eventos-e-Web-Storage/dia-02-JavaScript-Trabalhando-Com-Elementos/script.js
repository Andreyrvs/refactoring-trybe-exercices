// ===== Exercice 01 ===== //
const body = document.querySelector('body');
const h1 = document.createElement('h1');
h1.innerHTML = 'Exercício 5.2 - JavaScript DOM';
body.appendChild(h1);

// ===== Exercice 02 ===== //
const mainContent = document.createElement('main');
mainContent.className = 'main-content';
body.appendChild(mainContent);

// ===== Exercice 03 ===== //
const centerContent = document.createElement('section');
centerContent.className = 'center-content';
mainContent.appendChild(centerContent);

// ===== Exercice 04 ===== //
const tagP = document.createElement('p');
tagP.innerHTML = 'Texto show';
centerContent.appendChild(tagP);

// ===== Exercice 05 ===== //
const leftContent = document.createElement('section');
leftContent.className = 'left-content';
mainContent.appendChild(leftContent);

// ===== Exercice 06 ===== //
const rightContent = document.createElement('section');
rightContent.className = 'right-content';
mainContent.appendChild(rightContent);

// ===== Exercice 07 ===== //
const img = document.createElement('img');
img.src = 'https://picsum.photos/200';
img.className = 'small-image';
leftContent.appendChild(img);

// ===== Exercice 08 ===== //
const ul = document.createElement('ul');
rightContent.appendChild(ul);

const arrayNumbers = ['um', 'dois', 'tres', 'quatro', 'cinco', 
'seis', 'sete', 'oito', 'nove', 'dez'];

for (const number in arrayNumbers) {
  if (arrayNumbers) {
    const li = document.createElement('li');
    li.innerHTML = arrayNumbers[number];
    ul.appendChild(li);
  }
}

// ===== Exercice 09 ===== //
for (let index = 1; index < 3; index += 1) {
  const elementH3 = document.createElement('h3');
  elementH3.innerHTML = `Show ${index}`;
  mainContent.appendChild(elementH3);
}
// ===== Exercice alteracoes e remocoes 01 ===== //
const title = document.querySelector('h1');
title.className = 'title';

// ===== Exercice alteracoes e remocoes 02 ===== //
const elementH3 = document.getElementsByTagName('h3');
for (let index = 0; index < 3; index += 1) {
  elementH3[index].className = 'description';
}

// ===== Exercice alteracoes e remocoes 03 ===== //
mainContent.removeChild(leftContent);

// ===== Exercice alteracoes e remocoes 04 ===== //
rightContent.style.margin = 'auto';

// ===== Exercice alteracoes e remocoes 05 ===== //
centerContent.style.backgroundColor = 'darkGreen';

// ===== Exercice alteracoes e remocoes 06 ===== //
arrayNumbers.remove('nove');
