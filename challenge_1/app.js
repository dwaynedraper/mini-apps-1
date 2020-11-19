/* *************************************************
  Win Conditions
************************************************* */

let winningCombos = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]];


/* *************************************************
MODEL
************************************************* */

let currentPlayer = 'X';
const playerX = [];
const playerO = [];
const board = new Array(9);

/* *************************************************
CONTROLLER
************************************************* */

const updatePlayerArray = function(e) {
  if (currentPlayer === 'X') {
    playerX.push(parseInt(e.target.id));
    console.log('X', playerX);
  } else {
    playerO.push(parseInt(e.target.id));
    console.log('O', playerO);
  }
}

const isWinner = function(currentPlayer) {
  return winningCombos.some((win) => {
    return win.every((number) => {
      if (currentPlayer === 'X') {
        return playerX.includes(number);
      } else {
        return playerO.includes(number);
      }
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

const addMoveToBoard = function(e) {
  board[e.target.id] = currentPlayer;
}

/* *************************************************
VIEW
************************************************* */

const updateSquare = function(e) {
  if (currentPlayer === 'X') {
    e.target.innerText = 'X'
  } else {
    e.target.innerText = 'O'
  }
};

// const updateView = function(winner) {
//   if (winner) {
//     document.getElementById()
//   }
// }

/* *************************************************
  MAIN
************************************************* */

document.getElementById('gamestatus').innerText = 'It is Player X\'s turn';

document.querySelectorAll('#myTable td').forEach((e) => e.addEventListener('click', function(e) {
  if (board[e.target.id] === undefined) {
    updateSquare(e);
    addMoveToBoard(e);
    updatePlayerArray(e);
    if (isWinner(currentPlayer)) {
      document.getElementById('gamestatus').innerText = 'Congratulations. Player' + currentPlayer + ' won the game!!';
    } else {
      togglePlayer();
      document.getElementById('gamestatus').innerText = 'It is Player ' + currentPlayer + '\'s turn.';
    }
  } else {
    document.getElementById('gamestatus').innerText = 'It is Player' + currentPlayer + '\'s turn.';
  }
}))

//document.getElementById('gamestatus').innerText =

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