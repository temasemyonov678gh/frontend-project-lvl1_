import readlineSync from 'readline-sync';

const prog = (firstNum, step) => {
  const arr = [firstNum];

  for (let i = 1; i < 9; i += 1) {
    const newStep = arr[i - 1] + step;
    arr.push(newStep);
  }
  return arr;
};
export default (name) => {
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const numberfirst = Math.floor(Math.random() * (100 - 1) + 1);
    const step = Math.floor(Math.random() * (10 - 1) + 1);
    const mathProgresion = prog(numberfirst, step);
    const randomIndex = Math.floor(Math.random() * (10 - 1) + 1);
    const answerTrue = mathProgresion[randomIndex];
    mathProgresion[randomIndex] = '...';
    console.log(`Question: ${mathProgresion.join(' ')}`);
    const answer = readlineSync.question('Your answer: ');
    if (answerTrue === Number(answer)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answerTrue}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
