import React from 'react';
import Row from './Row.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPlayer: null,
      board: [],
      isWinner: false,
      message: '',
      errorMessage: '',
      loaded: false
    }
    this.updateSquare = this.updateSquare.bind(this)
  }

  initializeBoard() {
    let initialBoard = [];
    for (let row = 0; row < 6; row++) {
      let row = []
      for (let i = 0; i < 7; i++) {
        row.push(0);
      }
      initialBoard.push(row);
    }
    this.setState({
      board: initialBoard,
      currentPlayer: 1,
      isWinner: false,
      message: 'It is Player One\'s turn. Please place a token.'
    })
  }

  updateSquare(col) {
    if (!this.state.isWinner) {
      let board = this.state.board
      let position = [null, col];
      if (!this.state.isWinner) {
        for (let row = 5; row >= 0; row--) {
          if (board[row][col] === 0) {
            board[row][col] = this.state.currentPlayer;
            position[0] = row
            break;
          }
        }
      }

      if (this.checkForWinner(position)) {
        this.setState({isWinner: true, message: `Player ${this.state.currentPlayer} won the game!!`})
      } else {
        this.togglePlayer()
        this.setState({message: `It is player ${this.state.currentPlayer}'s turn. Please place a token.`})
      }
    }

  }

  checkForWinner(position) {
    let currentPlayer = this.state.currentPlayer;
    if (this.checkVertical(position, currentPlayer)) {return true}
    if (this.checkHorizontal(position, currentPlayer)) {return true}
    if (this.checkBackDiagonal(position, currentPlayer)) {return true}
    if (this.checkDiagonal(position, currentPlayer)) {return true}
    return false;
  }

  checkHorizontal(position, currentPlayer) {
    let count = 1;
    let row = position[0];
    let col = position[1];
    let orig = [row, col];
    let board = this.state.board;
    if (row > 0) {
      do {
        col--
        if (board[row][col] === currentPlayer) {
          count ++
          if (count === 4) {
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
        col++
        if (board[row][col] === currentPlayer) {
          count ++
          if (count === 4) {
            return true;
          }
        } else {
          break
        }
      } while (row < 6)
    }
  }

  checkVertical(position, currentPlayer){
    let count = 1;
    let row = position[0];
    let col = position[1];
    let board = this.state.board;
    if (row < 3) {
      do {
        row++;
        if (board[row][col] === currentPlayer) {
          count++
          if (count === 4) {
            return true;
          }
        } else {
          break;
        }
      } while (row < 5)
    }

    return false;
  }

  checkDiagonal(position, currentPlayer) {

    let count = 1;
    let row = position[0];
    let col = position[1];
    let orig = [row, col];
    let board = this.state.board;
    while (row > 0 && col > 0) {
      row--;
      col--;
      if (board[row][col] === currentPlayer) {
        count++;
        if (count === 4) return true;
      } else {
        break;
      }
    }
    row = orig[0];
    col = orig[1];
    while (row < 5 && col < 6) {
      row++;
      col++;
      if (board[row][col] === currentPlayer) {
        count++;
        if (count === 4) return true;
      } else {
        break;
      }
    }
    return false;
  }

  checkBackDiagonal(position, currentPlayer){

    let count = 1;
    let row = position[0];
    let col = position[1];
    let orig = [row, col];
    let board = this.state.board;

    while (row < 5 && col > 0) {
      row++;
      col--;
      if (board[row][col] === currentPlayer) {
        count++;
        if (count === 4) return true;
      } else {
        break;
      }
    }
    row = orig[0];
    col = orig[1];
    while (row > 0 && col < 6) {
      row--;
      col++;
      if (board[row][col] === currentPlayer) {
        count++;
        if (count === 4) return true;
      } else {
        break;
      }
    }
    return false;
  }

  togglePlayer() {
    if (!this.state.isWinner) {
      this.state.currentPlayer === 1 ?
      this.setState({currentPlayer: 2}) :
      this.setState({currentPlayer: 1})
    }
  }

  componentDidMount() {
    this.initializeBoard();
    this.setState({loaded: true})
  }

  render() {
    if (!this.state.loaded) {
      return (
        <h4>Connect Four game loading...</h4>
      )
    } else {
      return (
        <div className="container" >
          <h4>Connect Four</h4>
          <div className="board">
          <table>
            <thead></thead>
            <tbody>
              {this.state.board.map((row, i) => {
              return <Row key={i} row={row} updateSquare={this.updateSquare}/>
              })}
            </tbody>
          </table>
          </div>
          <div className="message">{this.state.message}</div>
        </div>
      )
    }
  }
}

export default App;