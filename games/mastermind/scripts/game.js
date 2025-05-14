import { modalHandlers, newUser, records } from "./user.js";
import { setLevel, setColors, setComputerColors } from "./level.js";
import { createBoard } from "./board.js";
import { countResults, showResults } from "./logic.js";
import { startTimer, tickTimer, renderTimer, getElapsedTime } from "./timer.js";
import { winner, failure } from "./end-game.js";

export const game = {
  name: "", // Store player's name
  level: 1, // Default game level (easy)
  time: 600, // Game duration in seconds (10 minutes)
  timer: null, // Timer object for the game
  intervalId: null, // Interval ID for the timer
  colors: [], // Available colors for the game based on difficulty level
  computerColors: [], // Randomly generated colors for the computer's solution
  guesses: new Array(4), // Array to store the player's guesses (4 colors per guess)
  guess: 0, // Counter for the current guess
  turn: 0, // Turn counter
  win: false, // Boolean to check if the player has won

  countResults() {
    // Calculate results for current guess (exact and color matches)
    countResults(this);
  },
  showResults(bool, pgiaa) {
    // Display feedback to the player based on the result (red/black markers)
    showResults(this, bool, pgiaa);
  },
  winner() {
    // Trigger actions when the player wins the game
    winner(this);
  },
  failure() {
    // Trigger actions when the player fails the game
    failure(this);
  },
  getElapsedTime() {
    // Get the elapsed time since the game started
    return getElapsedTime(this);
  },
  renderTimer() {
    // Display the current timer on the screen
    renderTimer(this);
  },
  tickTimer() {
    // Decrease the timer by one second and check for game timeout
    tickTimer(this);
  },
  start() {
    // Set up the modal handlers and record display functionality
    modalHandlers(this);
    records(this);

    document.querySelectorAll(".level_button").forEach((button) => {
      button.addEventListener("click", (event) => {
        let input = document.querySelector("#myInput");
        if (input.value.trim() !== "") {
          newUser(this);
          setLevel(this, event.target.id); // Set the game level based on the button ID
          setColors(this); // Set the colors based on the selected level
          setComputerColors(this); // Generate random computer colors
          createBoard(this);
          document.querySelector("#name").textContent = `!${this.name} בהצלחה`;
          startTimer(this, this.time);
          document.querySelector("#start").classList.add("hidden"); // Hide the start screen
        }
      });
    });
  },
};
