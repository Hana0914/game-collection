import { getElapsedTime } from "./timer.js";

export function winner(game) {
  let username = game.name;

  // Calculate elapsed time in seconds
  let current =
    getElapsedTime(game).minutes * 60 + getElapsedTime(game).seconds;
  let record = JSON.parse(localStorage.getItem(username + "_record"));

  // Save new record if it's better (lower time) or no record exists
  if (record === null || record > current) {
    localStorage.setItem(username + "_record", JSON.stringify(current));
  }

  // Redirect to the win screen after 1 second
  setTimeout(() => {
    window.location.href = "./end-game/win/index.html";
  }, 1000);
}

export function failure() {
  // Redirect to the failure screen after 1 second
  setTimeout(() => {
    window.location.href = "./end-game/failure/index.html";
  }, 1000);
}
