import readlineSync from 'readline-sync';

export const welcomeMsg = () => {
  console.log('Welcome to the Brain Games!');
};

export const greetingMsg = () => {
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

export const genNum = () => Math.floor(Math.random() * 10);

export const isEven = num => (num % 2 === 0 ? 'yes' : 'no');

export const evenGame = () => {
  welcomeMsg();
  console.log("Answer 'yes' if number even otherwise answer 'no'.");
  const userName = greetingMsg();
  const gameCore = (number, score = 0) => {
    if (score === 3) {
      console.log(`Congratulations, ${userName}!`);
      return true;
    }
    console.log(`Question: ${number}`);
    const correctAnswer = isEven(number);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      const newScore = score + 1;
      return gameCore(genNum(), newScore);
    }
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    return false;
  };
  return gameCore(genNum());
};

export default () => {
  welcomeMsg();
  greetingMsg();
};
