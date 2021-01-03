checkDiagonal(position, currentPlayer) {
  let count = 1;
  let row = position[0];
  let col = position[1];
  let orig = [row, col];
  console.log('Initial value', row, col)
  let board = this.state.board;
  console.log('board during diagonal check', board)
  if (row > 0) {
    do {
      col--
      row--
      console.log('Value after reverse', row, col)
      if (board[row][col] === currentPlayer) {
        count ++
        if (count === 4) {
          console.log('Oh look, diagonal win!')
          return true;
        }
      } else {
        row = orig[0];
        col = orig[1];
        break
      }
    } while (row > 0)
  }
  if (row < 6) {
    do {
      // console.log('Initial value', row, col)
      col++
      row++
      console.log('Value after ++', row, col)
      if (board[row][col] === currentPlayer) {
        count ++
        if (count === 4) {
          console.log('Oh look, diagonal win!')
          return true;
        }
      } else {
        break
      }
    } while (row < 6)
  }
}