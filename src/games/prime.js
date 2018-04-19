import runGame, { rand } from '..';

const isPrime = (num) => {
  const iter = (innerNum, div) => {
    if (num === div) return true;
    if (num <= 1 || num % div === 0) return false;

    return iter(innerNum, div + 1);
  };

  return iter(num, 2);
};

const makeQuestion = num => ({
  question: `${num}`,
  answer: `${isPrime(num) ? 'yes' : 'no'}`,
});

const question = () => makeQuestion(rand(99));
const description = 'Is this number prime?';

export default () => runGame(description, question);
