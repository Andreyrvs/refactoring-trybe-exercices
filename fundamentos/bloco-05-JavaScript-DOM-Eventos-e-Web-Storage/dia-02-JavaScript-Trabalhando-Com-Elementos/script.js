// ===== Exercice 01 ===== //
const body = document.querySelector('body');
const h1 = document.createElement('h1');
h1.className = 'title'
h1.innerHTML = 'Titulo'
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

// ===== Exercice 07 ===== //
const img = document.createElement('img');
img.src = 'https://picsum.photos/200';
img.className = 'small-image';
leftContent.appendChild(img);

// ===== Exercice 08 ===== //
const ul = document.createElement('ul');
rightContent.appendChild(ul);

const arrayNumbers = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

for (const number in arrayNumbers) {
  if (arrayNumbers) {
    const li = document.createElement('li');
    li.innerHTML = arrayNumbers[number];
    ul.appendChild(li)
  }
}

console.log(mainContent);
// ===== Exercice 09 ===== //
const firstH3 = document.createElement('h3');
mainContent.appendChild(firstH3);

const secondH3 = document.createElement('h3');
mainContent.appendChild(secondH3);

const thirdH3 = document.createElement('h3');
mainContent.appendChild(thirdH3);
