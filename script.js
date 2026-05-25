const playBtn = document.getElementById('play-btn');
const titleScreen = document.getElementById('title-screen');
const gameContainer = document.getElementById('game-container');
const gameFrame = document.getElementById('game-frame');

playBtn.addEventListener('click', () => {
  gameFrame.src = 'ElskaWebGL/index.html';   // load the game on click
  titleScreen.style.display = 'none';
  gameContainer.classList.add('active');
});