// ===== Exercice 01 ===== //
const body = document.querySelector('body');
const h1 = document.createElement('h1');
body.appendChild(h1);
console.log(body);

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
tagP.innerHTML = 'Algum Texto';
centerContent.appendChild(tagP);

// ===== Exercice 05 ===== //
const leftContent = document.createElement('section');
leftContent.className = 'left-content';
leftContent.innerHTML = 'Esquerda';
mainContent.appendChild(leftContent);

// ===== Exercice 06 ===== //
const rightContent = document.createElement('section');
rightContent.className = 'right-content';
rightContent.innerHTML = 'Direita';
mainContent.appendChild(rightContent);

// ===== Exercice 06 ===== //
const img = document.createElement('img');
img.src = 'https://picsum.photos/200';
img.className = 'small-image';
leftContent.appendChild(img);

// ===== Exercice 07 ===== //
