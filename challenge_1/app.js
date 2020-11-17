/* *************************************************
  Win Conditions
************************************************* */

let winningCombos = [[0,1,2],[0,3,5],[0,4,8],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]];

/* *************************************************
  MAIN
************************************************* */

let board = Array(9);

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

const updateSquare = function()

const isWinner = function(currentPlayer) {
  return winningCombos.some((win) => {
    return win.every((letter) => {
      return currentPlayer.includes(letter)
    })
  })
}

const togglePlayer = function() {
  if (currentPlayer === 'X') {
    currentPlayer = 'Y';
  } else {
    currentPlayer = 'X';
  }
}

/* *************************************************
  VIEW
************************************************* */




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