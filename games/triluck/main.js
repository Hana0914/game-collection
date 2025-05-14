import { calculateScore } from "./game-logic.js";

// Get references to the DOM elements that will show the numbers
let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");

let scoreDisplay = document.getElementById("score-display");

let sum = 0;

document.getElementById("try-luck-button").addEventListener("click", () => {
  // Generate three random numbers between 0 and 9 and display them
  div1.textContent = Math.floor(Math.random() * 10);
  div2.textContent = Math.floor(Math.random() * 10);
  div3.textContent = Math.floor(Math.random() * 10);

  sum += calculateScore(div1.textContent, div2.textContent, div3.textContent);
  // Display the updated score with a minus sign if negative
  scoreDisplay.textContent = `הניקוד שלך הוא: ${Math.abs(sum)}${
    sum < 0 ? "-" : ""
  }`;
});

document.getElementById("reset-button").addEventListener("click", () => {
  div1.textContent = div2.textContent = div3.textContent = 0;
  sum = 0;
  scoreDisplay.textContent = `הניקוד שלך הוא: 0`;
});

document.getElementById("home-button").addEventListener("click", () => {
  window.location.href = "/game-collection/index.html";
});
