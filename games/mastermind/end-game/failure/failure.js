// Get references to the "game-over" and "caption" elements
const gameOver = document.getElementById("game-over");
const caption = document.getElementById("caption");

// Create a canvas dynamically and set up the 2D drawing context
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

// Set the canvas to fill the entire window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas); // Append canvas to body

// Initialize an array to store particle objects
const particles = [];
const particleCount = 500; // Number of particles in the explosion
const particleRadius = 20; // Radius of each particle
const explosionPower = 100; // Power of the explosion (affects particle velocity)

// Particle constructor for creating individual particles
function Particle(x, y, radius, color, velocity) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.velocity = {
    x: velocity.x,
    y: velocity.y,
  };
  this.alpha = 1; // Initial opacity of the particle

  // Method to update particle's position and properties
  this.update = () => {
    this.velocity.x *= 0.98; // Slow down particle on x-axis
    this.velocity.y *= 0.98; // Slow down particle on y-axis
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    this.alpha -= 0.007; // Fade out particle over time
  };

  // Method to draw the particle on the canvas
  this.draw = () => {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2); // Draw a circle for the particle
    ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.alpha})`;
    ctx.fill();
  };
}

// Function to create an explosion by generating particles
function explode() {
  for (let i = 0; i < particleCount; i++) {
    // Generate random color for each particle
    const color = {
      r: Math.floor(Math.random() * 256),
      g: Math.floor(Math.random() * 256),
      b: Math.floor(Math.random() * 256),
    };

    // Calculate random angle and velocity for each particle
    const angle = Math.random() * Math.PI * 2;
    const velocity = {
      x: Math.cos(angle) * Math.random() * explosionPower,
      y: Math.sin(angle) * Math.random() * explosionPower,
    };

    // Push new particle to the particles array
    particles.push(
      new Particle(
        gameOver.offsetLeft + gameOver.offsetWidth / 2, // Center x-position of explosion
        gameOver.offsetTop + gameOver.offsetHeight / 2, // Center y-position of explosion
        particleRadius,
        color,
        velocity
      )
    );
  }
}

// Animation function to update and render particles
function animate() {
  requestAnimationFrame(animate); // Recursive call for continuous animation
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas before redrawing
  particles.forEach((particle, index) => {
    if (particle.alpha <= 0) {
      particles.splice(index, 1); // Remove particle when it fades out
    } else {
      particle.update(); // Update particle's position and opacity
      particle.draw(); // Draw particle on canvas
    }
  });
}

// Trigger explosion every 1.5 seconds
setInterval(() => {
  explode();
}, 1500);

// Show the game over message and start the animation after a 1-second delay
setTimeout(() => {
  gameOver.style.opacity = 1; // Make the "game over" text visible
  caption.style.opacity = 1; // Make the caption visible
  animate(); // Start the animation loop
}, 1000);
