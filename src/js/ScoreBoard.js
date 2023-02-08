class ScoreBoard {
  constructor() {
    this.scores = [];
  }

  displayScor() {
    const scoreTable = document.querySelector('.score-table');
    if (this.scores.length > 0) {
      scoreTable.classList.add('show');
    }
    const li = document.createElement('li');
    this.scores.forEach((ele) => {
      li.textContent = ele;
      scoreTable.appendChild(li);
    });
  }

  addNewScore() {
    const name = document.getElementById('name');
    const score = document.getElementById('score');
    this.scores.push(`${name.value} : ${score.value}`);
    name.value = '';
    score.value = '';
  }
}

export default ScoreBoard;