import readlineSync from 'readline-sync';

function isPrime(n) {
  if (n < 2) {
    return 'no';
  } if (n === 2) {
    return 'yes';
  }

  let i = 2;
  const limit = Math.sqrt(n);
  while (i <= limit) {
    if (n % i === 0) {
      return 'no';
    }
    i += 1;
  }

  return 'yes';
}

export default (name) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * (100 - 1) + 1);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const answerTrue = isPrime(number);
    if (answerTrue === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answerTrue}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
