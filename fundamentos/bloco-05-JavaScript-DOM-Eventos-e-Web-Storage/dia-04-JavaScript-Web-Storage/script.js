// ========= Exercice 01 ========= //
function setBackgroundColor(color) {
  const content = document.querySelector('.content');
  content.style.backgroundColor = color;
  localStorage.setItem('backgroundColor', color);
}

// Background Color
const bgColorBtns = document.querySelectorAll('#background-color>button');
for (let index = 0; index < bgColorBtns.length; index += 1) {
  bgColorBtns[index].addEventListener('click', (event) => {
    setBackgroundColor(event.target.innerHTML);
  });
}

// ========= Exercice 02 ========= //
function setFontColor(color) {
  const paragraphs = document.querySelectorAll('.paragraph');
  for (let index = 0; index < paragraphs.length; index += 1) {
    paragraphs[index].style.color = color;
  }
  localStorage.setItem('fontColor', color);
}

const fontColorBtns = document.querySelectorAll('#font-color>button')
for (let index = 0; index < fontColorBtns.length; index += 1) {
  fontColorBtns[index].addEventListener('click', (event) => {
    setFontColor(event.target.innerHTML);
  })
}

// ========= Exercice 03 ========= //


function initialize() {
  const backgroundColor = localStorage.getItem('backgroundColor');
  if (backgroundColor) return setBackgroundColor(backgroundColor);

  const fontColor = localStorage.getItem('fontColor');
  if (fontColor) return setFontColor(fontColor);
}

window.onload = () => {
  setBackgroundColor();
  initialize();
};