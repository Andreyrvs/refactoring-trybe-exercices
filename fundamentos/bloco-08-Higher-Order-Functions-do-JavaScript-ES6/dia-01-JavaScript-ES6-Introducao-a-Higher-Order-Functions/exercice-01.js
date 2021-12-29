const employeeGenerator2 = (fullname) => {
  const email = fullname.toLowerCase().split(' ').join('_');
  return { fullname, email: `${email}@trybe.com` };

  // ===== Fizz assim primeiro ===== //
  // const regexWhiteSpace = /\s/g;
  // return `{${nome.replace(regexWhiteSpace, '_').toLowerCase()}@trybe.com}`
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

console.log(newEmployees(employeeGenerator2));
