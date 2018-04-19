import runGame, { rand } from '..';

const balance = (num) => {
  const arr = num.toString().split('').map(Number);
  const iter = (pos, acc) => {
    const cur = pos;
    const next = pos + 1;
    if (acc === arr.length - 1) {
      return Number(arr.sort().reduce((iAcc, item) => iAcc + item, ''));
    }
    if (cur === arr.length - 1) {
      return iter(0, 0);
    }
    if (arr[cur] - arr[next] > 1) {
      arr[cur] -= 1;
      arr[next] += 1;
      return iter(cur + 1, 0);
    }

    if (arr[next] - arr[cur] > 1) {
      arr[cur] += 1;
      arr[next] -= 1;
      return iter(cur + 1, 0);
    }

    return iter(cur + 1, acc + 1);
  };

  return iter(0, 0);
};

const makeQuestion = num => ({
  question: `${num}`,
  answer: `${balance(num)}`,
});

const question = () => makeQuestion(rand(9999));
const description = 'Balance the given number.';

export default () => runGame(description, question);
