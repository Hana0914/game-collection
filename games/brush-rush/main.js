const btn = document.getElementById("btn");
const con = document.getElementById("cont");
const input = document.querySelector("input");
const label = document.querySelector("label");

btn.addEventListener("click", CreateBoard);
input.classList.add("hidden");
label.classList.add("hidden");

function CreateBoard() {
  showColorPickerUI(); // Make color picker visible and enabled

  const table = generateTable(); // Create a 20x20 table with clickable cells
  con.appendChild(table);

  setResetButtonBehavior(table); // Change button behavior to "reset" after board is created
}

function showColorPickerUI() {
  input.disabled = false;
  input.classList.remove("hidden");
  label.classList.remove("hidden");
}

function generateTable() {
  const table = document.createElement("table");

  for (let i = 0; i < 20; i++) {
    const tr = document.createElement("tr");

    for (let j = 0; j < 20; j++) {
      const td = document.createElement("td");
      td.addEventListener("click", function () {
        td.style.backgroundColor = input.value; // Fill cell with selected color on click
      });
      tr.appendChild(td);
    }

    table.appendChild(tr);
  }

  return table;
}

function setResetButtonBehavior(table) {
  btn.removeEventListener("click", CreateBoard);
  btn.textContent = "מחיקת הלוח";

  btn.addEventListener("click", function reset() {
    con.removeChild(table);
    btn.textContent = "יצירת לוח";

    // Reset button behavior back to original
    btn.removeEventListener("click", reset);
    btn.addEventListener("click", CreateBoard);
  });
}

document.getElementById("home-button").addEventListener("click", function () {
  window.location.href = "/homepage/index.html";
});
