let secretNumber;
let tries;

function startGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  tries = 0;
  document.getElementById('message').textContent = '';
  document.getElementById('attempts').textContent = '';
  document.getElementById('guessInput').value = '';
}
//Math.floor(Math.random() * 100) + 1;
function checkguess() {
  const guess = Number(document.getElementById('guessInput').value);

  if (!guess || guess < 1 || guess > 100) {
    document.getElementById('message').textContent = 'Enter a number between 1 and 100!';
    return;
  }
  else if(!Number.isInteger(guess)) {
    document.getElementById('message').textContent = 'Enter a valid number!';
    return;
  }
  tries++;
  const diff = Math.abs(secretNumber - guess);
  
  if (guess === secretNumber) {
    document.getElementById('message').textContent = `🎉 Correct! The number was ${secretNumber}.`;
    tries === 1 ? `You guessed it in ${tries} try.` : `You guessed it in ${tries} tries.`;
    document.getElementById('gameCard').classList.add('card-correct');
  } else if (guess < secretNumber) {
    if (diff > 10) {
      document.getElementById('message').textContent = '⬆️ Too low! Try again.';
    } else {
      document.getElementById('message').textContent = '⬆️ Close! Try a bit higher.';
    }
  } else { 
    if (diff > 10) {
      document.getElementById('message').textContent = '⬇️ Too high! Try again.';
    } else {
      document.getElementById('message').textContent = '⬇️ Close! Try a bit lower.';
    }
  }
}

function restartGame() {
  startGame();
  document.getElementById('gameCard').classList.remove('card-correct');
}
window.onload = startGame;
