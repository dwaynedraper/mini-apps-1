/* *************************************************
  Win Conditions
************************************************* */

let winningCombos = [[0,1,2],[0,3,5],[0,4,8],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]];


/* *************************************************
MODEL
************************************************* */

const currentPlayer = 'X';
const playerX = [];
const playerO = [];
const board = [];

/* *************************************************
CONTROLLER
************************************************* */

const updateSquare = function(e) {
  if (currentPlayer === 'X') {
    e.target.innerText = 'X'
  } else {
    e.target.innerText = 'O'
  }
};

const updatePlayerArray = function(e) {
  if (currentPlayer === 'X') {
    playerX.push(e.target.id)
  } else {
    playerO.push(e.target.id)
  }
}

const isWinner = function(currentPlayer) {
  return winningCombos.some((win) => {
    return win.every((letter) => {
      return currentPlayer.includes(letter)
    })
  })
}

const togglePlayer = function() {
  if (currentPlayer === 'X') {
    currentPlayer = 'O';
  } else {
    currentPlayer = 'X';
  }
}

const handleClick = function(e) {
  updateSquare(e);
  updatePlayerArray(e);
  togglePlayer();
}

/* *************************************************
VIEW
************************************************* */

/* *************************************************
  MAIN
************************************************* */

document.querySelectorAll('#myTable td').forEach((e) => e.addEventListener('click', handleClick(e)))



// let array = [1, 2, 3];
// undefined
// let currArray = array;
// undefined
// currArray;
// (3) [1, 2, 3]
// array = [3, 5, 7];
// (3) [3, 5, 7]
// currArray;
// (3) [1, 2, 3]
// array;
// (3) [3, 5, 7]