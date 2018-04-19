import runGame, { rand } from '..';


const genProgression = () => {
  const progLength = 10;
  const arr = [];
  const step = rand();
  const start = rand();

  for (let i = start, z = 0; z !== progLength; i += step, z += 1) arr.push(i);

  const answer = arr.splice(rand(9), 1, '..').join();
  const question = `${arr.join(' ')}`;

  return { question, answer };
};

const question = () => genProgression();
const description = 'What number is missing in this progression?';

export default () => runGame(description, question);
