// Variables
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

// Functions
const decreaseScore = () => {
  score -= 1;
  document.querySelector('.score').textContent = score;
};

const displayMessage = (message) => {
  document.querySelector('.message').textContent = message;
};

const checkGameOver = () => {
  if (score <= 0) {
    document.querySelector('.message').textContent = '🤯 You lost the game';
  }
};

const winGame = () => {
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.number').style.width = '30rem';

  if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  }
};

// Event listeners
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⚠️ No number typed!');
  }
  if (guess === secretNumber) {
    displayMessage('🎉 Correct number!');
    winGame();
  }
  if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
    decreaseScore();
    checkGameOver();
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
});
