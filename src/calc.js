import readlineSync from 'readline-sync';

const calcs = (num1, num2, oper) => {
  let sum;
  switch (oper) {
    case '+':
      sum = (num1 + num2);
      break;
    case '-':
      sum = (num1 - num2);
      break;
    case '*':
      sum = (num1 * num2);
      break;
    default:
      break;
  }
  return sum;
};
export default (name) => {
  console.log('What is the result of the expression?');
  const operators = ['+', '-', '*'];
  for (let i = 0; i < 3; i += 1) {
    const number1 = Math.floor(Math.random() * (100 - 1) + 1);
    const number2 = Math.floor(Math.random() * (100 - 1) + 1);
    const operator = operators[Math.floor(Math.random() * 3)];
    console.log(`Question: ${number1} ${operator} ${number2}`);
    const answer = readlineSync.question('Your answer: ');
    const answerTrue = calcs(number1, number2, operator);
    if (answerTrue === Number(answer)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answerTrue}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
