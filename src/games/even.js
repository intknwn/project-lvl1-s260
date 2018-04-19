import runGame, { rand, isEven } from '..';

const question = (num = rand()) => ({ question: num, answer: isEven(num) ? 'yes' : 'no' });
const description = "Answer 'yes' if number even otherwise answer 'no'";

export default () => runGame(description, question);
