import readlineSync from 'readline-sync';

const prog = (firstNum, step) => {
  const arr = [firstNum];

  for (let i = 1; i < 10; i += 1) {
    const newStep = arr[i - 1] + step;
    arr.push(newStep);
  }
  return arr;
};
export default (name) => {
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const numberfirst = Math.floor(Math.random() * (50 - 1) + 1);
    const step = Math.floor(Math.random() * 10);
    const mathProgresion = prog(numberfirst, step);
    const randomIndex = Math.floor(Math.random() * 9);
    const answerTrue = mathProgresion[randomIndex];
    mathProgresion[randomIndex] = '..';
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
