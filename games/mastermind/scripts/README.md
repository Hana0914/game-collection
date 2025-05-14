# 🎮 Mastermind Game

Welcome to **Mastermind**, a logic-based code-breaking game implemented in vanilla JavaScript. The player must guess a hidden sequence of colors within a limited time and number of turns, using feedback on each guess to deduce the solution.

---

## 📁 Project Structure

This project is organized into modular JavaScript files, each responsible for a specific aspect of the game logic and UI.

---

### `game.js`
The main game controller and initializer.  
It defines the `game` object, which holds all relevant game state and methods, and initializes the game based on user input and selected level.

#### Responsibilities:
- Managing game state (name, level, timer, colors, guesses, turns).
- Orchestrating game flow: starting the game, handling turns, win/loss conditions.
- Calling external module functions like `startTimer`, `countResults`, and `createBoard`.

---

### `user.js`
Handles user interaction outside of the core gameplay.

#### Functions:
- `modalHandlers()`: Displays and hides modal windows for confirmation (e.g., exit game).
- `newUser(game)`: Stores a new user in `localStorage` if not already stored.
- `records()`: Displays the user's best time record (in seconds).

---

### `level.js`
Sets the difficulty level and corresponding game configurations.

#### Functions:
- `setLevel(game, id)`: Assigns a numeric difficulty based on user selection.
- `setColors(game)`: Configures the list of colors available for each difficulty level.
- `setComputerColors(game)`: Randomly selects a hidden sequence of 4 unique color indexes.

---

### `timer.js`
Manages the countdown timer throughout the game.

#### Functions:
- `startTimer(game, duration)`: Initializes and starts the timer.
- `tickTimer(game)`: Decreases the timer by one second and checks for timeout.
- `renderTimer(game)`: Updates the on-screen timer display.
- `getElapsedTime(game)`: Calculates the time elapsed since the start of the game.

---

### `logic.js`
Handles the core game logic for checking guesses against the hidden sequence.

#### Functions:
- `countResults(game)`: Compares the player's guesses to the correct sequence and counts exact (`bulls`) and color-only (`cows`) matches.
- `showResults(game, bulls, cows)`: Visually indicates the result of each guess using colored markers.

---

### `end-game.js`
Manages end-game outcomes (win or loss).

#### Functions:
- `winner(game)`: Checks and stores the user's best time if a new record is achieved, and redirects to the win screen.
- `failure()`: Redirects to the failure screen after a short delay.

---

### `board.js`
Handles rendering the game board and user input for guesses.

#### Functions:
- `createBoard(game)`: Dynamically creates a new row of guess and result slots for the current turn.
- `createButtons(game)`: Displays color buttons based on the current difficulty.
- `setButtonEvent(game)`: Registers click events for color buttons, records guesses, and transitions between turns.

---

## 🧠 Game Rules

- The computer selects a hidden sequence of 4 unique colors based on the chosen difficulty.
- The player must guess the sequence within 10 turns and before time runs out.
- After each guess:
  - A red marker indicates a correct color in the correct position.
  - A black marker indicates a correct color in the wrong position.
- Win the game by guessing all 4 colors in the correct order.

---

## 🗂 Data Persistence

- Player names and best scores are saved to `localStorage`.
- Records are shown on demand and updated when a better score is achieved.

---

## 🛠 Technologies Used

- HTML5 / CSS3
- JavaScript (ES6 Modules)
- DOM Manipulation
- `localStorage` for data persistence

---

## 📄 License

This project is released under the [MIT License](LICENSE).

---

## 👩‍💻 Developed by

Efrat Bdil
