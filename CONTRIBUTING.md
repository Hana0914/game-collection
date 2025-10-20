# 🎮 Contributing to Game Collection

Hi there! 👋  
Thanks for your interest in contributing to **Game Collection** — a fun collection of web games built with [![HTML](https://img.shields.io/badge/HTML-5-orange?logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML), 
[![CSS](https://img.shields.io/badge/CSS-3-blue?logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS) and 
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript&logoColor=white)](https://developer.mozilla.org/docs/Web/JavaScript).

This guide expands the original contribution section from the README and explains how to collaborate effectively and respectfully.

 

## 🧩 How to Contribute

### 1. Fork and Clone the Repository
```bash
git fork https://github.com/Hana0914/game-collection.git
cd game-collection
```

### 2. Create a Branch
Name your branch clearly based on what you’re adding or fixing:
```bash
git checkout -b feat/add-new-game
git checkout -b fix/update-snake-logic
git checkout -b docs/improve-readme
```

### 3. Make Your Changes
You can contribute by:
- 🎮 Adding a new mini-game (HTML/CSS/JS)
- 🧠 Improving existing games (graphics, logic, performance)
- ♿ Enhancing accessibility (keyboard controls, color contrast)
- 🧾 Improving documentation (README, CONTRIBUTING, etc.)
- 💅 Updating visuals, layout, or UX for clarity and fun
- 🧪 Adding basic tests or local checks

### 4. Commit Your Work
Use clear, conventional messages for commits:
```bash
git commit -m "feat: add new memory puzzle game"
git commit -m "fix: correct snake movement on edge collision"
git commit -m "docs: clarify contribution steps"
```

### 5. Push and Open a Pull Request
```bash
git push origin feat/add-new-game
```
Then open a Pull Request on GitHub and describe what you changed and why.

 

## ✅ Pull Request Checklist

Before opening your PR, make sure to:
- [ ] Test the game locally (open in your browser)
- [ ] Keep the same code style and file structure
- [ ] Avoid unrelated edits or file renames
- [ ] Write a clear description of your contribution
- [ ] Confirm that all links and assets work

**Example of a good PR title:**
```
feat: add Flappy Bird clone with restart button
```

 

## 🧠 Tips for Contributors
- Prefer small, focused PRs — they get reviewed faster!  
- If unsure, open an **issue** first to discuss your idea.  
- Always test your changes in multiple browsers when possible.  
- Be kind and patient during reviews.  
- Contribute something that genuinely improves the project.  
- Avoid low-quality PRs (e.g., random text edits or empty files).  
- Remember: **Quality > Quantity** 🎯

 

## 🕹 Local Testing

After cloning, open the main page in your browser:
```bash
open index.html
```
or on Windows:
```bash
start index.html
```

Each game is self-contained and can be launched directly.  
You can also use a local server for testing if you prefer:
```bash
npx serve .
```

 

## 💬 Questions or Ideas?

If you have a question, suggestion, or idea for a new game, open an [issue](https://github.com/Hana0914/game-collection/issues) — we'd love to hear from you!

Thanks for making Game Collection even better 💜  
Happy coding and have fun! 🎉
