const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const repeat = (rAnswear, sAnswear, action) => {
  let nota = 0;

  for (let index = 0; index < rAnswear.length; index += 1) {
    const actionReturn = action(rAnswear[index], sAnswear[index]);
    nota += actionReturn;
  }
  return `Resultado final: ${nota} corretas`;
};

const action = (rAnswear, sAnswear) => {
  if (rAnswear === sAnswear) return 1;
  if (sAnswear === 'N.A') return 0;
  return -0.5;
};

console.log(repeat(RIGHT_ANSWERS, STUDENT_ANSWERS, action));
