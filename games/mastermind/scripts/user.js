export function modalHandlers() {
  // Selects modal and buttons
  const modal = document.querySelector("#myModal");
  const homepageButton = document.querySelector("#homepage_button");
  const confirmButton = document.querySelector("#confirm");
  const cancelButton = document.querySelector("#cancel");

  // Event listener to show modal when homepage button is clicked
  homepageButton.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modal.classList.add("visible");
  });

  confirmButton.addEventListener("click", () => {
    window.location.href = "/homepage/index.html";
  });

  cancelButton.addEventListener("click", () => {
    modal.classList.remove("visible");
    modal.classList.add("hidden");
  });
}

export function newUser(game) {
  // Get user input for the name
  const input = document.querySelector("#myInput");
  game.name = input.value;
  const username = input.value;
  let existing = JSON.parse(localStorage.getItem(username + "_record"));

  // If no existing record, add username to the stored list
  if (!existing || typeof existing === "object") {
    let stored = JSON.parse(localStorage.getItem("usernames")) || [];
    stored.push(username);
    localStorage.setItem("usernames", JSON.stringify(stored));
  }
}

export function records() {
  const button = document.querySelector("#record_button");
  const input = document.querySelector("#myInput");

  // Event listener to show user's record when record button is clicked
  button.addEventListener("click", () => {
    if (input.value.trim() !== "") {
      const username = input.value;
      const record = JSON.parse(localStorage.getItem(username + "_record"));
      button.textContent = record
        ? `מספר שניות: ${record}`
        : "אין לך עדיין שיאים";
    }
  });
}
