/* 1 - Usando o objeto abaixo, utilize For/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
Copiar
*/
const names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (const key in names) {
  if (names) {
    const grettings = `Olá ${names[key]}`;
    console.log(grettings);
  }
}
