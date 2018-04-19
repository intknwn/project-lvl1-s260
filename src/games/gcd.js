import runGame, { rand } from '..';

const gcd = (a, b) => (b ? gcd(b, a % b) : a);

const makeQuestion = (a, b) => ({
  question: `Question: ${a} ${b}`,
  answer: `${gcd(a, b)}`,
});

const question = () => makeQuestion(rand(999), rand(999));
const description = 'Find the greatest common divisor of given numbers.';

export default () => runGame(description, question);
