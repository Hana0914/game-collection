export function setLevel(game, id) {
      // Set game level based on button ID ('a' = easy, 'd' = expert)
    game.level = { a: 1, b: 2, c: 3, d: 4 }[id];
  }
  
  export function setColors(game) {
      // Define available colors according to selected difficulty level
    const levels = {
      1: ["yellow", "purple", "green", "pink"],
      2: ["yellow", "purple", "green", "pink", "blue", "red"],
      3: ["red", "orange", "yellow", "green", "blue", "purple", "pink", "gray"],
      4: ["yellow", "purple", "turquoise", "pink", "blue", "red", "orange", "gray", "gold", "green"]
    };
    game.colors = levels[game.level];
  }
  
  export function setComputerColors(game) {
    const selected = [];
      // Randomly select 4 unique colors (by index) from the level's color list
    while (selected.length < 4) {
      let rand = Math.floor(Math.random() * game.colors.length);
      if (!selected.includes(rand)) selected.push(rand);
    }
    game.computerColors = selected;
  }
  