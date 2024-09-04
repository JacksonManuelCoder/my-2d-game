const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game constants
const PLAYER_SIZE = 32;
const PLAYER_SPEED = 4;

// Player object
const player = {
  x: canvas.width / 2 - PLAYER_SIZE / 2,
  y: canvas.height / 2 - PLAYER_SIZE / 2,
  width: PLAYER_SIZE,
  height: PLAYER_SIZE,
  color: 'white',
  dx: 0,
  dy: 0
};

// Draw the player
function drawPlayer() {
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.width, player.height);
}

// Update game state
function update() {
  player.x += player.dx;
  player.y += player.dy;

  // Clear the canvas and redraw everything
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPlayer();
}

// Handle keyboard input
window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp') player.dy = -PLAYER_SPEED;
  if (e.key === 'ArrowDown') player.dy = PLAYER_SPEED;
  if (e.key === 'ArrowLeft') player.dx = -PLAYER_SPEED;
  if (e.key === 'ArrowRight') player.dx = PLAYER_SPEED;
});

window.addEventListener('keyup', (e) => {
  if (e.key === 'ArrowUp' || e.key === 'ArrowDown') player.dy = 0;
  if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') player.dx = 0;
});

// Game loop
function gameLoop() {
  update();
  requestAnimationFrame(gameLoop);
}

gameLoop();
