import readlineSync from 'readline-sync';

export default (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * (100 - 1) + 1);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const answerTrue = number % 2 === 0 ? 'yes' : 'no';
    if (answerTrue === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answerTrue}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
