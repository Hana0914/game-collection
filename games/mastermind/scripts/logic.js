export function countResults(game) {
  let bulls = 0,
    cows = 0;

  // Loop through each guess and compare with each computer color
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (game.guesses[i] == game.computerColors[j]) {
        if (i === j) bulls++; // Exact match (same position and color)
        else cows++; // Color match but wrong position
      }
    }
  }
  game.win = bulls === 4; // Player wins if all 4 guesses are correct in position
  showResults(game, bulls, cows); // Show feedback to the player
}

export function showResults(game, bulls, cows) {
  // Show red markers for exact matches
  for (let i = 0; i < bulls; i++) {
    const el = document.querySelector(`#result_${i}_${game.turn}`);
    el.classList.add("result-red");
  }

  // Show black markers for color-only matches
  for (let i = bulls; i < bulls + cows; i++) {
    const el = document.querySelector(`#result_${i}_${game.turn}`);
    el.classList.add("result-black");
  }
}
