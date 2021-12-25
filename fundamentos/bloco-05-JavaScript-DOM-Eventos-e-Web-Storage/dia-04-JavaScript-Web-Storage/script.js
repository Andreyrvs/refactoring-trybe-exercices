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

const fontColorBtns = document.querySelectorAll('#font-color>button');
for (let index = 0; index < fontColorBtns.length; index += 1) {
  fontColorBtns[index].addEventListener('click', (event) => {
    setFontColor(event.target.innerHTML);
  });
}

// ========= Exercice 03 ========= //
function setFontSize(size) {
  const paragraphs = document.querySelectorAll('.paragraph');
  for (let index = 0; index < paragraphs.length; index += 1) {
    paragraphs[index].style.fontSize = size;
  }
  localStorage.setItem('fontSize', size);
}

const fontSizeBtns = document.querySelectorAll('#font-size>button');
for (let index = 0; index < fontSizeBtns.length; index += 1) {
  fontSizeBtns[index].addEventListener('click', (event) => {
    setFontSize(event.target.innerHTML);
  });
}

// ========= Exercice 04 ========= //
function setLineHeight(Height) {
  const paragraphs = document.querySelectorAll('.content');
  for (let index = 0; index < paragraphs.length; index += 1) {
    paragraphs[index].style.lineHeight = Height;
  }
}

const lineHeightBtns = document.querySelectorAll('#line-height>button');
for (let index = 0; index < lineHeightBtns.length; index += 1) {
  lineHeightBtns[index].addEventListener('click', (event) => {
    setLineHeight(event.target.innerHTML);
  });
}

// ========= Exercice 05 ========= //
function setFontFamily(font) {
  const paragraphs = document.querySelectorAll('.content');
  for (let index = 0; index < paragraphs.length; index += 1) {
    paragraphs[index].style.fontFamily = font
  }
  localStorage.setItem('fontFamily', font)
}

const fontFamilyBtns = document.querySelectorAll('#font-family');
for (let index = 0; index < fontFamilyBtns.length; index += 1) {
  fontFamilyBtns[index].addEventListener('click', (event) => {
    setFontFamily(event.target.innerHTML);
  })
}

// ========= Inicializador das Funcoes ========= //
function initialize() {
  const backgroundColor = localStorage.getItem('backgroundColor');
  if (backgroundColor) setBackgroundColor(backgroundColor);

  const fontColor = localStorage.getItem('fontColor');
  if (fontColor) setFontColor(fontColor);

  const fontSize = localStorage.getItem('fontSize');
  if (fontColorBtns) setFontSize(fontSize);

  const lineHeight = localStorage.getItem('lineHeight');
  if (lineHeight) setLineHeight(lineHeight);

  const fontFamily = localStorage.getItem('fontFamily');
  if (fontFamily) setFontFamily(fontFamily);
}

window.onload = () => {
  initialize();
};
