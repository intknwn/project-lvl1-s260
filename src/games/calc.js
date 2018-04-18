import calc, { rand } from '..';

const operations = [
  { name: '+', f: (a, b) => a + b },
  { name: '-', f: (a, b) => a - b },
  { name: '*', f: (a, b) => a * b },
];

const makeQuestion = (a, b, ops) => ({
  question: `${a} ${ops.name} ${b}`,
  answer: `${ops.f(a, b)}`,
});

const question = () => makeQuestion(rand(), rand(), operations[rand(3)]);
const description = 'What is the result of the expression?';

export default () => calc(description, question);
