const playBtn = document.getElementById('play-btn');
const titleScreen = document.getElementById('title-screen');
const gameContainer = document.getElementById('game-container');
const gameFrame = document.getElementById('game-frame');

playBtn.addEventListener('click', () => {
  gameFrame.src = 'https://playgama.com/export/game/elska';
  titleScreen.style.display = 'none';
  gameContainer.classList.add('active');
});