# About: Brick Breaker
This document provides details about the Brick Breaker game, including the reason for its name, the technologies used in its creation, and instructions on how to play.

## Why the Name "Brick Breaker"?
The name "Brick Breaker" was chosen for its direct and descriptive nature. The core objective of the game is simple: the player must break all the bricks on the screen using a ball. The name immediately communicates the game's central mechanic and goal to the player, making it intuitive and easy to understand before even starting to play. It's a classic name for a classic style of arcade game.

## Technology Used
This game was built from the ground up using fundamental web technologies, with no reliance on external game engines or frameworks for the core logic. This approach was taken to demonstrate a strong command of front-end development fundamentals.

**HTML:** The structure of the game, including the  element for rendering the game, buttons, and text displays, is built with standard HTML.

**CSS:** All visual aspects, from the retro color scheme and typography to the layout of the game container, are handled by CSS. It gives the game its distinct arcade-like feel.

**JavaScript:** The entire game engine is powered by pure JavaScript. This includes:

Rendering all graphics on the canvas (ball, paddle, bricks).

Handling the game loop and animations.

Implementing the physics for the ball's movement and bounces.

Detecting collisions between the ball, paddle, bricks, and walls.

Managing the game state, such as score, lives, and win/loss conditions.

## How to Play
The goal is to clear the screen of all bricks without losing all your lives.

**Start the Game:** Open the brick_breaker.html file in your browser and click the "Start Game" button.

**Control the Paddle:** Move your mouse left and right to control the paddle at the bottom. On a touch device, you can drag your finger across the screen.

**Break the Bricks:** Use the paddle to bounce the ball upwards into the grid of bricks. Each brick the ball hits will be destroyed, and your score will increase.

**Don't Drop the Ball:** If the ball passes your paddle and hits the bottom of the screen, you will lose one life.

**Winning and Losing:** You win the game by breaking all the bricks. You lose the game if you run out of all three lives. Good luck!