const info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// ========= Exercice 01 ========= //
const grettings = `Bem-vinda, ${info.personagem}`
// console.log(grettings);

// ========= Exercice 02 ========= //
info.recorrente = 'Sim';
// console.log(info);

// ========= Exercice 03 ========= //
for (const key in info) {
  // console.log(key);
}

// ========= Exercice 04 ========= //
for (const key in info) {
  console.log(info[key]);
}
