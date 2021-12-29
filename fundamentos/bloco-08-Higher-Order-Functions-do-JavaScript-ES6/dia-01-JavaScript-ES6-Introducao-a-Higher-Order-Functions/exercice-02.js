const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(myNumber, number) ? 'Parabens você ganhou' : 'Tente novamente';
};

// ===== Gerador de tentativas economizando no console.log =[) ===== //
for (let index = 0; index < 10; index += 1) {
  console.log(lotteryResult(1, numberChecker));
}
