import ScoreBoard from './ScoreBoard.js';

const scoreBoard = new ScoreBoard();

const form = document.getElementById('form');
const formAction = () => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name');
    const score = document.getElementById('score');

    if (name.value !== '' && score.value !== '') {
      scoreBoard.addScore(name.value, score.value);
      name.value = '';
      score.value = '';
    }
    scoreBoard.displayScor();
  });
};
const refresh = document.querySelector('.refresh');
const refreshAction = () => {
  // console.log('hhhhhhhhhhhh');
  refresh.addEventListener('click', () => {
    window.location.reload();
    scoreBoard.displayScor();
  // console.log('hhhhhhhh');
  });
};

export { formAction, refreshAction };