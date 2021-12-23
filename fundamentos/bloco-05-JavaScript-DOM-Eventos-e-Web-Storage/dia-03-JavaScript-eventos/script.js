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

function generateHoliday(day, dayItem) {
  if (day === 24 || day === 25 || day === 31) {
    dayItem.className = 'day holiday ';
    dayItem.innerHTML = day;
    getDaysList.appendChild(dayItem);
  }
}

function generateFriday(day, dayItem) {
  if (day === 4 || day === 11 || day === 18 || day === 25) {
    dayItem.className = 'day Friday';
    dayItem.innerHTML = day;
    getDaysList.appendChild(dayItem);
  }
}

function generateDays(day, dayItem) {
  dayItem.className = 'day';
  dayItem.innerHTML = day;
  getDaysList.appendChild(dayItem);
}

function createDaysOfMonth() {
  for (let index = 0; index < dezDaysList.length; index += 1) {
    const day = dezDaysList[index];
    const dayItem = document.createElement('li');
    generateHoliday(day, dayItem);
    generateFriday(day, dayItem);
    generateDays(day, dayItem);
  }
}
createDaysOfMonth();

// ========== Exercice 02 ========== //

