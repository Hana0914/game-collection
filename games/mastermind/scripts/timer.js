export function startTimer(game, duration) {
  // Initialize the timer object
  game.timer = {
    duration: duration,
    minutes: Math.floor(duration / 60),
    seconds: duration % 60,
    startTime: Date.now(),
  };

  game.intervalId = setInterval(() => tickTimer(game), 1000);
}

export function tickTimer(game) {
  // If seconds reach 0, decrease the minutes by 1 and reset seconds to 59
  if (game.timer.seconds === 0) {
    game.timer.minutes--;
    game.timer.seconds = 59;
  } else {
    game.timer.seconds--;
  }

  if (game.timer.minutes === 0 && game.timer.seconds === 0) {
    game.failure();
    clearInterval(game.intervalId);
  } else {
    renderTimer(game); // Update the displayed time
  }
}

export function renderTimer(game) {
  // Format minutes and seconds to always show two digits
  const m = game.timer.minutes.toString().padStart(2, "0");
  const s = game.timer.seconds.toString().padStart(2, "0");
  document.getElementById("timer-display").textContent = `${m}:${s}`;
}

export function getElapsedTime(game) {
  const elapsed = Math.floor((Date.now() - game.timer.startTime) / 1000);
  return { minutes: Math.floor(elapsed / 60), seconds: elapsed % 60 };
}
