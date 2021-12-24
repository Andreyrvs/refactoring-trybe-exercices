function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// ========== Exercice 01 ========== //
const getDaysList = document.getElementById('days');

function createDaysOfMonth() {
  for (let index = 0; index < dezDaysList.length; index += 1) {
    const day = dezDaysList[index];
    const dayItem = document.createElement('li');
    if (day === 24 || day === 25 || day === 31) {
      dayItem.className = 'day holiday ';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 4 || day === 11 || day === 18 || day === 25) {
      dayItem.className = 'day friday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else {
      dayItem.className = 'day';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    }
  }
}
createDaysOfMonth();

// ========== Exercice 02 ========== //
const getBtnContainer = document.querySelector('.buttons-container');

function btnFeriados() {
  const btnItem = document.createElement('button');
  btnItem.id = 'btn-holiday';
  btnItem.innerText = 'Feriados';
  getBtnContainer.appendChild(btnItem);
}
btnFeriados();

// ========== Exercice 03 ========== //
function displayHoliday() {
  const getHolidayBtn = document.querySelector('#btn-holiday');
  const getHoliday = document.querySelectorAll('.holiday');
  const colorRgb = 'rgb(238, 238, 238)';
  const setNewColor = 'white';

  getHolidayBtn.addEventListener('click', () => {
    for (let index = 0; index < getHoliday.length; index += 1) {
      if (getHoliday[index].style.backgroundColor === setNewColor) {
        getHoliday[index].style.backgroundColor = colorRgb;
      } else {
        getHoliday[index].style.backgroundColor = setNewColor;
      }
    }
  });
}
displayHoliday();

// ========== Exercice 04 ========== //
function btnSextaFeira() {
  const btnItem = document.createElement('button');
  btnItem.id = 'btn-friday';
  btnItem.innerText = 'Sexta-feira';
  getBtnContainer.appendChild(btnItem);
}
btnSextaFeira();

// ========== Exercice 05 ========== //
function displayFriday(fridaysArray) {
  const getFridayBtn = document.querySelector('#btn-friday');
  let fridays = document.getElementsByClassName('friday');
  const newFridayText = 'Sexta-feiraa';

  getFridayBtn.addEventListener('click', () => {
    for (let index = 0; index < fridays.length; index += 1) {
      if (fridays[index].innerHTML !== newFridayText) {
        fridays[index].innerHTML = newFridayText;
      } else {
        fridays[index].innerText = fridaysArray[index];
      }
    }
  });
}

const dezFridays = [4, 11, 18, 25];
displayFriday(dezFridays);

// ========== Exercice 06 ========== //
function dayMouseOver() {
  const getDay = document.querySelector('#days');

  getDay.addEventListener('mouseover', (event) => {
    event.target.style.fontSize = '31px';
    event.target.style.fontWeight = '600';
  });
}

function dayMouseOut() {
  const getDay = document.querySelector('#days');

  getDay.addEventListener('mouseout', (event) => {
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
  });
}

dayMouseOver();
dayMouseOut();

// ========== Exercice 07 ========== //
function newTaskSpan(span) {
  const tasksContainer = document.querySelector('.my-tasks');
  const spanItem = document.createElement('span');
  spanItem.innerText = span;
  tasksContainer.appendChild(spanItem);
}
newTaskSpan('Nadar');

// ========== Exercice 08 ========== //
function newTaskDiv(color) {
  const tasksContainer = document.querySelector('.my-tasks');
  const divItem = document.createElement('div');

  divItem.className = 'task';
  divItem.style.backgroundColor = color;
  tasksContainer.appendChild(divItem);
}
newTaskDiv('red');

// ========== Exercice 09 ========== //
function taskSelected() {
  const selectedTask = document.getElementsByClassName('task selected')
  const getTask = document.querySelector('.task');

  getTask.addEventListener('click', (event) => {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
}
taskSelected();
