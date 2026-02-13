        const canvas = document.getElementById('gameCanvas');
        const ctx = canvas.getContext('2d');
        
        // UI Elements
        const startButton = document.getElementById('startButton');
        const restartButton = document.getElementById('restartButton');
        const messageBox = document.getElementById('messageBox');
        const messageText = document.getElementById('messageText');
        const scoreElement = document.querySelector('#score span');
        const livesElement = document.querySelector('#lives span');

        // Game state
        let score = 0;
        let lives = 3;
        let gameRunning = false;
        let animationFrameId;

        // Ball properties
        let ball = {
            x: canvas.width / 2,
            y: canvas.height - 30,
            dx: 4,
            dy: -4,
            radius: 10
        };

        // Paddle properties
        let paddle = {
            height: 15,
            width: 120,
            x: (canvas.width - 120) / 2
        };

        // Brick properties
        const brickRowCount = 5;
        const brickColumnCount = 9;
        const brickWidth = 75;
        const brickHeight = 20;
        const brickPadding = 10;
        const brickOffsetTop = 40;
        const brickOffsetLeft = 30;

        // Brick array
        let bricks = [];

        function initBricks() {
            bricks = [];
            for (let c = 0; c < brickColumnCount; c++) {
                bricks[c] = [];
                for (let r = 0; r < brickRowCount; r++) {
                    bricks[c][r] = { x: 0, y: 0, status: 1 };
                }
            }
        }

        // --- Drawing Functions ---
        function drawBall() {
            ctx.beginPath();
            ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
            ctx.fillStyle = '#00ffff';
            ctx.fill();
            ctx.closePath();
        }

        function drawPaddle() {
            ctx.beginPath();
            ctx.rect(paddle.x, canvas.height - paddle.height, paddle.width, paddle.height);
            ctx.fillStyle = '#e94560';
            ctx.fill();
            ctx.closePath();
        }

        function drawBricks() {
            for (let c = 0; c < brickColumnCount; c++) {
                for (let r = 0; r < brickRowCount; r++) {
                    if (bricks[c][r].status === 1) {
                        let brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
                        let brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
                        bricks[c][r].x = brickX;
                        bricks[c][r].y = brickY;
                        ctx.beginPath();
                        ctx.rect(brickX, brickY, brickWidth, brickHeight);
                        // Give bricks different colors based on row
                        ctx.fillStyle = `hsl(${r * 30}, 70%, 60%)`;
                        ctx.fill();
                        ctx.closePath();
                    }
                }
            }
        }

        function drawScore() {
            scoreElement.textContent = score;
        }

        function drawLives() {
            livesElement.textContent = lives;
        }

        // --- Collision Detection ---
        function collisionDetection() {
            for (let c = 0; c < brickColumnCount; c++) {
                for (let r = 0; r < brickRowCount; r++) {
                    let b = bricks[c][r];
                    if (b.status === 1) {
                        if (ball.x > b.x && ball.x < b.x + brickWidth && ball.y > b.y && ball.y < b.y + brickHeight) {
                            ball.dy = -ball.dy;
                            b.status = 0;
                            score++;
                            if (score === brickRowCount * brickColumnCount) {
                                showMessage("YOU WIN!", true);
                            }
                        }
                    }
                }
            }
        }
        
        // --- Game Update and Loop ---
        function update() {
            // Ball movement and wall collision
            if (ball.x + ball.dx > canvas.width - ball.radius || ball.x + ball.dx < ball.radius) {
                ball.dx = -ball.dx;
            }
            if (ball.y + ball.dy < ball.radius) {
                ball.dy = -ball.dy;
            } else if (ball.y + ball.dy > canvas.height - ball.radius) {
                // Check if it hit the paddle
                if (ball.x > paddle.x && ball.x < paddle.x + paddle.width) {
                    ball.dy = -ball.dy;
                } else {
                    lives--;
                    if (!lives) {
                        showMessage("GAME OVER", false);
                    } else {
                        // Reset ball and paddle position
                        ball.x = canvas.width / 2;
                        ball.y = canvas.height - 30;
                        ball.dx = 4;
                        ball.dy = -4;
                        paddle.x = (canvas.width - paddle.width) / 2;
                    }
                }
            }
            
            ball.x += ball.dx;
            ball.y += ball.dy;
        }
        
        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawBricks();
            drawBall();
            drawPaddle();
            drawScore();
            drawLives();
            collisionDetection();
            update();
            
            if (gameRunning) {
               animationFrameId = requestAnimationFrame(draw);
            }
        }
        
        // --- Event Listeners & Controls ---
        function mouseMoveHandler(e) {
            let relativeX = e.clientX - canvas.offsetLeft;
            if(e.touches) { // Handle touch events
                relativeX = e.touches[0].clientX - canvas.offsetLeft;
            }

            if (relativeX > 0 && relativeX < canvas.width) {
                paddle.x = relativeX - paddle.width / 2;
                // Clamp paddle position to stay within canvas bounds
                if (paddle.x < 0) paddle.x = 0;
                if (paddle.x + paddle.width > canvas.width) paddle.x = canvas.width - paddle.width;
            }
        }
        
        document.addEventListener('mousemove', mouseMoveHandler, false);
        document.addEventListener('touchmove', mouseMoveHandler, false);

        // --- Game State Management ---
        function resetGame() {
            score = 0;
            lives = 3;
            ball.x = canvas.width / 2;
            ball.y = canvas.height - 30;
            // Add some randomness to the initial ball direction
            ball.dx = (Math.random() < 0.5 ? 1 : -1) * 4;
            ball.dy = -4;
            paddle.x = (canvas.width - paddle.width) / 2;
            initBricks();
            drawScore();
            drawLives();
        }
        
        function startGame() {
            if (gameRunning) return;
            resetGame();
            gameRunning = true;
            startButton.style.display = 'none';
            messageBox.style.display = 'none';
            draw();
        }
        
        function stopGame() {
             gameRunning = false;
             cancelAnimationFrame(animationFrameId);
        }

        function showMessage(text, isWin) {
            stopGame();
            messageText.textContent = text;
            restartButton.style.backgroundColor = isWin ? '#53bf9d' : '#e94560';
            restartButton.style.boxShadow = isWin ? '0 5px 0 #419d7f' : '0 5px 0 #c33149';
            messageBox.style.display = 'block';
            restartButton.style.display = 'inline-block';
        }

        // Initial render on page load
        function initialRender() {
            resetGame();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawBricks();
            drawBall();
            drawPaddle();
            drawScore();
            drawLives();
        }

        startButton.addEventListener('click', startGame);
        restartButton.addEventListener('click', startGame);
        
        window.onload = initialRender;