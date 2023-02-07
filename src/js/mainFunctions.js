import ScoreBoard from './ScoreBoard.js';

const scoreBoard = new ScoreBoard();

const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  scoreBoard.addNewScore();
  scoreBoard.displayScor();
});