function setBackgroundColor(color) {
  const content = document.querySelector('.content');
  content.style.backgroundColor = color;
  localStorage.setItem('backgroundColor', color);
}

const bgColorBtns = document.querySelectorAll('#background-color>button');
for (let index = 0; index < bgColorBtns.length; index += 1) {
  bgColorBtns[index].addEventListener('click', (event) => {
    setBackgroundColor(event.target.innerHTML);
  });
}

function initialize() {
  const backgroundColor = localStorage.getItem('backgroundColor');
  if (backgroundColor) setBackgroundColor(backgroundColor);
}
initialize();

window.onload = () => {
  setBackgroundColor();
};
