let divisors = 1;
const numberToCheck = 31;

for (let number = 2; number < numberToCheck; number += 1) {
  if (numberToCheck % number === 0) divisors += 1;
}
if (divisors === 2) console.log(`${numberToCheck} é primo`);
else console.log(`${numberToCheck} não é primo`);
