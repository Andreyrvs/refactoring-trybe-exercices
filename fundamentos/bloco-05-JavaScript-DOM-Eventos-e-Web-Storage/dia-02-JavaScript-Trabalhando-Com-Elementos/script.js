// ===== Exercice 01 ===== //
const body = document.querySelector('body');
const h1 = document.createElement('h1');
h1.innerHTML = 'Exercício 5.2 - JavaScript DOM';
body.appendChild(h1);

// ===== Exercice 02 ===== //
const elementMain = document.createElement('main');
elementMain.className = 'main-content';
body.appendChild(elementMain);

// ===== Exercice 03 ===== //
const centerContent = document.createElement('section');
centerContent.className = 'center-content';
elementMain.appendChild(centerContent);

// ===== Exercice 04 ===== //
const tagP = document.createElement('p');
tagP.innerHTML = 'Texto show';
centerContent.appendChild(tagP);

// ===== Exercice 05 ===== //
const leftContent = document.createElement('section');
leftContent.className = 'left-content';
elementMain.appendChild(leftContent);

// ===== Exercice 06 ===== //
const rightContent = document.createElement('section');
rightContent.className = 'right-content';
elementMain.appendChild(rightContent);

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
  elementH3.className = 'description';
  elementMain.appendChild(elementH3);
}
// ===== Exercice alteracoes e remocoes 01 ===== //
const title = document.querySelector('h1');
title.className = 'title';

// ===== Exercice alteracoes e remocoes 02 ===== //

// ===== Exercice alteracoes e remocoes 03 ===== //
const sectionLeftContent = document.getElementsByClassName('left-content')[0];
elementMain.removeChild(sectionLeftContent);

// ===== Exercice alteracoes e remocoes 04 ===== //
const sectionRightContent = document.getElementsByClassName('right-content')[0];
sectionRightContent.style.marginRight = 'auto';

// ===== Exercice alteracoes e remocoes 05 ===== //
const sectionCenterContent = document.getElementsByClassName('center-content')[0];
sectionCenterContent.style.backgroundColor = 'darkGreen';

// ===== Exercice alteracoes e remocoes 06 ===== //
ul.lastChild.remove();
ul.lastChild.remove();
