const info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// ========= Exercice 01 ========= //
const grettings = `Bem-vinda, ${info.personagem}`;
console.log(grettings);

// ========= Exercice 02 ========= //
info.recorrente = 'Sim';
// console.log(info);

// ========= Exercice 03 ========= //
for (const key in info) {
  if (info) {
    console.log(key);
  }
}

// ========= Exercice 04 ========= //
for (const key in info) {
  if (info) {
    console.log(info[key]);
  }
}

// ========= Exercice 05 ========= //
const newInfo = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (const key in info) {
  if (
    key === 'recorrente' 
    && info[key] === 'Sim' 
    && newInfo[key] === 'Sim'
  ) {
    console.log('Ambos recorrentes');
  } else {
    console.log(`${info[key]} e ${newInfo[key]}`);
  }
}
