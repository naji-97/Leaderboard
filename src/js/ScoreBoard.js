class ScoreBoard {
  constructor() {
    this.scores = JSON.stringify(localStorage.getItem('scores')) || [];
    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/N2D2331AZ/scores/';
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
      this.scores.sort((a, b) => b.score - a.score).forEach((ele) => {
        const li = document.createElement('li');
        const capitalName = ele.name.charAt(0).toUpperCase() + ele.name.slice(1);

        li.textContent = `${capitalName}: ${ele.score}`;
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
    const succeMsg = document.querySelector('.succes-msg');
    succeMsg.classList.add('show');
    setTimeout(() => {
      succeMsg.textContent = '';
      succeMsg.classList.remove('show');
    }, 3000);
    localStorage.setItem('scores', JSON.stringify(this.scores));
  }
}

export default ScoreBoard;