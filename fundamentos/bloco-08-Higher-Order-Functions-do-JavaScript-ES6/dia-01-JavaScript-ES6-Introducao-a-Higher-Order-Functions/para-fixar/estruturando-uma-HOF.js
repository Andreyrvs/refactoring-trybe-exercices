const wakeUp = () => 'Acordado!!';

const coffeTime = () => 'Bora tomar café!!';

const toSleep = () => 'Partiu dormir!!';
// Ao chamar a função doingThings:
const doingThings = (callback) => {
  const result = callback();
  console.log(result);
};

doingThings(wakeUp);
doingThings(coffeTime);
doingThings(toSleep);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!