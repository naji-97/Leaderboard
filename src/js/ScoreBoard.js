class ScoreBoard {
  constructor() {
    this.scores = JSON.stringify(localStorage.getItem('scores')) || [];
    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/naji/scores/';
  }

  fetchApi = async () => {
    const req = new Request(this.url);
    const res = await fetch(req);
    const { result } = await res.json();
    const scrs = result.map(({ user: name, score }) => ({
      name,
      score,
    }));
    return scrs;
  }

  displayScor = async () => {
    const scoreTable = document.querySelector('.score-table');
    scoreTable.innerHTML = '';
    this.scores = await this.fetchApi();
    if (this.scores.length !== 0) {
      scoreTable.classList.add('show');
      this.scores.forEach((ele) => {
        const li = document.createElement('li');
        li.textContent = `${ele.name} : ${ele.score}`;
        scoreTable.appendChild(li);
      });
    }
  }

  addScore = async (name, score) => {
    const res = new Request(this.url);
    await fetch(res, {
      method: 'POST',
      body: JSON.stringify({ user: name, score }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
    this.scores.push({ name, score });
    localStorage.setItem('scores', JSON.stringify(this.scores));
  }

//   addNewScore() {
//     const name = document.getElementById('name');
//     const score = document.getElementById('score');
//     this.scores.push(`${name.value} : ${score.value}`);
//     name.value = '';
//     score.value = '';
//   }
}

export default ScoreBoard;