const board = document.querySelector('#board');
const other = { X: 'O', O: 'X' };
let turn = 'X';

board.addEventListener('click', (event) => {
  const cell = event.target;
  if (!cell.textContent) {
    cell.textContent = turn;
    if (checkWinner(turn)) {
      const winner = document.createElement('div');
      winner.classList.add('winner');
      winner.textContent = `${turn} wins!`;
      board.append(winner);
    }
    turn = other[turn];
  }
});

const cells = document.querySelectorAll('.cell');
const wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkWinner(play) {
  return wins.some((win) => win.every((i) => cells[i].textContent === play));
}
