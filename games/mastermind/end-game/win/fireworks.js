const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Set canvas size to match the window dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Particle class for creating individual particles
class Particle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.radius = Math.random() * 2 + 1; // Random radius between 1 and 3
    this.vx = Math.random() * 5 - 2.5; // Random velocity on x-axis
    this.vy = Math.random() * 5 - 2.5; // Random velocity on y-axis
    this.gravity = 0.1; // Simulate gravity
    this.alpha = 1; // Initial opacity
  }

  // Draw the particle on the canvas
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.alpha; // Apply particle transparency
    ctx.fill();
  }

  // Update particle properties (position, velocity, alpha)
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += this.gravity; // Apply gravity effect
    this.alpha -= 0.01; // Fade out particle
  }
}

// Array to hold active particles
const particles = [];

// Function to create multiple particles at a given position
function createParticles(x, y, color) {
  for (let i = 0; i < 30; i++) {
    particles.push(new Particle(x, y, color));
  }
}

// Main animation loop
function animate() {
  requestAnimationFrame(animate); // Keep animating
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)"; // Semi-transparent background to create a fading effect
  ctx.fillRect(0, 0, canvas.width, canvas.height); // Clear canvas with fading effect

  // Update and draw all particles
  particles.forEach((particle) => {
    particle.draw();
    particle.update();
  });

  // Remove particles that have faded out (alpha <= 0)
  particles.filter((particle) => particle.alpha <= 0).length = 0;

  // Randomly create particles every 3 seconds
  if (Math.random() < 0.05) {
    createParticles(
      Math.random() * canvas.width, // Random x-position
      Math.random() * canvas.height, // Random y-position
      `hsl(${Math.random() * 360}, 50%, 50%)` // Random color
    );
  }
}

// Start the animation
animate();
