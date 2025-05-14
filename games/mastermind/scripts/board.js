export function createBoard(game) {
  document.getElementById("text").classList.remove("hidden");
  const parent = document.createElement("div");
  parent.id = `parent-element_${game.turn}`;
  parent.classList.add("parent-element");

  // Insert new board section above the existing one
  document.body.insertBefore(parent, document.querySelector(".parent-element"));

  for (let i = 0; i < 8; i++) {
    const div = document.createElement("div");
    div.classList.add("divs", i < 4 ? "guess" : "result");
    div.id = `${i < 4 ? "guess" : "result"}_${i % 4}_${game.turn}`;
    parent.appendChild(div);

    if (i === 3) {
      // Add the color picker only once after guess slots
      const picker = document.createElement("div");
      picker.id = `color-picker_${game.turn}`;
      picker.classList.add("divs", "space");
      parent.appendChild(picker);
      createButtons(game);
    }
  }
}

function createButtons(game) {
  const picker = document.getElementById(`color-picker_${game.turn}`);
  const row = document.createElement("div");
  row.classList.add("row");

  game.colors.forEach((color, index) => {
    const btn = document.createElement("button");
    btn.classList.add("color-btn");
    btn.style.backgroundColor = color;
    btn.setAttribute("index", index); // Store index to match with computer's colors
    row.appendChild(btn);
  });

  picker.appendChild(row);
  setButtonEvent(game);
}

function setButtonEvent(game) {
  const buttons = document.querySelectorAll(".color-btn");
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const div = document.querySelector(`#guess_${game.guess}_${game.turn}`);
      div.style.backgroundColor =
        window.getComputedStyle(button).backgroundColor;

      // Save user's guess using the button's index
      game.guesses[game.guess] = event.target.getAttribute("index");
      game.guess++;
      button.classList.add("hidden");

      if (game.guess === 4) {
        game.countResults();
        game.guess = 0;
        game.turn++;
        buttons.forEach((b) => b.classList.add("hidden"));
        document.querySelector("#guesses").textContent = `ניחושים שנותרו: ${
          10 - game.turn
        }`;

        // Check win/loss conditions and proceed accordingly
        game.win
          ? game.winner()
          : game.turn === 10
          ? game.failure()
          : createBoard(game);
      }
    });
  });
}
