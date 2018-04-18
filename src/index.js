import readlineSync from 'readline-sync';

export const rand = (max = 10) => Math.floor(Math.random() * max);

export const isEven = num => (num % 2 === 0);

export default (description, question) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);

  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const iter = 3;
  for (let i = 0; i < iter; i += 1) {
    const round = question();
    console.log(`Question: ${round.question}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = round.answer;

    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
