const playBtn = document.getElementById('play-btn');
const titleScreen = document.getElementById('title-screen');
const gameContainer = document.getElementById('game-container');
const gameFrame = document.getElementById('game-frame');

playBtn.addEventListener('click', () => {
  gameFrame.src = 'elskawebgl/index.html';
  titleScreen.style.display = 'none';
  gameContainer.classList.add('active');
});